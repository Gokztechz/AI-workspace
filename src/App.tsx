import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FloatingCards from "./components/FloatingCards";
import CloudLayer from "./components/CloudLayer";

function App() {
  return (
    <div className="bg-white min-h-screen p-3">
      <div
  className="
    relative
    h-[84vh]
    rounded-[32px]
    bg-gradient-to-b
    from-sky-700
    via-sky-500
    to-cyan-400
    overflow-hidden
  "
>
        <Navbar />

<HeroSection />

{/* Atmosphere Glow */}
<div
  className="
    absolute
    left-1/2
    bottom-20
    -translate-x-1/2
    w-[850px]
    h-[260px]
    rounded-full
    bg-white/20
    blur-[170px]
    pointer-events-none
  "
/>

<CloudLayer />

<FloatingCards />
      </div>
    </div>
  );
}

export default App;