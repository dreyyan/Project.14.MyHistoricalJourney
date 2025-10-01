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
        {/* Top Border */}
        <div className="bg-[#693d27] w-full h-16 z-20 border-b-6 border-[#AD7954]"/>
        {/* Background image layer with opacity */}
        <div className="absolute inset-0 bg-[url('/Project.14.MyHistoricalJourney/background-map.jpg')] bg-cover bg-center opacity-10 z-0"
        style={{
            animation: 'kenburns-top 2s ease-in-out both',
        }}></div>
        {/* TITLE */}
        <h1 className="text-8xl font-bold mt-8 mb-12 tracking-wide" style={{
            color: colors.color5,
            animation: 'tracking-in-expand-fwd 2s cubic-bezier(0.215, 0.61, 0.355, 1.000) both',
            }}>MY HISTORICAL JOURNEY</h1>

        {/* HORIZONTAL SCROLL */}
        <div ref={scrollRef} className="flex flex-row items-center w-full h-120 overflow-x-auto scrollbar-hide border-4 px-8 pb-4" style={{backgroundColor: colors.color2, borderColor: colors.color3 }}>
            {/* 1. UPV MUSEUM OF ARTS AND CULTURAL HERITAGE */}
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-6" style={{ color: "rgb(255, 239, 218)" }}>UPV Museum of Arts and Cultural Heritage</h2>
                <Link to='/museum/UPV-Museum-of-Arts-and-Cultural-Heritage' className="border-x-4 border-y-4" style={{ borderColor: colors.color3 }}>
                    <div className="relative flex flex-shrink-0 justify-center items-center bg-[url('/Project.14.MyHistoricalJourney/background-UPV-MACH.jpg')] bg-cover bg-center w-160 h-74 filter blur-md hover:blur-none transition-all duration-300 ease-int"
                    style={{
                        border: '4px solid RGBA(247,223,127,0.8)',
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
                <h2 className="text-3xl font-bold mb-6" style={{ color: "rgb(255, 239, 218)" }}>Philippine Museum of Economic History</h2>
                <Link to='/museum/Philippine-Museum-of-Economic-History' className="border-x-2 border-y-4" style={{ borderColor: colors.color3 }}>
                    <div className="relative flex flex-shrink-0 justify-center items-center bg-[url('/Project.14.MyHistoricalJourney/background-PMEH.jpg')] bg-cover bg-center w-160 h-74 filter blur-md hover:blur-none transition-all duration-300 ease-in"
                        style={{
                        border: '4px solid RGBA(247,223,127,0.8)',
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
                <h2 className="text-3xl font-bold mb-6" style={{ color: "rgb(255, 239, 218)" }}>Museum of Philippine Maritime History</h2>
                <Link to='/museum/Museum-of-Philippine-Maritime-History' className="border-x-2 border-y-4" style={{ borderColor: colors.color3 }}>
                    <div className="relative flex flex-shrink-0 justify-center items-center bg-[url('/Project.14.MyHistoricalJourney/background-MPMH.jpg')] bg-cover bg-center w-160 h-74 filter blur-md hover:blur-none transition-all duration-300 ease-in"
                        style={{
                        border: '4px solid RGBA(247,223,127,0.8)',
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
                <h2 className="text-3xl font-bold mb-6" style={{ color: "rgb(255, 239, 218)" }}>National Museum of the Philippines - Iloilo</h2>
                <Link to='/museum/National-Museum-of-the-Philippines-Iloilo' className="border-x-4 border-y-4" style={{ borderColor: colors.color3 }}>
                    <div className="relative flex flex-shrink-0 justify-center items-center bg-[url('/Project.14.MyHistoricalJourney/background-NMP.jpeg')] bg-cover bg-center w-160 h-74 filter blur-md hover:blur-none transition-all duration-300 ease-in"
                        style={{
                        border: '4px solid RGBA(247,223,127,0.8)',
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
        <div className="flex flex-col justify-center items-center w-[200px] h-30 mx-16 pt-10"
            style={{
            animation: 'text-pop-up-top 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
            }}>
            <h3 className="text-[14px] font-bold tracking-wider" style={{
                color: colors.color5,
                }}>Khryss Nicole A. Bermejo</h3>
            <h3 className="text-[10px] font-bold" style={{
                color: colors.color4,
                }}>BSBIO - 1A</h3>
            <h3 className="text-2xl font-bold"></h3>
        </div>
        {/* Bottom Border */}
        <div className="bg-[#693d27] w-full h-12 z-20 border-t-6 border-[#AD7954]"/>
    </div>
    );
    }

    export default Home;