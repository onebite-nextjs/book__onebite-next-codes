"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: Props) {
  const router = useRouter();

  return (
    <div>
      <h3>오류가 발생했습니다</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(); // 서버 컴포넌트를 다시 실행하도록 요청
            reset(); // 에러 상태 초기화, 컴포넌트를 페이지에 다시 렌더링
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
