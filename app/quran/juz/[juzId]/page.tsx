import JuzPage from "./JuzPage";

interface Props { params: { juzId: string } }

export default function Page({ params }: Props) {
  const id = parseInt(params.juzId);
  if (isNaN(id) || id < 1 || id > 30) return (
    <div className="text-center py-20">
      <p className="text-xl font-bold text-gray-900 mb-2">Invalid Juz number</p>
      <a href="/quran" className="text-teal-600 hover:underline">← Back to Quran</a>
    </div>
  );
  return <JuzPage juzId={id} />;
}

export function generateStaticParams() {
  return Array.from({ length: 30 }, (_, i) => ({ juzId: String(i + 1) }));
}
