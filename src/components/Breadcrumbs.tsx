"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ROUTE_LABELS: Record<string, string> = {
  dashboard: "about",
  cause: "Cause List",
  cases: "Cases",
  details: "Case Details",
  admin: "Admin",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  let currentPath = "";

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-center">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>

        {segments.map((segment, index) => {
          currentPath += `/${segment}`;
          const isLast = index === segments.length - 1;

          const label =
            ROUTE_LABELS[segment] ??
            segment.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

          return isLast ? (
            <li
              key={segment}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {label}
            </li>
          ) : (
            <li key={segment} className="breadcrumb-item">{label}
              {/* <Link href={currentPath}>{label}</Link> */}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}