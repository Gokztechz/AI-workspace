function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center mt-14">

     <h1
  className="
    w-full
    max-w-6xl
    text-center
    text-[88px]
    font-medium
    leading-none
    tracking-tight
  "
>
  <span className="block text-white">
    Building the future with
  </span>

 <span className="block text-white/80">
  AI and strategy
</span>
</h1>

      <p className="mt-6 max-w-2xl text-white/75 text-lg">
        We help organizations unlock growth and efficiency
        through data-driven consulting and intelligent automation.
      </p>

  <div className="relative z-50 mt-8 flex items-center gap-4">

  <button className="px-9 py-4 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition">
    View Demo
  </button>

  <button className="px-9 py-4 rounded-full bg-lime-300 text-black font-semibold hover:scale-105 transition">
    Get Started →
  </button>

</div>

    </section>
  );
}

export default HeroSection;