import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";

export default function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg", className)}>
      <AnimatedList />
    </div>
  );
}