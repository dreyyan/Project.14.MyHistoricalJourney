import { useParams } from "react-router-dom";
import { UPVItems, PMEHItems, MPMHItems, NMPItems } from './MuseumItems';
import colors from '../colors';
interface MuseumItem {
  name: string;
  image: string;
  description: string;
}

function MuseumItemDetail() {
  const { id, itemIndex } = useParams();
  const index = Number(itemIndex);

  let selectedItems: MuseumItem[] = [];

  if (id === 'UPV-Museum-of-Arts-and-Cultural-Heritage') {
    selectedItems = UPVItems;
  } else if (id === 'Philippine-Museum-of-Economic-History') {
    selectedItems = PMEHItems;
  } else if (id === 'Museum-of-Philippine-Maritime-History') {
    selectedItems = MPMHItems;
  } else if (id === 'National-Museum-of-the-Philippines-Iloilo') {
    selectedItems = NMPItems;
  }

  const item = selectedItems[index];

  if (!item) return <div>Item not found</div>;

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      {/* Blurred background layer */}
      <div
        className="z-0 absolute inset-0 bg-cover bg-center opacity-70 blur-md rounded-2xl"
        style={{
          backgroundImage: `url('${item.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
      {/* TITLE */}
      <h1 className="z-2 text-6xl font-bold mt-8 mb-10" style={{
        color: colors.color5,
        textShadow: '0 0 2px #7D4F38, 0 0 4px #7D4F38', // black outline
        }}>{item.name}</h1>
      <img src={item.image} alt={item.name} className="z-1 w-full max-w-md max-h-[480px] border-4 border-[#D09B69] rounded-xl mb-4" />
      <div className="flex flex-col items-center justify-start">
        <p className="z-2 text-2xl font-bold mt-4 mb-14 mx-120 text-justify" style={{
        color: '#FFFFFF',
        textShadow: '0 0 2px #7D4F38, 0 0 4px #7D4F38', // black outline
        }}>{item.description}</p>
      </div>
    </div>
  );
}

export default MuseumItemDetail;
