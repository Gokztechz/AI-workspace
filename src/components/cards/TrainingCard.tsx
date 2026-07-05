function TrainingCard() {
  return (
    <div
    className="
w-32
h-32
rounded-[28px]
bg-sky-500/60
backdrop-blur-md
text-white
p-5
rotate-2
shadow-[0_20px_60px_rgba(255,255,255,0.08)]
"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
        +
      </div>

      <h3 className="mt-6 text-white text-xl font-semibold">
        Data
      </h3>

      <p className="text-white/80 text-sm">
        Training
      </p>
    </div>
  );
}

export default TrainingCard;