import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-slate-100 font-sans">
      <Home />

      <section className="min-h-screen flex items-center justify-center p-6 bg-zinc-900 z-30 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            The Journey Continues
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Experience uncompromised performance and breathtaking aesthetics.
            Scroll down to discover more about our premium automotive lineage.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
