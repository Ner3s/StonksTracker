import { api } from "@/trpc/server";
import { HeartIcon, PlusIcon } from "./_components/icons";
import { Button } from "./_components/forms/Button";
import { Card } from "./_components/templates/Card";

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
        {Array.from({ length: 26 }).map((_, index) => (
          <Card key={index}>
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="text-lg font-bold">Apple Inc.</div>
                <Button variant="ghost">
                  <HeartIcon className="h-6 w-6" />
                  <span className="sr-only">Favorite</span>
                </Button>
              </div>
              <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                AAPL
              </div>
              <div className="text-2xl font-bold">$132.45</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Apr 21, 2023 - 4:00 PM
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
