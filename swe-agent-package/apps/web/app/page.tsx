export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Local Baseline</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Solo Unicorn</h1>
        <p className="text-lg text-slate-300">
          Django REST Framework + Next.js + Tailwind + Playwright on Local Docker.
        </p>
        <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 text-sm text-slate-300">
          API Health endpoint: <code>/api/health/</code>
        </div>
      </div>
    </main>
  );
}
