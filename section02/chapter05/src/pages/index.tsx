import { ReactNode } from "react";
import style from "./index.module.css";
import SearchbarLayout from "@/components/searchbar-layout";

export default function Home() {
  return (
    <div>
      <h1 className={style.title}>인덱스 페이지입니다</h1>
    </div>
  );
}

// 인덱스 페이지에서 검색 폼 레이아웃을 적용할 getLayout 함수
Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
