import SearchbarLayout from "@/components/searchbar-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import fetchBooks from "@/lib/fetch-books";

export async function getServerSideProps(
  context: GetServerSidePropsContext
) {
  const q = context.query.q;
  const books = await fetchBooks(q as string);

  return { props: { books } };
}

export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
