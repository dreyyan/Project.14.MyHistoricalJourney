    import { useEffect, useRef } from "react";
    import { Link } from "react-router-dom";
    import colors from '../colors';

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
        <div className="flex flex-col items-center justify-start h-screen bg-cover bg-center">
        {/* Background image layer with opacity */}
        <div className="absolute inset-0 bg-[url('background-map.jpg')] bg-cover bg-center opacity-10 z-0"></div>
        {/* TITLE */}
        <h1 className="text-8xl font-bold mt-16 mb-16" style={{ color: colors.color5 }}>MY HISTORICAL JOURNEY</h1>

        {/* HORIZONTAL SCROLL */}
        <div ref={scrollRef} className="flex flex-row items-center w-full h-120 overflow-x-auto scrollbar-hide border-4 px-4 pb-4" style={{backgroundColor: colors.color2, borderColor: colors.color3 }}>
            {/* 1. UPV MUSEUM OF ARTS AND CULTURAL HERITAGE */}
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold mx-10 mb-6" style={{ color: "rgb(255, 239, 218)" }}>UPV Museum of Arts and Cultural Heritage</h2>
                <Link to='/museum/UPV-Museum-of-Arts-and-Cultural-Heritage' className="border-3 rounded-2xl mx-4" style={{ borderColor: colors.color3 }}>
                    <div className="relative flex flex-shrink-0 justify-center items-center bg-[url('background-UPV-MACH.jpg')] bg-cover bg-center w-160 h-80 rounded-xl filter blur-md hover:blur-none transition-all duration-300 ease-int"
                    style={{
                        border: '3px solid RGBA(247,223,127,0.8)',
                        textShadow:
                        '2px 2px 1px rgba(0, 0, 0, 0.6), -2px -2px 1px rgba(0, 0, 0, 0.6), -2px 2px 1px rgba(0, 0, 0, 0.6), 2px -2px 1px rgba(0, 0, 0, 0.6)'
                    }}>
                    {/* Overlay color */}
                    <div className="absolute inset-0 bg-[rgba(247,223,127,0.8)] hover:bg-transparent transition-colors duration-300 ease-in"/>
                    </div>
                </Link>
            </div>

            {/* 2. PHILIPPINE MUSEUM OF ECONOMIC HISTORY */}
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold mx-10 mb-6" style={{ color: "rgb(255, 239, 218)" }}>Philippine Museum of Economic History</h2>
                <Link to='/museum/Philippine-Museum-of-Economic-History' className="border-3 rounded-2xl mx-4" style={{ borderColor: colors.color3 }}>
                    <div className="relative flex flex-shrink-0 justify-center items-center bg-[url('background-PMEH.jpg')] bg-cover bg-center w-160 h-80 rounded-xl filter blur-md hover:blur-none transition-all duration-300 ease-in"
                        style={{
                        border: '3px solid RGBA(247,223,127,0.8)',
                        textShadow:
                        '2px 2px 1px rgba(0, 0, 0, 0.6), -2px -2px 1px rgba(0, 0, 0, 0.6), -2px 2px 1px rgba(0, 0, 0, 0.6), 2px -2px 1px rgba(0, 0, 0, 0.6)'
                        }}>
                    {/* Overlay color */}
                    <div className="absolute inset-0 bg-[rgba(247,223,127,0.8)] hover:bg-transparent transition-colors duration-300 ease-in"/>
                    </div>
                </Link>
            </div>

            {/* 3. MUSEUM OF PHILIPPINE MARITIME HISTORY */}
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold mx-10 mb-6" style={{ color: "rgb(255, 239, 218)" }}>Museum of Philippine Maritime History</h2>
                <Link to='/museum/Museum-of-Philippine-Maritime-History' className="border-3 rounded-2xl mx-4" style={{ borderColor: colors.color3 }}>
                    <div className="relative flex flex-shrink-0 justify-center items-center bg-[url('background-MPMH.jpg')] bg-cover bg-center w-160 h-80 rounded-xl filter blur-md hover:blur-none transition-all duration-300 ease-in"
                        style={{
                        border: '3px solid RGBA(247,223,127,0.8)',
                        textShadow:
                        '2px 2px 1px rgba(0, 0, 0, 0.6), -2px -2px 1px rgba(0, 0, 0, 0.6), -2px 2px 1px rgba(0, 0, 0, 0.6), 2px -2px 1px rgba(0, 0, 0, 0.6)'
                        }}>
                    {/* Overlay color */}
                    <div className="absolute inset-0 bg-[rgba(247,223,127,0.8)] hover:bg-transparent transition-colors duration-300 ease-in"/>
                    </div>
                </Link>
            </div>

            {/* 4. NATIONAL MUSEUM OF THE PHILIPPINES - ILOILO */}
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold mx-10 mb-6" style={{ color: "rgb(255, 239, 218)" }}>National Museum of the Philippines - Iloilo</h2>
                <Link to='/museum/National-Museum-of-the-Philippines-Iloilo' className="border-3 rounded-2xl mx-4" style={{ borderColor: colors.color3 }}>
                    <div className="relative flex flex-shrink-0 justify-center items-center bg-[url('background-NMP.jpeg')] bg-cover bg-center w-160 h-80 rounded-xl filter blur-md hover:blur-none transition-all duration-300 ease-in"
                        style={{
                        border: '3px solid RGBA(247,223,127,0.8)',
                        textShadow:
                        '2px 2px 1px rgba(0, 0, 0, 0.6), -2px -2px 1px rgba(0, 0, 0, 0.6), -2px 2px 1px rgba(0, 0, 0, 0.6), 2px -2px 1px rgba(0, 0, 0, 0.6)'
                        }}>
                    {/* Overlay color */}
                    <div className="absolute inset-0 bg-[rgba(247,223,127,0.8)] hover:bg-transparent transition-colors duration-300 ease-in"/>
                    </div>
                </Link>
            </div>
        </div>

        {/* INFORMATION */}
        <div className="flex flex-col justify-end items-center w-100 h-40 mt-16">
            <h3 className="text-3xl font-bold" style={{ color: colors.color5 }}>Khryss Nicole A. Bermejo</h3>
            <h3 className="text-xl font-bold" style={{ color: colors.color4 }}>BSBIO - 1A</h3>
            <h3 className="text-2xl font-bold"></h3>
        </div>
    </div>
    );
    }

    export default Home;