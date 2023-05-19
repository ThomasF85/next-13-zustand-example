async function fetchArtPieces() {
  const response = await fetch("https://example-apis.vercel.app/api/art");
  if (!response.ok) {
    throw new Error(
      `Request to https://example-apis.vercel.app/api/art failed.`
    );
  }
  return await response.json();
}

export default fetchArtPieces;
