/**
 * Zman Greens JO — Herbarium Dispatch design system.
 * All image URLs and catalogue entries are deliberately centralised here so
 * owner-approved product media and data can replace temporary references safely.
 */

export const brand = {
  name: "Zman Greens JO",
  arabicName: "زمن للنباتات الخضراء",
  instagram: "@zmanstore",
  phoneDisplay: "0781950968",
  whatsappUrl: "https://wa.me/962781950968",
  logoUrl: "/manus-storage/zman-logo-with-name_49b6b544.svg",
  rosetteUrl: "/manus-storage/zman-rosette-primary_8218f77d.svg",
};

export type AssetStatus = "temporary-reference" | "owner-approved";

export type Occasion = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  status: AssetStatus;
  detail: string;
};

export const visuals = {
  hero: "/manus-storage/zman-hero-favor-editorial_e6f91fee.jpg",
  graduation: "/manus-storage/zman-graduation-favor-placeholder_9aeb83f2.jpg",
  customization: "/manus-storage/zman-customization-detail-placeholder_2b34f1d5.jpg",
  giftBox: "/manus-storage/zman-gift-box-detail-placeholder_fba4efaa.jpg",
  texture: "/manus-storage/zman-herbarium-texture_89d55319.jpg",
  olive: "/manus-storage/zman-olive-favor-reference_7a24b568.jpg",
  candleCeramic: "/manus-storage/zman-candle-ceramic-reference_8f772014.jpg",
  candleConcrete: "/manus-storage/zman-candle-concrete-box-reference_d37ecb41.jpg",
  plantedArrangement: "/manus-storage/zman-planted-arrangement-wooden-reference_e7ea8b1d.jpg",
  plantedArrangementDetail: "/manus-storage/zman-planted-arrangement-detail-reference_0f4fcb06.jpg",
};

export type GiftFamily = {
  id: "succulent" | "olive" | "planter" | "candle";
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  status: AssetStatus;
  availability: "current" | "future";
};

export const giftFamilies: GiftFamily[] = [
  { id: "succulent", title: "عصاريات صغيرة", eyebrow: "الفئة الأساسية", description: "توزيعات نباتية صغيرة تُنسّق حول المناسبة والتخصيص.", image: visuals.hero, status: "temporary-reference", availability: "current" },
  { id: "olive", title: "شتلات زيتون", eyebrow: "جذور وأصالة", description: "فئة نباتية ظاهرة في منشورات Zman، مناسبة للهدايا ذات المعنى المتجذّر.", image: visuals.olive, status: "temporary-reference", availability: "current" },
  { id: "planter", title: "تنسيقات مزروعة", eyebrow: "قطعة واحدة فريدة", description: "تنسيق حي متعدد العناصر داخل حاوية مزروعة؛ تفاصيله وصورته النهائية تُراجعان معك.", image: visuals.plantedArrangementDetail, status: "temporary-reference", availability: "current" },
  { id: "candle", title: "شموع طبيعية", eyebrow: "قريبًا", description: "فئة مستقبلية قيد التحضير؛ لا تُعرض كمنتج متاح قبل اعتماد تفاصيلها الفعلية.", image: visuals.candleCeramic, status: "temporary-reference", availability: "future" },
];

export const occasions: Occasion[] = [
  {
    id: "graduation",
    title: "التخرج",
    eyebrow: "ذكرى تكبر مع الأيام",
    description: "توزيعات صغيرة بلمسة خاصة تليق بلحظة الإنجاز.",
    image: visuals.graduation,
    status: "temporary-reference",
    detail: "نبدأ من فكرتك وننسق التفاصيل معك قبل التأكيد.",
  },
  {
    id: "baby",
    title: "استقبال مولود",
    eyebrow: "تفاصيل تليق بالفرحة",
    description: "تنسيق نباتي رقيق يترك أثرًا بعد انتهاء المناسبة.",
    image: visuals.giftBox,
    status: "temporary-reference",
    detail: "أضيفي ملاحظتك أو فكرتك، وفريق زمن يرجع لك بالتنسيق المناسب.",
  },
  {
    id: "henna",
    title: "حنّة ومناسبات خاصة",
    eyebrow: "لكل مناسبة طابعها",
    description: "هدايا نباتية صغيرة تُبنى حول ألوان وذوق مناسبتك.",
    image: visuals.customization,
    status: "temporary-reference",
    detail: "لا نعتمد تفاصيل أو كمية أو سعرًا إلا بعد التواصل المباشر.",
  },
];

export const orderSteps = [
  {
    number: "01",
    title: "اختاري المناسبة",
    text: "تخرج، بيبي، حنّة أو هدية؛ ابدئي بالسياق الذي تريدينه.",
  },
  {
    number: "02",
    title: "اكتبي التفاصيل",
    text: "الكمية، الاسم أو العبارة، وأي فكرة خاصة تريدينها.",
  },
  {
    number: "03",
    title: "نسّقي عبر واتساب",
    text: "يراجع فريق زمن الفكرة والتفاصيل المتاحة قبل أي تأكيد.",
  },
];

export const careNotes = [
  "العصاريات تحب الضوء الهادئ ولا تحتاج ريًا يوميًا.",
  "اسألي فريق زمن عن العناية المناسبة عند استلام توزيعاتك.",
  "تفاصيل النبات والتغليف تُراجع معك قبل تثبيت الطلب.",
];

export const temporaryAssetNotice =
  "هذه صور مرجعية مؤقتة لتوضيح الأسلوب. سيتم استبدالها بصور المنتجات المعتمدة قبل الإطلاق التجاري.";
