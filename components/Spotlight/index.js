"use client";

import styles from "./index.module.css";
import Image from "next/image.js";
import FavoriteButton from "../FavoriteButton";
import { useEffect, useState } from "react";
import { randomIndex } from "@/lib/randomIndex";
import useStore from "@/lib/useStore";

export default function Spotlight() {
  const pieces = useStore((state) => state.pieces);
  const [piece, setPiece] = useState(null);

  useEffect(() => {
    setPiece(pieces[randomIndex(pieces.length)]);
  }, [setPiece, pieces]);

  if (!piece) {
    return <div>Shuffling</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <FavoriteButton slug={piece.slug} positionAbsolute={true} />
        <Image
          className={styles.image}
          src={piece.imageSource}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={`spotlight: ${piece.artist}`}
        />
      </div>
      <h2>{piece.artist}</h2>
    </div>
  );
}
