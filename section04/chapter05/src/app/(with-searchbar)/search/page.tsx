import ClientComponent from "../client-component";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <ClientComponent>
      <h1>검색 페이지: {q}</h1>
    </ClientComponent>
  );
}
