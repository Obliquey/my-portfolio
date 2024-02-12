import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();
  // Learn how to make queries using tRPC
  const hello = await api.post.hello.query({ text: "World" });
  // Will need to learn how to use nextAuth
  const session = await getServerAuthSession();

  return (
    <main className="bg-gradient-to-bl from-slate-800 from-60% to-indigo-900 h-screen">
      <div>
        <p className="text-white text-2xl">We need to build something</p>
      </div>

    </main>
  );
}

