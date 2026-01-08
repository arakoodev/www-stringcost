import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "StringCost",
  tagline: "SAP for AI Agents.",
  favicon: "/img/favicon.jpg",


// Set the production url of your site here
url: "https://www.stringcost.com",

// Set the /<baseUrl>/ pathname under which your site is served
// For GitHub pages deployment, it is often '/<projectName>/'
//baseUrl: "/docusaurus-www/",
baseUrl: "/",

  organizationName: "stringcost", // Usually your GitHub org/user name.
  projectName: "docusaurus-www", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
		  remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          // Remove or change this URL to customize the "edit this page" link.
         // editUrl: 
            //"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Remove or change this URL to customize the "edit this page" link.
          // editUrl: 
           // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/important/privacy",
            from: ["/privacy"],
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: "/img/og.png",
    metadata: [
    // 1) Standard meta description
    {
      content: 'SAP for AI Agents.',
    },
    // 2) Open Graph description (used by Telegram, Facebook, LinkedIn…)
    {
      property: 'og:description',
      content: 'SAP for AI Agents.',
    },
    {
      property: 'og:site_name',
      content: 'StringCost',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:updated_time',
      content: '1704720000', // Example timestamp, updated automatically by some platforms or ignored
    },
    // 3) Twitter Card description
    {
      name: 'twitter:description',
      content: 'SAP for AI Agents.',
    },
    // (you can still leave twitter:card or override it to “summary_large_image”)
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    // Extra OG tags for WhatsApp/compatibility
    {
      itemprop: 'image',
      content: 'https://www.stringcost.com/img/og.png',
    },
    {
      property: 'og:image:secure_url',
      content: 'https://www.stringcost.com/img/og.png',
    },
    {
      property: 'og:image:type',
      content: 'image/png',
    },
    {
      property: 'og:image:width',
      content: '1200',
    },
    {
      property: 'og:image:height',
      content: '630',
    },
  ],
    navbar: {
      title: "",
      logo: {
        alt: "StringCost",
        src: "/img/stringcost-logo.png",
      },
      items: [
        {
          position: "left",
          label: "Github",
          to: "https://github.com/stringcost/stringcost",
        },
        { to: "https://x.com/stringcost", label: "Twitter", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
