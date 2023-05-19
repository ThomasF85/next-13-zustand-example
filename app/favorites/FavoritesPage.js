"use client";

import ArtPiecePreview from "@/components/ArtPiecePreview";
import FavoriteButton from "@/components/FavoriteButton";
import useStore from "@/lib/useStore";
import styles from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const pieces = useStore((state) => state.pieces);
  const favorites = useStore((state) =>
    state.artPiecesInfo
      .filter((piece) => piece.isFavorite)
      .map((piece) => piece.slug)
  );

  return (
    <ul className={styles.list}>
      {pieces
        .filter((piece) =>
          favorites.find((favorite) => favorite === piece.slug)
        )
        .map((piece) => (
          <li key={piece.slug} className={styles.item}>
            <ArtPiecePreview
              FavoriteButtonComponent={FavoriteButton}
              piece={piece}
            />
          </li>
        ))}
    </ul>
  );
}
