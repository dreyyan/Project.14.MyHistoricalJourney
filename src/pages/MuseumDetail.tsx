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
    <div className="flex flex-col items-center justify-start h-screen bg-[url('/background-map.jpg')]">
      {/* TITLE */}
      <h1 className="z-2 text-6xl font-bold mt-16 mb-16" style={{ color: colors.color5 }}>{title}</h1>
      <div className="flex flex-col h-screen">
        {/* Background image layer with opacity */}
        <div className="z-0 absolute inset-0 bg-[#7D4F38] bg-cover bg-center opacity-70"></div>
        {/* HORIZONTAL SCROLL */}
        <div className="z-1 flex flex-wrap justify-center items-start w-260 h-180 overflow-y-auto scrollbar-hide pt-14"
        style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        }}>
          {selectedItems.map((item, index) => (
            <Link
              key={index}
              to={`/museum/${id}/${index}`}
              className="rounded-2xl w-54 h-54 pb-4">
              <div className="flex flex-col items-center">
                {/* LABEL */}
                <div className="w-full px-7">
                  <h2 className="text-[#FFFFEE] text-[12px] font-bold text-center pt-1 pb-2 rounded-lg truncate overflow-hidden whitespace-nowrap">
                    {item.name}
                  </h2>
                </div>
                {/* CARD */}
                <div
                  className="flex flex-shrink-0 justify-center items-center bg-cover bg-center w-40 h-40 rounded-xl filter blur-[1px] hover:blur-none transition-all duration-300 ease-in-out"
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