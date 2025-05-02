import { useEffect, useRef } from "react";

function App() {
  // Horizontal Scrolling
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-[#FFFFEE]">
      {/* TITLE */}
      <h1 className="text-7xl text-[#000022] font-bold mt-16 mb-16">MY HISTORICAL JOURNEY</h1>

      {/* HORIZONTAL SCROLL */}
      <div ref={scrollRef} className="flex flex-row items-center bg-[#000022] w-full h-100 overflow-x-auto scrollbar-hide border-2">
        <div className="flex flex-shrink-0 justify-center items-center bg-[#FFFFEE] w-180 h-50 mx-12 rounded-xl"
        // onClick={}
        ><h2 className="text-[#000022] text-3xl font-bold mx-10">UPV</h2>
        </div>
        <div className="flex flex-shrink-0 justify-center items-center bg-[#FFFFEE] w-180 h-50 mx-12 rounded-xl"
        // onClick={}
        ><h2 className="text-[#000022] text-3xl font-bold mx-10">Philippine Museum of Economic History</h2>
        </div>
        <div className="flex flex-shrink-0 justify-center items-center bg-[#FFFFEE] w-180 h-50 mx-12 rounded-xl"
        // onClick={}
        ><h2 className="text-[#000022] text-3xl font-bold mx-10">Museum of Philippine Maritime History</h2>
        </div>
        <div className="flex flex-shrink-0 justify-center items-center bg-[#FFFFEE] w-180 h-50 mx-12 rounded-xl"
        // onClick={}
        ><h2 className="text-[#000022] text-3xl font-bold mx-10">National Museum of the Philippines - Iloilo</h2>
        </div>
      </div>

      {/* INFORMATION */}
      <div className="flex flex-col justify-end items-center w-100 h-40 mt-16">
        <h3 className="text-[#000022] text-2xl font-bold">Khryss Nicole A. Bermejo</h3>
        <h3 className="text-[#000022] text-2xl font-bold">BSBIO 1A</h3>
        <h3 className="text-[#000022] text-2xl font-bold"></h3>
      </div>
    </div>
  );
}

export default App;