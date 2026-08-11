"use client";

import { useState } from "react";

export default function PdfDuaViewer() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      setPdfUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <span className="text-5xl mb-4 inline-block">📄</span>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload or View Custom Duas PDF</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Select or drop your custom PDF document of Quranic Duas & Azkar to view, read, and memorize directly on your website.
        </p>
      </div>

      {/* Upload Zone */}
      <div className="max-w-xl mx-auto mb-8">
        <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-teal-200 hover:border-teal-400 bg-teal-50/30 hover:bg-teal-50 rounded-2xl cursor-pointer transition-all">
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
            <svg className="w-10 h-10 mb-3 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mb-1 text-sm font-semibold text-gray-700">
              <span className="text-teal-600 font-bold">Click to upload your Duas PDF</span> or drag and drop
            </p>
            <p className="text-xs text-gray-400">PDF documents up to 50MB</p>
          </div>
          <input type="file" accept="application/pdf" className="hidden" onChange={handleFileUpload} />
        </label>
      </div>

      {/* PDF Previewer */}
      {pdfUrl ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-teal-50 border border-teal-200 rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📑</span>
              <div>
                <p className="font-bold text-gray-900 text-sm">{pdfFile?.name}</p>
                <p className="text-xs text-gray-500">{((pdfFile?.size || 0) / (1024 * 1024)).toFixed(2)} MB</p>
              </div>
            </div>
            <button
              onClick={() => { setPdfFile(null); setPdfUrl(null); }}
              className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl text-xs font-semibold transition-all"
            >
              Remove PDF
            </button>
          </div>

          <div className="w-full h-[650px] border border-gray-200 rounded-2xl overflow-hidden bg-gray-100 shadow-inner">
            <iframe src={pdfUrl} className="w-full h-full border-0" title="PDF Document Viewer" />
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
          <p className="text-xs text-gray-400 font-medium">
            💡 Tip: You can also place any PDF file directly into your website files, and it will render automatically.
          </p>
        </div>
      )}
    </div>
  );
}
