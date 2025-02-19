import { rollupTypescript } from "../../scripts/rollup";

export default [
  ...rollupTypescript("node/index", {
    resolve: true,
    external: ["@vuepress/plugin-git", "chalk", "http", "ora", "vite"],
    dtsExternal: ["http"],
  }),
  ...rollupTypescript("client/index", {
    resolve: true,
    external: [
      "@vuepress/client",
      "@vuepress/plugin-theme-data/lib/client",
      "chalk",
      "ora",
      "vue",
      "vue-router",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
    copy: [["client/styles", "client"]],
  }),
  ...rollupTypescript("client/noopModule", {
    external: ["vue"],
  }),
];
