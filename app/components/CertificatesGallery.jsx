"use client";
import React, { useState } from 'react';

// CertificatesGallery.jsx
// A responsive, accessible certificates gallery component for a Next.js + TailwindCSS portfolio.
// - Grid layout with responsive columns
// - Filter by tag, search by title/issuer
// - Click to open a modal (lightbox) with details and download link
// - Keyboard accessible (Esc to close modal)
// - Easy to customize: replace `CERTIFICATES` with your real data

const CERTIFICATES = [
  {
    id: 1,
    title: 'World English Institute (WEI) Certificate',
    issuer: 'Andy Cassidy',
    year: 2022,
    tags: ['English'],
    image: '/cert-2.jpg', // put your images in public/certs/
    file: '/certs/wids-python.pdf', // optional file to download
  },
  {
    id: 2,
    title: 'FEMSTECH Worldwide Certificate',
    issuer: 'Prof. Somaia Zabihi',
    year: 2024,
    tags: ['Laravel', 'PHP'],
    image: '/certi-4.jpg',
    file: '/certs/acku-laravel.pdf',
  },
  {
    id: 3,
    title: 'CISCO Networking Academy',
    issuer: 'CISCO Academy',
    year: 2025,
    tags: ['Networking'],
    image: '/cert.jpg',
    file: '/certs/realstar.pdf',
  },
  {
    id: 4,
    title: 'HP Certifie of completion',
    issuer: 'HP',
    year: 2025,
    tags: ['Data'],
    image: '/cer-HP-1.png',
    file: '/certs/realstar.pdf',
  },
  {
    id: 5,
    title: 'HP Certifie of completion',
    issuer: 'HP',
    year: 2025,
    tags: ['PHP','Data'],
    image: '/cer-HP-2.png',
    file: '/certs/realstar.pdf',
  },
  {
    id: 6,
    title: 'Real Star Educational Society',
    issuer: 'Real Star',
    year: 2020,
    tags: ['Networking'],
    image: '/cert.jpg',
    file: '/certs/realstar.pdf',
  },
  // add more certificates here...
];

function Tag({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm border transition-all mr-2 mb-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 ${
        active
          ? 'bg-indigo-600 text-white border-indigo-600'
          : 'bg-white text-black border-gray-200'
      }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
}

export default function CertificatesGallery({ certificates = CERTIFICATES }) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [selected, setSelected] = useState(null);

  // build unique tag list
  const tags = ['All', ...Array.from(new Set(certificates.flatMap((c) => c.tags)))];

  const filtered = certificates
    .filter((c) => activeTag === 'All' || c.tags.includes(activeTag))
    .filter(
      (c) =>
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.issuer.toLowerCase().includes(query.toLowerCase())
    )
    // show newest first (by year, then id)
    .sort((a, b) => (b.year || 0) - (a.year || 0) || b.id - a.id);

  // keyboard: close modal on Escape
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setSelected(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-28" id='certificates'>
      <header className="mb-6 items-center text-center w-[80%] mx-auto">
        <h2 className="text-4xl font-semibold">Certificates & Training</h2>
        <p className="text-black mt-1 justify-center dark:text-white">Over the past seven years, I have earned multiple prestigious certificates and recognitions from global organizations such as Cisco, WEI, Femstech Worldwide, HP, and Kabul University. These achievements reflect my continuous growth, dedication, and passion for technology and innovation — with more exciting accomplishments to be shared soon.</p>
      </header>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex flex-wrap items-center">
          {tags.map((t) => (
            <Tag
              key={t}
              label={t}
              active={t === activeTag}
              onClick={() => setActiveTag(t)}
            />
          ))}
        </div>

        {/*<div className="flex items-center space-x-3">
          <label htmlFor="search" className="sr-only">
            Search certificates
          </label>
          <input
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or issuer"
            className="w-[220px] md:w-[320px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            onClick={() => {
              setQuery('');
              setActiveTag('All');
            }}
            className="px-3 py-2 text-sm rounded-md border bg-gray-50 hover:bg-gray-100"
          >
            Reset
          </button>
        </div>*/}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c) => (
          <article
            key={c.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelected(c)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' ? setSelected(c) : null)}
            aria-label={`Open certificate ${c.title} from ${c.issuer}`}
          >
            <div className="relative h-60 bg-gray-100 dark:bg-gray-500">
              {/* Use next/image in Next.js projects for optimization if you prefer */}
              <img
                src={c.image}
                alt={`${c.title} - ${c.issuer}`}
                className="object-contain w-full h-full p-4"
              />
            </div>

            <div className="p-4 dark:bg-black">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.issuer} • {c.year}</p>
              <div className="mt-3 flex flex-wrap">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 mr-2 mb-2 rounded-full border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full p-6 text-center text-gray-500">
            No certificates found. Try a different filter or search.
          </div>
        )}
      </div>

      {/* Modal / Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 "
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelected(null)}
            aria-hidden
          />

          <div className="relative max-w-3xl w-full bg-white rounded-lg shadow-xl overflow-hidden dark:bg-black dark:border dark:border-white">
            <div className="flex items-start justify-between p-4 border-b">
              <div>
                <h3 className="text-lg font-semibold">{selected.title}</h3>
                <p className="text-sm text-gray-500 ">{selected.issuer} • {selected.year}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="ml-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64 md:h-auto bg-gray-100 rounded flex items-center justify-center">
                <img src={selected.image} alt={selected.title} className="max-h-[60vh] object-contain" />
              </div>

              <div>
                <p className="text-gray-700 mb-4 dark:text-white">Certificate: <strong>{selected.title}</strong></p>
                <p className="text-gray-600 mb-4 dark:text-white">Issued by <strong>{selected.issuer}</strong> • {selected.year}</p>

                <div className="flex gap-3">
                  {selected.file && (
                    <a
                      href={selected.file}
                      download
                      className="px-4 py-2 rounded-md border bg-gray-600 text-white hover:bg-indigo-700"
                    >
                      Download PDF
                    </a>
                  )}

                  <button
                    onClick={() => setSelected(null)}
                    className="px-4 py-2 rounded-md border bg-gray-50 dark:bg-amber-400 cursor-pointer"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-6 text-sm text-gray-500 dark:text-white">
                  Tip: Keep your original certificates in a safe place and upload high-resolution copies here for verification.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
