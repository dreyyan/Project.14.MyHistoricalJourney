import { useParams } from "react-router-dom";

function MuseumDetail() {
    const { id } = useParams();
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-[#FFFFEE]">
      {/* TITLE */}
      <h1 className="text-6xl text-[#000022] font-bold mt-16 mb-16">{id}</h1>
    </div>
  );
}

export default MuseumDetail;