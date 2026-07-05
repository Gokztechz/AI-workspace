function MobileCard() {
  return (
    <div
    className="
w-28
rounded-2xl
bg-white
shadow-[0_25px_60px_rgba(0,0,0,0.15)]
p-4
rotate-6
"
    >
      <div className="flex justify-between text-[10px] text-gray-400">
        <span>Users</span>
        <span>Today</span>
      </div>

      <h2 className="mt-5 text-3xl font-bold text-gray-900">
        520k+
      </h2>

      <p className="mt-2 text-xs text-gray-500">
        Active users
      </p>

      <div className="mt-5 h-2 rounded-full bg-sky-100">
        <div className="h-2 w-4/5 rounded-full bg-sky-500"></div>
      </div>
    </div>
  );
}

export default MobileCard;