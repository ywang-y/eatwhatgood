// meal_data.js
// 建議將此檔案儲存為 meal_data.js 並與主 HTML 檔案和 restaurant_data.js 放在同一目錄下

const mealData = {
    breakfast: {
        "港式": [ { name: "沙嗲牛肉麵配炒蛋多士", moods: ["Comfort Food", "快靚正"] }, { name: "雪菜肉絲米粉", moods: ["快靚正", "健康清淡啲～"] }, { name: "腿蛋治", moods: ["快靚正"] }, { name: "火腿通粉", moods: ["快靚正", "Comfort Food"] }, { name: "皮蛋瘦肉粥配炒麵", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "腸粉", moods: ["快靚正", "Comfort Food"] },  { name: "鮮油菠蘿包", moods: ["Comfort Food"] }, { name: "餐蛋麵", moods: ["快靚正", "Comfort Food"] }, { name: "即叫即製粢飯", moods: ["Comfort Food"] }, { name: "魚柳包", moods: ["快靚正"] }, { name: "豬扒包", moods: ["Comfort Food"] }, { name: "雞批", moods: ["Comfort Food"] }, { name: "腿蓉奄列", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "鮮茄牛肉通粉", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "炸菜肉絲公仔麵", moods: ["快靚正", "Comfort Food"] }, { name: "五香肉丁公仔麵", moods: ["快靓正", "Comfort Food"] } ],
        "西式": [ { name: "穀物片", moods: ["健康清淡啲～", "快靚正"] }, { name: "乳酪杯配水果麥片", moods: ["健康清淡啲～"] }, { name: "煙肉蛋奄列配薯餅", moods: ["Comfort Food"] }, { name: "英式鬆餅 (Scones)", moods: ["想食豪啲！"] }, { name: "鬆餅 (Pancakes)", moods: ["Comfort Food"] }, { name: "法式吐司 (French Toast)", moods: ["Comfort Food"] }, { name: "牛角包", moods: ["快靚正"] }, { name: "英式全餐 (Full English)", moods: ["想食豪啲！", "Comfort Food"] }, { name: "煙三文魚貝果 (Bagel)", moods: ["健康清淡啲～", "想食豪啲！"] }, { name: "窩夫 (Waffles)", moods: ["Comfort Food", "想食豪啲！"] }, { name: "煙三文魚炒蛋", moods: ["想食豪啲！", "健康清淡啲～"] }, { name: "芝士火腿可頌 (Croissant)", moods: ["Comfort Food"] }, { name: "牛油果多士", moods: ["健康清淡啲～"] }, { name: "炒雜菌多士", moods: ["健康清淡啲～"] } ],
        "中式": [ { name: "蝦餃燒賣", moods: ["Comfort Food"] }, { name: "糯米雞", moods: ["Comfort Food"] }, { name: "牛肉球", moods: ["Comfort Food"] }, { name: "菜肉包", moods: ["快靚正"] }, { name: "潮州粉粿", moods: [] }, { name: "上海粢飯糰", moods: ["Comfort Food"] }, { name: "粥品 (白粥/皮蛋瘦肉粥)", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "煎堆油炸鬼", moods: ["Comfort Food"] }, { name: "饅頭", moods: ["健康清淡啲～", "快靚正"] }, { name: "鹹豆漿", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "生煎包", moods: ["Comfort Food"] }, { name: "小籠包", moods: ["Comfort Food"] }, { name: "窩貼", moods: ["Comfort Food"] }, { name: "韮菜盒", moods: ["Comfort Food"] } ],
        "台式": [ { name: "台式飯糰 (古早味)", moods: ["Comfort Food", "快靚正"] }, { name: "蛋餅 (原味/芝士/粟米)", moods: ["快靚正", "Comfort Food"] }, { name: "台式鹹豆漿", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "總匯三文治 (台式)", moods: ["快靚正", "Comfort Food"] }, { name: "刈包 (早餐版)", moods: ["Comfort Food"] }, { name: "蘿蔔糕 (台式)", moods: ["Comfort Food"] }, { name: "燒餅油條", moods: ["Comfort Food"] }, { name: "蔥油餅", moods: ["Comfort Food"] } ],
        "其他": [ { name: "水果拼盤", moods: ["健康清淡啲～"] }, { name: "能量棒", moods: ["快靚正", "健康清淡啲～"] }, { name: "飯糰 (便利店)", moods: ["快靚正"] }, { name: "即食麥皮", moods: ["健康清淡啲～", "快靚正"] }, { name: "隔夜燕麥杯", moods: ["健康清淡啲～"] }, { name: "乳酪飲品", moods: ["健康清淡啲～", "快靚正"] }, { name: "雞蛋仔", moods: ["快靚正", "Comfort Food"] }, { name: "藜麥杯", moods: ["健康清淡啲～"] }, { name: "希臘乳酪配蜜糖堅果", moods: ["健康清淡啲～", "想食豪啲！"] }, { name: "能量球 (Energy Balls)", moods: ["健康清淡啲～", "快靚正"] } ]
    },
    lunch: {
        "港式": [ { name: "碟頭飯 (例：粟米肉粒飯)", moods: ["快靓正", "Comfort Food"] }, { name: "焗豬扒飯", moods: ["Comfort Food", "想食豪啲！"] }, { name: "乾炒牛河", moods: ["Comfort Food"] }, { name: "車仔麵", moods: ["快靚正"] }, { name: "燒味飯 (例：叉燒飯)", moods: ["快靚正", "Comfort Food"] }, { name: "雲吞麵/牛腩河", moods: ["Comfort Food"] }, { name: "常餐", moods: ["快靚正", "Comfort Food"] }, { name: "炒粉麵 (例：星洲炒米)", moods: ["快靚正"] }, { name: "豆腐火腩飯", moods: ["Comfort Food"] }, { name: "枝竹火腩飯", moods: ["Comfort Food"] }, { name: "鮮茄焗豬扒飯", moods: ["Comfort Food", "想食豪啲！"] }, { name: "瑞士雞翼撈公仔麵", moods: ["Comfort Food"] }, { name: "XO醬海鮮炒飯", moods: ["想食豪啲！"] }, { name: "滑蛋蝦仁飯", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "福建炒飯", moods: ["Comfort Food"] } ],
        "中式": [ { name: "點心 (例：蝦餃燒賣)", moods: ["Comfort Food"] }, { name: "兩餸飯", moods: ["快靚正"] }, { name: "蒸飯套餐 (例：北菇蒸雞飯)", moods: ["健康清淡啲～", "快靚正"] }, { name: "湯飯/泡飯", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "麻婆豆腐飯", moods: ["Comfort Food"] }, { name: "水煮牛肉飯", moods: ["Comfort Food"] }, { name: "擔擔麵", moods: ["Comfort Food"] }, { name: "酸辣粉", moods: [] }, { name: "蘭州拉麵", moods: ["Comfort Food"] }, { name: "餃子 (水餃/煎餃)", moods: ["快靚正", "Comfort Food"] }, { name: "麻辣燙", moods: ["Comfort Food"] }, { name: "酸菜魚米線", moods: ["Comfort Food"] }, { name: "上海排骨菜飯", moods: ["Comfort Food"] }, { name: "北京炸醬麵", moods: ["Comfort Food"] }, { name: "揚州炒飯", moods: ["Comfort Food"] } ],
        "台式": [ { name: "滷肉飯", moods: ["Comfort Food", "快靚正"] }, { name: "雞肉飯", moods: ["健康清淡啲～", "快靚正"] }, { name: "台式牛肉麵", moods: ["Comfort Food", "想食豪啲！"] }, { name: "排骨便當", moods: ["快靚正", "Comfort Food"] }, { name: "鹽酥雞便當", moods: ["Comfort Food"] }, { name: "三杯雞飯", moods: ["Comfort Food"] }, { name: "刈包", moods: ["Comfort Food"] }, { name: "大腸麵線", moods: ["Comfort Food"] }, { name: "蚵仔煎", moods: ["Comfort Food"] }, { name: "筒仔米糕", moods: ["Comfort Food"] }, { name: "麻油雞飯", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "肉羹湯/飯/麵", moods: ["Comfort Food"] } ],
        "日式": [ { name: "壽司拼盤", moods: ["想食豪啲！", "健康清淡啲～"] }, { name: "刺身飯", moods: ["想食豪啲！", "健康清淡啲～"] }, { name: "豬扒丼", moods: ["Comfort Food"] }, { name: "親子丼", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "牛肉飯 (牛丼)", moods: ["快靚正", "Comfort Food"] }, { name: "拉麵 (豚骨/醬油/味噌)", moods: ["Comfort Food"] }, { name: "烏冬 (湯烏冬/炒烏冬)", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "日式咖喱飯", moods: ["Comfort Food"] }, { name: "天婦羅丼", moods: [] }, { name: "蕎麥麵/冷麵", moods: ["健康清淡啲～"] }, { name: "日式便當 (Bento)", moods: ["快靚正", "健康清淡啲～"] }, { name: "鰻魚飯 (輕量版)", moods: ["想食豪啲！", "Comfort Food"] }, { name: "日式漢堡扒飯", moods: ["Comfort Food"] }, { name: "滑蛋豬扒飯 (勝丼)", moods: ["Comfort Food"] }, { name: "鐵板燒套餐", moods: ["想食豪啲！"] } ],
        "韓式": [ { name: "韓式拌飯 (Bibimbap)", moods: ["健康清淡啲～"] }, { name: "泡菜炒飯", moods: ["Comfort Food"] }, { name: "韓式炸醬麵", moods: ["Comfort Food"] }, { name: "豆腐海鮮湯配飯", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "韓式炸雞", moods: ["Comfort Food", "想食豪啲！"] }, { name: "部隊鍋", moods: ["Comfort Food"] }, { name: "紫菜包飯 (Kimbap)", moods: ["快靓正", "健康清淡啲～"] }, { name: "人參雞湯", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "韓式炒粉絲 (Japchae)", moods: ["健康清淡啲～"] }, { name: "辣炒年糕 (Tteokbokki)", moods: ["Comfort Food"] }, { name: "韓式冷麵 (Naengmyeon)", moods: ["健康清淡啲～"] }, { name: "石頭鍋飯 (Dolsot Bibimbap)", moods: ["Comfort Food"] }, { name: "韓式豬肉蓋飯 (Jeyuk Deopbap)", moods: ["Comfort Food"] } ],
        "西式": [ { name: "意粉 (肉醬/白汁/香草)", moods: ["Comfort Food"] }, { name: "薄餅 (Pizza)", moods: ["Comfort Food", "想食豪啲！"] }, { name: "公司三文治配薯條", moods: ["快靚正", "Comfort Food"] }, { name: "西式沙律配雞扒/三文魚", moods: ["健康清淡啲～"] }, { name: "漢堡包餐", moods: ["快靚正", "Comfort Food"] }, { name: "焗薯配料", moods: ["Comfort Food"] }, { name: "西式湯配麵包", moods: ["健康清淡啲～"] }, { name: "烤雞/雞扒餐", moods: ["Comfort Food"] }, { name: "魚柳包配薯條", moods: ["快靚正"] }, { name: "意式肉丸意粉", moods: ["Comfort Food"] }, { name: "卡邦尼意粉", moods: ["Comfort Food", "想食豪啲！"] }, { name: "烤三文魚配雜菜", moods: ["健康清淡啲～", "想食豪啲！"] }, { name: "肉醬千層麵", moods: ["Comfort Food", "想食豪啲！"] } ],
        "東南亞": [ { name: "泰式豬頸肉飯", moods: ["Comfort Food"] }, { name: "青咖喱雞飯", moods: ["Comfort Food"] }, { name: "冬蔭功金邊粉", moods: [] }, { name: "海南雞飯", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "越南生牛肉河 (Pho)", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "扎肉撈檬", moods: ["健康清淡啲～"] }, { name: "喇沙 (Laksa)", moods: ["Comfort Food"] }, { name: "肉骨茶", moods: ["Comfort Food"] }, { name: "泰式炒河 (Pad See Ew)", moods: ["Comfort Food"] }, { name: "印尼炒飯 (Nasi Goreng)", moods: ["Comfort Food"] }, { name: "泰式船麵", moods: ["Comfort Food"] }, { name: "越南法式三文治 (Banh Mi)", moods: ["快靚正"] }, { name: "星洲炒蘿蔔糕", moods: ["Comfort Food"] }, { name: "泰式菠蘿炒飯", moods: ["Comfort Food"] }, { name: "馬來西亞椰漿飯 (Nasi Lemak)", moods: ["Comfort Food"] } ],
        "快餐/輕食": [ { name: "連鎖快餐套餐", moods: ["快靓正"] }, { name: "Subway潛艇堡", moods: ["快靚正", "健康清淡啲～"] }, { name: "便利店飯盒/意粉", moods: ["快靚正"] }, { name: "沙律杯", moods: ["健康清淡啲～", "快靚正"] }, { name: "杯麵", moods: ["快靚正", "Comfort Food"] }, { name: "烤雞卷餅 (Wrap)", moods: ["快靚正", "健康清淡啲～"] }, { name: "意式薄餅 (單片)", moods: ["快靚正"] }, { name: "熱狗", moods: ["快靚正", "Comfort Food"] }, { name: "墨西哥夾餅 (Quesadilla)", moods: ["快靚正", "Comfort Food"] }, { name: "即食湯包配麵包", moods: ["快靚正", "健康清淡啲～"] } ],
        "其他": [ { name: "印度咖喱配薄餅 (Naan)", moods: ["Comfort Food"] }, { name: "土耳其烤肉卷 (Kebab)", moods: ["快靚正"] }, { name: "墨西哥卷餅 (Burrito)", moods: ["Comfort Food"] }, { name: "中東旋轉烤肉 (Shawarma)", moods: ["快靚正"] }, { name: "希臘沙律 (Greek Salad)", moods: ["健康清淡啲～"] }, { name: "Poke Bowl (夏威夷魚生飯)", moods: ["健康清淡啲～"] }, { name: "俄羅斯餃子 (Pelmeni)", moods: ["Comfort Food"] }, { name: "西班牙小食 (Tapas)", moods: ["想食豪啲！"] } ]
    },
    afternoonTea: {
        "港式": [ { name: "西多士", moods: ["Comfort Food", "想食豪啲！"] }, { name: "炸雞脾薯條", moods: ["Comfort Food"] }, { name: "奶油豬仔包", moods: ["快靚正", "Comfort Food"] }, { name: "蛋撻", moods: ["快靚正", "Comfort Food"] }, { name: "菠蘿油", moods: ["Comfort Food"] }, { name: "公司三文治", moods: ["快靚正"] }, { name: "熱狗", moods: ["快靚正"] }, { name: "沙嗲牛肉包", moods: ["Comfort Food"] }, { name: "炸魚薯條 (茶記版)", moods: ["Comfort Food"] }, { name: "豬扒包", moods: ["Comfort Food"] }, { name: "雞尾包", moods: ["Comfort Food"] }, { name: "咖喱角", moods: ["Comfort Food"] }, { name: "炸鮮奶", moods: ["Comfort Food", "想食豪啲！"] }, { name: "花生醬格仔餅", moods: ["Comfort Food", "快靚正"] }, { name: "紅豆冰", moods: ["Comfort Food"] } ],
        "西式": [ { name: "英式鬆餅 (Scones)", moods: ["想食豪啲！"] }, { name: "Cupcakes", moods: [] }, { name: "Macarons", moods: ["想食豪啲！"] }, { name: "芝士蛋糕", moods: ["Comfort Food", "想食豪啲！"] }, { name: "窩夫 (Waffles)", moods: ["Comfort Food"] }, { name: "手指三文治", moods: ["健康清淡啲～", "快靚正"] }, { name: "Quiche (法式鹹派)", moods: [] }, { name: "美式冬甩 (Donuts)", moods: ["Comfort Food"] }, { name: "布朗尼 (Brownie)", moods: ["Comfort Food", "想食豪啲！"] }, { name: "檸檬撻", moods: ["想食豪啲！"] }, { name: "水果撻", moods: ["健康清淡啲～", "想食豪啲！"] }, { name: "泡芙 (Cream Puff)", moods: ["Comfort Food"] }, { name: "瑪德蓮蛋糕 (Madeleine)", moods: ["想食豪啲！"] }, { name: "英式下午茶套餐", moods: ["想食豪啲！"] } ],
        "日式": [ { name: "和菓子", moods: ["健康清淡啲～"] }, { name: "抹茶卷蛋", moods: [] }, { name: "銅鑼燒 (Dorayaki)", moods: ["Comfort Food"] }, { name: "日式梳乎厘Pancake", moods: ["想食豪啲！"] }, { name: "鯛魚燒", moods: ["Comfort Food", "快靚正"] }, { name: "章魚小丸子 (Takoyaki)", moods: ["快靚正", "Comfort Food"] }, { name: "日式可麗餅 (Crepe)", moods: ["Comfort Food"] }, { name: "大福 (Daifuku)", moods: ["Comfort Food"] }, { name: "日式芝士撻", moods: ["Comfort Food", "想食豪啲！"] }, { name: "糰子 (Dango)", moods: ["Comfort Food"] }, { name: "蕨餅 (Warabimochi)", moods: ["健康清淡啲～"] } ],
        "台式": [ { name: "珍珠奶茶", moods: ["Comfort Food", "快靚正"] }, { name: "鹽酥雞 (小食)", moods: ["Comfort Food"] }, { name: "甜不辣", moods: ["Comfort Food", "快靚正"] }, { name: "芋圓豆花", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "車輪餅 (紅豆/奶油)", moods: ["Comfort Food", "快靚正"] }, { name: "台式香腸", moods: ["Comfort Food"] }, { name: "炸地瓜球", moods: ["Comfort Food"] }, { name: "仙草凍", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "愛玉冰", moods: ["健康清淡啲～"] }, { name: "鳳梨酥", moods: ["Comfort Food"] }, { name: "太陽餅", moods: ["Comfort Food"] } ],
        "中式": [ { name: "點心 (少量, 如春卷、鹹水角)", moods: ["快靚正"] }, { name: "糖水 (紅豆沙、綠豆沙、豆腐花)", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "砵仔糕", moods: ["快靚正", "Comfort Food"] }, { name: "茶粿", moods: [] }, { name: "老婆餅/老公餅", moods: ["Comfort Food"] }, { name: "豆沙窩餅", moods: ["Comfort Food"] }, { name: "擂沙湯圓", moods: ["Comfort Food"] }, { name: "馬仔", moods: ["Comfort Food"] }, { name: "芝麻卷", moods: ["Comfort Food"] }, { name: "白糖糕", moods: ["Comfort Food"] } ],
        "快餐/輕食": [ { name: "薯條", moods: ["快靚正", "Comfort Food"] }, { name: "雞翼", moods: ["Comfort Food"] }, { name: "迷你薄餅", moods: ["快靚正"] }, { name: "雞蛋仔", moods: ["快靚正", "Comfort Food"] }, { name: "格仔餅", moods: ["快靚正", "Comfort Food"] }, { name: "魚蛋燒賣 (街頭小食)", moods: ["快靓正", "Comfort Food"] }, { name: "炸雞塊", moods: ["Comfort Food"] }, { name: "粟米杯", moods: ["快靚正", "健康清淡啲～"] }, { name: "碗仔糕", moods: ["快靚正", "Comfort Food"] }, { name: "洋蔥圈", moods: ["Comfort Food"] }, { name: "雪糕/乳酪雪糕", moods: ["Comfort Food"] } ]
            },
            dinner: {
                "港式": [ { name: "鑊氣小炒 (例：咕嚕肉)", moods: ["Comfort Food"] }, { name: "海鮮餐 (例：豉椒炒蜆)", moods: ["想食豪啲！"] }, { name: "打冷 (潮州菜)", moods: [] }, { name: "煲仔飯", moods: ["Comfort Food"] }, { name: "火鍋 (打邊爐)", moods: ["想食豪啲！", "Comfort Food"] }, { name: "雞煲", moods: ["想食豪啲！", "Comfort Food"] }, { name: "粥底火鍋", moods: ["健康清淡啲～"] }, { name: "避風塘炒蟹", moods: ["想食豪啲！"] }, { name: "乳鴿", moods: ["Comfort Food"] }, { name: "豉油王炒麵", moods: ["Comfort Food", "快靚正"] }, { name: "啫啫雞煲", moods: ["Comfort Food", "想食豪啲！"] }, { name: "金銀蛋浸時蔬", moods: ["健康清淡啲～"] }, { name: "大排檔小炒", moods: ["Comfort Food"] }, { name: "冬瓜盅", moods: ["健康清淡啲～", "想食豪啲！"] } ],
                "中式": [ { name: "粵菜酒樓 (例：片皮鴨, 蒸魚)", moods: ["想食豪啲！"] }, { name: "川菜 (例：水煮魚, 辣子雞)", moods: ["Comfort Food"] }, { name: "京滬菜 (例：小籠包, 北京填鴨)", moods: ["想食豪啲！"] }, { name: "客家菜 (例：梅菜扣肉)", moods: ["Comfort Food"] }, { name: "順德菜 (例：魚生)", moods: ["健康清淡啲～"] }, { name: "潮州菜 (例：滷水鵝)", moods: ["Comfort Food"] }, { name: "盆菜 (節慶)", moods: ["想食豪啲！", "Comfort Food"] }, { name: "東坡肉", moods: ["Comfort Food", "想食豪啲！"] }, { name: "佛跳牆 (預訂)", moods: ["想食豪啲！"] }, { name: "私房菜", moods: ["想食豪啲！"] }, { name: "火鍋 (中式)", moods: ["想食豪啲！", "Comfort Food"] }, { name: "羊腩煲", moods: ["Comfort Food", "想食豪啲！"] } ],
                "台式": [ { name: "三杯雞", moods: ["Comfort Food", "想食豪啲！"] }, { name: "滷肉飯套餐", moods: ["Comfort Food"] }, { name: "台式火鍋 (臭臭鍋/沙茶鍋)", moods: ["Comfort Food", "想食豪啲！"] }, { name: "薑母鴨", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "鹽酥雞 (主菜)", moods: ["Comfort Food"] }, { name: "麻油雞", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "鳳梨苦瓜雞湯", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "客家小炒 (台式)", moods: ["Comfort Food"] }, { name: "蔭鼓蚵", moods: ["Comfort Food"] }, { name: "蒼蠅頭", moods: ["Comfort Food"] }, { name: "菜脯蛋", moods: ["Comfort Food"] }, { name: "花雕雞", moods: ["Comfort Food", "想食豪啲！"] } ],
                "日式": [ { name: "壽司Omakase", moods: ["想食豪啲！"] }, { name: "鐵板燒", moods: ["想食豪啲！"] }, { name: "天婦羅盛合", moods: [] }, { name: "鰻魚飯 (鰻重)", moods: ["想食豪啲！", "Comfort Food"] }, { name: "日式火鍋 (Shabu Shabu/Sukiyaki)", moods: ["想食豪啲！", "Comfort Food", "健康清淡啲～"] }, { name: "居酒屋串燒", moods: ["Comfort Food"] }, { name: "爐端燒", moods: ["想食豪啲！"] }, { name: "懷石料理", moods: ["想食豪啲！", "健康清淡啲～"] }, { name: "壽喜燒 (Sukiyaki)", moods: ["想食豪啲！", "Comfort Food"] }, { name: "串揚 (Kushikatsu)", moods: ["Comfort Food"] }, { name: "日式燒肉 (Yakiniku)", moods: ["想食豪啲！", "Comfort Food"] }, { name: "蟹道樂式蟹宴", moods: ["想食豪啲！"] } ],
                "韓式": [ { name: "韓式烤肉 (KBBQ)", moods: ["想食豪啲！", "Comfort Food"] }, { name: "部隊鍋", moods: ["Comfort Food"] }, { name: "人參雞湯", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "海鮮煎餅", moods: ["Comfort Food"] }, { name: "醬油蟹", moods: ["想食豪啲！"] }, { name: "安東雞", moods: ["Comfort Food"] }, { name: "韓式豬蹄 (Jokbal)", moods: ["Comfort Food", "想食豪啲！"] }, { name: "泡菜鍋", moods: ["Comfort Food"] }, { name: "雪濃湯", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "韓式宮廷料理", moods: ["想食豪啲！", "健康清淡啲～"] }, { name: "辣燉排骨 (Maeun Galbijjim)", moods: ["Comfort Food", "想食豪啲！"] } ],
                "西式": [ { name: "牛扒 (西冷/肉眼)", moods: ["想食豪啲！"] }, { name: "羊架", moods: ["想食豪啲！"] }, { name: "烤春雞", moods: ["Comfort Food"] }, { name: "海鮮意大利飯 (Risotto)", moods: ["想食豪啲！", "Comfort Food"] }, { name: "Fine Dining (多道菜套餐)", moods: ["想食豪啲！"] }, { name: "歐陸菜小館", moods: [] }, { name: "烤豬肋骨 (BBQ Ribs)", moods: ["Comfort Food", "想食豪啲！"] }, { name: "威靈頓牛柳", moods: ["想食豪啲！"] }, { name: "法式洋蔥湯", moods: ["Comfort Food"] }, { name: "龍蝦湯", moods: ["想食豪啲！"] }, { name: "烤鴨胸", moods: ["想食豪啲！"] }, { name: "海鮮拼盤 (Seafood Platter)", moods: ["想食豪啲！"] } ],
                "意大利菜": [ { name: "各式手造意粉", moods: ["Comfort Food"] }, { name: "柴火烤薄餅", moods: ["Comfort Food"] }, { name: "意式燴牛仔膝 (Osso Buco)", moods: ["想食豪啲！"] }, { name: "千層麵 (Lasagna)", moods: ["Comfort Food"] }, { name: "墨魚汁意粉", moods: [] }, { name: "T骨牛扒 (Bistecca alla Fiorentina)", moods: ["想食豪啲！"] }, { name: "意式雲吞 (Ravioli)", moods: ["Comfort Food"] }, { name: "墨魚汁飯", moods: [] }, { name: "意式烤羊膝", moods: ["想食豪啲！", "Comfort Food"] }, { name: "松露意粉/飯", moods: ["想食豪啲！"] } ],
                "東南亞": [ { name: "泰國菜 (例：冬蔭功, 咖喱蟹)", moods: ["Comfort Food", "想食豪啲！"] }, { name: "越南菜 (例：蔗蝦, 燒牛肉撈檬)", moods: ["健康清淡啲～"] }, { name: "星馬菜 (例：辣椒蟹, 參巴醬燒魚)", moods: ["想食豪啲！"] }, { name: "印尼菜 (例：巴東牛肉)", moods: ["Comfort Food"] }, { name: "馬來西亞沙嗲串燒", moods: ["Comfort Food"] }, { name: "泰式生蝦", moods: [] }, { name: "越南春卷", moods: ["健康清淡啲～"] }, { name: "泰式明爐魚", moods: ["健康清淡啲～", "想食豪啲！"] }, { name: "新加坡胡椒蟹", moods: ["想食豪啲！"] } ],
                "其他特色": [ { name: "西班牙海鮮飯 (Paella)", moods: ["想食豪啲！"] }, { name: "法國菜 (例：油封鴨腿)", moods: ["想食豪啲！"] }, { name: "印度菜 (例：Tandoori烤雞)", moods: ["Comfort Food"] }, { name: "墨西哥菜 (例：Tacos, Fajitas)", moods: ["Comfort Food"] }, { name: "德國菜 (例：鹹豬手)", moods: ["Comfort Food", "想食豪啲！"] }, { name: "瑞士芝士火鍋 (Fondue)", moods: ["想食豪啲！", "Comfort Food"] }, { name: "俄羅斯菜 (例：羅宋湯, 俄式餃子)", moods: ["Comfort Food"] }, { name: "巴西烤肉", moods: ["想食豪啲！", "Comfort Food"] }, { name: "中東烤肉拼盤 (Mezze Platter)", moods: ["Comfort Food"] }, { name: "秘魯菜 (例：Ceviche)", moods: [] } ]
            },
            supper: {
                "港式": [ { name: "碗仔翅", moods: ["Comfort Food", "快靚正"] }, { name: "魚蛋燒賣 (街邊檔)", moods: ["快靚正", "Comfort Food"] }, { name: "炸大腸", moods: ["Comfort Food"] }, { name: "串燒 (港式)", moods: ["Comfort Food"] }, { name: "車仔麵 (宵夜檔)", moods: ["快靚正", "Comfort Food"] }, { name: "潮州打冷 (鵝片、蠔餅、凍蟹)", moods: ["想食豪啲！"] }, { name: "炒粉麵 (乾炒牛河、豉油王炒麵)", moods: ["Comfort Food", "快靚正"] }, { name: "即食麵加料", moods: ["快靚正", "Comfort Food"] }, { name: "煎釀三寶", moods: ["快靚正", "Comfort Food"] }, { name: "生菜魚肉湯", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "炒蜆", moods: ["Comfort Food"] }, { name: "炸雞脾", moods: ["Comfort Food"] }, { name: "狗仔粉", moods: ["Comfort Food"] }, { name: "艇仔粥", moods: ["Comfort Food", "健康清淡啲～"] } ],
                "中式": [ { name: "粥品 (皮蛋瘦肉粥、艇仔粥)", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "糖水 (芝麻糊、合桃糊、腐竹雞蛋)", moods: ["Comfort Food", "健康清淡啲～"] }, { name: "點心 (宵夜時段, 如蝦餃、燒賣)", moods: ["Comfort Food"] }, { name: "腸粉 (宵夜檔)", moods: ["快靚正", "Comfort Food"] }, { name: "粢飯豆漿 (宵夜檔)", moods: ["Comfort Food"] }, { name: "雲吞麵 (宵夜)", moods: ["Comfort Food"] }, { name: "糖不甩", moods: ["Comfort Food"] }, { name: "喳咋", moods: ["Comfort Food"] }, { name: "桑寄生蓮子蛋茶", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "麻辣小龍蝦", moods: ["Comfort Food", "想食豪啲！"] } ],
                "台式": [ { name: "鹽酥雞 (宵夜)", moods: ["Comfort Food", "快靚正"] }, { name: "甜不辣 (宵夜)", moods: ["Comfort Food", "快靚正"] }, { name: "大腸麵線 (宵夜)", moods: ["Comfort Food"] }, { name: "滷味拼盤 (台式)", moods: ["Comfort Food"] }, { name: "刈包 (宵夜)", moods: ["Comfort Food"] }, { name: "台式關東煮", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "蚵仔麵線", moods: ["Comfort Food"] }, { name: "台式炸物拼盤", moods: ["Comfort Food"] }, { name: "珍珠奶茶 (宵夜)", moods: ["Comfort Food", "快靚正"] } ],
                "日式": [ { name: "居酒屋小食 (串燒、枝豆、炸雞軟骨)", moods: ["Comfort Food"] }, { name: "拉麵 (宵夜份量)", moods: ["Comfort Food", "快靚正"] }, { name: "關東煮", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "日式炒麵 (Yakisoba)", moods: ["Comfort Food"] }, { name: "茶漬飯 (Ochazuke)", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "日式餃子 (宵夜)", moods: ["Comfort Food", "快靚正"] }, { name: "玉子燒", moods: ["Comfort Food", "快靚正"] }, { name: "清酒煮蜆", moods: ["Comfort Food"] } ],
                "快餐/輕食": [ { name: "即食麵 (自己煮)", moods: ["快靚正", "Comfort Food"] }, { name: "便利店關東煮/點心", moods: ["快靚正"] }, { name: "薯片/零食", moods: ["Comfort Food"] }, { name: "杯麵", moods: ["快靚正", "Comfort Food"] }, { name: "麥當勞/KFC (24小時分店)", moods: ["快靚正"] }, { name: "叮叮點心/飯盒", moods: ["快靚正"] }, { name: "芝士撈麵", moods: ["Comfort Food", "快靚正"] }, { name: "烤蕃薯", moods: ["健康清淡啲～", "Comfort Food"] }, { name: "熱狗腸仔", moods: ["快靚正", "Comfort Food"] }, { name: "微波爐爆谷", moods: ["Comfort Food"] } ],
                "其他": [ { name: "串燒 (新疆/沙嗲)", moods: ["Comfort Food"] }, { name: "甜品 (B仔涼粉、芒果糯米糍、楊枝甘露)", moods: ["Comfort Food"] }, { name: "台式鹽酥雞", moods: ["Comfort Food"] }, { name: "韓式炸雞 (外賣宵夜)", moods: ["Comfort Food", "想食豪啲！"] }, { name: "滷味 (台式/港式)", moods: ["Comfort Food"] }, { name: "Pizza (外賣)", moods: ["Comfort Food", "想食豪啲！"] }, { name: "臭豆腐", moods: [] }, { name: "麻辣燙 (宵夜)", moods: ["Comfort Food"] }, { name: "土匪雞翼", moods: ["Comfort Food"] } ]
            }
        };

        const moods = {
            "any": "是但啦/冇所謂",
            "rich": "想食豪啲！",
            "healthy": "健康清淡啲～",
            "quick": "快靚正！",
            "comfort": "Comfort Food慰勞下自己"
        };

        const hongKongDistricts = {
            "中西區": ["中環", "金鐘", "上環", "西環", "堅尼地城", "石塘咀", "半山"],
            "灣仔區": ["灣仔", "銅鑼灣", "跑馬地", "大坑", "鵝頸橋", "天后", "金鐘 (近灣仔部分)"],
            "東區": ["北角", "鰂魚涌", "太古", "西灣河", "筲箕灣", "柴灣", "小西灣", "杏花邨", "炮台山"],
            "南區": ["薄扶林", "香港仔", "鴨脷洲", "黃竹坑", "深水灣", "淺水灣", "赤柱", "石澳", "數碼港", "華富"],
            "油尖旺區": ["尖沙咀", "佐敦", "油麻地", "旺角", "太子", "大角咀", "西九龍"],
            "深水埗區": ["深水埗", "長沙灣", "荔枝角", "美孚", "石硤尾", "南昌"],
            "九龍城區": ["紅磡", "黃埔花園", "何文田", "九龍塘", "九龍城", "土瓜灣", "啟德", "樂富 (近九龍城部分)"],
            "黃大仙區": ["黃大仙", "鑽石山", "新蒲崗", "慈雲山", "樂富", "牛池灣", "竹園", "橫頭磡"],
            "觀塘區": ["觀塘", "牛頭角", "九龍灣", "藍田", "油塘", "秀茂坪", "順利邨", "APM", "德福廣場"],
            "葵青區": ["葵涌", "青衣", "荔景", "葵芳", "葵興", "貨櫃碼頭"],
            "荃灣區": ["荃灣", "深井", "汀九", "馬灣", "荃灣西", "愉景新城", "麗城"],
            "屯門區": ["屯門市中心", "蝴蝶灣", "黃金海岸", "掃管笏", "屯門碼頭", "藍地", "兆康", "良景"],
            "元朗區": ["元朗市中心", "天水圍", "錦田", "八鄉", "洪水橋", "屏山", "廈村", "流浮山", "YOHO Mall"],
            "北區": ["上水", "粉嶺", "沙頭角", "打鼓嶺", "皇后山", "聯和墟"],
            "大埔區": ["大埔墟", "太和", "大埔中心", "白石角", "大埔滘", "船灣", "科學園 (近大埔部分)"],
            "沙田區": ["沙田市中心", "大圍", "火炭", "馬鞍山", "烏溪沙", "小瀝源", "石門", "第一城", "科學園 (近沙田部分)"],
            "西貢區": ["西貢市中心", "將軍澳 (寶琳, 坑口, 調景嶺, 康城)", "清水灣", "科技大學"],
            "離島區": ["東涌", "愉景灣", "長洲", "坪洲", "南丫島", "大澳", "梅窩", "機場", "貝澳", "塘福"]
        };

        const districtCentralPoints = {
            "中西區": { lat: 22.283, lon: 114.158 }, "灣仔區": { lat: 22.277, lon: 114.173 },
            "東區": { lat: 22.285, lon: 114.213 }, "南區": { lat: 22.247, lon: 114.154 },
            "油尖旺區": { lat: 22.319, lon: 114.170 }, "深水埗區": { lat: 22.330, lon: 114.162 },
            "九龍城區": { lat: 22.328, lon: 114.187 }, "黃大仙區": { lat: 22.342, lon: 114.195 },
            "觀塘區": { lat: 22.313, lon: 114.225 }, "葵青區": { lat: 22.357, lon: 114.129 },
            "荃灣區": { lat: 22.372, lon: 114.115 }, "屯門區": { lat: 22.392, lon: 113.976 },
            "元朗區": { lat: 22.445, lon: 114.028 }, "北區": { lat: 22.493, lon: 114.142 },
            "大埔區": { lat: 22.447, lon: 114.168 }, "沙田區": { lat: 22.381, lon: 114.189 },
            "西貢區": { lat: 22.315, lon: 114.260 },
            "離島區": { lat: 22.289, lon: 113.940 }
        };

        let activeMealType = null;
        let activeMood = "any";
        let activeCuisine = null;
        let activeDistrictL1 = null;
        let activeDistrictL2 = null;
        let lastSuggestedMeal = null;

        function mealTypeToChinese(mealTypeKey) { return ({ breakfast: '早餐', lunch: '午餐', afternoonTea: '下午茶', dinner: '晚餐', supper: '宵夜' })[mealTypeKey] || '時段'; }
        function highlightSelectedButton(buttonGroup, selectedButtonElement) { buttonGroup.forEach(btn => { btn.classList.remove('selected-btn'); if (btn.classList.contains('mood-btn')) { btn.classList.remove('bg-purple-500', 'text-white'); btn.classList.add('bg-purple-400', 'text-purple-800'); } else if (btn.classList.contains('cuisine-btn')) { btn.classList.remove('bg-sky-500', 'text-white'); btn.classList.add('bg-sky-400', 'text-sky-800'); } }); if (selectedButtonElement) { selectedButtonElement.classList.add('selected-btn'); if (selectedButtonElement.classList.contains('mood-btn')) { selectedButtonElement.classList.remove('bg-purple-400', 'text-purple-800'); selectedButtonElement.classList.add('bg-purple-500', 'text-white'); } else if (selectedButtonElement.classList.contains('cuisine-btn')) { selectedButtonElement.classList.remove('bg-sky-400', 'text-sky-800'); selectedButtonElement.classList.add('bg-sky-500', 'text-white'); } } }
        function resetPageDetails() { activeMood = "any"; activeCuisine = null; activeDistrictL1 = null; activeDistrictL2 = null; lastSuggestedMeal = null; renderMoodButtons(); cuisineSelectionArea.innerHTML = ''; districtLevel1Dropdown.innerHTML = '<option value="">請選擇區域 (十八區)...</option>'; districtLevel2Dropdown.innerHTML = '<option value="">請選擇詳細地區...</option>'; districtLevel2Dropdown.disabled = true; txtSuggestion.textContent = '請選擇心情及菜式，或按「隨機揀個菜式」'; txtRestaurantSuggestion.innerHTML = ''; btnTryAgainMeal.classList.add('hidden'); districtSelectionContainer.classList.add('hidden'); restaurantSuggestionArea.classList.add('hidden'); googleMapsLinkContainer.classList.add('hidden'); highlightSelectedButton(cuisineSelectionArea.querySelectorAll('button'), null); locationStatusMessage.textContent = ''; }
        function showPage(pageId) { if (pageId === 'pageMealTimeSelection') { pageMealTimeSelection.classList.remove('hidden'); pageDetailsSelection.classList.add('hidden'); initialPrompt.textContent = '請先選擇「時段」'; } else if (pageId === 'pageDetailsSelection') { pageMealTimeSelection.classList.add('hidden'); pageDetailsSelection.classList.remove('hidden'); selectedMealTimeHeader.textContent = mealTypeToChinese(activeMealType); } }
        function renderMoodButtons() { moodSelectionArea.innerHTML = ''; Object.keys(moods).forEach(moodKey => { const btn = document.createElement('button'); btn.textContent = moods[moodKey]; btn.dataset.mood = moodKey; btn.classList.add('mood-btn', 'bg-purple-400', 'hover:bg-purple-500', 'text-purple-800', 'font-semibold', 'py-2', 'px-3', 'rounded-lg', 'shadow', 'text-sm', 'transform', 'hover:scale-105'); if (moodKey === activeMood) { highlightSelectedButton(moodSelectionArea.querySelectorAll('button'), btn); btn.classList.add('selected-btn', 'bg-purple-500', 'text-white'); btn.classList.remove('bg-purple-400', 'text-purple-800');} btn.addEventListener('click', () => { activeMood = moodKey; highlightSelectedButton(moodSelectionArea.querySelectorAll('button'), btn); if (activeCuisine) { makeMealSuggestion(activeMealType, activeCuisine); if (activeDistrictL2) { findRestaurants(activeCuisine, activeDistrictL2); } } }); moodSelectionArea.appendChild(btn); });}
        function renderCuisineOptions(mealType, preSelectedCuisineKey) { cuisineSelectionArea.innerHTML = ''; districtSelectionContainer.classList.add('hidden'); restaurantSuggestionArea.classList.add('hidden'); googleMapsLinkContainer.classList.add('hidden'); btnTryAgainMeal.classList.add('hidden'); if (!mealData[mealType] || Object.keys(mealData[mealType]).length === 0) { txtSuggestion.textContent = `此時段 (${mealTypeToChinese(mealType)}) 暫未有菜式分類。`; return; } const cuisines = Object.keys(mealData[mealType]); cuisines.forEach(cuisineKey => { const btn = document.createElement('button'); btn.textContent = cuisineKey; btn.dataset.cuisine = cuisineKey; btn.classList.add('cuisine-btn', 'bg-sky-400', 'hover:bg-sky-500', 'text-sky-800', 'font-semibold', 'py-2', 'px-3', 'sm:px-4', 'rounded-lg', 'shadow', 'text-sm', 'sm:text-base', 'transform', 'hover:scale-105'); btn.addEventListener('click', () => { activeCuisine = cuisineKey; highlightSelectedButton(cuisineSelectionArea.querySelectorAll('button'), btn); makeMealSuggestion(activeMealType, activeCuisine); txtRestaurantSuggestion.innerHTML = ''; restaurantSuggestionArea.classList.add('hidden'); googleMapsLinkContainer.classList.add('hidden'); activeDistrictL1 = null; activeDistrictL2 = null; districtLevel1Dropdown.value = ""; districtLevel2Dropdown.innerHTML = '<option value="">請選擇詳細地區...</option>'; districtLevel2Dropdown.disabled = true; }); cuisineSelectionArea.appendChild(btn); }); if (preSelectedCuisineKey) { const btnToHighlight = cuisineSelectionArea.querySelector(`button[data-cuisine="${preSelectedCuisineKey}"]`); if (btnToHighlight) { highlightSelectedButton(cuisineSelectionArea.querySelectorAll('button'), btnToHighlight); } } }
        function populateDistrictLevel1Dropdown() { districtLevel1Dropdown.innerHTML = '<option value="">請選擇區域 (十八區)...</option>'; Object.keys(hongKongDistricts).forEach(districtL1 => { const option = document.createElement('option'); option.value = districtL1; option.textContent = districtL1; districtLevel1Dropdown.appendChild(option); }); districtSelectionContainer.classList.remove('hidden'); districtLevel2Dropdown.innerHTML = '<option value="">請選擇詳細地區...</option>'; districtLevel2Dropdown.disabled = true; }
        function populateDistrictLevel2Dropdown(selectedDistrictL1) { districtLevel2Dropdown.innerHTML = '<option value="">請選擇詳細地區...</option>'; if (selectedDistrictL1 && hongKongDistricts[selectedDistrictL1]) { hongKongDistricts[selectedDistrictL1].forEach(districtL2 => { const option = document.createElement('option'); option.value = districtL2; option.textContent = districtL2; districtLevel2Dropdown.appendChild(option); }); districtLevel2Dropdown.disabled = false; } else { districtLevel2Dropdown.disabled = true; } }
        function makeMealSuggestion(mealType, cuisine) {
            if (!mealType || !cuisine || !mealData[mealType] || !mealData[mealType][cuisine] || mealData[mealType][cuisine].length === 0) {
                txtSuggestion.textContent = `暫時未有 ${mealTypeToChinese(mealType)} - ${cuisine || '未知菜式'} 嘅建議。`;
                lastSuggestedMeal = null;
                btnTryAgainMeal.classList.add('hidden');
                districtSelectionContainer.classList.add('hidden');
                googleMapsLinkContainer.classList.add('hidden');
                return;
            }

            let potentialMeals = mealData[mealType][cuisine];
            let moodFilteredMeals = [];
            let finalSuggestionObj = null;
            let moodMatchNote = "";

            if (activeMood !== "any") {
                moodFilteredMeals = potentialMeals.filter(meal => meal.moods && meal.moods.includes(moods[activeMood]));
            }

            if (moodFilteredMeals.length > 0) {
                finalSuggestionObj = moodFilteredMeals[Math.floor(Math.random() * moodFilteredMeals.length)];
            } else if (potentialMeals.length > 0) {
                finalSuggestionObj = potentialMeals[Math.floor(Math.random() * potentialMeals.length)];
                if (activeMood !== "any") {
                    moodMatchNote = `<br><span class="text-xs text-gray-500">(呢個菜式未有特別符合「${moods[activeMood]}」嘅建議，不如試下呢個？)</span>`;
                }
            }

            if (finalSuggestionObj) {
                lastSuggestedMeal = finalSuggestionObj.name;
                txtSuggestion.innerHTML = `
                    <span class="block text-sm text-gray-500">${mealTypeToChinese(mealType)} - ${cuisine}</span>
                    <span class="text-xl sm:text-2xl font-semibold text-gray-700">${lastSuggestedMeal}</span>
                    ${moodMatchNote}
                `;
                txtSuggestion.classList.remove('suggestion-update');
                void txtSuggestion.offsetWidth;
                txtSuggestion.classList.add('suggestion-update');
                btnTryAgainMeal.classList.remove('hidden');
            } else {
                txtSuggestion.textContent = `喺 ${cuisine} 搵唔到建議。`;
                lastSuggestedMeal = null;
                btnTryAgainMeal.classList.add('hidden');
            }

            populateDistrictLevel1Dropdown();
             if(activeDistrictL1 && activeDistrictL2){
                districtLevel1Dropdown.value = activeDistrictL1;
                populateDistrictLevel2Dropdown(activeDistrictL1);
                const l2OptionExists = Array.from(districtLevel2Dropdown.options).some(opt => opt.value === activeDistrictL2);
                if(l2OptionExists) {
                    districtLevel2Dropdown.value = activeDistrictL2;
                    findRestaurants(activeCuisine, activeDistrictL2);
                } else {
                    activeDistrictL2 = null;
                    districtLevel2Dropdown.value = "";
                    restaurantSuggestionArea.classList.add('hidden');
                    googleMapsLinkContainer.classList.add('hidden');
                }
            } else {
                activeDistrictL1 = null; activeDistrictL2 = null;
                districtLevel1Dropdown.value = "";
                districtLevel2Dropdown.innerHTML = '<option value="">請選擇詳細地區...</option>';
                districtLevel2Dropdown.disabled = true;
                restaurantSuggestionArea.classList.add('hidden');
                googleMapsLinkContainer.classList.add('hidden');
                txtRestaurantSuggestion.innerHTML = '';
            }
        }
        function findRestaurants(cuisine, districtL2) {
            if (typeof restaurantData === 'undefined') {
                console.error("findRestaurants 錯誤: restaurantData 未定義。");
                txtRestaurantSuggestion.innerHTML = '<p class="text-red-500">無法載入餐廳資料，請稍後再試。</p>';
                restaurantSuggestionArea.classList.remove('hidden');
                googleMapsLinkContainer.classList.add('hidden');
                return;
            }
            if (!cuisine || !districtL2) { restaurantSuggestionArea.classList.add('hidden'); googleMapsLinkContainer.classList.add('hidden'); return; }
            let potentialRestaurants = restaurantData.filter(r =>r.cuisine === cuisine && r.district.includes(districtL2));
            let moodFilteredRestaurants = [];
            let wasMoodFiltered = false;
            if (activeMood !== "any") {
                moodFilteredRestaurants = potentialRestaurants.filter(r => {
                    let matches = r.moods && r.moods.includes(moods[activeMood]);
                    if (activeMood === "rich" && r.price && !['$$$', '$$$$'].includes(r.price)) { matches = false; }
                    if (activeMood === "quick" && r.price && !['$', '$$'].includes(r.price)) { matches = matches && (r.cuisine === "快餐/輕食" || (r.price === '$' || r.price === '$$')); }
                    return matches;
                });
                wasMoodFiltered = true;
            }
            const finalRestaurantList = (wasMoodFiltered && moodFilteredRestaurants.length > 0) ? moodFilteredRestaurants : potentialRestaurants;
            const noPerfectMoodMatchButFallbacked = wasMoodFiltered && moodFilteredRestaurants.length === 0 && potentialRestaurants.length > 0;
            restaurantSuggestionArea.classList.remove('hidden');
            txtRestaurantSuggestion.classList.remove('suggestion-update');
            void txtRestaurantSuggestion.offsetWidth;
            if (finalRestaurantList.length > 0) {
                let html = `<h4 class="text-md font-semibold mb-2 text-sky-800">${districtL2}嘅${cuisine}餐廳推介`;
                if (wasMoodFiltered && !noPerfectMoodMatchButFallbacked && moodFilteredRestaurants.length > 0) {
                    html += ` (符合「${moods[activeMood]}」心情)`;
                } else if (noPerfectMoodMatchButFallbacked) {
                    html += ` <span class="text-sm text-gray-600">(「${moods[activeMood]}」心情未能完全匹配)</span>`;
                }
                html += `：</h4><ul class="list-disc text-left text-sm sm:text-base text-sky-700 space-y-1">`;
                finalRestaurantList.forEach(r => {
                    const restaurantSearchQuery = `${districtL2} ${r.name}`;
                    html += `<li><a href="https://www.google.com/search?q=${encodeURIComponent(restaurantSearchQuery)}" target="_blank" class="restaurant-link">${r.name}</a> ${r.price ? `(${r.price})` : ''} ${r.note ? `- ${r.note}` : ''}</li>`;
                });
                html += "</ul>";
                txtRestaurantSuggestion.innerHTML = html;
            } else {
                let noMatchMsg = `喺${districtL2}暫時未搵到「${cuisine}」嘅餐廳。`;
                if (wasMoodFiltered) {
                    noMatchMsg = `喺${districtL2}暫時未搵到符合「${cuisine}」及「${moods[activeMood]}」心情嘅餐廳。`;
                }
                txtRestaurantSuggestion.innerHTML = `<p class="text-md text-sky-700">${noMatchMsg}</p>`;
            }
            txtRestaurantSuggestion.classList.add('suggestion-update');
            const searchQuery = `${districtL2} ${cuisine} ${lastSuggestedMeal || '餐廳'} ${activeMood !== "any" ? moods[activeMood] : ''}`;
            googleMapsLink.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery.trim())}`;
            googleMapsLinkContainer.classList.remove('hidden');
        }
        function deg2rad(deg) { return deg * (Math.PI/180); }
        function calculateDistance(lat1, lon1, lat2, lon2) { var R = 6371; var dLat = deg2rad(lat2-lat1); var dLon = deg2rad(lon2-lon1); var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2); var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); return R * c; }
        function findClosestDistrict(userLat, userLon) { let closestDistrict = null; let shortestDistance = Infinity; for (const districtName in districtCentralPoints) { const point = districtCentralPoints[districtName]; const distance = calculateDistance(userLat, userLon, point.lat, point.lon); if (distance < shortestDistance) { shortestDistance = distance; closestDistrict = districtName; } } return closestDistrict; }
        function geolocationSuccess(position) {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;
            locationStatusMessage.textContent = `成功讀取座標：緯度 ${userLat.toFixed(3)}, 經度 ${userLon.toFixed(3)}`;
            const closestDistrictL1 = findClosestDistrict(userLat, userLon);
            if (closestDistrictL1) {
                activeDistrictL1 = closestDistrictL1;
                districtLevel1Dropdown.value = closestDistrictL1;
                const changeEventL1 = new Event('change');
                districtLevel1Dropdown.dispatchEvent(changeEventL1);
                locationStatusMessage.textContent += `\n已嘗試估算你位於「${closestDistrictL1}」。請選擇詳細地區或手動修改。`;
            } else {
                locationStatusMessage.textContent += '\n未能估算你所在的區域。';
            }
        } // End of geolocationSuccess function
        function geolocationError(error) {
            let message = "讀取位置時發生錯誤：";
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    message += "你已拒絕位置讀取請求。";
                    break;
                case error.POSITION_UNAVAILABLE:
                    message += "無法獲取當前位置資訊。";
                    break;
                case error.TIMEOUT:
                    message += "讀取位置請求超時。";
                    break;
                default:
                    message += "發生未知錯誤。";
                    break;
            }
            locationStatusMessage.textContent = message;
        } // End of geolocationError function

        // --- Event Listeners ---
        mealTimeButtons.forEach(button => { button.addEventListener('click', () => { activeMealType = button.dataset.mealtype; showPage('pageDetailsSelection'); resetPageDetails(); renderCuisineOptions(activeMealType); txtSuggestion.textContent = '請選擇心情及菜式，或按「隨機揀個菜式」'; }); });
        btnGoBack.addEventListener('click', () => { activeMealType = null; showPage('pageMealTimeSelection'); });
        districtLevel1Dropdown.addEventListener('change', (event) => { activeDistrictL1 = event.target.value; populateDistrictLevel2Dropdown(activeDistrictL1); activeDistrictL2 = null; districtLevel2Dropdown.value = ""; restaurantSuggestionArea.classList.add('hidden'); googleMapsLinkContainer.classList.add('hidden'); });
        districtLevel2Dropdown.addEventListener('change', (event) => { activeDistrictL2 = event.target.value; if (activeDistrictL2 && activeCuisine) { findRestaurants(activeCuisine, activeDistrictL2); } else { restaurantSuggestionArea.classList.add('hidden'); googleMapsLinkContainer.classList.add('hidden'); } });

        btnSurpriseCuisine.addEventListener('click', () => {
            if (!activeMealType) return;
            const storedL1 = activeDistrictL1;
            const storedL2 = activeDistrictL2;

            const cuisinesForMealType = Object.keys(mealData[activeMealType]);
            if (cuisinesForMealType.length === 0) { txtSuggestion.textContent = `此時段 (${mealTypeToChinese(activeMealType)}) 暫未有菜式可供隨機選擇。`; cuisineSelectionArea.innerHTML = `<p class="text-gray-600">此時段 (${mealTypeToChinese(activeMealType)}) 暫未有菜式分類。</p>`; btnTryAgainMeal.classList.add('hidden'); districtSelectionContainer.classList.add('hidden'); restaurantSuggestionArea.classList.add('hidden'); googleMapsLinkContainer.classList.add('hidden'); return; }
            const randomCuisine = cuisinesForMealType[Math.floor(Math.random() * cuisinesForMealType.length)];
            activeCuisine = randomCuisine;
            const cuisineBtnToSelect = cuisineSelectionArea.querySelector(`button[data-cuisine="${activeCuisine}"]`);
            if (cuisineBtnToSelect) {
                highlightSelectedButton(cuisineSelectionArea.querySelectorAll('button'), cuisineBtnToSelect);
            }

            makeMealSuggestion(activeMealType, activeCuisine);

            if (storedL1) {
                districtLevel1Dropdown.value = storedL1;
                activeDistrictL1 = storedL1;
                populateDistrictLevel2Dropdown(storedL1);
                if (storedL2) {
                    const l2OptionExists = Array.from(districtLevel2Dropdown.options).some(opt => opt.value === storedL2);
                    if (l2OptionExists) {
                        districtLevel2Dropdown.value = storedL2;
                        activeDistrictL2 = storedL2;
                        findRestaurants(activeCuisine, activeDistrictL2);
                    } else {
                        activeDistrictL2 = null; districtLevel2Dropdown.value = "";
                    }
                } else {
                     activeDistrictL2 = null; districtLevel2Dropdown.value = "";
                }
            } else {
                activeDistrictL1 = null; activeDistrictL2 = null;
                districtLevel1Dropdown.value = "";
                districtLevel2Dropdown.innerHTML = '<option value="">請選擇詳細地區...</option>';
                districtLevel2Dropdown.disabled = true;
                restaurantSuggestionArea.classList.add('hidden');
                googleMapsLinkContainer.classList.add('hidden');
            }
        });

        btnTryAgainMeal.addEventListener('click', () => {
            if (activeMealType && activeCuisine) {
                const storedL1 = activeDistrictL1;
                const storedL2 = activeDistrictL2;
                makeMealSuggestion(activeMealType, activeCuisine);
                if (storedL1) {
                    districtLevel1Dropdown.value = storedL1;
                    activeDistrictL1 = storedL1;
                    populateDistrictLevel2Dropdown(storedL1);
                    if (storedL2) {
                         const l2OptionExists = Array.from(districtLevel2Dropdown.options).some(opt => opt.value === storedL2);
                        if (l2OptionExists) {
                            districtLevel2Dropdown.value = storedL2;
                            activeDistrictL2 = storedL2;
                            findRestaurants(activeCuisine, activeDistrictL2);
                        } else {
                            activeDistrictL2 = null; districtLevel2Dropdown.value = "";
                        }
                    } else {
                        activeDistrictL2 = null; districtLevel2Dropdown.value = "";
                    }
                } else {
                    activeDistrictL1 = null; activeDistrictL2 = null;
                    districtLevel1Dropdown.value = "";
                    districtLevel2Dropdown.innerHTML = '<option value="">請選擇詳細地區...</option>';
                    districtLevel2Dropdown.disabled = true;
                    restaurantSuggestionArea.classList.add('hidden');
                    googleMapsLinkContainer.classList.add('hidden');
                }
            } else if (activeMealType) {
                 btnSurpriseCuisine.click();
            }
        });

        btnGetLocation.addEventListener('click', () => { if (navigator.geolocation) { locationStatusMessage.textContent = "嘗試讀取你的位置中..."; navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }); } else { locationStatusMessage.textContent = "你的瀏覽器不支援地理位置功能。"; } });
        currentYearSpan.textContent = new Date().getFullYear();
        showPage('pageMealTimeSelection');
    </script>
</body>
</html>
