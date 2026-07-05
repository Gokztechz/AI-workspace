function RevenueCard() {
  return (
    <div
      className="
w-32
rounded-2xl
bg-white
shadow-[0_25px_60px_rgba(0,0,0,0.15)]
p-5
-rotate-6
"
    >
      <p className="text-xs text-gray-400">
        Revenue
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-900">
        $4,900
      </h2>

      <div className="mt-4 space-y-2">

        <div className="h-2 rounded-full bg-sky-200 w-full"></div>

        <div className="h-2 rounded-full bg-sky-300 w-4/5"></div>

        <div className="h-2 rounded-full bg-sky-400 w-3/5"></div>

      </div>

    </div>
  );
}

export default RevenueCard;