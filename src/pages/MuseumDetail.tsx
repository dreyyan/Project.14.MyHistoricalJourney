import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UPVItems, PMEHItems, MPMHItems, NMPItems } from './MuseumItems'

function MuseumDetail() {
    const { id } = useParams();
    const title = id?.replace(/-/g, " ");

    interface MuseumItem {
      name: string;
      image: string;
      description: string;
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
      <div className="flex flex-col h-screen bg-[#FFFFEE]">
        {/* HORIZONTAL SCROLL */}
        <div className="flex flex-wrap justify-center items-start bg-[#000022] w-260 h-180 overflow-y-auto scrollbar-hide pt-14">
          {selectedItems.map((item, index) => (
            <Link
              key={index}
              to={`/museum/${id}/${index}`}
              className="border-2 rounded-2xl w-54 h-54 pb-4">
              <div className="flex flex-col items-center">
                {/* LABEL */}
                <div className="w-full px-7">
                  <h2 className="text-[#FFFFEE] text-[12px] font-bold text-center pt-1 pb-2 rounded-lg truncate overflow-hidden whitespace-nowrap">
                    {item.name}
                  </h2>
                </div>
                {/* CARD */}
                <div
                  className="flex flex-shrink-0 justify-center items-center bg-cover bg-center w-40 h-40 rounded-xl filter blur-[2px] hover:blur-none transition-all duration-300 ease-in-out"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    border: '4px solid rgba(255, 255, 255, 0.2)',
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