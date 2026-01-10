import { component$ } from "@builder.io/qwik";

export const BunComparisionBenchmarkChart = component$(() => {
  return (
    <section class="w-full bg-[#050505] text-white p-8 md:p-12 rounded-[2rem] border border-zinc-800 my-16 overflow-hidden relative group">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 32px 32px;"></div>

      <div class="relative z-10">
        <div class="mb-12 space-y-2">
          <h2 class="text-[10px] font-bold text-fuchsia-500 uppercase tracking-[0.4em]">Performance Benchmark</h2>
          <h3 class="text-3xl font-bold tracking-tighter">HTTP Server Comparison</h3>
          <p class="text-zinc-500 text-sm max-w-md">Requests per second (Higher is better) across modern JavaScript runtimes.</p>
        </div>

        <div class="flex flex-col md:flex-row gap-16 items-start">
          
          <div class="w-full md:w-1/4 space-y-10">
            <div class="space-y-1 border-l-2 border-fuchsia-600 pl-6">
              <h4 class="text-4xl font-bold tracking-tighter italic">3.1x</h4>
              <p class="text-[11px] text-zinc-400 font-medium uppercase tracking-widest">Faster than <span class="text-white">Node.js</span></p>
            </div>
            
            <div class="space-y-1 border-l-2 border-zinc-700 pl-6">
              <h4 class="text-4xl font-bold tracking-tighter italic">2.3x</h4>
              <p class="text-[11px] text-zinc-400 font-medium uppercase tracking-widest">Faster than <span class="text-white">Deno</span></p>
            </div>
          </div>

          <div class="w-full md:w-3/4 space-y-8">
            
            <div class="space-y-3">
              <div class="flex justify-between items-end px-1">
                <div class="flex items-center gap-3">
                  <span class="text-lg font-bold tracking-tight">Bun</span>
                  <span class="px-2 py-0.5 bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-[9px] font-bold rounded uppercase tracking-tighter">Winner</span>
                </div>
                <span class="text-fuchsia-400 font-mono font-bold text-lg">59,026 <span class="text-[10px] opacity-50 ml-1">req/s</span></span>
              </div>
              <div class="h-10 w-full bg-zinc-900/80 rounded-xl overflow-hidden border border-white/5 shadow-[0_0_30px_rgba(217,70,239,0.15)]">
                <div class="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-fuchsia-300 rounded-xl w-full transition-all duration-1000 ease-out"></div>
              </div>
            </div>

            <div class="space-y-3 opacity-70 hover:opacity-100 transition-all duration-300">
              <div class="flex justify-between items-end px-1">
                <span class="text-lg font-bold tracking-tight text-zinc-300">Deno</span>
                <span class="text-zinc-400 font-mono font-bold">25,335</span>
              </div>
              <div class="h-10 w-full bg-zinc-900/50 rounded-xl overflow-hidden border border-white/5">
                <div class="h-full bg-zinc-700 rounded-xl w-[43%] transition-all duration-1000"></div>
              </div>
            </div>

            <div class="space-y-3 opacity-70 hover:opacity-100 transition-all duration-300">
              <div class="flex justify-between items-end px-1">
                <span class="text-lg font-bold tracking-tight text-zinc-300">Node.js</span>
                <span class="text-zinc-400 font-mono font-bold">19,039</span>
              </div>
              <div class="h-10 w-full bg-zinc-900/50 rounded-xl overflow-hidden border border-white/5">
                <div class="h-full bg-zinc-800 rounded-xl w-[32%] transition-all duration-1000"></div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row md:items-center justify-between pt-8 gap-4">
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono">
                  <i class="fas fa-microchip text-[8px]"></i> M2 Max
                </div>
                <div class="flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono">
                  <i class="fas fa-memory text-[8px]"></i> 32GB RAM
                </div>
              </div>
              <p class="text-[9px] text-zinc-600 font-medium tracking-wide uppercase italic">
                *Tested using a simple hello-world HTTP server. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
