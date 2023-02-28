import { useCallback } from "react";
import "./App.css";
import Card from "./shared/components/Card";
import useFetchRepos from "./shared/queries/repo";
import useFavoriteRepos from "./store/useFavoriteRepos";

function App() {
  const { data } = useFetchRepos("rhmadeira");
  const favoriteRepoIds = useFavoriteRepos((state) => state.favoriteRepoIds);
  const addToFavorites = useFavoriteRepos((state) => state.addToFavorites);
  const removeFromFavorites = useFavoriteRepos(
    (state) => state.removeFromFavorites
  );

  const handleAddToFavorites = useCallback(
    (id: number) => {
      addToFavorites(id);
    },
    [addToFavorites]
  );

  const handleRemoveFromFavorites = useCallback(
    (id: number) => {
      removeFromFavorites(id);
    },
    [removeFromFavorites]
  );

  return (
    <div className="App">
      {data?.map((repo) => {
        return (
          <Card
            key={repo.id}
            repo={repo}
            addToFavorites={handleAddToFavorites}
            removeFromFavorites={removeFromFavorites}
            isFavorite={favoriteRepoIds.includes(repo.id)}
          />
        );
      })}
    </div>
  );
}

export default App;
