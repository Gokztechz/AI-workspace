function AIInfoCard() {
  return (
    <div
     className="
w-44
rounded-[28px]
bg-[#17171B]
text-white
p-6
shadow-[0_30px_80px_rgba(0,0,0,0.25)]
rotate-0
"
    >
      <span className="text-xs uppercase tracking-widest text-zinc-400">
        Artificial Intelligence
      </span>

      <h3 className="mt-3 text-xl font-semibold leading-snug">
        AI that helps
        <br />
        humans create
        <br />
        faster.
      </h3>

      <button
        className="
          mt-6
          rounded-full
          bg-white
          text-black
          px-5
          py-2
          text-sm
          font-medium
        "
      >
        Learn More
      </button>
    </div>
  );
}

export default AIInfoCard;