import { LoaderIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function Loader() {
  return (
    <div className={cn("flex justify-center items-center w-full h-full")}>
      <LoaderIcon className={cn("animate-spin size-8")} />
    </div>
  );
}
