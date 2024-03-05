import { getItems } from "@/api/item";
import AppHeader from "@/components/app-header";
import Loader from "@/components/base/loader";
import { DataTable } from "@/components/gear-table/data-table";
import { Collections } from "@/lib/types";
import React from "react";
import { useQuery } from "react-query";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { columns } from "../components/gear-table/columns";

export default function GearPage(): ReturnType<React.FC> {
  const itemsQuery = useQuery({
    queryKey: [Collections.Items],
    queryFn: getItems,
  });

  return (
    <div className="h-full flex flex-col">
      <AppHeader>
        <span className="font-semibold">Gear Catalogue</span>
        <div className="flex gap-4 items-center border-r pr-4">
          <Button variant="secondary">
            <Plus size="1rem" className="mr-2" />
            Add Item
          </Button>
        </div>
      </AppHeader>
      {itemsQuery.isSuccess && (
        <div className="overflow-auto px-4 py-2">
          <DataTable columns={columns} data={itemsQuery.data} />
        </div>
      )}
      {itemsQuery.isLoading && <Loader />}
    </div>
  );
}
