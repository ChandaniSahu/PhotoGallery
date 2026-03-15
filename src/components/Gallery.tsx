import { useState, useReducer, useMemo, useCallback } from "react"
import useFetchPhotos from "../hooks/useFetchPhotos"
import { favouritesReducer, initialState } from "../reducer/favouritesReducer"
import PhotoCard from "./PhotoCard"
import SearchBar from "./SearchBar"
import Spinner from "./Spinner"
import type { Photo } from "../types/photo"

export default function Gallery() {

  const { photos, loading, error } = useFetchPhotos()

  const [search, setSearch] = useState<string>("")

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    initialState
  )


  const handleSearch = useCallback((value: string) => {
    setSearch(value)
  }, [])

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo: Photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    )
  }, [photos, search])

  const toggleFav = (photo: Photo) => {
    dispatch({ type: "TOGGLE_FAV", payload: photo })
  }

  if (loading) return <Spinner />

  if (error) return <p className="text-red-500 text-center">{error}</p>

  return (
    <div className="xl:px-4 px-2 xl:py-6 py-4">
      <h1 className="xl:text-7xl  text-5xl font-bold text-center text-amber-600 mb-6">Photo Gallery</h1>

      <SearchBar search={search} setSearch={handleSearch} />

      {filteredPhotos.length === 0 ? (

        <div className="flex flex-col items-center justify-center py-20 text-center">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16l4-4a3 3 0 014 0l5 5m-2-2l1-1a3 3 0 014 0l2 2M3 8l2-2a3 3 0 014 0l2 2"
            />
          </svg>

          <p className="text-gray-500 text-lg font-medium">
            No images found
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredPhotos.map((photo) => (

            <PhotoCard
              key={photo.id}
              photo={photo}
              isFav={favourites.some(p => p.id === photo.id)}
              toggleFav={toggleFav}
            />

          ))}

        </div>

      )}

    </div>
  )
}
