"use client";
import { type StockTracker } from "@prisma/client";
import { CardInfo } from "../CardInfo";
import { api } from "@/trpc/react";

type GenericData = {
  id: number;
  name: string;
};

type Stocks = StockTracker & { currency: GenericData; type: GenericData };

interface CardInfoWrapperProps {
  stocks: Stocks[];
}

export function CardInfoWrapper({ stocks }: CardInfoWrapperProps) {
  const { mutateAsync } = api.stockTracker.handleFavorite.useMutation();

  return (
    <>
      {stocks.map((stock) => (
        <CardInfo
          key={stock.id}
          name={stock.name}
          ticker={stock.ticker}
          createdAt={stock.createdAt.toISOString()}
          currency={stock.currency.name}
          favorite={stock.favorite}
          price={stock.price}
          type={stock.type.name}
          handleFavorite={async () => {
            await mutateAsync({ stockId: stock.id, favorite: !stock.favorite });
            Object.assign(stock, { favorite: !stock.favorite });
          }}
        />
      ))}
      {stocks.length === 0 && (
        <div className="col-span-full text-center text-gray-500">
          No stocks found
        </div>
      )}
    </>
  );
}
