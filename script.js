const baseProducts = [
  // ===== 日常小物 everyday =====
  {
    id: "coffee",
    name: "一杯星巴克拿铁",
    brand: "日常小物",
    category: "everyday",
    price: 6,
    desc: "一杯热拿铁，财富池毫无波澜。",
    image: "./assets/products/coffee.jpg",
    imagePosition: "center",
  },
  {
    id: "big-mac",
    name: "一份巨无霸套餐",
    brand: "日常小物",
    category: "everyday",
    price: 12,
    desc: "全球统一的快乐。",
    image: "./assets/products/big-mac.jpg",
    imagePosition: "center",
  },
  {
    id: "uber-ride",
    name: "一次城市 Uber 出行",
    brand: "日常小物",
    category: "everyday",
    price: 25,
    desc: "从 A 到 B 的舒适。",
    image: "./assets/products/uber-ride.jpg",
    imagePosition: "center",
  },
  {
    id: "netflix-year",
    name: "奈飞一年订阅",
    brand: "奈飞",
    category: "everyday",
    price: 240,
    desc: "4K 全家桶，看一整年。",
    image: "./assets/products/netflix-year.jpg",
    imagePosition: "center",
  },
  {
    id: "nike-sneakers",
    name: "一双 Nike 限量球鞋",
    brand: "日常小物",
    category: "everyday",
    price: 350,
    desc: "踩在脚下的小快乐。",
    image: "./assets/products/nike-sneakers.jpg",
    imagePosition: "center",
  },
  {
    id: "concert-ticket",
    name: "一张顶级演唱会内场票",
    brand: "日常小物",
    category: "everyday",
    price: 1200,
    desc: "离舞台只有几米。",
    image: "./assets/products/concert-ticket.jpg",
    imagePosition: "center",
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max 1TB",
    brand: "苹果",
    category: "everyday",
    price: 1599,
    desc: "口袋里的超级计算机。",
    image: "./assets/products/iphone-15-pro-max.jpg",
    imagePosition: "center 48%",
  },
  {
    id: "macbook-pro-m3-max",
    name: "MacBook Pro M3 Max",
    brand: "苹果",
    category: "everyday",
    price: 3500,
    desc: "创作者的生产力怪兽。",
    image: "./assets/products/macbook-pro-m3-max.jpg",
    imagePosition: "center",
  },

  // ===== 科技单品 tech =====
  {
    id: "vision-pro",
    name: "苹果 Vision Pro M5（双编织头带）",
    brand: "苹果",
    category: "tech",
    price: 3499,
    desc: "先从一台空间计算设备开始，财富池几乎纹丝不动。",
    image: "./assets/products/vision-pro.jpg",
    imagePosition: "center 48%",
  },
  {
    id: "ps5-pro",
    name: "索尼 PlayStation 5 Pro + 双手柄",
    brand: "索尼",
    category: "tech",
    price: 700,
    desc: "客厅里的光追怪兽。",
    image: "./assets/products/ps5-pro.jpg",
    imagePosition: "center",
  },
  {
    id: "rtx-4090-pc",
    name: "顶配 RTX 4090 游戏主机",
    brand: "定制组装",
    category: "tech",
    price: 6500,
    desc: "4K 144Hz 通吃。",
    image: "./assets/products/rtx-4090-pc.jpg",
    imagePosition: "center",
  },
  {
    id: "leica-m11",
    name: "徕卡 M11 + 35mm Summilux 镜头",
    brand: "徕卡",
    category: "tech",
    price: 18000,
    desc: "摄影师的终极情怀。",
    image: "./assets/products/leica-m11.jpg",
    imagePosition: "center",
  },
  {
    id: "red-epic",
    name: "RED V-Raptor 8K 电影机",
    brand: "RED",
    category: "tech",
    price: 35000,
    desc: "好莱坞级别的 8K 摄影机。",
    image: "./assets/products/red-epic.jpg",
    imagePosition: "center",
  },
  {
    id: "boston-dynamics-atlas",
    name: "波士顿动力 Atlas 人形机器人",
    brand: "波士顿动力",
    category: "tech",
    price: 250000,
    desc: "会跑酷的人形机器人，实验室专供。",
    image: "./assets/products/boston-dynamics-atlas.jpg",
    imagePosition: "center",
  },

  // ===== 奢侈品小件 luxury =====
  {
    id: "hermes-birkin",
    name: "爱马仕 Birkin 30",
    brand: "爱马仕",
    category: "luxury",
    price: 35000,
    desc: "配货也要排队的硬通货。",
    image: "./assets/products/hermes-birkin.jpg",
    imagePosition: "center",
  },
  {
    id: "rolex-daytona",
    name: "劳力士 Daytona 126500LN",
    brand: "劳力士",
    category: "luxury",
    price: 45000,
    desc: "二级市场溢价的钢王。",
    image: "./assets/products/rolex-daytona.jpg",
    imagePosition: "center",
  },
  {
    id: "patek-nautilus",
    name: "百达翡丽 Nautilus 5711",
    brand: "百达翡丽",
    category: "luxury",
    price: 180000,
    desc: "藏家清单上的终极钢表。",
    image: "./assets/products/patek-nautilus.jpg",
    imagePosition: "center",
  },
  {
    id: "diamond-ring",
    name: "5 克拉 D 色 IF 钻石戒指",
    brand: "高级珠宝",
    category: "luxury",
    price: 650000,
    desc: "一颗就够闪。",
    image: "./assets/products/diamond-ring.jpg",
    imagePosition: "center",
  },
  {
    id: "hermes-kelly-diamond",
    name: "爱马仕 Kelly 28 镶钻喜马拉雅",
    brand: "爱马仕",
    category: "luxury",
    price: 3800000,
    desc: "拍卖会上的包王。",
    image: "./assets/products/hermes-kelly-diamond.jpg",
    imagePosition: "center",
  },
  {
    id: "pink-star-diamond",
    name: "粉红之星钻石 59.6 克拉",
    brand: "苏富比",
    category: "luxury",
    price: 71200000,
    desc: "拍卖史上最贵的一颗粉钻。",
    image: "./assets/products/pink-star-diamond.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一颗",
  },
  {
    id: "chanel-classic-flap",
    name: "香奈儿 Classic Flap 中号",
    brand: "香奈儿",
    category: "luxury",
    price: 10500,
    desc: "菱格纹与双 C 扣，永恒的经典。",
    image: "./assets/products/chanel-classic-flap.jpg",
    imagePosition: "center",
  },
  {
    id: "dior-lady-dior",
    name: "迪奥 Lady Dior 五格",
    brand: "迪奥",
    category: "luxury",
    price: 6200,
    desc: "戴妃包，优雅的代名词。",
    image: "./assets/products/dior-lady-dior.jpg",
    imagePosition: "center",
  },
  {
    id: "lv-neverfull",
    name: "路易威登 Neverfull MM",
    brand: "路易威登",
    category: "luxury",
    price: 2300,
    desc: "最百搭的通勤托特。",
    image: "./assets/products/lv-neverfull.jpg",
    imagePosition: "center",
  },
  {
    id: "gucci-dionysus",
    name: "古驰 Dionysus 酒神包",
    brand: "古驰",
    category: "luxury",
    price: 3800,
    desc: "虎头扣与织纹皮革。",
    image: "./assets/products/gucci-dionysus.jpg",
    imagePosition: "center",
  },
  {
    id: "cartier-love-bracelet",
    name: "卡地亚 Love 手镯（玫瑰金满钻）",
    brand: "卡地亚",
    category: "luxury",
    price: 58000,
    desc: "需要专用螺丝刀才能打开的爱情信物。",
    image: "./assets/products/cartier-love-bracelet.jpg",
    imagePosition: "center",
  },
  {
    id: "vca-alhambra",
    name: "梵克雅宝四叶草全钻项链",
    brand: "梵克雅宝",
    category: "luxury",
    price: 125000,
    desc: "Alhambra 系列，幸运的象征。",
    image: "./assets/products/vca-alhambra.jpg",
    imagePosition: "center",
  },
  {
    id: "tiffany-diamond-ring",
    name: "蒂芙尼 Setting 六爪钻戒",
    brand: "蒂芙尼",
    category: "luxury",
    price: 45000,
    desc: "小蓝盒里的求婚经典。",
    image: "./assets/products/tiffany-diamond-ring.jpg",
    imagePosition: "center",
  },
  {
    id: "harry-winston-necklace",
    name: "海瑞·温斯顿钻石项链",
    brand: "海瑞·温斯顿",
    category: "luxury",
    price: 380000,
    desc: "钻石之王的高级珠宝。",
    image: "./assets/products/harry-winston-necklace.jpg",
    imagePosition: "center",
  },
  {
    id: "louboutin-red-bottoms",
    name: "克里斯提·鲁布托红底高跟鞋",
    brand: "Christian Louboutin",
    category: "luxury",
    price: 1200,
    desc: "一抹红底，女人的终极武器。",
    image: "./assets/products/louboutin-red-bottoms.jpg",
    imagePosition: "center",
  },
  {
    id: "manolo-blahnik",
    name: "Manolo Blahnik Hangisi 缎面高跟鞋",
    brand: "Manolo Blahnik",
    category: "luxury",
    price: 1400,
    desc: "《欲望都市》里 Carrie 的最爱。",
    image: "./assets/products/manolo-blahnik.jpg",
    imagePosition: "center",
  },
  {
    id: "jimmy-choo",
    name: "周仰杰 Romy 亮片高跟鞋",
    brand: "Jimmy Choo",
    category: "luxury",
    price: 950,
    desc: "红毯上的闪耀选择。",
    image: "./assets/products/jimmy-choo.jpg",
    imagePosition: "center",
  },
  {
    id: "chanel-couture-gown",
    name: "香奈儿高级定制礼服",
    brand: "香奈儿高级定制",
    category: "luxury",
    price: 150000,
    desc: "巴黎手工坊数百小时缝制的艺术品。",
    image: "./assets/products/chanel-couture-gown.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "每款仅此一件",
  },
  {
    id: "dior-couture",
    name: "迪奥高级定制礼服",
    brand: "迪奥高级定制",
    category: "luxury",
    price: 120000,
    desc: "从设计到试装，需要数月时间。",
    image: "./assets/products/dior-couture.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "每款仅此一件",
  },
  {
    id: "la-mer-full-set",
    name: "海蓝之谜 La Mer 全套护肤",
    brand: "La Mer",
    category: "everyday",
    price: 3500,
    desc: "从精华面霜到精华液，一整套配齐。",
    image: "./assets/products/la-mer-full-set.jpg",
    imagePosition: "center",
  },
  {
    id: "chanel-skincare",
    name: "香奈儿奢华精萃系列全套",
    brand: "香奈儿",
    category: "everyday",
    price: 4200,
    desc: "五月香草荚果 PFA 的奢华体验。",
    image: "./assets/products/chanel-skincare.jpg",
    imagePosition: "center",
  },
  {
    id: "la-prairie",
    name: "莱珀妮 La Prairie 鱼子精华系列",
    brand: "La Prairie",
    category: "everyday",
    price: 5800,
    desc: "瑞士顶级护肤，鱼子酱的奢华。",
    image: "./assets/products/la-prairie.jpg",
    imagePosition: "center",
  },
  {
    id: "dior-perfume-set",
    name: "迪奥香水典藏系列",
    brand: "迪奥",
    category: "everyday",
    price: 1800,
    desc: "从真我到旷野，每一瓶都值得收藏。",
    image: "./assets/products/dior-perfume-set.jpg",
    imagePosition: "center",
  },
  {
    id: "chanel-no5",
    name: "香奈儿 No.5 香水 100ml",
    brand: "香奈儿",
    category: "everyday",
    price: 180,
    desc: "玛丽莲·梦露说她只穿 No.5 入睡。",
    image: "./assets/products/chanel-no5.jpg",
    imagePosition: "center",
  },
  {
    id: "hermes-silk-scarf",
    name: "爱马仕真丝方巾",
    brand: "爱马仕",
    category: "luxury",
    price: 520,
    desc: "90×90 厘米的艺术画布。",
    image: "./assets/products/hermes-silk-scarf.jpg",
    imagePosition: "center",
  },
  {
    id: "hermes-cape-cod-watch",
    name: "爱马仕 Cape Cod 腕表",
    brand: "爱马仕",
    category: "luxury",
    price: 28000,
    desc: "优雅的方形表壳，配双圈表带。",
    image: "./assets/products/hermes-cape-cod-watch.jpg",
    imagePosition: "center",
  },
  {
    id: "luxury-spa-retreat",
    name: "马尔代夫私人岛屿 SPA 度假一周",
    brand: "Soneva Jani",
    category: "marine",
    price: 180000,
    desc: "水上滑梯别墅 + 私人管家 + 顶级 SPA。",
    image: "./assets/products/luxury-spa-retreat.jpg",
    imagePosition: "center",
  },
  {
    id: "paris-couture-week",
    name: "巴黎高定周 VIP 体验",
    brand: "巴黎高级定制",
    category: "luxury",
    price: 250000,
    desc: "前排看秀 + 私人试装 + 丽兹酒店套房。",
    image: "./assets/products/paris-couture-week.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "每年仅此一次",
  },
  {
    id: "private-stylist-year",
    name: "私人造型师全年服务",
    brand: "顶级造型工作室",
    category: "luxury",
    price: 500000,
    desc: "从日常穿搭到红毯造型，全年随叫随到。",
    image: "./assets/products/private-stylist-year.jpg",
    imagePosition: "center",
  },
  {
    id: "birkin-collection",
    name: "爱马仕 Birkin 全套收藏（10 只）",
    brand: "爱马仕",
    category: "luxury",
    price: 1200000,
    desc: "从 25 到 40，从黑金到喜马拉雅。",
    image: "./assets/products/birkin-collection.jpg",
    imagePosition: "center",
  },
  {
    id: "fine-jewelry-set",
    name: "全套高级珠宝（项链+耳环+戒指+手链）",
    brand: "高级珠宝定制",
    category: "luxury",
    price: 2500000,
    desc: "一整套可以传世的高级珠宝。",
    image: "./assets/products/fine-jewelry-set.jpg",
    imagePosition: "center",
  },
  {
    id: "hermes-mini-kelly",
    name: "爱马仕 Mini Kelly 二代",
    brand: "爱马仕",
    category: "luxury",
    price: 32000,
    desc: "小包当道，迷你凯莉一包难求。",
    image: "./assets/products/hermes-mini-kelly.jpg",
    imagePosition: "center",
  },
  {
    id: "hermes-birkin-25-himalaya",
    name: "爱马仕 Birkin 25 喜马拉雅",
    brand: "爱马仕",
    category: "luxury",
    price: 450000,
    desc: "尼罗鳄皮 + 钻石扣，包中天花板。",
    image: "./assets/products/hermes-birkin-25-himalaya.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球限量",
  },
  {
    id: "chanel-boy",
    name: "香奈儿 Boy Chanel 中号",
    brand: "香奈儿",
    category: "luxury",
    price: 7200,
    desc: "中性帅气与优雅的完美结合。",
    image: "./assets/products/chanel-boy.jpg",
    imagePosition: "center",
  },
  {
    id: "celine-box-bag",
    name: "赛琳 Celine Box 经典款",
    brand: "赛琳",
    category: "luxury",
    price: 4800,
    desc: "极简主义的代表。",
    image: "./assets/products/celine-box-bag.jpg",
    imagePosition: "center",
  },
  {
    id: "prada-re-edition",
    name: "普拉达 Re-Edition 2005 尼龙包",
    brand: "普拉达",
    category: "luxury",
    price: 1800,
    desc: "复古回潮的腋下包。",
    image: "./assets/products/prada-re-edition.jpg",
    imagePosition: "center",
  },
  {
    id: "miu-miu-wander",
    name: "缪缪 Miu Miu Wander 腋下包",
    brand: "缪缪",
    category: "luxury",
    price: 2900,
    desc: "甜酷女孩的新宠。",
    image: "./assets/products/miu-miu-wander.jpg",
    imagePosition: "center",
  },
  {
    id: "cartier-panthere",
    name: "卡地亚 Panthère 猎豹项链",
    brand: "卡地亚",
    category: "luxury",
    price: 680000,
    desc: "祖母绿豹眼，猎豹的野性与优雅。",
    image: "./assets/products/cartier-panthere.jpg",
    imagePosition: "center",
  },
  {
    id: "bvlgari-serpenti",
    name: "宝格丽 Serpenti 蛇形手镯",
    brand: "宝格丽",
    category: "luxury",
    price: 42000,
    desc: "灵蛇缠绕，罗马的神秘魅力。",
    image: "./assets/products/bvlgari-serpenti.jpg",
    imagePosition: "center",
  },
  {
    id: "piaget-possession",
    name: "伯爵 Possession 时来运转戒指",
    brand: "伯爵",
    category: "luxury",
    price: 28000,
    desc: "转动的圆环，寓意好运流转。",
    image: "./assets/products/piaget-possession.jpg",
    imagePosition: "center",
  },
  {
    id: "chaumet-josephine",
    name: "尚美巴黎 Joséphine 加冕·爱戒指",
    brand: "尚美巴黎",
    category: "luxury",
    price: 56000,
    desc: "拿破仑皇后的皇冠灵感。",
    image: "./assets/products/chaumet-josephine.jpg",
    imagePosition: "center",
  },
  {
    id: "mikimoto-pearl",
    name: "御木本珍珠项链",
    brand: "御木本",
    category: "luxury",
    price: 35000,
    desc: "日本 Akoya 珍珠的极致光泽。",
    image: "./assets/products/mikimoto-pearl.jpg",
    imagePosition: "center",
  },
  {
    id: "aquazzura-heels",
    name: "Aquazzura 绑带高跟鞋",
    brand: "Aquazzura",
    category: "luxury",
    price: 850,
    desc: "佛罗伦萨手工，性感绑带设计。",
    image: "./assets/products/aquazzura-heels.jpg",
    imagePosition: "center",
  },
  {
    id: "stuart-weitzman",
    name: "Stuart Weitzman 过膝长靴",
    brand: "Stuart Weitzman",
    category: "luxury",
    price: 1100,
    desc: "显瘦神器，秋冬必备。",
    image: "./assets/products/stuart-weitzman.jpg",
    imagePosition: "center",
  },
  {
    id: "chanel-sneakers",
    name: "香奈儿经典运动鞋",
    brand: "香奈儿",
    category: "luxury",
    price: 1200,
    desc: "舒适与时尚兼得的小白鞋。",
    image: "./assets/products/chanel-sneakers.jpg",
    imagePosition: "center",
  },
  {
    id: "lululemon-align",
    name: "Lululemon Align 瑜伽裤",
    brand: "Lululemon",
    category: "everyday",
    price: 128,
    desc: "裸感体验，运动女孩的标配。",
    image: "./assets/products/lululemon-align.jpg",
    imagePosition: "center",
  },
  {
    id: "skincare-facial-device",
    name: "宙斯 Dr. Arrivo 美容仪",
    brand: "Artistic&Co",
    category: "everyday",
    price: 1800,
    desc: "家用射频美容，把美容院搬回家。",
    image: "./assets/products/skincare-facial-device.jpg",
    imagePosition: "center",
  },
  {
    id: "dyson-airwrap",
    name: "戴森 Airwrap 多功能造型器",
    brand: "戴森",
    category: "everyday",
    price: 600,
    desc: "不伤发的黑科技造型神器。",
    image: "./assets/products/dyson-airwrap.jpg",
    imagePosition: "center",
  },
  {
    id: "tom-ford-lipstick",
    name: "Tom Ford 口红全套色号",
    brand: "Tom Ford",
    category: "everyday",
    price: 2400,
    desc: "黑金管身，每一支都是艺术品。",
    image: "./assets/products/tom-ford-lipstick.jpg",
    imagePosition: "center",
  },
  {
    id: "lauder-re-nutriv",
    name: "雅诗兰黛白金级奢宠系列",
    brand: "雅诗兰黛",
    category: "everyday",
    price: 3200,
    desc: "黑钻松露精华，顶级抗老。",
    image: "./assets/products/lauder-re-nutriv.jpg",
    imagePosition: "center",
  },
  {
    id: "sulwhasoo-set",
    name: "雪花秀臻雪系列全套",
    brand: "雪花秀",
    category: "everyday",
    price: 2800,
    desc: "韩方草本护肤的顶级代表。",
    image: "./assets/products/sulwhasoo-set.jpg",
    imagePosition: "center",
  },
  {
    id: "private-yoga-instructor",
    name: "私人瑜伽教练全年上门服务",
    brand: "私人教练",
    category: "everyday",
    price: 120000,
    desc: "每周三次，随时随地上课。",
    image: "./assets/products/private-yoga-instructor.jpg",
    imagePosition: "center",
  },
  {
    id: "personal-trainer-year",
    name: "私人健身教练全年一对一",
    brand: "顶级健身工作室",
    category: "everyday",
    price: 150000,
    desc: "量身定制训练计划，随时陪伴。",
    image: "./assets/products/personal-trainer-year.jpg",
    imagePosition: "center",
  },
  {
    id: "swiss-clinic-facial",
    name: "瑞士顶级医美诊所疗程",
    brand: "Clinique La Prairie",
    category: "luxury",
    price: 85000,
    desc: "羊胎素抗衰疗程，一周焕新。",
    image: "./assets/products/swiss-clinic-facial.jpg",
    imagePosition: "center",
  },
  {
    id: "wedding-dress-couture",
    name: "Elie Saab 高级定制婚纱",
    brand: "Elie Saab",
    category: "luxury",
    price: 400000,
    desc: "黎巴嫩手工钉珠，一生一次的梦幻。",
    image: "./assets/products/wedding-dress-couture.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "仅此一件",
  },
  {
    id: "fur-coat",
    name: "意大利手工水貂皮草大衣",
    brand: "Fendi",
    category: "luxury",
    price: 180000,
    desc: "顶级皮草，冬日的极致温暖。",
    image: "./assets/products/fur-coat.jpg",
    imagePosition: "center",
  },
  {
    id: "birkin-wall",
    name: "整面 Birkin 收藏墙（30 只）",
    brand: "爱马仕",
    category: "luxury",
    price: 5000000,
    desc: "从黑金到喜马拉雅，一整面墙的快乐。",
    image: "./assets/products/birkin-wall.jpg",
    imagePosition: "center",
  },
  {
    id: "private-nail-artist",
    name: "私人美甲师全年上门",
    brand: "顶级美甲工作室",
    category: "everyday",
    price: 45000,
    desc: "每周一次，指尖永远精致。",
    image: "./assets/products/private-nail-artist.jpg",
    imagePosition: "center",
  },
  {
    id: "flower-subscription",
    name: "全年每周鲜花订阅（顶级花艺师）",
    brand: "高端花艺",
    category: "everyday",
    price: 52000,
    desc: "每周一束当季鲜花，家里永远有春天。",
    image: "./assets/products/flower-subscription.jpg",
    imagePosition: "center",
  },
  {
    id: "designer-wardrobe-season",
    name: "当季高定成衣全套采购",
    brand: "巴黎/米兰/纽约",
    category: "luxury",
    price: 800000,
    desc: "每季飞三大时装周，造型师全程陪同。",
    image: "./assets/products/designer-wardrobe-season.jpg",
    imagePosition: "center",
  },

  // ===== 车库 cars =====
  {
    id: "tesla-model-s-plaid",
    name: "特斯拉 Model S Plaid",
    brand: "特斯拉",
    category: "cars",
    price: 110000,
    desc: "把电动车性能旗舰装进车库，只算热身。",
    image: "./assets/products/tesla-model-s-plaid.jpg",
    imagePosition: "center 56%",
  },
  {
    id: "porsche-911-turbo-s",
    name: "保时捷 911 Turbo S",
    brand: "保时捷",
    category: "cars",
    price: 230000,
    desc: "日常通勤的终极答案。",
    image: "./assets/products/porsche-911-turbo-s.jpg",
    imagePosition: "center",
  },
  {
    id: "ferrari-sf90",
    name: "法拉利 SF90 Stradale",
    brand: "法拉利",
    category: "cars",
    price: 625000,
    desc: "千匹马力的混动跃马。",
    image: "./assets/products/ferrari-sf90.jpg",
    imagePosition: "center",
  },
  {
    id: "rolls-royce-phantom",
    name: "劳斯莱斯幻影 VIII 长轴距版",
    brand: "劳斯莱斯",
    category: "cars",
    price: 650000,
    desc: "一台带星空顶的长轴距幻影，账单终于有点仪式感。",
    image: "./assets/products/rolls-royce-phantom.jpg",
    imagePosition: "center 56%",
  },
  {
    id: "lamborghini-aventador-svj",
    name: "兰博基尼 Aventador SVJ",
    brand: "兰博基尼",
    category: "cars",
    price: 700000,
    desc: "碳纤维、V12 和夸张空气动力学，适合批量加入车库。",
    image: "./assets/products/lamborghini-aventador-svj.jpg",
    imagePosition: "center 52%",
  },
  {
    id: "bugatti-chiron-super-sport",
    name: "布加迪 Chiron Super Sport",
    brand: "布加迪",
    category: "cars",
    price: 3900000,
    desc: "1600 马力，极速 440 km/h。",
    image: "./assets/products/bugatti-chiron-super-sport.jpg",
    imagePosition: "center",
  },
  {
    id: "pagani-huayra-r",
    name: "帕加尼 Huayra R",
    brand: "帕加尼",
    category: "cars",
    price: 3100000,
    desc: "只能在赛道开的艺术品，限量 30 台。",
    image: "./assets/products/pagani-huayra-r.jpg",
    imagePosition: "center",
    maxQuantity: 30,
    uniqueLabel: "限量 30 台",
  },
  {
    id: "bugatti-la-voiture-noire",
    name: "布加迪 La Voiture Noire",
    brand: "布加迪",
    category: "cars",
    price: 18700000,
    desc: "史上最贵新车，仅此一台。",
    image: "./assets/products/bugatti-la-voiture-noire.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一台",
  },
  {
    id: "ferrari-250-gto",
    name: "法拉利 250 GTO（1962年）",
    brand: "法拉利",
    category: "cars",
    price: 70000000,
    desc: "拍卖价最高的经典车，藏家圣杯。",
    image: "./assets/products/ferrari-250-gto.jpg",
    imagePosition: "center",
    maxQuantity: 36,
    uniqueLabel: "现存约 36 台",
  },
  {
    id: "mercedes-f1-w14",
    name: "梅赛德斯-AMG F1 W14 赛车",
    brand: "梅赛德斯",
    category: "cars",
    price: 15000000,
    desc: "一台能跑 F1 正赛的现役赛车。",
    image: "./assets/products/mercedes-f1-w14.jpg",
    imagePosition: "center",
  },
  {
    id: "classic-car-collection",
    name: "整座经典车收藏（50 台）",
    brand: "私人收藏",
    category: "cars",
    price: 250000000,
    desc: "从 250 GTO 到 911 GT1，一整个博物馆。",
    image: "./assets/products/classic-car-collection.jpg",
    imagePosition: "center",
  },

  // ===== 豪宅地产 estate =====
  {
    id: "nyc-penthouse",
    name: "纽约中央公园顶层公寓",
    brand: "曼哈顿地产",
    category: "estate",
    price: 250000000,
    desc: "俯瞰中央公园的云端之家。",
    image: "./assets/products/nyc-penthouse.jpg",
    imagePosition: "center",
  },
  {
    id: "london-belgravia",
    name: "伦敦 Belgravia 联排别墅",
    brand: "伦敦地产",
    category: "estate",
    price: 180000000,
    desc: "白金汉宫步行可达。",
    image: "./assets/products/london-belgravia.jpg",
    imagePosition: "center",
  },
  {
    id: "hong-kong-peak",
    name: "香港山顶别墅",
    brand: "香港地产",
    category: "estate",
    price: 210000000,
    desc: "维港海景一览无余。",
    image: "./assets/products/hong-kong-peak.jpg",
    imagePosition: "center",
  },
  {
    id: "villa-leopolda",
    name: "莱奥波尔达别墅（蔚蓝海岸）",
    brand: "蔚蓝海岸庄园",
    category: "estate",
    price: 750000000,
    desc: "蔚蓝海岸传奇庄园，把地产项目拉到博物馆级别。",
    image: "./assets/products/villa-leopolda.jpg",
    imagePosition: "center 50%",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一座",
  },
  {
    id: "buckingham-palace",
    name: "白金汉宫（估值）",
    brand: "英国王室地产",
    category: "estate",
    price: 5000000000,
    desc: "如果它能卖的话，这是估价。",
    image: "./assets/products/buckingham-palace.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一座",
  },
  {
    id: "sphere-las-vegas",
    name: "拉斯维加斯 Sphere 球形场馆",
    brand: "场馆",
    category: "estate",
    price: 2300000000,
    desc: "买下这颗发光球，夜景和账单都会非常难忽视。",
    image: "./assets/products/sphere-las-vegas.jpg",
    imagePosition: "center 46%",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一座",
  },
  {
    id: "madison-square-garden",
    name: "麦迪逊广场花园",
    brand: "MSG 娱乐",
    category: "estate",
    price: 3500000000,
    desc: "世界最著名的体育馆。",
    image: "./assets/products/madison-square-garden.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一座",
  },

  // ===== 飞机 aircraft =====
  {
    id: "cessna-citation",
    name: "赛斯纳 Citation XLS+",
    brand: "赛斯纳",
    category: "aircraft",
    price: 15000000,
    desc: "入门级商务喷气。",
    image: "./assets/products/cessna-citation.jpg",
    imagePosition: "center",
  },
  {
    id: "gulfstream-g700",
    name: "湾流 G700",
    brand: "湾流",
    category: "aircraft",
    price: 78000000,
    desc: "湾流旗舰，洲际直飞。",
    image: "./assets/products/gulfstream-g700.jpg",
    imagePosition: "center",
  },
  {
    id: "airbus-acj319",
    name: "空客 ACJ319 公务机",
    brand: "空客公务机",
    category: "aircraft",
    price: 105000000,
    desc: "把空客 A319 改成私人客厅。",
    image: "./assets/products/airbus-acj319.jpg",
    imagePosition: "center",
  },
  {
    id: "boeing-747-8-bbj",
    name: "波音 747-8 BBJ 公务机",
    brand: "波音公务机",
    category: "aircraft",
    price: 420000000,
    desc: "一架完成 VIP 改装的空中宫殿，宽体飞机级别的排场。",
    image: "./assets/products/boeing-747-8-bbj.jpg",
    imagePosition: "center 50%",
  },
  {
    id: "airbus-a380",
    name: "空客 A380-800 私人改装版",
    brand: "空客",
    category: "aircraft",
    price: 500000000,
    desc: "把双层巨无霸改成私人机舱，预算也要双层起跳。",
    image: "./assets/products/airbus-a380.jpg",
    imagePosition: "center 46%",
  },
  {
    id: "sikorsky-s-92",
    name: "西科斯基 S-92 豪华直升机",
    brand: "西科斯基",
    category: "aircraft",
    price: 32000000,
    desc: "从楼顶停机坪直达庄园。",
    image: "./assets/products/sikorsky-s-92.jpg",
    imagePosition: "center",
  },
  {
    id: "concorde",
    name: "协和式超音速客机",
    brand: "法航 / 英航",
    category: "aircraft",
    price: 45000000,
    desc: "退役的传奇，仅存博物馆里。",
    image: "./assets/products/concorde.jpg",
    imagePosition: "center",
    maxQuantity: 20,
    uniqueLabel: "现存约 20 架",
  },

  // ===== 游艇海岛 marine =====
  {
    id: "sunseeker-76",
    name: "圣汐克 76 英尺游艇",
    brand: "圣汐克",
    category: "marine",
    price: 9000000,
    desc: "地中海周末巡航的入场券。",
    image: "./assets/products/sunseeker-76.jpg",
    imagePosition: "center",
  },
  {
    id: "necker-island",
    name: "内克岛（英属维尔京群岛）",
    brand: "私人岛屿",
    category: "marine",
    price: 180000000,
    desc: "一整座英属维京群岛私人岛屿，海风都显得昂贵。",
    image: "./assets/products/necker-island.jpg",
    imagePosition: "center 52%",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一座",
  },
  {
    id: "eclipse-yacht",
    name: "Eclipse 超级游艇",
    brand: "Blohm + Voss",
    category: "marine",
    price: 700000000,
    desc: "163 米，带导弹防御系统。",
    image: "./assets/products/eclipse-yacht.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一艘",
  },
  {
    id: "dilbar-yacht",
    name: "乐顺 Dilbar 超级游艇",
    brand: "乐顺",
    category: "marine",
    price: 600000000,
    desc: "156 米级超级游艇，带着海面上的巨额维护费一起入账。",
    image: "./assets/products/dilbar-yacht.jpg",
    imagePosition: "center 54%",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一艘",
  },
  {
    id: "fiji-island",
    name: "斐济 Wakaya 私人岛屿",
    brand: "私人岛屿",
    category: "marine",
    price: 60000000,
    desc: "南太平洋上的一整座岛。",
    image: "./assets/products/fiji-island.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一座",
  },
  {
    id: "ocean-liner",
    name: "玛丽皇后二号远洋邮轮",
    brand: "冠达邮轮",
    category: "marine",
    price: 900000000,
    desc: "横跨大西洋的浮动城市。",
    image: "./assets/products/ocean-liner.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一艘",
  },

  // ===== 太空 space =====
  {
    id: "blue-origin-suborbital",
    name: "蓝色起源亚轨道飞行票",
    brand: "蓝色起源",
    category: "space",
    price: 28000000,
    desc: "卡门线之上 3 分钟。",
    image: "./assets/products/blue-origin-suborbital.jpg",
    imagePosition: "center",
  },
  {
    id: "spacex-crew-trip",
    name: "SpaceX 龙飞船国际空间站往返",
    brand: "SpaceX",
    category: "space",
    price: 55000000,
    desc: "去 ISS 待 10 天。",
    image: "./assets/products/spacex-crew-trip.jpg",
    imagePosition: "center",
  },
  {
    id: "falcon-9-crs4",
    name: "SpaceX 猎鹰 9 号轨道发射",
    brand: "SpaceX",
    category: "space",
    price: 67000000,
    desc: "一次轨道级发射，数字开始从百万跳到千万。",
    image: "./assets/products/falcon-9-crs4.jpg",
    imagePosition: "center 43%",
  },
  {
    id: "falcon-heavy-launch",
    name: "SpaceX 猎鹰重型火箭发射",
    brand: "SpaceX",
    category: "space",
    price: 97000000,
    desc: "现役最强运力火箭之一。",
    image: "./assets/products/falcon-heavy-launch.jpg",
    imagePosition: "center",
  },
  {
    id: "starship-launch",
    name: "SpaceX 星舰完整发射",
    brand: "SpaceX",
    category: "space",
    price: 200000000,
    desc: "马斯克自己的火星班车。",
    image: "./assets/products/starship-launch.jpg",
    imagePosition: "center",
  },
  {
    id: "lunar-mission",
    name: "一次绕月飞行任务（Starship）",
    brand: "SpaceX",
    category: "space",
    price: 1000000000,
    desc: "前泽友作包下的那种。",
    image: "./assets/products/lunar-mission.jpg",
    imagePosition: "center",
  },
  {
    id: "mars-mission",
    name: "一次载人火星登陆任务（估算）",
    brand: "SpaceX / NASA",
    category: "space",
    price: 100000000000,
    desc: "把人送上火星再回来的全部预算。",
    image: "./assets/products/mars-mission.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "人类尚未完成",
  },
  {
    id: "apollo-program",
    name: "阿波罗登月计划（折算到今天）",
    brand: "NASA",
    category: "space",
    price: 150000000000,
    desc: "1960 年代的壮举，折算到今天约这个数。",
    image: "./assets/products/apollo-program.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "历史仅此一次",
  },
  {
    id: "iss-total-cost",
    name: "国际空间站（全部造价）",
    brand: "NASA / 俄航局 / 欧空局",
    category: "space",
    price: 150000000000,
    desc: "16 国合作 20 年的轨道前哨。",
    image: "./assets/products/iss-total-cost.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一座",
  },

  // ===== 公司资产 asset =====
  {
    id: "mlb-team",
    name: "一支 MLB 棒球队",
    brand: "美国职棒大联盟",
    category: "asset",
    price: 2400000000,
    desc: "大联盟平均估值。",
    image: "./assets/products/mlb-team.jpg",
    imagePosition: "center",
  },
  {
    id: "nhl-team",
    name: "一支 NHL 冰球队",
    brand: "国家冰球联盟",
    category: "asset",
    price: 1100000000,
    desc: "冰球大联盟平均估值。",
    image: "./assets/products/nhl-team.jpg",
    imagePosition: "center",
  },
  {
    id: "nfl-team",
    name: "一支 NFL 橄榄球队",
    brand: "国家橄榄球联盟",
    category: "asset",
    price: 5100000000,
    desc: "NFL 平均估值，体育界最贵联盟。",
    image: "./assets/products/nfl-team.jpg",
    imagePosition: "center",
  },
  {
    id: "american-airlines-center",
    name: "达拉斯独行侠队",
    brand: "NBA",
    category: "asset",
    price: 4500000000,
    desc: "把 American Airlines Center 背后的球队资产纳入账本。",
    image: "./assets/products/american-airlines-center.jpg",
    imagePosition: "center 54%",
    maxQuantity: 1,
    uniqueLabel: "仅此一支",
  },
  {
    id: "entire-nba",
    name: "整个 NBA 联盟（30 队合计）",
    brand: "NBA",
    category: "asset",
    price: 100000000000,
    desc: "把所有 30 支球队打包。",
    image: "./assets/products/entire-nba.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一个",
  },
  {
    id: "entire-nfl",
    name: "整个 NFL 联盟（32 队合计）",
    brand: "NFL",
    category: "asset",
    price: 163000000000,
    desc: "32 支球队打包。",
    image: "./assets/products/entire-nfl.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一个",
  },
  {
    id: "netflix-stake",
    name: "奈飞 1% 股份",
    brand: "奈飞",
    category: "asset",
    price: 3500000000,
    desc: "流媒体巨头的一小块。",
    image: "./assets/products/netflix-stake.jpg",
    imagePosition: "center",
  },
  {
    id: "x-headquarters",
    name: "X 公司（原 Twitter）",
    brand: "社交平台",
    category: "asset",
    price: 44000000000,
    desc: "一笔足以让进度条明显移动的社交平台级消费。",
    image: "./assets/products/x-headquarters.jpg",
    imagePosition: "center 50%",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "tesla-1-percent",
    name: "特斯拉 1% 股份",
    brand: "特斯拉",
    category: "asset",
    price: 10000000000,
    desc: "马斯克自己公司的一小块。",
    image: "./assets/products/tesla-1-percent.jpg",
    imagePosition: "center",
  },
  {
    id: "spacex-10-percent",
    name: "SpaceX 10% 股份",
    brand: "SpaceX",
    category: "asset",
    price: 18000000000,
    desc: "私人市场估值。",
    image: "./assets/products/spacex-10-percent.jpg",
    imagePosition: "center",
  },
  {
    id: "disney-stake",
    name: "华特迪士尼公司 5% 股份",
    brand: "迪士尼",
    category: "asset",
    price: 10000000000,
    desc: "从米老鼠到星球大战。",
    image: "./assets/products/disney-stake.jpg",
    imagePosition: "center",
  },
  {
    id: "apple-1-percent",
    name: "苹果公司 1% 股份",
    brand: "苹果",
    category: "asset",
    price: 34000000000,
    desc: "全球市值最高公司的 1%。",
    image: "./assets/products/apple-1-percent.jpg",
    imagePosition: "center",
  },
  {
    id: "apple-total",
    name: "苹果公司全部（按市值）",
    brand: "苹果",
    category: "asset",
    price: 3400000000000,
    desc: "把整个苹果买下来 —— 你买不起。",
    image: "./assets/products/apple-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "microsoft-total",
    name: "微软全部（按市值）",
    brand: "微软",
    category: "asset",
    price: 3200000000000,
    desc: "从 Windows 到 Azure，买下整个科技帝国。",
    image: "./assets/products/microsoft-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "alphabet-total",
    name: "谷歌母公司 Alphabet 全部",
    brand: "Alphabet",
    category: "asset",
    price: 2100000000000,
    desc: "搜索、YouTube、安卓、Waymo 全部打包。",
    image: "./assets/products/alphabet-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "amazon-total",
    name: "亚马逊全部（按市值）",
    brand: "亚马逊",
    category: "asset",
    price: 1900000000000,
    desc: "电商 + AWS + Prime 会员生态。",
    image: "./assets/products/amazon-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "meta-total",
    name: "Meta 全部（Facebook/Instagram/WhatsApp）",
    brand: "Meta",
    category: "asset",
    price: 1300000000000,
    desc: "全球最大社交网络帝国。",
    image: "./assets/products/meta-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "nvidia-total",
    name: "英伟达全部（按市值）",
    brand: "英伟达",
    category: "asset",
    price: 2800000000000,
    desc: "AI 时代的算力之王。",
    image: "./assets/products/nvidia-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "coca-cola-total",
    name: "可口可乐公司全部",
    brand: "可口可乐",
    category: "asset",
    price: 260000000000,
    desc: "全球最值钱的品牌之一，快乐水的帝国。",
    image: "./assets/products/coca-cola-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "pepsico-total",
    name: "百事公司全部",
    brand: "百事",
    category: "asset",
    price: 230000000000,
    desc: "可乐 + 乐事 + 佳得乐 + 桂格。",
    image: "./assets/products/pepsico-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "disney-total",
    name: "华特迪士尼公司全部",
    brand: "迪士尼",
    category: "asset",
    price: 180000000000,
    desc: "乐园 + 电影 + 流媒体 + 体育转播。",
    image: "./assets/products/disney-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "nike-total",
    name: "耐克全部（按市值）",
    brand: "耐克",
    category: "asset",
    price: 140000000000,
    desc: "Just Do It，全球运动品牌霸主。",
    image: "./assets/products/nike-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "mcdonalds-total",
    name: "麦当劳全部（按市值）",
    brand: "麦当劳",
    category: "asset",
    price: 220000000000,
    desc: "金拱门遍布全球，每天 6900 万顾客。",
    image: "./assets/products/mcdonalds-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "starbucks-total",
    name: "星巴克全部（按市值）",
    brand: "星巴克",
    category: "asset",
    price: 110000000000,
    desc: "全球 36000 家门店的咖啡帝国。",
    image: "./assets/products/starbucks-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "walmart-total",
    name: "沃尔玛全部（按市值）",
    brand: "沃尔玛",
    category: "asset",
    price: 550000000000,
    desc: "全球最大零售商，年收入 6000 亿美元。",
    image: "./assets/products/walmart-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "lvmh-total",
    name: "LVMH 路威酩轩全部",
    brand: "LVMH",
    category: "asset",
    price: 480000000000,
    desc: "LV + 迪奥 + 爱马仕股份 + 75 个品牌的奢侈品帝国。",
    image: "./assets/products/lvmh-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "unilever-total",
    name: "联合利华全部",
    brand: "联合利华",
    category: "asset",
    price: 150000000000,
    desc: "多芬 + 力士 + 立顿 + 梦龙，400 个品牌。",
    image: "./assets/products/unilever-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "p&g-total",
    name: "宝洁全部（按市值）",
    brand: "宝洁",
    category: "asset",
    price: 340000000000,
    desc: "海飞丝 + 玉兰油 + 吉列 + 帮宝适。",
    image: "./assets/products/pg-total.jpg",
    imagePosition: "center 44%",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "jpmorgan-total",
    name: "摩根大通全部（按市值）",
    brand: "摩根大通",
    category: "asset",
    price: 570000000000,
    desc: "全球最大银行之一。",
    image: "./assets/products/jpmorgan-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "berkshire-total",
    name: "伯克希尔·哈撒韦全部",
    brand: "伯克希尔",
    category: "asset",
    price: 900000000000,
    desc: "巴菲特的投资帝国。",
    image: "./assets/products/berkshire-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "samsung-total",
    name: "三星电子全部",
    brand: "三星",
    category: "asset",
    price: 380000000000,
    desc: "手机 + 芯片 + 面板 + 家电全产业链。",
    image: "./assets/products/samsung-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "toyota-total",
    name: "丰田汽车全部（按市值）",
    brand: "丰田",
    category: "asset",
    price: 300000000000,
    desc: "全球最大汽车制造商。",
    image: "./assets/products/toyota-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "bytedance-total",
    name: "字节跳动全部（估值）",
    brand: "字节跳动",
    category: "asset",
    price: 300000000000,
    desc: "TikTok + 抖音 + 今日头条的内容帝国。",
    image: "./assets/products/bytedance-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "tencent-total",
    name: "腾讯全部（按市值）",
    brand: "腾讯",
    category: "asset",
    price: 420000000000,
    desc: "微信 + QQ + 游戏帝国。",
    image: "./assets/products/tencent-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "alibaba-total",
    name: "阿里巴巴全部（按市值）",
    brand: "阿里巴巴",
    category: "asset",
    price: 250000000000,
    desc: "淘宝 + 天猫 + 阿里云 + 菜鸟。",
    image: "./assets/products/alibaba-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "spotify-total",
    name: "Spotify 全部（按市值）",
    brand: "Spotify",
    category: "asset",
    price: 60000000000,
    desc: "全球最大音乐流媒体。",
    image: "./assets/products/spotify-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "uber-total",
    name: "优步全部（按市值）",
    brand: "优步",
    category: "asset",
    price: 150000000000,
    desc: "全球出行 + 外卖帝国。",
    image: "./assets/products/uber-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },
  {
    id: "airbnb-total",
    name: "爱彼迎全部（按市值）",
    brand: "Airbnb",
    category: "asset",
    price: 90000000000,
    desc: "全球短租平台，700 万房源。",
    image: "./assets/products/airbnb-total.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一家",
  },

  // ===== 国家与奇观 nation =====
  {
    id: "nobel-prize",
    name: "一届诺贝尔奖奖金",
    brand: "诺贝尔基金会",
    category: "nation",
    price: 1100000,
    desc: "每年发给最聪明的头脑。",
    image: "./assets/products/nobel-prize.jpg",
    imagePosition: "center",
  },
  {
    id: "superbowl-ad",
    name: "超级碗 30 秒广告",
    brand: "国家橄榄球联盟",
    category: "nation",
    price: 7000000,
    desc: "1.15 亿人同时看你。",
    image: "./assets/products/superbowl-ad.jpg",
    imagePosition: "center",
  },
  {
    id: "hollywood-blockbuster",
    name: "一部好莱坞顶级大片制作",
    brand: "好莱坞",
    category: "nation",
    price: 350000000,
    desc: "从剧本到上映的全部预算。",
    image: "./assets/products/hollywood-blockbuster.jpg",
    imagePosition: "center",
  },
  {
    id: "end-malaria",
    name: "彻底消灭全球疟疾（盖茨估算）",
    brand: "全球健康",
    category: "nation",
    price: 100000000000,
    desc: "拯救每年 60 万死者。",
    image: "./assets/products/end-malaria.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "只需一次",
  },
  {
    id: "end-hunger-year",
    name: "解决全球饥饿一年（UN 估算）",
    brand: "联合国",
    category: "nation",
    price: 330000000000,
    desc: "让 8 亿人吃饱。",
    image: "./assets/products/end-hunger-year.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "每年一次",
  },
  {
    id: "monaco-gdp",
    name: "摩纳哥全国一年 GDP",
    brand: "摩纳哥公国",
    category: "nation",
    price: 8000000000,
    desc: "把一个公国一整年的经济产出打包。",
    image: "./assets/products/monaco-gdp.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "仅此一国",
  },
  {
    id: "iceland-gdp",
    name: "冰岛全国一年 GDP",
    brand: "冰岛",
    category: "nation",
    price: 30000000000,
    desc: "37 万人一整年的劳动。",
    image: "./assets/products/iceland-gdp.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "仅此一国",
  },
  {
    id: "singapore-gdp",
    name: "新加坡一年 GDP",
    brand: "新加坡",
    category: "nation",
    price: 500000000000,
    desc: "590 万人一整年的经济总和。",
    image: "./assets/products/singapore-gdp.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "仅此一国",
  },
  {
    id: "switzerland-gdp",
    name: "瑞士一年 GDP",
    brand: "瑞士",
    category: "nation",
    price: 900000000000,
    desc: "钟表、巧克力、银行 —— 全部。",
    image: "./assets/products/switzerland-gdp.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "仅此一国",
  },
  {
    id: "uk-gdp",
    name: "英国一年 GDP",
    brand: "英国",
    category: "nation",
    price: 3300000000000,
    desc: "6700 万人的经济总和。",
    image: "./assets/products/uk-gdp.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "仅此一国",
  },
  {
    id: "japan-gdp",
    name: "日本一年 GDP",
    brand: "日本",
    category: "nation",
    price: 4200000000000,
    desc: "1.25 亿人的经济产出。",
    image: "./assets/products/japan-gdp.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "仅此一国",
  },
  {
    id: "china-gdp",
    name: "中国一年 GDP",
    brand: "中国",
    category: "nation",
    price: 18000000000000,
    desc: "14 亿人的经济总和。",
    image: "./assets/products/china-gdp.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "仅此一国",
  },
  {
    id: "us-gdp",
    name: "美国一年 GDP",
    brand: "美国",
    category: "nation",
    price: 28000000000000,
    desc: "全球最大经济体的一年产出。",
    image: "./assets/products/us-gdp.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "仅此一国",
  },
  {
    id: "global-gdp",
    name: "全球一年 GDP 总和",
    brand: "地球",
    category: "nation",
    price: 105000000000000,
    desc: "80 亿人一整年的全部经济活动。",
    image: "./assets/products/global-gdp.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "仅此一颗星球",
  },
  {
    id: "all-billionaires",
    name: "全球亿万富豪总财富",
    brand: "福布斯",
    category: "nation",
    price: 13000000000000,
    desc: "2700 多位亿万富豪的净资产总和。",
    image: "./assets/products/all-billionaires.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "人类仅此一份",
  },
  {
    id: "mona-lisa",
    name: "《蒙娜丽莎》（保险估值）",
    brand: "卢浮宫",
    category: "nation",
    price: 1000000000,
    desc: "卢浮宫的镇馆之宝，保险估价约十亿。",
    image: "./assets/products/mona-lisa.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "全球仅此一幅",
  },
  {
    id: "great-wall-section",
    name: "长城一段（估值玩笑）",
    brand: "世界遗产",
    category: "nation",
    price: 50000000000,
    desc: "非卖品，但如果能卖的话。",
    image: "./assets/products/great-wall-section.jpg",
    imagePosition: "center",
    maxQuantity: 1,
    uniqueLabel: "人类仅此一座",
  },
];

const STORAGE_KEY = "musk-simulator-state-v1";

function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

const saved = loadSavedState();

const state = {
  products: [...baseProducts],
  cart: saved.cart || {},
  category: saved.category || "all",
  wealth: 997_100_000_000,
  customIndex: saved.customIndex || 1,
  currency: saved.currency || "USD",
  exchangeRate: 7.2,
  searchQuery: "",
};

function saveState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cart: state.cart,
        category: state.category,
        customIndex: state.customIndex,
        currency: state.currency,
      }),
    );
  } catch {
    // ignore quota errors
  }
}

