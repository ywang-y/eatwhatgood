<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>今日食乜好？</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', 'Noto Sans TC', sans-serif;
        }
        .meal-suggestion-card, .restaurant-suggestion-card {
            min-height: 80px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease-in-out;
        }
        .cuisine-btn, .mood-btn {
            transition: all 0.2s ease-in-out;
            margin: 0.25rem;
        }
        .suggestion-update {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .selected-btn {
            --tw-ring-color: theme('colors.orange.500', '#F97316');
            box-shadow: 0 0 0 2px var(--tw-ring-color);
            transform: scale(1.03);
            filter: brightness(1.05);
        }
        .mood-btn.selected-btn {
             background-color: theme('colors.purple.500');
             color: theme('colors.white');
             --tw-ring-color: theme('colors.purple.700');
        }
        .cuisine-btn.selected-btn {
            background-color: theme('colors.sky.500');
            color: theme('colors.white');
            --tw-ring-color: theme('colors.sky.700');
        }
        .list-disc { list-style-type: disc; padding-left: 1.5rem; }
        .google-maps-btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.5rem 1rem; background-color: #4285F4; color: white; border-radius: 0.375rem; font-weight: 600; transition: background-color 0.15s ease-in-out; text-decoration: none; }
        .google-maps-btn:hover { background-color: #3578E5; }
        .google-maps-btn i { margin-right: 0.5rem; }
        select { padding: 0.5rem 2.5rem 0.5rem 0.75rem; border-radius: 0.375rem; border: 1px solid #D1D5DB; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e"); background-position: right 0.5rem center; background-repeat: no-repeat; background-size: 1.5em 1.5em; -webkit-appearance: none; -moz-appearance: none; appearance: none; }
        select:focus { outline: 2px solid transparent; outline-offset: 2px; border-color: #2563EB; box-shadow: 0 0 0 2px #BFDBFE; }
    </style>
</head>
<body class="bg-gradient-to-br from-lime-100 to-green-200 min-h-screen flex flex-col items-center justify-center p-4 selection:bg-green-500 selection:text-white">

    <div class="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-3xl text-center">

        <div id="pageMealTimeSelection">
            <header class="mb-6 sm:mb-8">
                <h1 class="text-4xl sm:text-5xl font-bold text-green-600">今日食乜好？</h1>
                <p class="text-gray-600 mt-2 text-sm sm:text-base">唔知食咩？等我幫你揀！仲可以搵埋餐廳！</p>
            </header>
            <div class="mb-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                <button data-mealtype="breakfast" class="meal-time-btn bg-yellow-400 hover:bg-yellow-500 text-yellow-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 w-full">早餐</button>
                <button data-mealtype="lunch" class="meal-time-btn bg-green-400 hover:bg-green-500 text-green-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 w-full">午餐</button>
                <button data-mealtype="afternoonTea" class="meal-time-btn bg-orange-400 hover:bg-orange-500 text-orange-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 w-full">下午茶</button>
                <button data-mealtype="dinner" class="meal-time-btn bg-red-400 hover:bg-red-500 text-red-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 w-full">晚餐</button>
                <button data-mealtype="supper" class="meal-time-btn bg-indigo-400 hover:bg-indigo-500 text-indigo-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 w-full">宵夜</button>
            </div>
            <p id="initialPrompt" class="text-xl sm:text-2xl font-semibold text-gray-700 mt-8">請先選擇「餐期」</p>
        </div>

        <div id="pageDetailsSelection" class="hidden w-full">
            <div class="flex justify-between items-center mb-6">
                <h2 id="selectedMealTimeHeader" class="text-2xl sm:text-3xl font-bold text-green-700 text-left"></h2>
                <button id="btnGoBack" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow text-sm flex items-center">
                    <i class="fas fa-arrow-left mr-1"></i> 返回
                </button>
            </div>

            <div class="my-4 sm:my-6 text-left">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">1. 你嘅覓食心情係？ <span class="text-sm text-gray-500">(可選)</span></h3>
                <div id="moodSelectionArea" class="flex flex-wrap justify-center items-center border border-gray-200 p-2 rounded-md"></div>
            </div>

            <div class="my-4 sm:my-6 text-left">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">2. 請選擇菜式：</h3>
                <div id="cuisineSelectionArea" class="flex flex-wrap justify-center items-center border border-gray-200 p-2 rounded-md"></div>
            </div>

            <div class="my-4">
                <button id="btnSurpriseCuisine" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-150 ease-in-out transform hover:scale-105 w-full sm:w-auto text-base">
                    <i class="fas fa-random mr-1"></i> 隨機揀個菜式
                </button>
            </div>

            <div id="suggestionArea" class="my-6 sm:my-8 p-4 sm:p-6 bg-gray-100 rounded-lg meal-suggestion-card shadow-inner">
                 <h3 class="text-lg font-semibold text-gray-700 mb-2 self-start text-left">3. 食乜好建議：</h3>
                <p id="txtSuggestion" class="text-xl sm:text-2xl font-semibold text-gray-700">請選擇心情及菜式，或按「隨機揀個菜式」</p>
            </div>
             <button id="btnTryAgainMeal" class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 w-full sm:w-auto hidden mb-4">
                <i class="fas fa-redo mr-1"></i> 唔啱？再揀過 (呢個餸)
            </button>

            <div id="districtSelectionContainer" class="my-4 sm:my-6 text-left hidden">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">4. 想搵埋餐廳？請選擇地區：</h3>
                <div class="mb-3">
                    <button id="btnGetLocation" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md text-sm flex items-center justify-center w-full sm:w-auto">
                        <i class="fas fa-location-arrow mr-2"></i> 讀取我的位置並嘗試估算地區
                    </button>
                    <p id="locationStatusMessage" class="text-xs text-gray-600 mt-1"></p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label for="districtLevel1Dropdown" class="block text-sm font-medium text-gray-700 mb-1">選擇區域 (十八區):</label>
                        <select id="districtLevel1Dropdown" class="w-full"></select>
                    </div>
                    <div>
                        <label for="districtLevel2Dropdown" class="block text-sm font-medium text-gray-700 mb-1">選擇詳細地區:</label>
                        <select id="districtLevel2Dropdown" class="w-full" disabled></select>
                    </div>
                </div>
            </div>

            <div id="restaurantSuggestionArea" class="my-4 sm:my-6 p-4 bg-sky-50 rounded-lg restaurant-suggestion-card shadow-inner hidden">
                <p id="txtRestaurantSuggestion" class="text-lg font-medium text-sky-700"></p>
                <div id="googleMapsLinkContainer" class="mt-4 hidden">
                    <a id="googleMapsLink" href="#" target="_blank" class="google-maps-btn">
                        <i class="fas fa-map-marker-alt"></i>在 Google 地圖上搜尋
                    </a>
                </div>
                <p class="text-xs text-gray-500 mt-3">提示：以上餐廳列表為內置範例，建議使用 Google 地圖獲取最新及更全面的資訊。</p>
            </div>
        </div>
        <footer class="mt-8 text-center text-sm text-gray-600">
            <p>© <span id="currentYear"></span> 搵食助手</p>
        </footer>
    </div>

    <script>
        // --- DOM Elements ---
        const pageMealTimeSelection = document.getElementById('pageMealTimeSelection');
        const pageDetailsSelection = document.getElementById('pageDetailsSelection');
        const initialPrompt = document.getElementById('initialPrompt');
        const selectedMealTimeHeader = document.getElementById('selectedMealTimeHeader');
        const btnGoBack = document.getElementById('btnGoBack');

        const mealTimeButtons = document.querySelectorAll('#pageMealTimeSelection .meal-time-btn');
        const moodSelectionArea = document.getElementById('moodSelectionArea');
        const cuisineSelectionArea = document.getElementById('cuisineSelectionArea');
        const districtLevel1Dropdown = document.getElementById('districtLevel1Dropdown');
        const districtLevel2Dropdown = document.getElementById('districtLevel2Dropdown');
        const districtSelectionContainer = document.getElementById('districtSelectionContainer');
        const btnGetLocation = document.getElementById('btnGetLocation');
        const locationStatusMessage = document.getElementById('locationStatusMessage');

        const suggestionArea = document.getElementById('suggestionArea');
        const txtSuggestion = document.getElementById('txtSuggestion');
        const restaurantSuggestionArea = document.getElementById('restaurantSuggestionArea');
        const txtRestaurantSuggestion = document.getElementById('txtRestaurantSuggestion');
        const googleMapsLinkContainer = document.getElementById('googleMapsLinkContainer');
        const googleMapsLink = document.getElementById('googleMapsLink');
        const btnSurpriseCuisine = document.getElementById('btnSurpriseCuisine');
        const btnTryAgainMeal = document.getElementById('btnTryAgainMeal');
        const currentYearSpan = document.getElementById('currentYear');

        // --- Expanded Meal Data with Moods (Drinks removed from names) ---
        const mealData = {
            breakfast: {
                "港式": [
                    { name: "沙嗲牛肉麵配炒蛋多士", moods: ["Comfort Food", "快靚正"] },
                    { name: "雪菜肉絲米粉", moods: ["快靚正", "健康清淡啲～"] },
                    { name: "腿蛋治", moods: ["快靚正"] },
                    { name: "火腿通粉", moods: ["快靚正", "Comfort Food"] },
                    { name: "皮蛋瘦肉粥配炒麵", moods: ["Comfort Food", "健康清淡啲～"] },
                    { name: "腸粉 (可加混醬)", moods: ["快靚正", "Comfort Food"] },
                    { name: "鮮油菠蘿包", moods: ["Comfort Food"] },
                    { name: "餐蛋麵", moods: ["快靚正", "Comfort Food"] },
                    { name: "即叫即製粢飯", moods: ["Comfort Food"] },
                    { name: "魚柳包", moods: ["快靚正"] }
                ],
                "西式": [
                    { name: "穀物片配牛奶/豆漿", moods: ["健康清淡啲～", "快靚正"] },
                    { name: "乳酪杯配水果麥片", moods: ["健康清淡啲～"] },
                    { name: "煙肉蛋奄列配薯餅", moods: ["Comfort Food"] },
                    { name: "英式鬆餅 (Scones)", moods: ["想食豪啲！"] },
                    { name: "鬆餅 (Pancakes) 配楓糖漿", moods: ["Comfort Food"] },
                    { name: "法式吐司 (French Toast)", moods: ["Comfort Food"] },
                    { name: "牛角包", moods: ["快靚正"] },
                    { name: "英式全餐 (Full English)", moods: ["想食豪啲！", "Comfort Food"] },
                    { name: "煙三文魚貝果 (Bagel)", moods: ["健康清淡啲～", "想食豪啲！"] }
                ],
                "中式": [
                    { name: "蝦餃燒賣", moods: ["Comfort Food"] },
                    { name: "糯米雞", moods: ["Comfort Food"] },
                    { name: "牛肉球", moods: ["Comfort Food"] },
                    { name: "菜肉包", moods: ["快靚正"] },
                    { name: "潮州粉粿", moods: [] },
                    { name: "上海粢飯糰", moods: ["Comfort Food"] },
                    { name: "粥品 (白粥/皮蛋瘦肉粥)", moods: ["健康清淡啲～", "Comfort Food"] },
                    { name: "煎堆油炸鬼", moods: ["Comfort Food"] },
                    { name: "饅頭配豆漿", moods: ["健康清淡啲～", "快靚正"] }
                ],
                "其他": [
                    { name: "水果拼盤", moods: ["健康清淡啲～"] },
                    { name: "能量棒", moods: ["快靚正", "健康清淡啲～"] },
                    { name: "飯糰 (便利店)", moods: ["快靚正"] },
                    { name: "即食麥皮", moods: ["健康清淡啲～", "快靚正"] },
                    { name: "隔夜燕麥杯", moods: ["健康清淡啲～"] },
                    { name: "乳酪飲品", moods: ["健康清淡啲～", "快靚正"] },
                    { name: "雞蛋仔 (早餐版)", moods: ["快靚正", "Comfort Food"] }
                ]
            },
            lunch: {
                "港式": [
                    { name: "碟頭飯 (例：粟米肉粒飯)", moods: ["快靚正", "Comfort Food"] },
                    { name: "焗豬扒飯", moods: ["Comfort Food", "想食豪啲！"] },
                    { name: "乾炒牛河", moods: ["Comfort Food"] },
                    { name: "車仔麵", moods: ["快靚正"] },
                    { name: "燒味飯 (例：叉燒飯)", moods: ["快靚正", "Comfort Food"] },
                    { name: "雲吞麵/牛腩河", moods: ["Comfort Food"] },
                    { name: "常餐", moods: ["快靚正", "Comfort Food"] },
                    { name: "炒粉麵 (例：星洲炒米)", moods: ["快靚正"] },
                    { name: "豆腐火腩飯", moods: ["Comfort Food"] },
                    { name: "枝竹火腩飯", moods: ["Comfort Food"] }
                ],
                "中式": [
                    { name: "點心 (例：蝦餃燒賣)", moods: ["Comfort Food"] },
                    { name: "兩餸飯", moods: ["快靚正"] },
                    { name: "蒸飯套餐 (例：北菇蒸雞飯)", moods: ["健康清淡啲～", "快靚正"] },
                    { name: "湯飯/泡飯", moods: ["健康清淡啲～", "Comfort Food"] },
                    { name: "麻婆豆腐飯", moods: ["Comfort Food"] },
                    { name: "水煮牛肉飯 (一人份)", moods: ["Comfort Food"] },
                    { name: "擔擔麵", moods: ["Comfort Food"] },
                    { name: "酸辣粉", moods: [] },
                    { name: "蘭州拉麵", moods: ["Comfort Food"] },
                    { name: "餃子 (水餃/煎餃)", moods: ["快靚正", "Comfort Food"] }
                ],
                "日式": [
                    { name: "壽司拼盤", moods: ["想食豪啲！", "健康清淡啲～"] },
                    { name: "刺身飯 (魚生飯)", moods: ["想食豪啲！", "健康清淡啲～"] },
                    { name: "豬扒丼 (吉列豬扒飯)", moods: ["Comfort Food"] },
                    { name: "親子丼 (滑蛋雞肉飯)", moods: ["Comfort Food", "健康清淡啲～"] },
                    { name: "牛肉飯 (牛丼)", moods: ["快靚正", "Comfort Food"] },
                    { name: "拉麵 (豚骨/醬油/味噌)", moods: ["Comfort Food"] },
                    { name: "烏冬 (湯烏冬/炒烏冬)", moods: ["Comfort Food", "健康清淡啲～"] },
                    { name: "日式咖喱飯", moods: ["Comfort Food"] },
                    { name: "天婦羅丼", moods: [] },
                    { name: "蕎麥麵/冷麵", moods: ["健康清淡啲～"] }
                ],
                "韓式": [
                    { name: "韓式拌飯 (Bibimbap)", moods: ["健康清淡啲～"] },
                    { name: "泡菜炒飯", moods: ["Comfort Food"] },
                    { name: "韓式炸醬麵", moods: ["Comfort Food"] },
                    { name: "豆腐海鮮湯配飯", moods: ["健康清淡啲～", "Comfort Food"] },
                    { name: "韓式炸雞 (一人份)", moods: ["Comfort Food", "想食豪啲！"] },
                    { name: "部隊鍋 (一人份)", moods: ["Comfort Food"] },
                    { name: "紫菜包飯 (Kimbap)", moods: ["快靚正", "健康清淡啲～"] },
                    { name: "人參雞湯 (一人份)", moods: ["健康清淡啲～", "Comfort Food"] },
                    { name: "韓式炒粉絲 (Japchae)", moods: ["健康清淡啲～"] }
                ],
                "西式": [
                    { name: "意粉 (肉醬/白汁/香草)", moods: ["Comfort Food"] },
                    { name: "薄餅 (Pizza)", moods: ["Comfort Food", "想食豪啲！"] },
                    { name: "公司三文治配薯條", moods: ["快靚正", "Comfort Food"] },
                    { name: "西式沙律配雞扒/三文魚", moods: ["健康清淡啲～"] },
                    { name: "漢堡包餐", moods: ["快靚正", "Comfort Food"] },
                    { name: "焗薯配料", moods: ["Comfort Food"] },
                    { name: "西式湯配麵包", moods: ["健康清淡啲～"] },
                    { name: "烤雞/雞扒餐", moods: ["Comfort Food"] },
                    { name: "魚柳包配薯條", moods: ["快靚正"] }
                ],
                "東南亞": [
                    { name: "泰式豬頸肉飯", moods: ["Comfort Food"] },
                    { name: "青咖喱雞飯", moods: ["Comfort Food"] },
                    { name: "冬蔭功金邊粉", moods: [] },
                    { name: "海南雞飯", moods: ["Comfort Food", "健康清淡啲～"] },
                    { name: "越南生牛肉河 (Pho)", moods: ["健康清淡啲～", "Comfort Food"] },
                    { name: "扎肉撈檬", moods: ["健康清淡啲～"] },
                    { name: "喇沙 (Laksa)", moods: ["Comfort Food"] },
                    { name: "肉骨茶", moods: ["Comfort Food"] },
                    { name: "泰式炒河 (Pad See Ew)", moods: ["Comfort Food"] },
                    { name: "印尼炒飯 (Nasi Goreng)", moods: ["Comfort Food"] }
                ],
                "快餐/輕食": [
                    { name: "連鎖快餐套餐", moods: ["快靚正"] },
                    { name: "Subway潛艇堡", moods: ["快靚正", "健康清淡啲～"] },
                    { name: "便利店飯盒/意粉", moods: ["快靚正"] },
                    { name: "沙律杯", moods: ["健康清淡啲～", "快靚正"] },
                    { name: "杯麵", moods: ["快靚正", "Comfort Food"] },
                    { name: "烤雞卷餅 (Wrap)", moods: ["快靚正", "健康清淡啲～"] }
                ],
                "其他": [
                    { name: "台式肉燥飯/便當", moods: ["Comfort Food", "快靚正"] },
                    { name: "印度咖喱配薄餅 (Naan)", moods: ["Comfort Food"] },
                    { name: "土耳其烤肉卷 (Kebab)", moods: ["快靚正"] },
                    { name: "墨西哥卷餅 (Burrito)", moods: ["Comfort Food"] },
                    { name: "中東旋轉烤肉 (Shawarma)", moods: ["快靚正"] }
                ]
            },
            afternoonTea: {
                "港式": [
                    { name: "西多士", moods: ["Comfort Food", "想食豪啲！"] },
                    { name: "炸雞脾薯條", moods: ["Comfort Food"] },
                    { name: "奶油豬仔包", moods: ["快靚正", "Comfort Food"] },
                    { name: "蛋撻", moods: ["快靚正", "Comfort Food"] },
                    { name: "菠蘿油", moods: ["Comfort Food"] },
                    { name: "公司三文治", moods: ["快靚正"] },
                    { name: "熱狗", moods: ["快靚正"] },
                    { name: "沙嗲牛肉包", moods: ["Comfort Food"] },
                    { name: "炸魚薯條 (茶記版)", moods: ["Comfort Food"] },
                    { name: "豬扒包", moods: ["Comfort Food"] }
                ],
                "西式": [
                    { name: "英式鬆餅 (Scones)", moods: ["想食豪啲！"] },
                    { name: "Cupcakes", moods: [] },
                    { name: "Macarons", moods: ["想食豪啲！"] },
                    { name: "芝士蛋糕", moods: ["Comfort Food", "想食豪啲！"] },
                    { name: "窩夫 (Waffles)", moods: ["Comfort Food"] },
                    { name: "手指三文治", moods: ["健康清淡啲～", "快靚正"] },
                    { name: "Quiche (法式鹹派)", moods: [] },
                    { name: "美式冬甩 (Donuts)", moods: ["Comfort Food"] },
                    { name: "布朗尼 (Brownie)", moods: ["Comfort Food", "想食豪啲！"]
