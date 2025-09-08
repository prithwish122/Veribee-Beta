import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles with blue gradient
      "bg-gradient-to-br from-blue-50 via-white to-blue-100 [box-shadow:0_0_0_1px_rgba(255,255,255,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles with blue gradient and blue border hover
      "transform-gpu dark:bg-gradient-to-br dark:from-blue-950/20 dark:via-slate-900 dark:to-blue-900/30 dark:[border:1px_solid_rgba(59,130,246,.2)] dark:[box-shadow:0_-20px_80px_-20px_#3b82f61f_inset] dark:hover:[border:1px_solid_rgba(59,130,246,.5)]",
      // blue border hover for light mode
      "border border-blue-200/50 hover:border-blue-400/70 transition-colors duration-300",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-foreground">
        {name}
      </h3>
      <p className="max-w-lg text-muted-foreground">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-slate-600/50 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:border-blue-300/50 dark:hover:border-blue-400/30 transition-all duration-300">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-blue-500/5 group-hover:via-transparent group-hover:to-transparent" />
  </div>
);

export { BentoCard, BentoGrid };