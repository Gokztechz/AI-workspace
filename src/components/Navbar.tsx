function Navbar() {
  return (
    <nav className="max-w-[1320px] mx-auto flex items-center justify-between pt-8 px-10">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
          <div className="w-3 h-3 bg-sky-700 rotate-45"></div>
        </div>

        <h1 className="text-white text-2xl font-semibold">
          Aeline
        </h1>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-10 uppercase text-xs tracking-[0.25em] text-white">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About Us</a>
        <a href="#">More Links</a>
      </div>

      {/* CTA */}
      <button
        className="
          bg-lime-300
          text-black
          rounded-full
          px-7
          py-3
          font-semibold
          text-sm
          shadow-lg
          hover:scale-105
          transition-all
          duration-300
        "
      >
        Buy Template
      </button>

    </nav>
  );
}

export default Navbar;