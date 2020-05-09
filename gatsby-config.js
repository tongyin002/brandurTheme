const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Tailwind`,
    description: `Gatsby starter styled with Tailwind`,
    author: `@taylorbryant`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts/`,
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
        icon: `src/images/tailwind-icon.png`,
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
        commonmark: true,
        footnotes: true,
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              elements: [`h2`, `h3`],
            },
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                linkReference: "hvr-underline-to-center underline-black",
                link: "hvr-underline-to-center underline-black",
                strong: "text-strong font-helvetica font-bold",
                listItem: "text-base leading-outer mb-px10 ml-px40 pl-px5",
                "list[ordered=false]": "my-px25 list-disc",
                "list[ordered=true]": "my-px25 list-decimal",
                "heading[depth=2]":
                  "text-2xl tracking-stight font-helvetica mt-px30 -mb-px10",
                "heading[depth=3]":
                  "text-head3 tracking-stight font-helvetica mt-px30 -mb-px15 font-semibold",
                paragraph: "my-px20 text-base leading-outer text-parag",
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
