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
      <h1 className="text-7xl font-bold text-center text-amber-600 mb-6">Photo Gallery</h1>

      <SearchBar search={search} setSearch={handleSearch}  />

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

    </div>
  )
}
