import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import AccountEditor from "./account-editor";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

type Props = React.PropsWithChildren;

export default function AppHeader(props: Props): ReturnType<React.FC<Props>> {
  const { children } = props;
  return (
    <header className="flex h-14 items-center border-b">
      <Button
        size="icon"
        className={cn("h-14 w-14 rounded-none transition-all")}
        variant="ghost"
      >
        <Menu size="1.2rem" />
      </Button>
      <div className="flex w-full items-center gap-4 p-4">
        <div className="flex flex-1 items-center justify-between">
          {children}
        </div>
        <ModeToggle />
        <AccountEditor />
      </div>
    </header>
  );
}