const els = {
  wealthTotalDisplay: document.querySelector("#wealthTotalDisplay"),
  remainingAmount: document.querySelector("#remainingAmount"),
  spentAmount: document.querySelector("#spentAmount"),
  spentPercent: document.querySelector("#spentPercent"),
  exactRemaining: document.querySelector("#exactRemaining"),
  progressFill: document.querySelector("#progressFill"),
  milestoneText: document.querySelector("#milestoneText"),
  productGrid: document.querySelector("#productGrid"),
  receiptTotal: document.querySelector("#receiptTotal"),
  receiptList: document.querySelector("#receiptList"),
  receiptEmpty: document.querySelector("#receiptEmpty"),
  mobileSpent: document.querySelector("#mobileSpent"),
  receiptPanel: document.querySelector("#receiptPanel"),
  mobileBackdrop: document.querySelector("#mobileBackdrop"),
  openReceiptBtn: document.querySelector("#openReceiptBtn"),
  closeReceiptBtn: document.querySelector("#closeReceiptBtn"),
  randomBuyBtn: document.querySelector("#randomBuyBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  spendRestBtn: document.querySelector("#spendRestBtn"),
  shareBtn: document.querySelector("#shareBtn"),
  customForm: document.querySelector("#customForm"),
  customName: document.querySelector("#customName"),
  customPrice: document.querySelector("#customPrice"),
  customPriceUnit: document.querySelector("#customPriceUnit"),
  currencyToggleBtn: document.querySelector("#currencyToggleBtn"),
  currencyLabel: document.querySelector("#currencyLabel"),
  searchInput: document.querySelector("#searchInput"),
  toast: document.querySelector("#toast"),
};

const numberFormatter = new Intl.NumberFormat("zh-CN", {
  maximumFractionDigits: 0,
});

function convertCurrency(usdValue) {
  if (state.currency === "CNY") {
    return usdValue * state.exchangeRate;
  }
  return usdValue;
}

function getCurrencySymbol() {
  return state.currency === "CNY" ? "¥" : "$";
}

function getCurrencyLabel() {
  return state.currency === "CNY" ? "人民币 CNY" : "美元 USD";
}

function formatMoney(usdValue) {
  const value = convertCurrency(usdValue);
  return `${getCurrencySymbol()}${numberFormatter.format(Math.round(value))}`;
}

function formatCompactMoney(usdValue) {
  // 始终显示完整数字，不使用英文缩写
  return formatMoney(usdValue);
}

function setCurrency(currency) {
  state.currency = currency;
  saveState();
  if (els.currencyLabel) {
    els.currencyLabel.textContent = getCurrencyLabel();
  }
  if (els.customPriceUnit) {
    els.customPriceUnit.textContent = currency === "CNY" ? "百万人民币" : "百万美元";
  }
  render();
}

function toggleCurrency() {
  setCurrency(state.currency === "USD" ? "CNY" : "USD");
  showToast(`已切换为${state.currency === "CNY" ? "人民币 ¥" : "美元 $"}`);
}

function trim(value) {
  return value.toFixed(value >= 100 ? 0 : value >= 10 ? 1 : 2);
}

function getProduct(id) {
  return state.products.find((item) => item.id === id);
}

function getSpent() {
  return Object.entries(state.cart).reduce((sum, [id, count]) => {
    const item = getProduct(id);
    return item ? sum + item.price * count : sum;
  }, 0);
}

function getRemaining() {
  return Math.max(state.wealth - getSpent(), 0);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return map[char];
  });
}

