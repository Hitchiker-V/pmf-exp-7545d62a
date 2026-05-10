'use client';

import { useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = (document.getElementById('email') as HTMLInputElement).value.trim();
    if (!emailInput) return;

    setStatus('loading');

    try {
      const response = await fetch('https://xfkziloyyotnnxkypgmb.supabase.co/functions/v1/capture-signal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhma3ppbG95eW90bm54a3lwZ21iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MzE5MTAsImV4cCI6MjA5NDAwNzkxMH0.0uiWtaFifM20h5-sSV4dtpf7ID_uH_W_lSe9rPqjnEA'
        },
        body: JSON.stringify({
          experiment_id: "7545d62a",
          signal_type: "email_signup",
          value: emailInput,
          raw_data: { source: "landing_page" }
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* HERO */}
      <div className="max-w-4xl mx-auto text-center pt-20 px-6">
        <h1 className="text-6xl font-bold tracking-tighter mb-6">Unlock Career Potential</h1>
        <p className="text-2xl text-zinc-400 mb-10">Discover how you stack up against industry peers and get a personalized roadmap to advancement</p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input 
            type="email" 
            id="email" 
            placeholder="your@email.com" 
            required 
            className="w-full px-8 py-5 bg-zinc-900 border border-zinc-700 rounded-3xl text-xl focus:outline-none focus:border-white"
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-white hover:bg-zinc-100 text-black py-5 px-8 rounded-3xl font-semibold text-2xl transition disabled:opacity-70"
          >
            {status === 'loading' ? 'Submitting...' : 
             status === 'success' ? '✅ Success!' : 
             'Get Instant Benchmarks'}
          </button>
        </form>
        <p className="text-xs text-zinc-500 mt-6">One-time payment, no subscription required</p>
      </div>

      {/* PROBLEM SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Are You Unsure About Your Career Progress?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-zinc-900 p-8 rounded-3xl">Not knowing how your skills compare to industry standards</div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">Lacking a clear plan for career advancement</div>
          
          <div className="bg-zinc-900 p-8 rounded-3xl">Feeling stuck in your current role without a clear path forward</div>
          
        </div>
      </div>

      {/* SOLUTION SECTION */}
      <div className="bg-zinc-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Introducing Career Benchmark</h2>
          <p className="text-xl text-zinc-400 text-center max-w-2xl mx-auto mb-12">Our 5-minute assessment provides instant benchmarks and personalized recommendations to help you close career gaps and achieve your goals.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-zinc-950 p-8 rounded-3xl">Instant career benchmarks</div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">Personalized roadmap to advancement</div>
            
            <div className="bg-zinc-950 p-8 rounded-3xl">Actionable recommendations for growth</div>
            
          </div>
        </div>
      </div>

      <div className="text-center py-12 text-zinc-500 text-sm">
        Powered by PMF Autopilot • Experiment #7545d62a
      </div>
    </main>
  );
}