import ClientComponent from "./client-component";
import ServerComponent from "./server-component";

export default function Page() {
  return (
    <div>
      <h1>인덱스 페이지</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
