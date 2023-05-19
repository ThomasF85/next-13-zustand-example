import ArtPiecePreview from "@/components/ArtPiecePreview";
import StoreInitializer from "@/lib/StoreInitializer";
import fetchArtPieces from "@/lib/fetchArtPieces";
import useStore from "@/lib/useStore";
import styles from "./page.module.css";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <header>
        <h1>Art Pieces</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContent />
      </Suspense>
    </>
  );
}

async function PageContent() {
  const pieces = await fetchArtPieces();

  // Setting the state to the server store
  useStore.setState({ pieces });

  return (
    <>
      {/* StoreInitializer is setting the state to the client store*/}
      <StoreInitializer state={{ pieces }} />
      <ul className={styles.list}>
        {pieces.map((piece) => (
          <li key={piece.slug} className={styles.item}>
            <ArtPiecePreview piece={piece} />
          </li>
        ))}
      </ul>
    </>
  );
}
