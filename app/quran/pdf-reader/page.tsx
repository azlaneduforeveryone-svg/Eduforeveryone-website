import dynamic from "next/dynamic";

const QuranPDFViewer = dynamic(
  () => import("./QuranPDFViewer"),
  { ssr: false, loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
    </div>
  )}
);

export default function Page() {
  return <QuranPDFViewer type="15line" />;
}