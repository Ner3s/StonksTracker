import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

const STOCK_TYPE = ["CRYPTO", "STOCKS", "INVESTMENT_FUNDS"] as const;

export const stockTrackerRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        ticker: z.string().min(1).max(16),
        description: z.string(),
        type: z.enum(STOCK_TYPE),
        price: z.number(),
        priceReminder: z.number(),
        favorite: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.stocksTracker.create({
        data: {
          name: input.name,
          ticker: input.ticker,
          description: input.description,
          type: input.type,
          price: input.price,
          priceReminder: input.priceReminder,
          favorite: input.favorite,
        },
      });
    }),
  getAllStocksTracker: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.stocksTracker.findMany();
  }),
});
