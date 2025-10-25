"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MenuOption from "@/components/side-menu/menu-option/MenuOption";

interface Options {
  [key: string]: {
    path: string;
    icon: string;
    alt: string;
    text: string;
    currentPath: boolean;
  };
}

export default function SideMenu() {
  const pathname = usePathname();
  const [options, setOptions] = useState<Options>({
    home: {
      path: "/",
      icon: "/home.svg",
      alt: "Initial page icon.",
      text: "Página Inicial",
      currentPath: false,
    },
  });

  useEffect(() => {
    setOptions((prev) =>
      Object.fromEntries(
        Object.entries(prev).map(([key, option]) => [
          key,
          { ...option, currentPath: option.path === pathname },
        ])
      )
    );
  }, [pathname]);

  return (
    <section className="flex flex-col p-5 w-85 h-screen items-end flex-nowrap gap-8">
      <MenuOption
        icon={options.home.icon}
        alt={options.home.alt}
        text={options.home.text}
        currentPath={options.home.currentPath}
      />
    </section>
  );
}
