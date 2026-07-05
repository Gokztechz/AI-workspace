function ProfileCard() {
  return (
    <div
     className="
w-36
rounded-2xl
bg-white
shadow-[0_25px_60px_rgba(0,0,0,0.15)]
p-5
rotate-3
"
    >
      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-sky-300"></div>

        <div>
          <h4 className="text-sm font-semibold text-gray-800">
            Sarah Lee
          </h4>

          <p className="text-xs text-gray-400">
            Product Designer
          </p>
        </div>

      </div>

      <p className="mt-4 text-sm text-gray-500 leading-6">
        AI helped us reduce design time by 45%.
      </p>
    </div>
  );
}

export default ProfileCard;