export const FeeComparisonChart = () => {
  return (
    <div class="my-10 p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
      <h4 class="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 text-center">
        Platform Fee Comparison
      </h4>
      <div class="space-y-4">
        {/* Traditional Middleman */}
        <div class="space-y-1">
          <div class="flex justify-between text-[10px] font-mono uppercase">
            <span>Traditional Middleman</span>
            <span class="text-red-500 font-bold">15% Fee</span>
          </div>
          <div class="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
            <div
              class="h-full bg-red-400 w-[100%]"
              style={{ animation: "none" }}
            ></div>
          </div>
        </div>

        {/* Alternative Services (10%) */}
        <div class="space-y-1">
          <div class="flex justify-between text-[10px] font-mono uppercase">
            <span>Other Platform Services</span>
            <span class="text-orange-500 font-bold">10% Fee</span>
          </div>
          <div class="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
            <div class="h-full bg-orange-400 w-[67%]"></div>
          </div>
        </div>

        {/* Middleplays */}
        <div class="space-y-1">
          <div class="flex justify-between text-[10px] font-mono uppercase">
            <span>Middleplays (3% + Imburse)</span>
            <span class="text-emerald-500 font-bold italic underline">5.67% Effective</span>
          </div>
          <div class="h-4 w-full bg-zinc-200 rounded-full overflow-hidden border border-emerald-100">
            <div
              class="h-full bg-emerald-500 w-[37%]"
              style={{
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            ></div>
          </div>
        </div>
      </div>
      <p class="text-[10px] text-center text-zinc-400 mt-6 italic">
        💰 Sellers save up to 65% on transaction costs compared to traditional middlemen.
      </p>
    </div>
  );
};
