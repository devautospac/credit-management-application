"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import useAuthStore from "@/lib/store/useAuthStore";

export default function Test({ currentUser }) {
  const router = useRouter();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (!currentUser && !isLoggedIn) {
      router.push("/login");
    }
  }, [currentUser, isLoggedIn, router]);

  return <div className="p-4 flex justify-start items-center gap-2"></div>;
}
