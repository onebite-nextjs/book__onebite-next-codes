import BookItem from "@/components/book-item";
import books from "@/mock/books.json";
import style from "./index.module.css";
import { ReactNode } from "react";
import SearchbarLayout from "@/components/searchbar-layout";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={`recommend-${book.id}`} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
          <BookItem key={`all-${book.id}`} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
