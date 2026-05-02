/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        // Allow PDFs to be embedded
        source: "/quran-pdfs/:path*",
        headers: [
          { key: "Content-Type",                    value: "application/pdf" },
          { key: "X-Frame-Options",                 value: "SAMEORIGIN" },
          { key: "Content-Disposition",             value: "inline" },
          { key: "Cache-Control",                   value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // General security headers for all pages
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",          value: "nosniff" },
          { key: "Referrer-Policy",                 value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
