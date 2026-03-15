import type { Photo } from "../types"
import { FaHeart } from "react-icons/fa6";

interface Props {
  photo: Photo
  isFav: boolean
  toggleFav: (photo: Photo) => void
}

export default function PhotoCard({ photo, isFav, toggleFav }: Props) {

  return (
    <div className="relative bg-white rounded-lg shadow hover:shadow-lg hover:scale-101 transition-200 overflow-hidden">

      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex justify-between items-center">

        <p className="text-sm font-semibold text-gray-700">
          {photo.author}
        </p>

        <button
          onClick={() => toggleFav(photo)}
          className="text-xl absolute top-2 right-2 cursor-pointer"
        >
          {isFav ? <FaHeart className="text-red-500"/> : <FaHeart className="text-white"/>}
        </button>

      </div>

    </div>
  )
}
