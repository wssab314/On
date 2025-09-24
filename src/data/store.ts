export type ProductColor = {
  name: string;
  value: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: "road" | "trail" | "training" | "apparel";
  gender: "men" | "women" | "unisex";
  price: number;
  hero: {
    background: string;
    accent: string;
  };
  description: string;
  benefits: string[];
  tech: string[];
  colors: ProductColor[];
  sizes: string[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "cloudboom-echo-4",
    name: "云爆竞速鞋 4 代",
    tagline: "Helion™ HF 泡棉加速你的比赛日",
    category: "road",
    gender: "men",
    price: 219.95,
    hero: {
      background: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
      accent: "bg-emerald-400",
    },
    description:
      "轻若无物的竞速鞋，搭载全掌 Speedboard® 与灵敏的 Helion™ HF 超临界中底，带来爆发式推进力。",
    benefits: [
      "双层网布鞋面让高强度节奏跑依旧保持透气。",
      "全新摇椅几何结构令步态转换更顺滑、更省力。",
      "磨砂后跟稳定包裹双足，杜绝压力点。",
    ],
    tech: [
      "鞋底高度：35 毫米 / 27 毫米",
      "前后落差：8 毫米",
      "重量：215 克",
      "再生材质占比：72%",
    ],
    colors: [
      { name: "冰川 / 黑色", value: "#d8e4f7", description: "On 标志性竞速配色" },
      { name: "炽焰 / 石英", value: "#fbb6b6", description: "限量马拉松配色" },
      { name: "象牙 / 烈焰", value: "#f7e0c3", description: "对比色外底吸睛亮点" },
    ],
    sizes: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    specs: [
      { label: "支撑", value: "中性" },
      { label: "缓震", value: "响应灵敏" },
      { label: "适用距离", value: "5 公里 - 马拉松" },
    ],
  },
  {
    slug: "cloudsurfer-trail",
    name: "云浪越野鞋",
    tagline: "复杂地形下依旧全天候舒适",
    category: "trail",
    gender: "unisex",
    price: 199.95,
    hero: {
      background: "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800",
      accent: "bg-sky-400",
    },
    description:
      "CloudTec Phase® 缓震、Missiongrip™ 大底与耐磨防撕裂鞋面协同发力，应对多变山径依旧安心稳健。",
    benefits: [
      "CloudTec Phase® 气垫依序压缩，助你下坡更顺滑。",
      "Missiongrip™ 橡胶搭配全新齿纹，抓地力全面升级。",
      "打孔鞋舌与鞋头快速排水，湿地探险也能保持干爽。",
    ],
    tech: [
      "鞋底高度：32 毫米 / 26 毫米",
      "前后落差：6 毫米",
      "重量：275 克",
      "防水性能：DWR 涂层",
    ],
    colors: [
      { name: "深钴蓝 / 苔藓绿", value: "#284c63", description: "日常越野必备配色" },
      { name: "赭石 / 火焰橙", value: "#e0743c", description: "薄暮路段高可视度" },
    ],
    sizes: ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
    specs: [
      { label: "支撑", value: "中性" },
      { label: "抓地力", value: "Missiongrip™" },
      { label: "最佳场景", value: "越野超长距离" },
    ],
  },
  {
    slug: "cloudmonster-2",
    name: "云怪日常缓震鞋 2 代",
    tagline: "每天跑量也能享受满级缓震",
    category: "road",
    gender: "unisex",
    price: 189.95,
    hero: {
      background: "bg-gradient-to-br from-slate-700 via-slate-900 to-black",
      accent: "bg-amber-400",
    },
    description:
      "大体积 CloudTec® 气垫注入 Helion™ 超级泡棉，层层缓冲同时保留 On 标志性的干脆推进感。",
    benefits: [
      "加大的 CloudTec® 模块联动 Speedboard®，脚感自然顺畅。",
      "双密度泡棉鞋垫升级，踩上瞬间柔软贴合。",
      "鞋面与中底 35% 部件采用再生材质。",
    ],
    tech: [
      "鞋底高度：34 毫米 / 28 毫米",
      "前后落差：6 毫米",
      "重量：295 克",
      "脚感：柔软又充满弹性",
    ],
    colors: [
      { name: "月蚀黑", value: "#111827", description: "经典 On 视觉" },
      { name: "霜蓝 / 冰川", value: "#dbe7f5", description: "清新季节限定" },
      { name: "柠檬黄 / 草地绿", value: "#d3e97a", description: "会员专属亮彩" },
    ],
    sizes: ["EU 36", "EU 37", "EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    specs: [
      { label: "支撑", value: "中性" },
      { label: "脚感", value: "顶级缓震" },
      { label: "适用场景", value: "日常训练" },
    ],
  },
  {
    slug: "performance-tee",
    name: "极速竞赛轻盈上衣",
    tagline: "超轻竞赛日外层",
    category: "apparel",
    gender: "unisex",
    price: 79.95,
    hero: {
      background: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
      accent: "bg-white/70",
    },
    description:
      "粘合无缝工艺、定向通风与快干面料协同，让你专注冲线。",
    benefits: [
      "羽量级日本针织面料数秒即干。",
      "粘合无缝设计远离长距离摩擦。",
      "反光细节守护清晨与夜跑安全。",
    ],
    tech: [
      "版型：修身",
      "材质：100% 再生聚酯纤维",
      "洗护：冷水洗涤，自然晾干",
      "重量：62 克",
    ],
    colors: [
      { name: "夜蓝 / 月白", value: "#0f172a", description: "Team On 限定" },
      { name: "浅岸灰", value: "#e5e7eb", description: "训练日常必备" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: [
      { label: "使用场景", value: "比赛日" },
      { label: "触感", value: "如第二层肌肤" },
      { label: "技术亮点", value: "极速快干" },
    ],
  },
  {
    slug: "weather-jacket",
    name: "轻量风雨外套",
    tagline: "轻盈守护，应对多变天气",
    category: "training",
    gender: "unisex",
    price: 259.95,
    hero: {
      background: "bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900",
      accent: "bg-blue-400",
    },
    description:
      "采用高科技日本面料，透气与防护兼备，还可收纳于自身口袋随身携带。",
    benefits: [
      "极简拼接减轻重量与体积。",
      "360° 通风设计，高强度训练也能保持空气循环。",
      "防水拉链配合挡风片，有效阻隔寒风。",
    ],
    tech: [
      "面料：聚酰胺 / 氨纶",
      "防水性能：DWR 处理",
      "收纳方式：可塞入胸前口袋",
      "重量：180 克",
    ],
    colors: [
      { name: "海军蓝 / 黑色", value: "#111827", description: "核心常备" },
      { name: "薄雾灰 / 冰川蓝", value: "#d1d5db", description: "季节限定" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: [
      { label: "使用场景", value: "通勤与热身" },
      { label: "防护", value: "御风防雨" },
      { label: "收纳", value: "自带收纳设计" },
    ],
  },
];

export type Story = {
  id: string;
  title: string;
  excerpt: string;
  badge: string;
};

export const stories: Story[] = [
  {
    id: "on-run-club",
    title: "On Run Club 间歇训练营",
    excerpt: "每周三在苏黎世、伦敦与柏林，由教练带队完成高强度速度课。",
    badge: "社群",
  },
  {
    id: "athlete-lab",
    title: "走进运动员实验室",
    excerpt: "跟随铁三名将古斯塔夫·伊登试穿云爆原型的幕后花絮。",
    badge: "故事",
  },
  {
    id: "climate-program",
    title: "2025 气候行动计划",
    excerpt: "了解我们如何投入循环纺织，并降低运输排放。",
    badge: "影响力",
  },
];

export type EventHighlight = {
  id: string;
  title: string;
  location: string;
  date: string;
  description: string;
};

export const events: EventHighlight[] = [
  {
    id: "moonlight-5k",
    title: "月光 5K 夜跑",
    location: "苏黎世旗舰店",
    date: "5 月 12 日 20:00",
    description: "与 On 团队一起环苏黎世湖黄昏热身，现场提供试穿鞋款。",
  },
  {
    id: "summit-series",
    title: "峰顶系列活动",
    location: "因特拉肯",
    date: "5 月 25 日 08:30",
    description: "与我们的运动员团队一同越野，现场分享高山分层穿搭技巧。",
  },
];

export type FAQ = {
  question: string;
  answer: string;
  category: "orders" | "returns" | "membership" | "stores";
};

export const faqs: FAQ[] = [
  {
    question: "特快配送需要多久？",
    answer: "17:00 前下单当日发货，瑞士境内 1-2 个工作日送达。",
    category: "orders",
  },
  {
    question: "跑过的鞋还能退吗？",
    answer: "可以。Try-On 体验计划提供 30 天户外试穿期，可在 On App 或任意门店免费发起退货。",
    category: "returns",
  },
  {
    question: "加入 On Run Club 有哪些福利？",
    answer: "尊享限量新品、职业运动员训练计划、赛事号码优先权，以及 On 活动抢先预约。",
    category: "membership",
  },
  {
    question: "哪里可以现场测量尺码？",
    answer: "欢迎到苏黎世、伦敦、东京等 On 旗舰店，或在门店地图中寻找就近合作零售商。",
    category: "stores",
  },
];
