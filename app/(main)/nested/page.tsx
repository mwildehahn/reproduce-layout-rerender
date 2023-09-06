import Link from "next/link";
import { cookies } from "next/headers";

const wait = async () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
};

export default async function NestedPage() {
  const cookieStore = cookies();
  await wait();

  return (
    <div>
      <div>nested page</div>
      <div>
        <Link href="/">home</Link>
      </div>
    </div>
  );
}