function getMaxQuantity(item) {
  return Number.isFinite(item.maxQuantity) ? item.maxQuantity : Infinity;
}

function addItem(id, count = 1) {
  const item = getProduct(id);
  if (!item) return;
  const current = state.cart[id] || 0;
  const max = getMaxQuantity(item);
  if (current + count > max) {
    const label = item.uniqueLabel || `限量 ${max} 件`;
    showToast(`${label}，已经买满了。`);
    return;
  }
  const cost = item.price * count;
  if (cost > getRemaining()) {
    showToast("余额不够了，换一个项目或直接点击「花光剩余」。");
    return;
  }
  state.cart[id] = current + count;
  saveState();
  render();
}

function removeItem(id, count = 1) {
  if (!state.cart[id]) return;
  state.cart[id] -= count;
  if (state.cart[id] <= 0) delete state.cart[id];
  saveState();
  render();
}

function setCategory(category) {
  state.category = category;
  saveState();
  document.querySelectorAll(".category-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === category);
  });
  renderProducts();
}

function render() {
  renderStats();
  renderProducts();
  renderReceipt();
}

function renderStats() {
  const spent = getSpent();
  const remaining = getRemaining();
  const rawPercent = state.wealth > 0 ? (spent / state.wealth) * 100 : 0;
  const percent = Math.min(rawPercent, 100);

  els.wealthTotalDisplay.textContent = formatCompactMoney(state.wealth);
  els.wealthTotalDisplay.title = formatMoney(state.wealth);
  els.remainingAmount.textContent = formatCompactMoney(remaining);
  els.remainingAmount.title = formatMoney(remaining);
  els.spentAmount.textContent = formatCompactMoney(spent);
  els.spentAmount.title = formatMoney(spent);
  els.mobileSpent.textContent = formatCompactMoney(spent);
  els.mobileSpent.title = formatMoney(spent);
  els.spentPercent.textContent = `${percent < 0.01 && spent > 0 ? "<0.01" : trim(percent)}%`;
  els.exactRemaining.textContent = formatMoney(remaining);
  els.progressFill.style.width = `${percent}%`;
  els.milestoneText.textContent = getMilestoneText(spent, remaining, rawPercent);
}

