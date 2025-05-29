import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UPVItems, PMEHItems, MPMHItems, NMPItems } from './MuseumItems'
 import colors from '../colors';

function MuseumDetail() {
    const { id } = useParams();
    const title = id?.replace(/-/g, " ");

    interface MuseumItem {
      name: string;
      image: string;
      description: string;
    }

    let selectedItems: MuseumItem[] = [];
    let backgroundImage = '/background-map.jpg';

    if (id === 'UPV-Museum-of-Arts-and-Cultural-Heritage') {
      selectedItems = UPVItems;
      backgroundImage = '/background-UPV-MACH.jpg';
    } else if (id === 'Philippine-Museum-of-Economic-History') {
      selectedItems = PMEHItems;
      backgroundImage = '/background-PMEH.jpg';
    } else if (id === 'Museum-of-Philippine-Maritime-History') {
      selectedItems = MPMHItems;
      backgroundImage = '/background-MPMH.jpg';
    } else if (id === 'National-Museum-of-the-Philippines-Iloilo') {
      selectedItems = NMPItems;
      backgroundImage = '/background-NMP.jpeg';
    }

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      {/* TITLE */}
      <h1 className="z-2 text-5xl font-bold mt-16 tracking-wide" style={{
        color: colors.color5,
        textShadow: '0 0 2px #7D4F38, 0 0 4px #7D4F38', // black outline
        animation: 'tracking-in-expand-fwd 2s cubic-bezier(0.215, 0.61, 0.355, 1.000) both',
        }}>{title}</h1>
        <div className="flex justify-center items-center w-400 h-screen">
        {/* Blurred background layer */}
        <div
          className="z-0 absolute inset-0 bg-cover bg-center opacity-70 blur-md rounded-2xl"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
          }}></div>
        {/* HORIZONTAL SCROLL */}
        <div className="relative rounded-2xl z-1 flex flex-wrap justify-center items-start w-240 h-150 overflow-y-auto scrollbar-hide pt-20 pb-20"
        style={{
        backgroundImage: "url('/background-history.avif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        }}>
        {/* RETURN BUTTON */}
        <button onClick={() => window.history.back()} className="z-40 absolute top-6 w-20 h-12 rounded-xl border-[#AD7954] border-2 bg-[#D09B69] text-xl text-[#F7DFB1] font-bold hover:bg-[#AD7954] hover:text-[#FFF7E7] hover:scale-105 transition duration-200">Back</button>
          {selectedItems.map((item, index) => (
            <Link
              key={index}
              to={`/museum/${id}/${index}`}
              className="rounded-2xl w-42 h-42 pb-4">
              <div className="flex flex-col items-center">
                {/* LABEL */}
                <div className="w-full px-7">
                  <h2 className="text-[#FFFFEE] text-[16px] font-bold text-center pt-1 pb-2 rounded-lg truncate overflow-hidden whitespace-nowrap"
                    style={{
                    textShadow: '0 0 2px #7D4F38, 0 0 4px #7D4F38', // black outline
                    }}>
                    {item.name}
                  </h2>
                </div>
                {/* CARD */}
                <div
                  className="flex flex-shrink-0 justify-center items-center bg-cover bg-center w-34 h-34 rounded-xl"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    border: '4px solid rgba(255, 255, 255, 1)',
                    textShadow:
                      '2px 2px 1px rgba(0, 0, 0, 0.6), -2px -2px 1px rgba(0, 0, 0, 0.6), -2px 2px 1px rgba(0, 0, 0, 0.6), 2px -2px 1px rgba(0, 0, 0, 0.6)'
                  }}>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MuseumDetail;