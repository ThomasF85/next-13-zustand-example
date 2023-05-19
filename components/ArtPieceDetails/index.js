import useStore from "@/lib/useStore";
import styles from "./index.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";

const FavoriteButton = dynamic(() => import("../FavoriteButton"), {
  ssr: false,
});
const Comments = dynamic(() => import("../Comments"), { ssr: false });

export default function ArtPieceDetails({ slug }) {
  const piece = useStore.getState().pieces.find((piece) => piece.slug === slug);

  if (!piece) {
    return <div>Piece not found</div>;
  }

  const { imageSource: image, title, artist, year, genre, colors } = piece;

  return (
    <section className={styles.wrapper}>
      <div className={styles.actionContainer}>
        <FavoriteButton slug={slug} />
      </div>
      <h2>{title}</h2>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={image}
          priority
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={`${artist}: ${title}`}
        />
      </div>
      <ul role="list" className={styles.list}>
        {colors.map((color, index) => (
          <li
            style={{ backgroundColor: color }}
            className={styles.color}
            key={index}
            color={color}
            aria-label={color}
          />
        ))}
      </ul>
      <ul role="list" className={styles.list}>
        <li>{artist}</li>
        <li>{year}</li>
        <li>{genre}</li>
      </ul>
      <Comments slug={slug} />
    </section>
  );
}
