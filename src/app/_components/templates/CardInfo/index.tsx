import { type StockTracker } from "@prisma/client";
import { Button } from "../../forms/Button";
import { EditIcon, HeartIcon } from "../../icons";
import { Card } from "../Card";

type CardInfoProps = Omit<
  StockTracker,
  | "description"
  | "minPriceAlert"
  | "maxPriceAlert"
  | "updatedAt"
  | "createdAt"
  | "currencyId"
  | "typeId"
  | "id"
> & {
  createdAt: string;
  currency: string;
  type: string;
};

export function CardInfo({
  name,
  ticker,
  price,
  createdAt,
  favorite,
  currency,
  type,
}: CardInfoProps) {
  return (
    <Card>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold">{name}</span>{" "}
            <span className="text-sm capitalize text-gray-400">
              {type.toLocaleLowerCase()}
            </span>
          </div>
          <div>
            <Button variant="ghost">
              <HeartIcon
                className="h-6 w-6"
                fill={favorite ? "black" : "none"}
              />
              <span className="sr-only">Favorite</span>
            </Button>
            <Button variant="ghost">
              <EditIcon className="h-6 w-6" />
              <span className="sr-only">Edit</span>
            </Button>
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          {ticker}
        </div>
        <div className="text-2xl font-bold">
          {currency} {price}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {createdAt}
        </div>
      </div>
    </Card>
  );
}
