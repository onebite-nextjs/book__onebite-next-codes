import { ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <input placeholder="임시 검색 폼" />
      {children}
    </div>
  );
}
