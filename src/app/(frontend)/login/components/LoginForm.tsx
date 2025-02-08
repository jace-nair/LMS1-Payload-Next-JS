"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ReactElement, useState } from "react";

export default function LoginForm(): ReactElement {
    const [isPending, setIsPending] = useState(false);
    const [error, setErrorn] = useState<string | null>(null);
    const router = useRouter();

    return(
        <div className="min-h-full flex flex-col gap-8 justify-center items-center">
            <div className="text-3xl">
                Login
            </div>
            <div className="w-full mx-auto sm:max-w-sm">
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input className="w-full p-2 bg-black text-white border border-white/50 rounded-lg" id="email" type="email" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password">Password</label>
                        <input className="w-full p-2 bg-black text-white border border-white/50 rounded-lg" id="password" type="password" />
                    </div>
                </form>
            </div>
        </div>
    );
}