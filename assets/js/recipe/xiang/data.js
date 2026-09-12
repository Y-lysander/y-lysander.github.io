/* ==========================================
   湘菜 · Hunan
   香辣咸鲜，味重油亮
   ========================================== */
window.RECIPES = window.RECIPES || {};
window.RECIPES.xiang = [
  {
    
    name: "剁椒鱼头",
    id: "xiang-duojiaoyutou",
    image: "assets/img/xiang-duojiaoyutou.webp",
    desc: "红艳剁椒铺面，鱼肉鲜辣嫩滑，湘菜的门面担当。",
    time: "40 分钟",
    difficulty: "中等",
    serves: "3-4 人",
    ingredients: [
      { name: "胖头鱼头", amount: 1200, unit: "克（半个）" },
      { name: "剁椒", amount: 100, unit: "克" },
      { name: "姜", amount: 15, unit: "克" },
      { name: "蒜", amount: 5, unit: "瓣" },
      { name: "葱花", amount: 10, unit: "克" }
    ],
    seasonings: [
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "料酒", amount: 2, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" },
      { name: "蒸鱼豉油", amount: 1, unit: "汤匙" },
      { name: "食用油", amount: 3, unit: "汤匙" }
    ],
    steps: [
      "鱼头处理干净，抹料酒盐略腌，铺姜片垫底。",
      "剁椒与蒜末、生抽、糖拌匀铺满鱼头。",
      "开水锅大火蒸约 15 分钟至熟。",
      "去姜片，淋蒸鱼豉油，撒葱花。",
      "烧热油浇在剁椒上激出香气即成。"
    ],
    tips: "剁椒足味、大火足汽，鱼肉鲜辣嫩滑。"
  },
  {
    
    name: "农家小炒肉",
    id: "xiang-nongjiax",
    image: "assets/img/xiang-nongjiax.webp",
    desc: "五花肉焦香，青椒微辣，最解馋的湘式家常菜。",
    time: "20 分钟",
    difficulty: "简单",
    serves: "2-3 人",
    ingredients: [
      { name: "五花肉", amount: 350, unit: "克" },
      { name: "青尖椒", amount: 150, unit: "克" },
      { name: "蒜", amount: 4, unit: "瓣" },
      { name: "姜", amount: 8, unit: "克" }
    ],
    seasonings: [
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "老抽", amount: 0.5, unit: "汤匙" },
      { name: "豆豉", amount: 1, unit: "茶匙" },
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "食用油", amount: 1, unit: "汤匙" }
    ],
    steps: [
      "五花肉切薄片，青尖椒切圈。",
      "锅热下辣椒干煸至表面起虎皮，盛出。",
      "原锅下五花肉煸炒至微黄出油。",
      "加蒜姜与豆豉爆香，烹料酒。",
      "回锅辣椒，加生抽老抽快炒入味出锅。"
    ],
    tips: "肉要煸出焦香，辣椒干煸出虎皮才够味。"
  },
  {
    
    name: "毛氏红烧肉",
    id: "xiang-maoshihongshaorou",
    image: "assets/img/xiang-maoshihongshaorou.webp",
    desc: "红亮油润，肥而不腻，以色泽红润著称的湘味红烧肉。",
    time: "120 分钟",
    difficulty: "中等",
    serves: "3-4 人",
    ingredients: [
      { name: "带皮五花肉", amount: 700, unit: "克" },
      { name: "干辣椒", amount: 5, unit: "克" },
      { name: "姜", amount: 15, unit: "克" },
      { name: "葱", amount: 2, unit: "根" }
    ],
    seasonings: [
      { name: "白糖", amount: 50, unit: "克" },
      { name: "生抽", amount: 3, unit: "汤匙" },
      { name: "料酒", amount: 3, unit: "汤匙" },
      { name: "盐", amount: 3, unit: "克" }
    ],
    steps: [
      "五花肉切块，冷水下锅焯去血沫，刮净皮面。",
      "热锅化糖炒出糖色，下肉块裹匀着色。",
      "下干辣椒与姜葱爆香，烹料酒。",
      "加生抽与开水没过，小火慢烧约 90 分钟。",
      "大火收汁至红亮油润，加盐调味。"
    ],
    tips: "糖色火候恰当，慢烧到酥而不腻才正宗。"
  },
  {
    
    name: "东安子鸡",
    id: "xiang-dongan",
    image: "assets/img/xiang-dongan.webp",
    desc: "鸡肉酸辣鲜嫩，醋香醇厚，湘菜开胃派名菜。",
    time: "40 分钟",
    difficulty: "中等",
    serves: "3-4 人",
    ingredients: [
      { name: "嫩仔鸡", amount: 800, unit: "克" },
      { name: "干辣椒", amount: 8, unit: "克" },
      { name: "姜", amount: 15, unit: "克" },
      { name: "葱", amount: 2, unit: "根" }
    ],
    seasonings: [
      { name: "醋", amount: 40, unit: "毫升" },
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "料酒", amount: 2, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" },
      { name: "淀粉", amount: 1, unit: "汤匙" }
    ],
    steps: [
      "仔鸡处理干净剁块，加盐料酒腌渍。",
      "热油爆香姜丝与干辣椒。",
      "下鸡块翻炒至断生。",
      "烹醋与生抽，加少量水烧至入味。",
      "勾薄芡，撒葱段出锅。"
    ],
    tips: "酸辣清爽，鸡肉快速翻炒保嫩滑。"
  },
  {
    
    name: "腊味合蒸",
    id: "xiang-lawuhs",
    image: "assets/img/xiang-lawuhs.webp",
    desc: "腊肉腊肠腊鱼同蒸，腊香交融，湘味十足的下饭菜。",
    time: "50 分钟",
    difficulty: "简单",
    serves: "3-4 人",
    ingredients: [
      { name: "腊肉", amount: 150, unit: "克" },
      { name: "腊肠", amount: 150, unit: "克" },
      { name: "腊鱼", amount: 150, unit: "克" },
      { name: "干辣椒", amount: 4, unit: "克" },
      { name: "姜", amount: 10, unit: "克" }
    ],
    seasonings: [
      { name: "生抽", amount: 1, unit: "汤匙" },
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" }
    ],
    steps: [
      "腊味冲洗干净，腊肉切片、腊肠切段、腊鱼切块。",
      "腊味码入盘中，摆上姜丝与干辣椒。",
      "淋生抽、料酒与少许糖。",
      "开水锅大火蒸约 30 分钟。",
      "腊香交融，出锅撒葱花即可。"
    ],
    tips: "腊味叠摆同蒸，火候足让腊香相互渗透。"
  },
  {
    
    name: "麻辣子鸡",
    id: "xiang-maluozi",
    image: "assets/img/xiang-maluozi.webp",
    desc: "鸡丁干香，麻辣入味，湘味小炒的经典代表。",
    time: "30 分钟",
    difficulty: "中等",
    serves: "2-3 人",
    ingredients: [
      { name: "鸡腿肉", amount: 400, unit: "克" },
      { name: "干辣椒", amount: 20, unit: "克" },
      { name: "花椒", amount: 5, unit: "克" },
      { name: "蒜", amount: 4, unit: "瓣" },
      { name: "青蒜", amount: 20, unit: "克" }
    ],
    seasonings: [
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "料酒", amount: 2, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" },
      { name: "淀粉", amount: 1, unit: "汤匙" }
    ],
    steps: [
      "鸡腿肉切丁，加盐料酒淀粉抓匀腌渍。",
      "热锅滑油，鸡丁滑至变色盛出。",
      "下干辣椒与花椒煸出麻辣香。",
      "回锅鸡丁，加蒜与生抽、糖炒匀。",
      "大火快炒至干香，撒青蒜段出锅。"
    ],
    tips: "辣椒花椒先煸香，鸡丁小火回香才干辣入味。"
  },
  {
    
    name: "干锅手撕包菜",
    id: "xiang-ganlashou",
    image: "assets/img/xiang-ganlashou.webp",
    desc: "包菜爽脆，干香微辣，饭店点单率极高的素菜。",
    time: "20 分钟",
    difficulty: "简单",
    serves: "2-3 人",
    ingredients: [
      { name: "包菜", amount: 400, unit: "克" },
      { name: "五花肉片", amount: 80, unit: "克" },
      { name: "干辣椒", amount: 6, unit: "克" },
      { name: "蒜", amount: 4, unit: "瓣" }
    ],
    seasonings: [
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "老抽", amount: 0.5, unit: "汤匙" },
      { name: "陈醋", amount: 1, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" },
      { name: "食用油", amount: 2, unit: "汤匙" }
    ],
    steps: [
      "包菜用手撕成片，洗净沥干。",
      "热锅下五花肉片煸至出油微焦。",
      "下蒜片与干辣椒炒香。",
      "倒入包菜大火爆炒至断生。",
      "加生抽老抽醋糖，快炒裹匀即可。"
    ],
    tips: "旺火爆炒保持爽脆，干香入味不水塌。"
  },
  {
    
    name: "辣椒炒肉",
    id: "xiang-lajiaoji",
    image: "assets/img/xiang-lajiaoji.webp",
    desc: "螺丝椒鲜辣，肉片焦香，湖南人刻进骨子里的味道。",
    time: "20 分钟",
    difficulty: "简单",
    serves: "2-3 人",
    ingredients: [
      { name: "猪前腿肉", amount: 300, unit: "克" },
      { name: "螺丝椒", amount: 150, unit: "克" },
      { name: "蒜", amount: 4, unit: "瓣" },
      { name: "姜", amount: 8, unit: "克" }
    ],
    seasonings: [
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "老抽", amount: 0.5, unit: "汤匙" },
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" },
      { name: "食用油", amount: 2, unit: "汤匙" }
    ],
    steps: [
      "前腿肉切丝，辣椒切滚刀块。",
      "热锅下辣椒干煸至起虎皮，盛出。",
      "原锅下肉丝煸炒至变色出油。",
      "加蒜姜爆香，烹料酒。",
      "回锅辣椒，加生抽老抽糖快炒出锅。"
    ],
    tips: "辣椒干煸出虎皮，肉与椒同炒才够香辣。"
  },
  {
    
    name: "椒盐小河虾",
    id: "xiang-jiaoyufuyu",
    image: "assets/img/xiang-jiaoyufuyu.webp",
    desc: "小河虾炸至酥脆，椒香咸鲜，下酒佐饭皆宜。",
    time: "20 分钟",
    difficulty: "简单",
    serves: "2-3 人",
    ingredients: [
      { name: "小河虾", amount: 300, unit: "克" },
      { name: "蒜", amount: 4, unit: "瓣" },
      { name: "干辣椒", amount: 3, unit: "克" },
      { name: "葱", amount: 1, unit: "根" }
    ],
    seasonings: [
      { name: "椒盐", amount: 3, unit: "克" },
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "食用油", amount: 400, unit: "毫升" }
    ],
    steps: [
      "小河虾剪须洗净，加料酒略腌沥干。",
      "油温六成热，下虾炸至金黄酥脆沥出。",
      "锅留底油，爆香蒜末与干辣椒。",
      "回锅河虾，撒椒盐颠匀。",
      "撒葱花出锅，外壳酥脆。"
    ],
    tips: "炸到外壳酥脆，椒盐趁热裹匀。"
  },
  {
    
    name: "豆豉蒸排骨",
    id: "xiang-zhixian",
    image: "assets/img/xiang-zhixian.webp",
    desc: "排骨嫩滑，豉香鲜辣，湘味蒸菜的浓香代表。",
    time: "40 分钟",
    difficulty: "简单",
    serves: "2-3 人",
    ingredients: [
      { name: "猪肋排", amount: 400, unit: "克" },
      { name: "豆豉", amount: 20, unit: "克" },
      { name: "干辣椒", amount: 4, unit: "克" },
      { name: "蒜", amount: 4, unit: "瓣" },
      { name: "葱花", amount: 10, unit: "克" }
    ],
    seasonings: [
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "蚝油", amount: 1, unit: "汤匙" },
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "淀粉", amount: 1, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" }
    ],
    steps: [
      "肋排剁段焯水，沥干。",
      "豆豉、蒜、干辣椒剁碎，与生抽蚝油糖调匀。",
      "排骨用豉汁与淀粉抓匀腌渍。",
      "铺盘，开水锅大火蒸约 18 分钟。",
      "出锅撒葱花即可。"
    ],
    tips: "淀粉锁汁，大火足汽蒸得排骨嫩滑豉香。"
  },
  {
    id: "xiang-xiaochaohuangniurou",
    name: "小炒黄牛肉",
    image: "assets/img/xiang-xiaochaohuangniurou.webp",
    desc: "湘味火气十足，牛肉嫩滑，小米辣鲜爽，咸香下饭。",
    time: "25 分钟",
    difficulty: "中等",
    serves: "2-3 人",
    ingredients: [
      { name: "黄牛肉", amount: 300, unit: "克" },
      { name: "小米椒", amount: 5, unit: "个" },
      { name: "青尖椒", amount: 3, unit: "个" },
      { name: "芹菜", amount: 50, unit: "克" },
      { name: "蒜", amount: 4, unit: "瓣" },
      { name: "姜", amount: 10, unit: "克" },
      { name: "香菜", amount: "适量", unit: "" }
    ],
    seasonings: [
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "蚝油", amount: 1, unit: "汤匙" },
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "盐", amount: 2, unit: "克" },
      { name: "淀粉", amount: 1, unit: "茶匙" },
      { name: "食用油", amount: 2, unit: "汤匙" }
    ],
    steps: [
      "牛肉逆纹切薄片，加料酒、生抽、淀粉抓匀腌 10 分钟。",
      "小米椒、青尖椒斜切圈，蒜姜切末，芹菜切段。",
      "热锅宽油滑牛肉至变色盛出。",
      "爆香蒜姜与辣椒，下芹菜炒香，回牛肉，加生抽、蚝油、盐大火快炒，撒香菜出锅。"
    ],
    tips: "牛肉滑炒要快，锁住汁水；辣椒辣度可按口味增减。"
  },
  {
    id: "xiang-kouweixia",
    name: "口味虾",
    image: "assets/img/xiang-kouweixia.webp",
    desc: "小龙虾香辣过瘾，汤汁浓烈，越吮越上瘾的夜宵霸主。",
    time: "45 分钟",
    difficulty: "中等",
    serves: "3-4 人",
    ingredients: [
      { name: "小龙虾", amount: 1000, unit: "克" },
      { name: "干辣椒", amount: 20, unit: "克" },
      { name: "蒜", amount: 6, unit: "瓣" },
      { name: "姜", amount: 20, unit: "克" },
      { name: "葱", amount: 3, unit: "根" },
      { name: "紫苏", amount: "适量", unit: "" }
    ],
    seasonings: [
      { name: "郫县豆瓣酱", amount: 2, unit: "汤匙" },
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "料酒", amount: 2, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "汤匙" },
      { name: "蚝油", amount: 1, unit: "汤匙" },
      { name: "食用油", amount: 300, unit: "毫升" },
      { name: "啤酒", amount: 300, unit: "毫升" }
    ],
    steps: [
      "小龙虾刷洗干净，剪须爪；蒜姜切末，葱切段，干辣椒剪段。",
      "热宽油爆香蒜姜葱与辣椒，下豆瓣酱炒出红油。",
      "下小龙虾大火翻炒至变红，淋料酒、生抽、蚝油、白糖。",
      "倒入啤酒焖煮 15 分钟，收浓汁，撒紫苏出锅。"
    ],
    tips: "啤酒焖煮可去腥增香，最后收汁至浓稠挂壳更入味。"
  }
];