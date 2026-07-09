"use client";

import Link from "next/link";
import { QuestionIcon, SignOutIcon } from "@phosphor-icons/react";

import { useUser } from "@/shared/hooks/useUser";

export function FooterMenu() {
  const { signOut } = useUser();

  return (
    <footer className="mt-auto flex flex-col gap-6 p-8 border-t border-t-gscale-400 text-primary-100 *:hover:text-primary-200">
      <Link href="/help" className="flex items center text-xl gap-2">
        <QuestionIcon size={32} />
        <p>Help</p>
      </Link>

      <div onClick={signOut} className="flex items center text-xl gap-2 cursor-pointer">
        <SignOutIcon size={32} />
        <p>Sign Out</p>
      </div>
    </footer>
  );
}