function getMilestoneText(spent, remaining, percent) {
  if (spent === 0) return "先拿下一件小东西，看看这个财富池有多深。";
  if (remaining === 0) return "财富池已经花光，账单变成了一份荒诞的收藏清单。";
  if (percent >= 90) return "只剩最后一点预算，任何大项目都可能完成收尾。";
  if (percent >= 75) return "你已经花掉四分之三，账单终于开始压过财富本身。";
  if (percent >= 50) return "已经越过一半，继续买公司资产会更快。";
  if (spent >= 100_000_000_000) return "已花费超过一千亿美元，进度条终于有了存在感。";
  if (spent >= 10_000_000_000) return "百亿美元级别的消费出现了，但剩余数字依旧离谱。";
  if (spent >= 1_000_000_000) return "十亿美元已经消失，现实里这足够改变很多行业。";
  return "账单开始发光了，但距离花光还非常遥远。";
}

function renderProducts() {
  const remaining = getRemaining();
  const query = state.searchQuery.trim().toLowerCase();
  let filtered =
    state.category === "all"
      ? state.products
      : state.products.filter((item) => item.category === state.category);

  if (query) {
    filtered = filtered.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query) ||
        (item.desc && item.desc.toLowerCase().includes(query)),
    );
  }

  els.productGrid.innerHTML = filtered
    .map((item) => {
      const count = state.cart[item.id] || 0;
      const max = getMaxQuantity(item);
      const atMax = count >= max;
      const canBuy = item.price <= remaining && !atMax;
      const safeName = escapeHtml(item.name);
      const limitBadge = Number.isFinite(max)
        ? `<span class="product-limit${max === 1 ? " is-unique" : ""}">${escapeHtml(item.uniqueLabel || `限量 ${max} 件`)}</span>`
        : "";
      return `
        <article class="product-card">
          <div class="product-visual" style="--image-position:${item.imagePosition || "center"}">
            <img src="${item.image}" alt="${safeName}" loading="lazy" />
            <span class="product-price" title="${formatMoney(item.price)}">${formatCompactMoney(item.price)}</span>
            ${limitBadge}
          </div>
          <div class="product-body">
            <span class="product-kicker">${escapeHtml(item.brand)}</span>
            <h3>${safeName}</h3>
            <p>${escapeHtml(item.desc)}</p>
          </div>
          <div class="product-actions">
            <div class="quantity-row" aria-label="${safeName} 数量">
              <button class="qty-btn" type="button" data-action="minus" data-id="${item.id}" ${count ? "" : "disabled"} aria-label="减少">−</button>
              <span class="qty-count">${count}${Number.isFinite(max) ? `/${max}` : ""}</span>
              <button class="qty-btn" type="button" data-action="plus" data-id="${item.id}" ${canBuy ? "" : "disabled"} aria-label="增加">+</button>
            </div>
            <button class="primary-btn buy-btn" type="button" data-action="buy" data-id="${item.id}" ${canBuy ? "" : "disabled"}>${atMax ? "已买满" : "购买"}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderReceipt() {
  const entries = Object.entries(state.cart)
    .map(([id, count]) => ({ item: getProduct(id), count }))
    .filter((entry) => entry.item);
  const total = getSpent();

  els.receiptTotal.textContent = formatCompactMoney(total);
  els.receiptTotal.title = formatMoney(total);
  els.receiptEmpty.style.display = entries.length ? "none" : "grid";
  els.receiptList.innerHTML = entries
    .map(
      ({ item, count }) => `
        <div class="receipt-item">
          <img class="receipt-thumb" src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy" />
          <div>
            <strong>${escapeHtml(item.name)}</strong>
            <span>${formatCompactMoney(item.price)} × ${count}</span>
          </div>
          <div class="receipt-item-total" title="${formatMoney(item.price * count)}">${formatCompactMoney(item.price * count)}</div>
          <button class="remove-btn" type="button" data-remove="${item.id}" aria-label="从账单移除 ${escapeHtml(item.name)}">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      `,
    )
    .join("");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.classList.remove("is-visible");
  }, 2200);
}

function openReceipt() {
  els.receiptPanel.classList.add("is-open");
  els.mobileBackdrop.classList.add("is-visible");
}

function closeReceipt() {
  els.receiptPanel.classList.remove("is-open");
  els.mobileBackdrop.classList.remove("is-visible");
}

function resetCart() {
  state.cart = {};
  saveState();
  render();
  showToast("账单已重置。");
}

function spendRest() {
  const remaining = getRemaining();
  if (remaining <= 0) {
    showToast("已经花光了。");
    return;
  }
  const id = `custom-rest-${Date.now()}`;
  state.products.unshift({
    id,
    name: "清零收尾",
    brand: "自定义结算",
    category: "asset",
    price: remaining,
    desc: "精准花掉剩余财富，让进度条抵达终点。",
    image: "./assets/products/sphere-las-vegas.jpg",
    imagePosition: "center 46%",
  });
  addItem(id);
  openReceipt();
}

function randomBuy() {
  const remaining = getRemaining();
  const affordable = state.products.filter((item) => item.price <= remaining);
  if (!affordable.length) {
    showToast("没有买得起的项目了。");
    return;
  }
  const item = affordable[Math.floor(Math.random() * affordable.length)];
  addItem(item.id);
  showToast(`随机买下：${item.name}`);
}

async function shareSummary() {
  const spent = getSpent();
  const remaining = getRemaining();
  const entries = Object.entries(state.cart)
    .map(([id, count]) => {
      const item = getProduct(id);
      return item ? `${item.name}×${count}` : "";
    })
    .filter(Boolean)
    .slice(0, 6)
    .join("、");
  const text = `我在花光马斯克财富模拟器里花掉了 ${formatMoney(spent)}，还剩 ${formatMoney(remaining)}。账单：${entries || "暂时空空如也"}`;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    showToast("分享文案已复制。");
  } catch {
    showToast(text);
  }
}

document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", () => setCategory(button.dataset.category));
});

els.productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const id = button.dataset.id;
  if (button.dataset.action === "minus") removeItem(id);
  if (button.dataset.action === "plus" || button.dataset.action === "buy") addItem(id);
});

els.receiptList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-remove]");
  if (button) removeItem(button.dataset.remove, state.cart[button.dataset.remove] || 1);
});

els.customForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = els.customName.value.trim();
  let price = Number(els.customPrice.value) * 1_000_000;
  if (state.currency === "CNY") {
    price = price / state.exchangeRate;
  }
  if (!name || !Number.isFinite(price) || price <= 0) return;

  const id = `custom-${state.customIndex++}`;
  state.products.unshift({
    id,
    name,
    brand: "自定义项目",
    category: "asset",
    price,
    desc: "这是你添加的自定义消费项目。",
    image: "./assets/products/villa-leopolda.jpg",
    imagePosition: "center 50%",
  });
  els.customForm.reset();
  saveState();
  setCategory("all");
  showToast("自定义项目已加入商品区。");
});

els.openReceiptBtn.addEventListener("click", openReceipt);
els.closeReceiptBtn.addEventListener("click", closeReceipt);
els.mobileBackdrop.addEventListener("click", closeReceipt);
els.resetBtn.addEventListener("click", resetCart);
els.randomBuyBtn.addEventListener("click", randomBuy);
els.spendRestBtn.addEventListener("click", spendRest);
els.shareBtn.addEventListener("click", shareSummary);
els.currencyToggleBtn.addEventListener("click", toggleCurrency);

if (els.searchInput) {
  els.searchInput.addEventListener("input", (event) => {
    state.searchQuery = event.target.value;
    renderProducts();
  });
}

// 恢复保存的分类选中状态
if (saved.category && saved.category !== "all") {
  setCategory(saved.category);
}

// 恢复保存的货币显示
if (saved.currency && saved.currency !== "USD") {
  setCurrency(saved.currency);
}

render();
