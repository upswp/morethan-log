const CONFIG = {
  // profile setting (required)
  profile: {
    name: "samuel.park",
    image: "https://github.com/upswp/algo/assets/70404643/dfccb341-727f-4a95-841d-f130bdfe48d0", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "스타트업에서 백엔드 개발자로 일하는 여정기를 다뤄봅니다.",
    email: "tkddnsos@gmail.com",
    linkedin: "sangwoo-park-097975199",
    github: "upswp",
    instagram: "upsw.p",
  },
  projects: [
    {
      name: `THXSTORE`,
      href: "https://github.com/upswp/THXSTORE",
    },
  ],
  // blog setting (required)
  blog: {
    title: "기록을 통한 고찰",
    description: "개발 성장기에 대한 기록입니다.",
    theme: "auto"
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "G-CJDQQFMSSV",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification=nXdfs9y4HmngzQC3T5x3iWotbW8BlYbtLZJ44ic4Jqk",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
