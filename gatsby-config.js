const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `tyin's site`,
    description: `Personal website by tyin`,
    author: `@tyin`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/contents/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.teal["400"],
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `md`],
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              elements: [`h2`, `h3`],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: { sh: "bash", js: "javascript", ts: "typescript" },
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                linkReference: "hvr-underline-to-center underline-black",
                link: "hvr-underline-to-center underline-black",
                strong: "text-strong font-helvetica font-bold",
                "heading[depth=2]":
                  "text-2xl tracking-stight font-helvetica mt-px30 -mb-px10",
                "heading[depth=3]":
                  "text-head3 tracking-stight font-helvetica mt-px30 -mb-px15 font-semibold",
                paragraph:
                  "my-px20 text-base leading-outer text-parag md:text-mdtext md:leading-mdtext",
                footnoteReference: "hvr-underline-to-center underline-black",
                listItem: "text-base leading-outer mb-px10 ml-px40 pl-px5",
                "list[ordered=false]": "my-px25 list-disc",
                "list[ordered=true]": "my-px25 list-decimal",
                blockquote:
                  "border-l-8 font-helvetica text-gray-300 italic ml-px15 pl-px15 my-px30",
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 550,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-figure-caption`,
            options: {
              figureClassName: "my-px40 overflow-visible max-w-full relative",
              imageClassName: "overflow-auto",
              captionClassName:
                "left-0 text-center top-0 w-auto text-hook italic leading-title pt-px12 lg:absolute lg:top-0 lg:left-npx120 lg:w-px100 lg:text-right",
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
