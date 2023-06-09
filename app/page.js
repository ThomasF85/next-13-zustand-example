import StoreInitializer from "@/lib/StoreInitializer";
import fetchArtPieces from "@/lib/fetchArtPieces";
import Spotlight from "@/components/Spotlight";
import useStore from "@/lib/useStore";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <h1>Random Art Piece</h1>
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
      <Spotlight />
    </>
  );
}
