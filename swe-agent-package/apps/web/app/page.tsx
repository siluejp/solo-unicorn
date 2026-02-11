const FALLBACK_COUNT = "-";
const DEFAULT_API_BASE_URL = "http://127.0.0.1:8000";

const getApiBaseUrl = () => {
  return process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE_URL;
};

const incrementTopAccess = async (): Promise<number | null> => {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/top-access/`, {
      method: "POST",
      cache: "no-store"
    });
    if (!response.ok) {
      return null;
    }

    const data: { count?: unknown } = await response.json();
    return typeof data.count === "number" ? data.count : null;
  } catch {
    return null;
  }
};

export default async function Home() {
  const accessCount = await incrementTopAccess();

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
        <div className="rounded-xl border border-cyan-800 bg-cyan-950/30 p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">Top Access Count</p>
          <p className="mt-2 text-3xl font-semibold text-cyan-100" data-testid="top-access-count">
            {accessCount ?? FALLBACK_COUNT}
          </p>
        </div>
      </div>
    </main>
  );
}
