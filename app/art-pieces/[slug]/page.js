import ArtPieceDetails from "@/components/ArtPieceDetails";
import StoreInitializer from "@/lib/StoreInitializer";
import fetchArtPieces from "@/lib/fetchArtPieces";
import useStore from "@/lib/useStore";

export async function generateStaticParams() {
  const pieces = await fetchArtPieces();

  return pieces.map((piece) => ({
    slug: piece.slug,
  }));
}

export default async function Page({ params }) {
  const pieces = await fetchArtPieces();

  // Setting the state to the server store
  useStore.setState({ pieces });

  return (
    <>
      {/* StoreInitializer is setting the state to the client store*/}
      <StoreInitializer state={{ pieces }} />
      <header>
        <h1>
          {pieces.find((piece) => piece.slug === params.slug)?.name ??
            "Unknown Piece"}
        </h1>
      </header>
      <ArtPieceDetails slug={params.slug} />
    </>
  );
}
