import db from "@/db/drizzle";
import { privateProcedure, router } from "../trpc";
import {
  categoriesItemsTable,
  categoriesTable,
  categorySchema,
} from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const categoriesRouter = router({
  delete: privateProcedure.input(z.string()).mutation(async ({ input }) => {
    const deleted = await db
      .delete(categoriesTable)
      .where(eq(categoriesTable.id, input))
      .returning();
    return deleted[0];
  }),
  create: privateProcedure
    .input(z.object({ listId: z.string() }))
    .mutation(async ({ input }) => {
      const created = await db
        .insert(categoriesTable)
        .values({ list: input.listId })
        .returning();
      return created[0];
    }),
  update: privateProcedure
    .input(z.object({ id: z.string(), value: categorySchema.partial() }))
    .mutation(async ({ input }) => {
      const updated = await db
        .update(categoriesTable)
        .set(input.value)
        .where(eq(categoriesTable.id, input.id))
        .returning();
      return updated[0];
    }),
  reorder: privateProcedure
    .input(z.array(z.string()))
    .mutation(async ({ input }) => {
      await Promise.all(
        input.map((id, idx) =>
          db
            .update(categoriesTable)
            .set({ sortOrder: idx + 1 })
            .where(eq(categoriesTable.id, id))
        )
      );
    }),
  togglePacked: privateProcedure
    .input(z.object({ id: z.string(), value: z.boolean().optional() }))
    .mutation(async ({ input }) => {
      const categoryItems = await db
        .select()
        .from(categoriesItemsTable)
        .where(eq(categoriesItemsTable.category, input.id));

      const fullyPacked = categoryItems.every((item) => item.packed);
      const newValue = input.value ?? !fullyPacked;

      await db
        .update(categoriesItemsTable)
        .set({ packed: newValue })
        .where(eq(categoriesItemsTable.category, input.id));
    }),
});

export default categoriesRouter;
