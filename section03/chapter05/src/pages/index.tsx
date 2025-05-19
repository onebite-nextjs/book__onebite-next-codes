import SearchbarLayout from "@/components/searchbar-layout";
import style from "./index.module.css";
import BookItem from "@/components/book-item";
import books from "@/mock/books.json";
import { InferGetStaticPropsType } from "next";
import { ReactNode, useEffect } from "react";

import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import Head from "next/head";

export async function getStaticProps() {
  const allBooks = await fetchBooks();
  const randomBooks = await fetchRandomBooks();
  return { props: { allBooks, randomBooks } };
}

export default function Home({
  allBooks,
  randomBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>한입북스</title>
        <meta property="og:title" content="한입북스 - 검색결과" />
        <meta
          property="og:description"
          content="한입북스에 등록된 도서들을 만나보세요"
        />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <div className={style.container}>
        <section>
          <h3>지금 추천하는 도서</h3>
          {randomBooks.map((book) => (
            <BookItem key={`recommend-${book.id}`} {...book} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => (
            <BookItem key={`all-${book.id}`} {...book} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
