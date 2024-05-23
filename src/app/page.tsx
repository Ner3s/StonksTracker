import { api } from "@/trpc/server";
import { PlusIcon } from "./_components/icons";
import { Button } from "./_components/forms/Button";
import { CardInfo } from "./_components/templates/CardInfo";

export default async function Home() {
  const stocks = await api.stockTracker.getAllStocksTracker();

  return (
    <main className="container mx-auto px-4 py-8 md:px-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Stocks</h1>
        <Button>
          <PlusIcon className="mr-2 h-5 w-5" />
          Add Stock
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stocks.map((stock) => (
          <CardInfo
            key={stock.id}
            name={stock.name}
            ticker={stock.ticker}
            createdAt={stock.createdAt.toISOString()}
            currency={stock.currency}
            favorite={stock.favorite}
            price={stock.price}
            type={stock.type}
          />
        ))}
      </div>
    </main>
  );
}
