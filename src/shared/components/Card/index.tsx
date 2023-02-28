import { Repo } from "../../queries/repo/types";
import "./styles.css";

type CardProps = {
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  repo: Repo;
  isFavorite: boolean;
};

export default function Card({
  addToFavorites,
  repo,
  isFavorite,
  removeFromFavorites,
}: CardProps) {
  function handleToggleFavorite() {
    if (isFavorite) {
      removeFromFavorites(repo.id);
    } else {
      addToFavorites(repo.id);
    }
  }
  return (
    <div className="card">
      <h2>{repo.name}</h2>
      <div className="card-button">
        <button onClick={handleToggleFavorite}>
          {!isFavorite ? "Add from favorites" : "Remove from favorites"}
        </button>
      </div>
    </div>
  );
}
