interface Props {
  search: string
  setSearch: (value: string) => void
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="relative mb-6 xl:mx-20">
      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 xl:px-6 border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-[30px] focus:outline-none focus:ring-[0.9px] focus:ring-amber-500"
      />
      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
      )}
    </div>
  )
}
