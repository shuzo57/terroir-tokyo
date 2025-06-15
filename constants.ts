
import { NavLink, MissionItem, WineItem, FounderInfo, /* TerroirRegion, */ BusinessActivityItem } from './types'; // TerroirRegion commented out

export const SITE_TITLE = "TERROIR TOKYO";
export const TAGLINE = "日本のワインを世界へ。";

export const NAV_LINKS: NavLink[] = [
  { href: '#hero', label: 'Home' },
  { href: '#mission', label: 'Mission' },
  { href: '#business', label: 'Business' },
  { href: '#founder', label: 'Founder' }, // Re-added
  // { href: '#terroir', label: 'Terroir & Wines' }, // Removed
  { href: '#contact', label: 'Contact' },
];

export const MISSION_ITEMS_DATA: MissionItem[] = [
  {
    id: 'mission1',
    englishTitle: 'Our Mission',
    title: '日本のテロワールを映す',
    description: '土壌、気候、そして造り手の哲学。その土地ならではの個性を最大限に引き出したワインを厳選します。一口飲めば、日本の美しい風景が目に浮かぶような体験をお届けします。',
    imageUrl: 'https://picsum.photos/seed/missionterroir/600/400',
  },
  {
    id: 'mission2',
    englishTitle: 'Our Vision',
    title: '職人技の継承と革新',
    description: '伝統的な醸造技術を尊重しつつ、常に新しい可能性を追求する生産者を支援します。品質への妥協なきこだわりと、未来を見据えたサステナブルな取り組みを重視しています。',
    imageUrl: 'https://picsum.photos/seed/missioncraft/600/400',
  },
  {
    id: 'mission3',
    englishTitle: 'Our Values',
    title: '世界への架け橋となる',
    description: 'まだ知られざる日本のワインの魅力を、情熱をもって世界中の皆様へご紹介します。ワインを通じて、日本の文化や多様性、そして生産者の想いを繋いでいきます。',
    imageUrl: 'https://picsum.photos/seed/missionbridge/600/400',
  },
];

export const WHY_JAPANESE_WINE_INFO = {
  title: "なぜ今、日本のワインなのか？",
  text: [
    "日本のワインは、その繊細な味わいと食事との相性の良さで、世界中から注目を集めています。",
    "四季折々の豊かな自然環境と、日本ならではの丁寧なものづくりの精神が育んだ、ユニークな「テロワール」。",
    "私たちは、そんな日本のワインが持つ無限の可能性を信じ、その素晴らしさを世界に発信していきます。"
  ].join("\n"),
  imageUrl: 'https://picsum.photos/seed/japanwineconcept/800/600', 
};

export const BUSINESS_ACTIVITIES_DATA: BusinessActivityItem[] = [
  {
    id: 'biz1',
    title: '日本ワインの海外輸出・卸販売',
    description: '国内ワイナリーから仕入れたボトルを、レストラン／酒販店／ECプラットフォームなど世界各地の業務流通先へ供給。温度管理・通関手続きまで一気通貫で対応。',
    imageUrl: 'https://picsum.photos/seed/wineexport/800/600',
    imagePosition: 'right',
  },
  {
    id: 'biz2',
    title: '海外向けブランドPR・イベント企画',
    description: '海外都市での試飲会、ポップアップバー、ソムリエ向けマスタークラスを主催。SNS・デジタル広告運用と合わせ、日本ワインの認知拡大とファンコミュニティ形成を担う。',
    imageUrl: 'https://picsum.photos/seed/wineevent/800/600',
    imagePosition: 'left',
  },
  {
    id: 'biz3',
    title: 'ワイナリー輸出コンサルティング／OEM開発支援',
    description: '輸出規制・ラベル表示基準のアドバイス、現地市場リサーチ、プライベートブランド（OEM）商品企画までサポート。小規模生産者の海外進出を後押しする。',
    imageUrl: 'https://picsum.photos/seed/wineconsulting/800/600',
    imagePosition: 'right',
  },
];


// export const FEATURED_WINES_DATA: WineItem[] = [...]; // Removed

// FOUNDER_INFO_DATA is now used again.
export const FOUNDER_INFO_DATA: FounderInfo = {
  name: "〇〇 △△", 
  title: "創業者 / 代表",
  portraitUrl: 'https://picsum.photos/seed/founderportrait/400/400?grayscale', 
  bio: [
    "東京大学経済学部卒業後、外資系コンサルティングファームにて国内外の企業戦略立案に従事。",
    "ワインへの情熱からフランスへ渡り、ブルゴーニュ大学にてワイン醸造・テイスティングを学ぶ。ワイナリーでの実務経験も積む。",
    "帰国後、日本のワインのポテンシャルに魅了され、その価値を世界に広めるべく、2025年「TERROIR TOKYO」を設立。"
  ],
  story: "幼い頃から食文化に強い関心を持ち、大学時代に訪れた日本の地方ワイナリーでその土地ならではのワイン造りに感銘を受けました。グローバルなビジネス経験とワインへの深い知識を掛け合わせ、日本のテロワールが詰まった一本を世界中の人々に届けたい。そんな想いからTERROIR TOKYOは生まれました。一杯のワインが、日本と世界を繋ぐ架け橋となることを願っています。",
  values: [
    "テロワールの尊重: 土地の個性を最大限に活かしたワインの選定。",
    "サステナビリティ: 環境と社会に配慮した持続可能なワイン造りの支援。",
    "日本文化の発信: ワインを通じて日本の美意識や精神性を伝える。",
    "信頼と透明性: 生産者と消費者の双方に対する誠実なコミュニケーション。"
  ],
  sns: {
    instagram: "https://instagram.com/terroirtokyo_placeholder",
    twitter: "https://twitter.com/terroirtokyo_placeholder",
    linkedin: "https://linkedin.com/company/terroirtokyo_placeholder",
  }
};

// export const TERROIR_WINES_DATA: WineItem[] = [...]; // Removed
// export const JAPAN_TERROIR_REGIONS: TerroirRegion[] = [...]; // Removed


export const COMPANY_NAME = "TERROIR TOKYO 株式会社";
export const COMPANY_ADDRESS = "〒123-4567 東京都千代田区丸の内1-2-3 TERROIR TOKYOビル 5F";
export const CONTACT_EMAIL = "info@terroirtokyo.example.com";
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_UNIQUE_ID_HERE"; // IMPORTANT: Replace with your actual Formspree endpoint ID
export const PRIVACY_POLICY_URL = "/privacy-policy-placeholder"; 

export const SOCIAL_LINKS = {
  instagram: FOUNDER_INFO_DATA.sns.instagram || "#",
  twitter: FOUNDER_INFO_DATA.sns.twitter || "#",
  linkedin: FOUNDER_INFO_DATA.sns.linkedin || "#",
};