export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0A0A0A] flex items-center justify-center z-[100]">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#E8500A] to-[#C44008] flex items-center justify-center">
            <span className="text-white font-black text-2xl">GI</span>
          </div>
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-2xl bg-[#E8500A]/30 animate-ping" />
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#E8500A] to-[#FF6B2B] rounded-full animate-loading-bar" />
        </div>

        <p className="text-white/40 text-sm font-medium">جاري التحميل...</p>
      </div>
    </div>
  );
}
