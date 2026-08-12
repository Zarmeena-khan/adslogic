"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { CONTACT_FORM_ID, CONTACT_SECTION_ID } from "@/lib/contactNavigation";

function scrollToContactTarget() {
  const hash = window.location.hash;

  if (hash !== `#${CONTACT_FORM_ID}` && hash !== `#${CONTACT_SECTION_ID}`) {
    return;
  }

  const target =
    document.getElementById(CONTACT_FORM_ID) ??
    document.getElementById(CONTACT_SECTION_ID);

  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function useContactScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = window.setTimeout(scrollToContactTarget, 150);

    window.addEventListener("hashchange", scrollToContactTarget);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToContactTarget);
    };
  }, [pathname]);
}
