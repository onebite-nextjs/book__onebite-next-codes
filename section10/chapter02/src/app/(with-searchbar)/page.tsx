import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import { Suspense } from "react";
import BookItemSkeleton from "@/components/book-item-skeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "한입북스",
  description: "한입북스에 등록된 도서를 만나보세요.",
  openGraph: {
    title: "한입북스",
    description: "한입북스에 등록된 도서를 만나보세요.",
    images: ["/thumbnail.png"],
  },
};

export const dynamic = "force-dynamic";

async function AllBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book`, {
    cache: "force-cache",
  });
  if (!response.ok) throw new Error(response.statusText);

  const allBooks: BookData[] = await response.json();

  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/book/random`,
    { next: { revalidate: 3 } }
  );
  if (!response.ok) throw new Error(response.statusText);

  const randomBooks: BookData[] = await response.json();

  return (
    <div>
      {randomBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <Suspense
          fallback={new Array(3).fill(0).map((_, idx) => (
            <BookItemSkeleton key={`reco-book-skeleton-${idx}`} />
          ))}
        >
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense
          fallback={new Array(5).fill(0).map((_, idx) => (
            <BookItemSkeleton key={`all-book-skeleton-${idx}`} />
          ))}
        >
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
}
