function AnalyticsCard() {
  return (
    <div
   className="
w-36
rounded-2xl
bg-white
shadow-[0_25px_60px_rgba(0,0,0,0.15)]
p-5
-rotate-5
"
    >
      <p className="text-xs text-gray-400">
        Intelligence
      </p>

      <h3 className="mt-1 text-sm font-semibold text-gray-800">
        Every Decision
      </h3>

      <div className="mt-6 flex items-end gap-2 h-16">

        <div className="w-3 rounded bg-sky-200 h-5"></div>

        <div className="w-3 rounded bg-sky-300 h-8"></div>

        <div className="w-3 rounded bg-sky-400 h-6"></div>

        <div className="w-3 rounded bg-sky-500 h-12"></div>

      </div>

    </div>
  );
}

export default AnalyticsCard;