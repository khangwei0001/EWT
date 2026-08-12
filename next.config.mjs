/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — no server, no API routes. Satisfies the brief's
  // "no backend, CMS, authentication, payment flow or admin system in V1".
  output: 'export',

  // next/image's optimisation API needs a running Next.js server, which a
  // static export does not have. See docs/12-technical-requirements.md §3.
  images: { unoptimized: true },

  // docs/04 §3 fixes the convention as no trailing slash. Next then emits
  // out/about.html, which Cloudflare Pages serves at /about and redirects
  // /about/ to — so the canonical tag, the sitemap and the served URL all agree.
  trailingSlash: false,

  reactStrictMode: true,
};

export default nextConfig;
