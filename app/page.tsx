import Link from "next/link";
import { cookies } from "next/headers";

const wait = async () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
};

export default async function Home() {
  const cookieStore = cookies();
  await wait();
  return (
    <div>
      <div>home page</div>
      <div>
        <Link href="/nested">nested page</Link>
      </div>
    </div>
  );
}
