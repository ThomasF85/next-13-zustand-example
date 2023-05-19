import StoreInitializer from "@/lib/StoreInitializer";
import fetchArtPieces from "@/lib/fetchArtPieces";
import useStore from "@/lib/useStore";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const FavoritesPage = dynamic(() => import("./FavoritesPage"), { ssr: false });

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
      <FavoritesPage />
    </>
  );
}
