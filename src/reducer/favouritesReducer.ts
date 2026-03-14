import type { Photo } from "../types"

type Action =
  | { type: "TOGGLE_FAV"; payload: Photo }

export const initialState: Photo[] =
  JSON.parse(localStorage.getItem("favourites") || "[]")

export function favouritesReducer(
  state: Photo[],
  action: Action
): Photo[] {

  switch (action.type) {

    case "TOGGLE_FAV":

      const exists = state.find(p => p.id === action.payload.id)

      let updated: Photo[]

      if (exists) {
        updated = state.filter(p => p.id !== action.payload.id)
      } else {
        updated = [...state, action.payload]
      }

      localStorage.setItem("favourites", JSON.stringify(updated))

      return updated

    default:
      return state
  }
}
