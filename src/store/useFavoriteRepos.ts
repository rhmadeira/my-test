import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteRepoStore = {
  favoriteRepoIds: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
};

const useFavoriteRepos = create(
  persist<FavoriteRepoStore>(
    (set) => ({
      favoriteRepoIds: [],
      addToFavorites: (id) =>
        set((state) => ({
          favoriteRepoIds: [...state.favoriteRepoIds, id],
        })),
      removeFromFavorites: (id) =>
        set((state) => ({
          favoriteRepoIds: state.favoriteRepoIds.filter((i) => i !== id),
        })),
    }),
    {
      name: "favorite-repos",
    }
  )
);

export default useFavoriteRepos;
