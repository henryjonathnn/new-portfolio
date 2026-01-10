import { component$ } from "@builder.io/qwik";

export const ElysiaBenchmarkChart = component$(() => {
  return (
    <section class="w-full bg-[#050505] text-white p-8 md:p-12 rounded-[2rem] border border-zinc-800 my-16 overflow-hidden relative group">
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(#222 1px, transparent 1px); background-size: 24px 24px;"></div>

      <div class="relative z-10 flex flex-col md:flex-row gap-12 items-center">
        
        <div class="w-full md:w-1/3 space-y-12">
          <div class="space-y-2">
            <h2 class="text-7xl font-bold tracking-tighter bg-gradient-to-br from-fuchsia-400 to-purple-600 bg-clip-text text-transparent italic">21x</h2>
            <p class="text-zinc-400 font-medium leading-tight">faster than <br/><span class="text-zinc-200">Express</span></p>
          </div>
          
          <div class="space-y-2">
            <h2 class="text-6xl font-bold tracking-tighter bg-gradient-to-br from-fuchsia-400 to-purple-600 bg-clip-text text-transparent italic">6x</h2>
            <p class="text-zinc-400 font-medium leading-tight">faster than <br/><span class="text-zinc-200">Fastify</span></p>
          </div>
        </div>

        <div class="w-full md:w-2/3 space-y-5">
          
          <div class="space-y-1.5">
            <div class="flex justify-between text-[11px] font-bold uppercase tracking-widest px-1">
              <span class="text-fuchsia-400">Elysia <span class="text-zinc-500 font-normal ml-1">Bun</span></span>
              <span class="text-fuchsia-400">2,454,631 reqs/s</span>
            </div>
            <div class="h-8 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5 shadow-[0_0_20px_rgba(192,38,211,0.2)]">
              <div class="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-fuchsia-400 rounded-full w-[100%] transition-all duration-1000"></div>
            </div>
          </div>

          <div class="space-y-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <div class="flex justify-between text-[11px] font-bold uppercase tracking-widest px-1">
              <span class="text-zinc-300">Gin <span class="text-zinc-500 font-normal ml-1">Go</span></span>
              <span class="text-zinc-400">676,019</span>
            </div>
            <div class="h-8 w-full bg-zinc-900/50 rounded-full overflow-hidden border border-white/5">
              <div class="h-full bg-zinc-700 rounded-full w-[28%]"></div>
            </div>
          </div>

          <div class="space-y-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <div class="flex justify-between text-[11px] font-bold uppercase tracking-widest px-1">
              <span class="text-zinc-300">Spring <span class="text-zinc-500 font-normal ml-1">Java</span></span>
              <span class="text-zinc-400">506,087</span>
            </div>
            <div class="h-8 w-full bg-zinc-900/50 rounded-full overflow-hidden border border-white/5">
              <div class="h-full bg-zinc-700 rounded-full w-[21%]"></div>
            </div>
          </div>

          <div class="space-y-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <div class="flex justify-between text-[11px] font-bold uppercase tracking-widest px-1">
              <span class="text-zinc-300">Fastify <span class="text-zinc-500 font-normal ml-1">Node</span></span>
              <span class="text-zinc-400">415,600</span>
            </div>
            <div class="h-8 w-full bg-zinc-900/50 rounded-full overflow-hidden border border-white/5">
              <div class="h-full bg-zinc-700 rounded-full w-[17%]"></div>
            </div>
          </div>

          <div class="space-y-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <div class="flex justify-between text-[11px] font-bold uppercase tracking-widest px-1">
              <span class="text-zinc-300">Express <span class="text-zinc-500 font-normal ml-1">Node</span></span>
              <span class="text-zinc-400">113,117</span>
            </div>
            <div class="h-8 w-full bg-zinc-900/50 rounded-full overflow-hidden border border-white/5">
              <div class="h-full bg-zinc-700 rounded-full w-[5%]"></div>
            </div>
          </div>

          <p class="pt-6 text-[10px] text-zinc-500 font-medium leading-relaxed italic">
            Measured in requests/second. Result from TechEmpower Benchmark Round 22 (2023-10-17) in PlainText
          </p>
        </div>
      </div>
    </section>
  );
});
