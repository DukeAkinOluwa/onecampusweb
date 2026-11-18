import {
  CalendarCheck2,
  CheckCircle2,
  Circle,
  Clock3,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Illustrative HTML/CSS dashboard previews (no real product screenshots
 * available yet). All data is clearly sample content.
 */

const sidebarItems = [
  { label: "Dashboard", active: true },
  { label: "My Tasks" },
  { label: "Study Squad" },
  { label: "Resources" },
];

const tasks = [
  { title: "Draft lab report", course: "BIO 201", state: "done" },
  { title: "Read chapter 4 summary", course: "ECO 105", state: "today" },
  { title: "Prepare presentation slides", course: "Group project", state: "upcoming" },
  { title: "Review lecture notes", course: "CSC 102", state: "upcoming" },
];

const week = ["M", "T", "W", "T", "F", "S", "S"];

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn("panel-large overflow-hidden text-left", className)}
      role="img"
      aria-label="Illustrative preview of a OneCampus dashboard with sample tasks, schedule, and progress"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border-subtle bg-secondary/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
        <span className="ml-2 hidden rounded-md bg-card px-3 py-1 text-[10px] font-medium text-muted-foreground sm:block">
          app.onecampus.example — sample preview
        </span>
      </div>

      <div className="flex min-h-[340px] bg-background">
        {/* Sidebar */}
        <aside className="hidden w-40 shrink-0 flex-col gap-1 border-r border-border-subtle bg-card p-3 md:flex">
          {sidebarItems.map((item) => (
            <span
              key={item.label}
              className={cn(
                "rounded-lg px-3 py-2 text-[11px] font-semibold",
                item.active
                  ? "bg-primary-soft text-primary"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </span>
          ))}
          <span className="mt-auto rounded-lg bg-primary-soft px-3 py-2 text-[10px] font-medium leading-snug text-primary">
            Sample content for illustration
          </span>
        </aside>

        {/* Main column */}
        <div className="flex-1 p-4 md:p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[13px] font-bold text-heading">Good morning, Ada</p>
              <p className="text-[10px] text-muted-foreground">
                Tuesday — 3 tasks due this week
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-md bg-primary-soft px-2 py-1 text-[10px] font-semibold text-primary">
              <Sparkles className="size-3" aria-hidden="true" />
              Study support
            </span>
          </div>

          {/* Stat chips */}
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { label: "Due today", value: "2" },
              { label: "This week", value: "5" },
              { label: "Done", value: "12" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-border-subtle bg-card px-2.5 py-2"
              >
                <p className="text-sm font-bold text-heading">{stat.value}</p>
                <p className="text-[9px] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Task list */}
          <div className="mt-3 rounded-xl border border-border-subtle bg-card p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              My tasks
            </p>
            <ul className="mt-2 grid gap-1.5">
              {tasks.map((task) => (
                <li
                  key={task.title}
                  className="flex items-center gap-2 rounded-lg border border-border-subtle/70 px-2.5 py-2"
                >
                  {task.state === "done" ? (
                    <CheckCircle2
                      className="size-3.5 shrink-0 text-success"
                      aria-hidden="true"
                    />
                  ) : task.state === "today" ? (
                    <Circle className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                  ) : (
                    <Circle className="size-3.5 shrink-0 text-border-interactive" aria-hidden="true" />
                  )}
                  <span
                    className={cn(
                      "flex-1 truncate text-[11px] font-medium",
                      task.state === "done"
                        ? "text-muted-foreground line-through"
                        : "text-heading",
                    )}
                  >
                    {task.title}
                  </span>
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.5 text-[9px] font-semibold",
                      task.state === "today"
                        ? "bg-primary-soft text-primary"
                        : "bg-secondary text-muted-foreground",
                    )}
                  >
                    {task.course}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column */}
        <aside className="hidden w-44 shrink-0 flex-col gap-3 border-l border-border-subtle bg-card p-4 lg:flex">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              This week
            </p>
            <div className="mt-2 grid grid-cols-7 gap-1 text-center">
              {week.map((d, i) => (
                <span key={i} className="text-[9px] font-medium text-muted-foreground">
                  {d}
                </span>
              ))}
              {Array.from({ length: 14 }, (_, i) => (
                <span
                  key={i}
                  className={cn(
                    "flex h-5 items-center justify-center rounded text-[9px] font-semibold",
                    i === 1 || i === 9
                      ? "bg-primary text-primary-foreground"
                      : i === 3
                        ? "bg-primary-soft text-primary"
                        : "text-muted-foreground",
                  )}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-border-subtle p-2.5">
            <p className="flex items-center gap-1.5 text-[10px] font-semibold text-heading">
              <CalendarCheck2 className="size-3.5 text-primary" aria-hidden="true" />
              Upcoming
            </p>
            <ul className="mt-1.5 grid gap-1 text-[10px] text-muted-foreground">
              <li className="flex items-center justify-between">
                <span>ECO 105 quiz</span>
                <span className="font-semibold text-primary">Fri</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Lab report</span>
                <span className="font-semibold text-success">Done</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border-subtle p-2.5">
            <p className="flex items-center gap-1.5 text-[10px] font-semibold text-heading">
              <UsersRound className="size-3.5 text-primary" aria-hidden="true" />
              Study Squad
            </p>
            <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
              Group session: Thursday, 4:00 pm
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-heading">Weekly progress</p>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[68%] rounded-full bg-primary" />
            </div>
            <p className="mt-1 text-[9px] text-muted-foreground">68% of tasks completed</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

/** Compact single-column mobile preview, used overlapping the desktop mockup. */
export function MobileDashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-44 overflow-hidden rounded-2xl border border-border-subtle bg-card shadow-[0_12px_36px_rgba(16,35,79,0.12)]",
        className,
      )}
      role="img"
      aria-label="Illustrative preview of OneCampus on a phone with sample tasks"
    >
      <div className="border-b border-border-subtle bg-secondary/60 px-3 py-2">
        <p className="text-[9px] font-semibold text-heading">My Tasks</p>
      </div>
      <div className="grid gap-1.5 p-3">
        {tasks.slice(0, 3).map((task) => (
          <div
            key={task.title}
            className="flex items-center gap-1.5 rounded-lg border border-border-subtle/70 px-2 py-1.5"
          >
            {task.state === "done" ? (
              <CheckCircle2 className="size-3 shrink-0 text-success" aria-hidden="true" />
            ) : (
              <Circle className="size-3 shrink-0 text-primary" aria-hidden="true" />
            )}
            <span className="truncate text-[9px] font-medium text-heading">
              {task.title}
            </span>
          </div>
        ))}
        <div className="mt-1 flex items-center gap-1.5 rounded-lg bg-primary-soft px-2 py-1.5">
          <Clock3 className="size-3 text-primary" aria-hidden="true" />
          <span className="text-[9px] font-semibold text-primary">4:00 pm · Squad</span>
        </div>
      </div>
    </div>
  );
}
