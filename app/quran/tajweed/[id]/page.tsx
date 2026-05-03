"use client";
import TajweedQuranReader from "./TajweedQuranReader";
export default function Page({ params }: { params: { id: string } }) {
  return <TajweedQuranReader surahId={parseInt(params.id)} />;
}