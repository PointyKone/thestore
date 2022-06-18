import * as trpc from '@trpc/server';
import { prisma } from '../../db/client';
import { z } from 'zod';

export const appRouter = trpc.router()
  .query('featured', {
    async resolve() {
      const data = await prisma.Category.findUnique({
        where: {
          id: 3
        },
        select: {
          products: true
        }
      });

      return data.products;
    }
  })

// export type definition of API
export type AppRouter = typeof appRouter;