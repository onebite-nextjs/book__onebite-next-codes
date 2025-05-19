import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    throw new Error("");
  }, []);

  return (
    <div>
      <h1>인덱스 페이지입니다.</h1>
    </div>
  );
}
