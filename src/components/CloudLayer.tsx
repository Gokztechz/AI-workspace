import cloud1 from "../assets/cloud1.png";

function CloudLayer() {
  return (
    <>
      {/* Left Cloud */}
      <img
        src={cloud1}
        alt=""
        className="
          absolute
          left-[-120px]
          bottom-10
          w-[420px]
          opacity-70
          pointer-events-none
          select-none
        "
      />

      {/* Center Cloud */}
      <img
        src={cloud1}
        alt=""
        className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-2
          w-[520px]
          opacity-55
          pointer-events-none
          select-none
        "
      />

      {/* Right Cloud */}
      <img
        src={cloud1}
        alt=""
        className="
          absolute
          right-[-140px]
          bottom-14
          w-[400px]
          opacity-65
          pointer-events-none
          select-none
        "
      />
    </>
  );
}

export default CloudLayer;