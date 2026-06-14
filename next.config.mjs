/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    return [
      // Temporarily hiding Courses & Notes — reworking, will re-add at same URLs.
      // permanent: false = 307 temporary (no SEO/browser caching of the redirect).
      { source: "/courses",        destination: "/", permanent: false },
      { source: "/courses/:path*", destination: "/", permanent: false },
      { source: "/notes",          destination: "/", permanent: false },
      { source: "/notes/:path*",   destination: "/", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Cross-Origin-Embedder-Policy", value: "unsafe-none" },
          { key: "Cross-Origin-Opener-Policy",   value: "same-origin-allow-popups" },
        ],
      },
    ];
  },
};
export default nextConfig;