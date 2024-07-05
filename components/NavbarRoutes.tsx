"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

const NavbarRoutes = () => {
  const pathname = usePathname();

  const isteacher = pathname?.startsWith("/teacher");
  const isplayer = pathname?.includes("/chapter");

  return (
    <div className="flex gap-x-2 ml-auto">
      {isteacher || isplayer ? (
        <Link href={"/"}>
          <Button size={"sm"} variant={"ghost"}>
            <LogOut className="size-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href={"/teacher/courses"}>
          <Button size={"sm"} variant={"ghost"}>
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default NavbarRoutes;
