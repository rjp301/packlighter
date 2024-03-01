import { getItems } from "@/api/item";
import { Collections, ItemsResponse } from "@/lib/types";
import React from "react";
import { useQuery } from "react-query";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import Loader from "./base/loader";
import { Button } from "./ui/button";
import { ArrowDownWideNarrow, Table } from "lucide-react";
import PackingItem from "./packing-item";
import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "@/lib/store";
import Error from "./base/error";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

enum SortOptions {
  Name = "Name",
  Description = "Description",
  Weight = "Weight",
}

const sortingFunction = (option: SortOptions) => {
  switch (option) {
    case SortOptions.Name:
      return (a: ItemsResponse, b: ItemsResponse) =>
        a.name.localeCompare(b.name);
    case SortOptions.Description:
      return (a: ItemsResponse, b: ItemsResponse) =>
        a.description.localeCompare(b.description);
    case SortOptions.Weight:
      return (a: ItemsResponse, b: ItemsResponse) => a.weight - b.weight;
  }
};

const filterItems = (item: ItemsResponse, query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  return (
    item.name.toLowerCase().includes(lowerCaseQuery) ||
    item.description.toLowerCase().includes(lowerCaseQuery)
  );
};

const PackingItems: React.FC = () => {
  const { toggleSidebar } = useStore();

  const itemsQuery = useQuery<ItemsResponse[], Error>({
    queryKey: [Collections.Items],
    queryFn: getItems,
  });

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sortOption, setSortOption] = React.useState<SortOptions>(
    SortOptions.Name
  );
  const [filterQuery, setFilterQuery] = React.useState("");

  return (
    <div className="p-4 flex flex-col gap-2 h-full flex-1 overflow-hidden">
      <header className="flex gap-2 flex-col">
        <div className="flex justify-between items-center w-full">
          <span className="font-semibold text-sm">Gear</span>
          <Button
            size="sm"
            variant={pathname === "/gear" ? "secondary" : "linkMuted"}
            onClick={() => {
              navigate("/gear");
              toggleSidebar(false);
            }}
          >
            <Table size="1rem" className="mr-2" />
            All Gear
          </Button>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Filter..."
            className="bg-card"
            value={filterQuery}
            onChange={(ev) => setFilterQuery(ev.target.value)}
          />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="secondary" size="icon">
                      <ArrowDownWideNarrow size="1rem" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Sort Gear</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Sort Gear</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={sortOption}
                onValueChange={(v) => setSortOption(v as SortOptions)}
              >
                {Object.values(SortOptions).map((option) => (
                  <DropdownMenuRadioItem key={option} value={option}>
                    {option}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <Card className="flex-1 h-full overflow-y-auto">
        {itemsQuery.isLoading && <Loader />}
        {itemsQuery.isError && <Error message={itemsQuery.error.message} />}
        {itemsQuery.isSuccess &&
          itemsQuery.data
            .filter((item) => filterItems(item, filterQuery))
            .sort(sortingFunction(sortOption))
            .map((item) => <PackingItem key={item.id} item={item} />)}
      </Card>
    </div>
  );
};

export default PackingItems;
