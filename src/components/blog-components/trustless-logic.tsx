export const TrustlessLogic = () => {
  return (
    <div class="grid grid-cols-3 gap-2 md:gap-4 my-10 py-8 px-2">
      {/* Seller Identity Verified */}
      <div class="flex flex-col items-center gap-3 text-center">
        <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border-2 border-blue-200 flex-shrink-0">
          <span class="text-lg">🔍</span>
        </div>
        <div>
          <p class="text-[9px] font-bold uppercase tracking-tighter">Identity</p>
          <p class="text-[8px] text-zinc-500">Verified</p>
        </div>
      </div>

      {/* Arrow Transition */}
      <div class="flex flex-col items-center justify-center gap-3 text-center">
        <div class="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
          <span class="text-lg">🔐</span>
        </div>
        <div>
          <p class="text-[9px] font-bold uppercase tracking-tighter italic">Encrypted</p>
          <p class="text-[8px] text-zinc-400">Vault</p>
        </div>
        {/* Decorative arrows */}
        <div class="flex gap-1 text-zinc-300 text-xs absolute -bottom-6 left-1/2 -translate-x-1/2 hidden md:flex">
          <span>→</span>
        </div>
      </div>

      {/* Auto Release */}
      <div class="flex flex-col items-center gap-3 text-center">
        <div class="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center border-2 border-yellow-200 flex-shrink-0">
          <span class="text-lg">⚡</span>
        </div>
        <div>
          <p class="text-[9px] font-bold uppercase tracking-tighter">Auto</p>
          <p class="text-[8px] text-zinc-500">Release</p>
        </div>
      </div>

      {/* Mobile flow explanation */}
      <div class="col-span-3 text-[9px] text-zinc-500 mt-4 bg-zinc-50 p-3 rounded-lg border border-zinc-100">
        <p class="font-semibold text-zinc-700 mb-1">🔄 The Trustless Flow:</p>
        <p>
          Seller uploads credentials → System encrypts & holds them → Buyer pays → Credentials auto-decrypt &
          transfer → System can't intercede or revert. Security through architecture, not trust.
        </p>
      </div>
    </div>
  );
};
