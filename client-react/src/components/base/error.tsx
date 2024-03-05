import { Bug } from "lucide-react";
import React from "react";
import { ErrorResponse, Link, isRouteErrorResponse } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";

interface Props {
  error: Error | ErrorResponse | null;
  showGoHome?: boolean;
  retry?: () => void;
}

const Error: React.FC<Props> = (props) => {
  const { error, showGoHome, retry } = props;

  const status = error && "status" in error ? error.status : 500;
  const message = isRouteErrorResponse(error)
    ? error.statusText
    : error?.message ??
      "An unknown error occurred. Please try again later or contact support.";

  return (
    <div className="flex-1 flex items-center justify-center h-full">
      <div className="flex flex-col gap-4 max-w-sm w-full p-4 max-h-[50%] h-full">
        <div className="flex flex-row gap-4 items-center">
          <Bug size="3rem" className="text-primary flex-shrink-0" />
          <div className="flex flex-col">
            <h2 className="font-bold mr-2 text-lg">
              <span className="">{status} Error</span>
            </h2>
            <p className="text-muted-foreground text-sm">{message}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {retry && <Button onClick={() => retry()}>Retry</Button>}
          {showGoHome && (
            <Link className={buttonVariants({ variant: "secondary" })} to="/">
              Go Home
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Error;
