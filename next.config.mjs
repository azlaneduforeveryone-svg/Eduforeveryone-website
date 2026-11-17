/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pub-8abd18b123d249afbfea45177c4d7d94.r2.dev" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/quran/color-reader",
        destination: "/quran",
        permanent: true,
      },
      // Old general maths course (replaced by Cambridge O Level and IGCSE Maths).
      // "differentiation" is not here: it is a topic in the new course.
      {
        source: "/courses/mathematics/:old(counting-numbers|addition-subtraction|multiplication-division|fractions-basics|decimals-percentages|ratios-proportions|algebra-basics|geometry-basics|area-perimeter|statistics-basics|linear-equations|quadratic-equations|trigonometry-basics|probability|integration|statistics-advanced|financial-math|linear-algebra|number-theory)",
        destination: "/courses/mathematics",
        permanent: true,
      },
      {
        source: "/courses/mathematics/fractions-basics/:path*",
        destination: "/courses/mathematics",
        permanent: true,
      },
      {
        source: "/courses/science-biology-cells",
        destination: "/courses/biology",
        permanent: true,
      },
      {
        source: "/courses/science-biology-cells/:path*",
        destination: "/courses/biology",
        permanent: true,
      },
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