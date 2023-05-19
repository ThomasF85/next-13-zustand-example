"use client";

import useStore from "@/lib/useStore";
import Image from "next/image.js";
import styles from "./index.module.css";

export default function FavoriteButton({ slug, positionAbsolute = false }) {
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const isFavorite = useStore(
    (state) =>
      state.artPiecesInfo?.find((artPiece) => artPiece.slug === slug)
        ?.isFavorite
  );

  return (
    <button
      className={`${styles.button} ${positionAbsolute ? styles.absolute : ""} ${
        isFavorite ? styles.favorite : ""
      }`}
      type="button"
      onClick={() => toggleFavorite(slug)}
      aria-label={isFavorite ? "unlike" : "like"}
    >
      <Image src="/assets/heart.svg" width={40} height={40} alt="" />
    </button>
  );
}
