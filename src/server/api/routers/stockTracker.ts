import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const stockTrackerRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        ticker: z.string().min(1).max(16),
        description: z.string(),
        typeId: z.number(),
        currencyId: z.number(),
        price: z.number(),
        minPriceAlert: z.number(),
        maxPriceAlert: z.number(),
        favorite: z.boolean(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.stockTracker.create({
        data: {
          name: input.name,
          ticker: input.ticker,
          description: input.description,
          typeId: input.typeId,
          currencyId: input.currencyId,
          price: input.price,
          minPriceAlert: input.minPriceAlert,
          maxPriceAlert: input.maxPriceAlert,
          favorite: input.favorite,
        },
      });
    }),
  getAllStocksTracker: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.stockTracker.findMany({
      include: {
        currency: true,
        type: true,
      },
      where: {
        published: {
          not: null,
        },
      },
      orderBy: [
        {
          favorite: "desc",
        },
        {
          createdAt: "desc",
        },
      ],
    });
  }),
  handleFavorite: publicProcedure
    .input(
      z.object({
        stockId: z.number(),
        favorite: z.boolean().optional().default(false),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.stockTracker.update({
        where: { id: input.stockId },
        data: { favorite: input.favorite },
      });
    }),
});
