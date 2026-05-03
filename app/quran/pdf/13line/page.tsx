import dynamic from "next/dynamic";

const QuranPDFViewer = dynamic(
  () => import("../QuranPDFViewer"),
  { ssr: false, loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500">Loading PDF Viewer...</p>
      </div>
    </div>
  )}
);

export default function Page() {
  return <QuranPDFViewer type="13line" />;
}