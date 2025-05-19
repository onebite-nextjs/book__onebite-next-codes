import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <h1>검색: {router.query.q}</h1>
    </div>
  );
}
