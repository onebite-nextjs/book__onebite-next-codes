import BookItem from "@/components/book-item";
import SearchbarLayout from "@/components/searchbar-layout";
import books from "@/mock/books.json";
import { ReactNode } from "react";

export default function Page() {
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
