import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";

export default async function Home() {
  const stocks = await api.stockTracker.getAllStocksTracker()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {stocks.map((stock) => (
        <div key={stock.id}>
          <p>{stock.name}</p>
          <p>{stock.description}</p>
          <p>{stock.price}</p>
        </div>
      ))}
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
