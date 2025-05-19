import style from "./review-editor.module.css";

export default function ReviewEditor({ bookId }: { bookId: string }) {
  const createReviewAction = async (formData: FormData) => {
    "use server";

    const bookId = formData.get("bookId");
    const content = formData.get("content");
    const author = formData.get("author");

    try {
      if (!bookId || !content || !author) throw new Error("잘못된 요청입니다");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/review`,
        {
          method: "POST",
          body: JSON.stringify({
            bookId,
            content,
            author,
          }),
        }
      );

      if (!response.ok) throw new Error(response.statusText);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className={style.container}>
      <form action={createReviewAction}>
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea required name="content" placeholder="리뷰 내용" />
        <div className={style.submit_container}>
          <input required name="author" placeholder="작성자" />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}
