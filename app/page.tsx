import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Hero will be filled by LPBuilder */}
        <div id="hero" className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Headline goes here</h1>
          <p className="text-xl text-zinc-400">Subheadline goes here</p>
        </div>

        <form id="cta-form" className="max-w-md mx-auto space-y-4">
          <input type="email" placeholder="your@email.com" className="w-full px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-lg" />
          <button type="submit" className="w-full bg-white text-black py-4 px-8 rounded-2xl font-semibold text-lg">
            Claim Early Access — $29
          </button>
        </form>

        <p className="text-xs text-zinc-500 mt-8">We respect your inbox. Zero spam ever.</p>
      </div>
    </main>
  );
}
