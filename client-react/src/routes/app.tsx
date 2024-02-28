import PackingLists from "@/components/packing-lists";
import { Button } from "@/components/ui/button";
import { Feather, Menu } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";

export default function App(): ReturnType<React.FC> {
  return (
    <div className="flex w-full h-full">
      <aside className="border-r">
        <div className="flex flex-col">
          <header className="border-b h-14 flex items-center">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-none h-14 w-14"
            >
              <Menu size="1.2rem" />
            </Button>
            <div className="flex gap-2 items-center px-4">
              <Feather size="1.5rem" className="text-primary" />
              <span className="text-md">PackLighter</span>
            </div>
          </header>
          <section className="px-2 py-2">
            <PackingLists />
          </section>
        </div>
      </aside>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
