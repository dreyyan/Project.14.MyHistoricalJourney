import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UPVItems, PMEHItems, MPMHItems, NMPItems } from './MuseumItems'

function MuseumDetail() {
    const { id } = useParams();
    const title = id?.replace(/-/g, " ");

    interface MuseumItem {
      name: string;
      image: string;
    }

    let selectedItems: MuseumItem[] = [];

    if (id === 'UPV-Museum-of-Arts-and-Cultural-Heritage') selectedItems = UPVItems;
    else if (id === 'Philippine-Museum-of-Economic-History') selectedItems = PMEHItems;
    else if (id === 'Museum-of-Philippine-Maritime-History') selectedItems = MPMHItems;
    else if (id === 'National-Museum-of-the-Philippines-Iloilo') selectedItems = NMPItems;

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-[#FFFFEE]">
      {/* TITLE */}
      <h1 className="text-5xl text-[#000022] font-bold mt-16 mb-16">{title}</h1>
      <div className="flex flex-col items-center justify-start h-screen bg-[#FFFFEE]">
        {/* HORIZONTAL SCROLL */}
        <div className="flex flex-col items-center bg-[#000022] w-full h-140 overflow-y-auto scrollbar-hide border-2 pt-14">
          {selectedItems.map((item, index) => (
            <Link key={index} to='/museum/UPV-Museum-of-Arts-and-Cultural-Heritage' className="border-2 rounded-2xl mx-12 pb-14">
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
            ><h2 className="text-[#FFFFEE] text-3xl font-bold mx-10">{item.name}</h2>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MuseumDetail;