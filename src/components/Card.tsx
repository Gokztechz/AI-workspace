function AnalyticsCard() {
  return (
    <div
      className="
      w-56
      rounded-2xl
      bg-white
      shadow-2xl
      p-5
      rotate-[-8deg]
      "
    >
      <p className="text-xs text-gray-400">
        Intelligence
      </p>

      <h3 className="mt-2 text-lg font-semibold text-gray-800">
        Every Decision
      </h3>

      <div className="mt-6 flex items-end gap-2 h-20">

        <div className="w-4 h-8 rounded bg-sky-200"></div>

        <div className="w-4 h-12 rounded bg-sky-300"></div>

        <div className="w-4 h-10 rounded bg-sky-400"></div>

        <div className="w-4 h-16 rounded bg-sky-500"></div>

        <div className="w-4 h-14 rounded bg-sky-600"></div>

      </div>

    </div>
  );
}

export default AnalyticsCard;