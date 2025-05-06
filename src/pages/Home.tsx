    import { useEffect, useRef } from "react";
    import { Link } from "react-router-dom";

    function Home() {
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
            {/* 1. UPV MUSEUM OF ARTS AND CULTURAL HERITAGE */}
            <Link to='/museum/UPV-Museum-of-Arts-and-Cultural-Heritage' className="border-2 rounded-2xl mx-12">
                <div className="flex flex-shrink-0 justify-center items-center bg-[url('background-UPV-MACH.jpg')] bg-cover bg-center w-180 h-80 rounded-xl backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300 ease-in-out"
                style={{
                    border: '4px solid rgba(255, 255, 255, 0.2)',
                    textShadow:
                    '2px 2px 1px rgba(0, 0, 0, 0.6), -2px -2px 1px rgba(0, 0, 0, 0.6), -2px 2px 1px rgba(0, 0, 0, 0.6), 2px -2px 1px rgba(0, 0, 0, 0.6)'
                }}
                onMouseEnter={(e) => {
                    // Remove the blur effect on hover
                    e.currentTarget.style.filter = 'blur(0px)';
                }}
                onMouseLeave={(e) => {
                    // Add the blur effect back when hover ends
                    e.currentTarget.style.filter = 'blur(5px)';
                }}
                ><h2 className="text-[#FFFFEE] text-3xl font-bold mx-10">UPV Museum of Arts and Cultural Heritage</h2>
                </div>
            </Link>

            {/* 2. PHILIPPINE MUSEUM OF ECONOMIC HISTORY */}
            <Link to='/museum/Philippine-Museum-of-Economic-History' className="border-2 rounded-2xl mx-12">
                <div className="flex flex-shrink-0 justify-center items-center bg-[url('background-PMEH.jpg')] bg-cover bg-center w-180 h-80 rounded-xl backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300 ease-in-out"
                    style={{
                    border: '4px solid rgba(255, 255, 255, 0.2)',
                    textShadow:
                    '2px 2px 1px rgba(0, 0, 0, 0.6), -2px -2px 1px rgba(0, 0, 0, 0.6), -2px 2px 1px rgba(0, 0, 0, 0.6), 2px -2px 1px rgba(0, 0, 0, 0.6)'
                }}
                onMouseEnter={(e) => {
                    // Remove the blur effect on hover
                    e.currentTarget.style.filter = 'blur(0px)';
                    }}
                    onMouseLeave={(e) => {
                    // Add the blur effect back when hover ends
                    e.currentTarget.style.filter = 'blur(5px)';
                    }}
                ><h2 className="text-[#FFFFEE] text-3xl font-bold mx-10">Philippine Museum of Economic History</h2>
                </div>
            </Link>

            {/* 3. MUSEUM OF PHILIPPINE MARITIME HISTORY */}
            <Link to='/museum/Museum-of-Philippine-Maritime-History' className="border-2 rounded-2xl mx-12">
                <div className="flex flex-shrink-0 justify-center items-center bg-[url('background-MPMH.jpg')] bg-cover bg-center w-180 h-80 rounded-xl backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300 ease-in-out"
            style={{
                border: '4px solid rgba(255, 255, 255, 0.2)',
                textShadow:
                '2px 2px 1px rgba(0, 0, 0, 0.6), -2px -2px 1px rgba(0, 0, 0, 0.6), -2px 2px 1px rgba(0, 0, 0, 0.6), 2px -2px 1px rgba(0, 0, 0, 0.6)'
                }}
                onMouseEnter={(e) => {
                    // Remove the blur effect on hover
                    e.currentTarget.style.filter = 'blur(0px)';
                }}
                onMouseLeave={(e) => {
                    // Add the blur effect back when hover ends
                    e.currentTarget.style.filter = 'blur(5px)';
                }}
                ><h2 className="text-[#FFFFEE] text-3xl font-bold mx-10">Museum of Philippine Maritime History</h2>
                </div>
            </Link>

            {/* 4. NATIONAL MUSEUM OF THE PHILIPPINES - ILOILO */}
            <Link to='/museum/National-Museum-of-the-Philippines-Iloilo' className="border-2 rounded-2xl mx-12">
                <div className="flex flex-shrink-0 justify-center items-center bg-[url('background-NMP.jpeg')] bg-cover bg-center w-180 h-80 rounded-xl backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300 ease-in-out"
                style={{
                border: '4px solid rgba(255, 255, 255, 0.2)',
                textShadow:
                '2px 2px 1px rgba(0, 0, 0, 0.6), -2px -2px 1px rgba(0, 0, 0, 0.6), -2px 2px 1px rgba(0, 0, 0, 0.6), 2px -2px 1px rgba(0, 0, 0, 0.6)'
                }}
                onMouseEnter={(e) => {
                // Remove the blur effect on hover
                e.currentTarget.style.filter = 'blur(0px)';
                }}
                onMouseLeave={(e) => {
                // Add the blur effect back when hover ends
                e.currentTarget.style.filter = 'blur(5px)';
                }}
                ><h2 className="text-[#FFFFEE] text-3xl font-bold mx-10">National Museum of the Philippines - Iloilo</h2>
                </div>
            </Link>
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

    export default Home;