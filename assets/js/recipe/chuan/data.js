/* ==========================================
   川菜 · Sichuan
   一菜一格，百菜百味
   ========================================== */
window.RECIPES = window.RECIPES || {};
window.RECIPES.chuan = [
  {
    id: "chuan-gongbaojiding",
    name: "宫保鸡丁",
    image: "assets/img/chuan-gongbaojiding.webp",
    desc: "糊辣荔枝味的经典川菜，鸡丁滑嫩，花生酥脆，甜酸微辣回味无穷。",
    time: "25 分钟",
    difficulty: "中等",
    serves: "2-3 人",
    ingredients: [
      { name: "鸡腿肉", amount: 300, unit: "克" },
      { name: "熟花生米", amount: 80, unit: "克" },
      { name: "大葱", amount: 1, unit: "根" },
      { name: "干辣椒", amount: 10, unit: "克" },
      { name: "花椒", amount: 5, unit: "克" },
      { name: "姜", amount: 10, unit: "克" },
      { name: "蒜", amount: 4, unit: "瓣" }
    ],
    seasonings: [
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "香醋", amount: 2, unit: "汤匙" },
      { name: "白糖", amount: 1.5, unit: "汤匙" },
      { name: "淀粉", amount: 1, unit: "汤匙" },
      { name: "食用油", amount: 2, unit: "汤匙" },
      { name: "盐", amount: 3, unit: "克" }
    ],
    steps: [
      "鸡腿肉去骨切丁，加入盐、料酒、淀粉抓匀，腌制 10 分钟。",
      "调碗汁：将生抽、香醋、白糖、淀粉和少许清水搅拌成宫保汁。",
      "热锅温油下姜、蒜煸香，放入干辣椒段与花椒炒出糊辣香味。",
      "下鸡丁大火滑炒至变色断生，倒入碗汁快速翻炒收浓。",
      "最后放入大葱段与熟花生米，翻匀即可出锅。"
    ],
    tips: "糊辣味的关键在于干辣椒与花椒先低温煸出香味，再大火快炒。"
  },
  {
    id: "chuan-mapodoufu",
    name: "麻婆豆腐",
    image: "assets/img/chuan-mapodoufu.webp",
    desc: "麻辣鲜香烫嫩俱全，豆腐嫩滑，牛肉末香酥，是川菜家常灵魂。",
    time: "20 分钟",
    difficulty: "简单",
    serves: "2 人",
    ingredients: [
      { name: "嫩豆腐", amount: 400, unit: "克" },
      { name: "牛里脊", amount: 80, unit: "克" },
      { name: "葱", amount: 2, unit: "根" },
      { name: "蒜", amount: 3, unit: "瓣" },
      { name: "姜", amount: 10, unit: "克" },
      { name: "淀粉", amount: 1, unit: "汤匙" }
    ],
    seasonings: [
      { name: "郫县豆瓣酱", amount: 1.5, unit: "汤匙" },
      { name: "豆豉", amount: 1, unit: "茶匙" },
      { name: "辣椒面", amount: 1, unit: "茶匙" },
      { name: "花椒粉", amount: 1, unit: "茶匙" },
      { name: "生抽", amount: 1, unit: "汤匙" },
      { name: "食用油", amount: 2, unit: "汤匙" },
      { name: "盐", amount: 3, unit: "克" }
    ],
    steps: [
      "豆腐切方块，入加盐的开水中烫 1 分钟捞出沥干。",
      "牛肉剁末，蒜姜切末。锅中热油下豆瓣酱、豆豉炒出红油。",
      "下牛肉末炒散至酥香，加辣椒面与蒜姜末炒匀。",
      "加适量水烧开，轻放入豆腐，小火煮 3 分钟让其入味。",
      "分两次淋入水淀粉勾芡，收浓汤汁，撒花椒粉与葱花出锅。"
    ],
    tips: "豆腐入锅后不要用铲翻动，用勺背轻推以免破碎。"
  },
  {
    id: "chuan-huiguorou",
    name: "回锅肉",
    image: "assets/img/chuan-huiguorou.webp",
    desc: "肥而不腻，酱香咸鲜微辣，五花二煮一炒，镬气十足的下饭神器。",
    time: "35 分钟",
    difficulty: "中等",
    serves: "2-3 人",
    ingredients: [
      { name: "带皮五花肉", amount: 400, unit: "克" },
      { name: "青蒜苗", amount: 3, unit: "根" },
      { name: "姜", amount: 4, unit: "片" },
      { name: "葱", amount: 2, unit: "段" },
      { name: "郫县豆瓣酱", amount: 1.5, unit: "汤匙" },
      { name: "甜面酱", amount: 1, unit: "茶匙" }
    ],
    seasonings: [
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "生抽", amount: 1, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" },
      { name: "花椒", amount: 10, unit: "粒" },
      { name: "食用油", amount: 1, unit: "汤匙" }
    ],
    steps: [
      "五花肉冷水下锅，加姜片、葱段、料酒煮至八成熟，捞出晾凉。",
      "将肉切成 0.2 厘米左右的薄片，青蒜苗斜切成段。",
      "锅中放少许油烧热，下肉片煸炒至卷曲出油、边缘微焦。",
      "拨开肉片，下郫县豆瓣酱与甜面酱炒出红油，与肉片炒匀。",
      "加生抽、白糖调味，倒入青蒜苗段大火快炒断生即可。"
    ],
    tips: "从冰箱冷藏后的肉更易切成均匀薄片。"
  },
  {
    id: "chuan-shuizhuniu",
    name: "水煮牛肉",
    image: "assets/img/chuan-shuizhuniu.webp",
    desc: "麻辣滚烫，牛肉滑嫩，垫底蔬菜吸满汤汁，川式水煮一绝。",
    time: "30 分钟",
    difficulty: "中等",
    serves: "2-3 人",
    ingredients: [
      { name: "牛里脊", amount: 350, unit: "克" },
      { name: "黄豆芽", amount: 200, unit: "克" },
      { name: "莴笋叶", amount: 100, unit: "克" },
      { name: "淀粉", amount: 2, unit: "汤匙" },
      { name: "蛋清", amount: 1, unit: "个" },
      { name: "蒜", amount: 6, unit: "瓣" },
      { name: "姜", amount: 10, unit: "克" },
      { name: "干辣椒", amount: 15, unit: "克" },
      { name: "花椒", amount: 8, unit: "克" }
    ],
    seasonings: [
      { name: "郫县豆瓣酱", amount: 2, unit: "汤匙" },
      { name: "生抽", amount: 1, unit: "汤匙" },
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "盐", amount: 4, unit: "克" },
      { name: "食用油", amount: 4, unit: "汤匙" }
    ],
    steps: [
      "牛里脊横纹切薄片，加盐、料酒、蛋清、淀粉抓匀上浆。",
      "黄豆芽、莴笋叶焯水垫入大碗底。",
      "炒锅热油下豆瓣酱、姜蒜炒出红油，加开水烧沸成汤底。",
      "将牛肉片逐片下锅，用筷子拨散，煮至变色即熟，连汤倒入碗中。",
      "表面撒蒜末、干辣椒段和花椒，浇上烧热的食用油激出香辣。"
    ],
    tips: "牛肉下锅快速拨散即可，久煮会老；最后热油是灵魂。"
  },
  {
    id: "chuan-yuxiangrousi",
    name: "鱼香肉丝",
    image: "assets/img/chuan-yuxiangrousi.webp",
    desc: "鱼香不见鱼，咸甜酸辣兼具，肉丝嫩滑配爽脆木耳笋丝。",
    time: "25 分钟",
    difficulty: "简单",
    serves: "2-3 人",
    ingredients: [
      { name: "猪里脊", amount: 250, unit: "克" },
      { name: "水发木耳", amount: 50, unit: "克" },
      { name: "冬笋", amount: 80, unit: "克" },
      { name: "胡萝卜", amount: 40, unit: "克" },
      { name: "蒜", amount: 4, unit: "瓣" },
      { name: "葱", amount: 1, unit: "根" },
      { name: "姜", amount: 10, unit: "克" }
    ],
    seasonings: [
      { name: "白糖", amount: 2, unit: "汤匙" },
      { name: "香醋", amount: 2, unit: "汤匙" },
      { name: "生抽", amount: 1, unit: "汤匙" },
      { name: "泡红椒", amount: 2, unit: "汤匙" },
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "淀粉", amount: 2, unit: "汤匙" },
      { name: "食用油", amount: 2, unit: "汤匙" }
    ],
    steps: [
      "里脊切细丝，加料酒、盐、淀粉抓匀腌渍片刻。",
      "木耳、冬笋、胡萝卜切丝，葱姜蒜切末。",
      "调鱼香汁：糖、醋、生抽、淀粉加少量水搅匀。",
      "热锅滑油炒肉丝至变白盛出；余油炒香泡红椒与葱姜蒜末。",
      "下三丝炒匀，回入肉丝，倒入鱼香汁大火收汁即可。"
    ],
    tips: "鱼香汁比例以糖醋为主，突出咸甜酸辣层次。"
  },
  {
    id: "chuan-fuqipaipian",
    name: "夫妻肺片",
    image: "assets/img/chuan-fuqipaipian.webp",
    desc: "红油卤香，麻辣咸鲜，牛杂薄片配香酥花生，川味凉菜代表。",
    time: "45 分钟",
    difficulty: "中等",
    serves: "3-4 人",
    ingredients: [
      { name: "牛腱子", amount: 200, unit: "克" },
      { name: "牛头皮", amount: 150, unit: "克" },
      { name: "牛心", amount: 150, unit: "克" },
      { name: "熟花生米", amount: 40, unit: "克" },
      { name: "芹菜", amount: 50, unit: "克" },
      { name: "香菜", amount: 2, unit: "根" }
    ],
    seasonings: [
      { name: "红油辣椒", amount: 3, unit: "汤匙" },
      { name: "花椒粉", amount: 1, unit: "茶匙" },
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "香油", amount: 1, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" },
      { name: "卤料包", amount: 1, unit: "份" }
    ],
    steps: [
      "牛腱、头皮、牛心焯水去腥，入卤水中卤至入味熟透。",
      "卤好的牛杂捞出晾凉，切成薄片码入盘中。",
      "将红油辣椒、生抽、花椒粉、白糖、香油调成麻辣味汁。",
      "味汁淋在牛肉片上，撒上炸花生、葱丝与芹菜末。",
      "最后点缀香菜段即可上桌。"
    ],
    tips: "牛杂需煮至软糯；味汁咸鲜微麻是其灵魂。"
  },
  {
    id: "chuan-laziji",
    name: "辣子鸡丁",
    image: "assets/img/chuan-laziji.webp",
    desc: "辣椒堆里找鸡丁，外酥里嫩，干香麻辣，下酒绝配。",
    time: "30 分钟",
    difficulty: "中等",
    serves: "2-3 人",
    ingredients: [
      { name: "鸡腿肉", amount: 400, unit: "克" },
      { name: "干辣椒", amount: 60, unit: "克" },
      { name: "花椒", amount: 10, unit: "克" },
      { name: "姜", amount: 10, unit: "克" },
      { name: "蒜", amount: 5, unit: "瓣" },
      { name: "葱", amount: 2, unit: "根" },
      { name: "熟芝麻", amount: 10, unit: "克" }
    ],
    seasonings: [
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "生抽", amount: 1, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" },
      { name: "盐", amount: 3, unit: "克" },
      { name: "淀粉", amount: 2, unit: "汤匙" },
      { name: "食用油", amount: 4, unit: "汤匙" }
    ],
    steps: [
      "鸡腿肉斩小块，加料酒、盐、生抽、淀粉腌 15 分钟。",
      "锅中油烧至六成热，下鸡块炸至金黄酥香捞出。",
      "留底油，下干辣椒段、花椒、姜蒜小火煸香。",
      "倒回鸡块，加白糖大火翻炒，使辣香裹匀。",
      "撒熟芝麻与葱节略炒即成。"
    ],
    tips: "干辣椒剪段后去籽，既能出香又不至于过辣。"
  },
  {
    id: "chuan-suancaiyu",
    name: "酸菜鱼",
    image: "assets/img/chuan-suancaiyu.webp",
    desc: "酸辣开胃，鱼片嫩滑，酸菜爽脆，汤浓味香人人爱。",
    time: "40 分钟",
    difficulty: "中等",
    serves: "3-4 人",
    ingredients: [
      { name: "草鱼", amount: 1500, unit: "克（整条）" },
      { name: "酸菜", amount: 250, unit: "克" },
      { name: "蛋清", amount: 1, unit: "个" },
      { name: "淀粉", amount: 2, unit: "汤匙" },
      { name: "姜", amount: 10, unit: "克" },
      { name: "蒜", amount: 5, unit: "瓣" },
      { name: "泡椒", amount: 4, unit: "个" },
      { name: "葱", amount: 2, unit: "根" }
    ],
    seasonings: [
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "盐", amount: 6, unit: "克" },
      { name: "白胡椒粉", amount: 1, unit: "茶匙" },
      { name: "食用油", amount: 3, unit: "汤匙" },
      { name: "干花椒", amount: 5, unit: "克" }
    ],
    steps: [
      "草鱼取肉片成薄片，加盐、料酒、蛋清、淀粉抓匀上浆。",
      "鱼头鱼骨斩块煎香，加开水熬出奶白鱼汤。",
      "另锅爆香姜蒜与泡椒，下酸菜炒香，倒入鱼汤煮 5 分钟。",
      "捞出酸菜铺碗底，汤中逐片下鱼片煮至变色断开。",
      "连汤倒入碗中，撒葱与干花椒，浇热油激香。"
    ],
    tips: "鱼片厚度均匀、烫煮不宜过久，才能保持滑嫩。"
  },
  {
    id: "chuan-suanrou",
    name: "蒜泥白肉",
    image: "assets/img/chuan-suanrou.webp",
    desc: "肥瘦相间薄片，蒜香浓郁，麻辣鲜香，川式凉菜爽口代表。",
    time: "30 分钟",
    difficulty: "简单",
    serves: "2-3 人",
    ingredients: [
      { name: "带皮五花肉", amount: 400, unit: "克" },
      { name: "大蒜", amount: 6, unit: "瓣" },
      { name: "葱", amount: 2, unit: "段" },
      { name: "姜", amount: 4, unit: "片" },
      { name: "黄瓜", amount: 1, unit: "根" }
    ],
    seasonings: [
      { name: "生抽", amount: 2, unit: "汤匙" },
      { name: "辣椒油", amount: 2, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" },
      { name: "香油", amount: 1, unit: "茶匙" },
      { name: "料酒", amount: 1, unit: "汤匙" }
    ],
    steps: [
      "五花肉冷水下锅，加葱姜料酒煮约 20 分钟至熟透，晾凉。",
      "大蒜捣成蒜泥，加生抽、辣椒油、白糖、香油调成蒜汁。",
      "五花肉切成大而薄的片，黄瓜切薄片垫底。",
      "将肉片整齐码在黄瓜上，浇上蒜泥味汁即可。"
    ],
    tips: "肉煮透后放凉或冷藏，更易切出大片薄片。"
  },
  {
    id: "chuan-shuizhupian",
    name: "水煮肉片",
    image: "assets/img/chuan-shuizhupian.webp",
    desc: "麻辣鲜嫩，肉片滑烫，汤汁浓郁，川菜水煮风范尽显。",
    time: "30 分钟",
    difficulty: "中等",
    serves: "2-3 人",
    ingredients: [
      { name: "猪里脊", amount: 350, unit: "克" },
      { name: "黄豆芽", amount: 150, unit: "克" },
      { name: "生菜", amount: 100, unit: "克" },
      { name: "蛋清", amount: 1, unit: "个" },
      { name: "淀粉", amount: 2, unit: "汤匙" },
      { name: "干辣椒", amount: 12, unit: "克" },
      { name: "花椒", amount: 6, unit: "克" },
      { name: "蒜", amount: 5, unit: "瓣" },
      { name: "姜", amount: 10, unit: "克" }
    ],
    seasonings: [
      { name: "郫县豆瓣酱", amount: 2, unit: "汤匙" },
      { name: "生抽", amount: 1, unit: "汤匙" },
      { name: "料酒", amount: 1, unit: "汤匙" },
      { name: "盐", amount: 4, unit: "克" },
      { name: "食用油", amount: 4, unit: "汤匙" }
    ],
    steps: [
      "里脊切薄片，加盐、料酒、蛋清、淀粉抓匀上浆。",
      "豆瓣与姜蒜入热油炒出红油，加开水煮成红汤。",
      "下黄豆芽、生菜稍烫后捞出垫碗底。",
      "将肉片逐片下入红汤，煮至变色熟透，连汤倒入碗中。",
      "撒蒜末、干辣椒段、花椒，淋热油激香即成。"
    ],
    tips: "肉片要切得薄并逐片下锅拨散，才能嫩而不老。"
  },
  {
    id: "chuan-shuzhuyu",
    name: "水煮鱼",
    image: "assets/img/chuan-shuzhuyu.webp",
    desc: "鱼片嫩滑，麻香浓烈，红汤滚沸，一盆麻辣鲜香慰藉人心。",
    time: "30 分钟",
    difficulty: "中等",
    serves: "3-4 人",
    ingredients: [
      { name: "草鱼", amount: 1, unit: "条（约800克）" },
      { name: "豆芽", amount: 200, unit: "克" },
      { name: "姜", amount: 15, unit: "克" },
      { name: "蒜", amount: 4, unit: "瓣" },
      { name: "葱花", amount: "适量", unit: "" }
    ],
    seasonings: [
      { name: "郫县豆瓣酱", amount: 1.5, unit: "汤匙" },
      { name: "干辣椒", amount: 15, unit: "克" },
      { name: "花椒", amount: 8, unit: "克" },
      { name: "辣椒面", amount: 1, unit: "茶匙" },
      { name: "盐", amount: 4, unit: "克" },
      { name: "淀粉", amount: 1.5, unit: "汤匙" },
      { name: "料酒", amount: 2, unit: "汤匙" },
      { name: "食用油", amount: 300, unit: "毫升" }
    ],
    steps: [
      "草鱼去骨片成薄片，加盐、料酒、淀粉抓匀腌 10 分钟；鱼骨剁块。",
      "豆芽入沸水焯熟捞入盆底。热油下姜蒜、豆瓣酱炒出红油，放鱼骨翻炒。",
      "加水没过鱼骨烧开，转小火下鱼片煮至变色，连汤倒入豆芽盆。",
      "洗净锅，入干辣椒、花椒、辣椒面小火炒香，趁热泼在鱼片上。",
      "撒葱花即食。"
    ],
    tips: "鱼片下锅后勿翻搅，保持小火，鱼片才能完整滑嫩。"
  },
  {
    id: "chuan-koushuiji",
    name: "口水鸡",
    image: "assets/img/chuan-koushuiji.webp",
    desc: "皮黄肉白，红油淋身，麻辣醇厚，鸡肉冰爽滑嫩，唤醒食欲。",
    time: "40 分钟",
    difficulty: "中等",
    serves: "3 人",
    ingredients: [
      { name: "三黄鸡", amount: 1, unit: "只（约1200克）" },
      { name: "葱", amount: 3, unit: "根" },
      { name: "姜", amount: 20, unit: "克" },
      { name: "蒜", amount: 4, unit: "瓣" },
      { name: "熟花生碎", amount: 20, unit: "克" }
    ],
    seasonings: [
      { name: "生抽", amount: 3, unit: "汤匙" },
      { name: "香醋", amount: 1, unit: "汤匙" },
      { name: "辣椒油", amount: 3, unit: "汤匙" },
      { name: "花椒油", amount: 1, unit: "汤匙" },
      { name: "白糖", amount: 1, unit: "茶匙" },
      { name: "香油", amount: 1, unit: "茶匙" },
      { name: "盐", amount: 5, unit: "克" }
    ],
    steps: [
      "整鸡入沸水中小火浸煮约 20 分钟至断生，捞出立刻入冰水浸凉，斩块摆盘。",
      "蒜姜剁末，与生抽、香醋、辣椒油、花椒油、白糖、香油、盐调成红油味汁。",
      "将味汁均匀淋在鸡块上，撒花生碎、白芝麻与葱花。"
    ],
    tips: "鸡肉煮后立即入冰水，可使鸡皮紧致爽滑、肉质弹嫩。"
  }
];