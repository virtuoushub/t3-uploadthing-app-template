/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  /**
   * If you're using the `/pages` directory in Next, you have to disable the `esmExternals` flag:
   * 
   * @see https://docs.uploadthing.com/nextjs/pagedir
   */
  experimental: {
    esmExternals: false,
  },
};
export default config;
