"use client";

//import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FormEvent, ReactElement, useState } from "react";
import SubmitButton from "../../components/SubmitButton";
import { login, LoginResponse } from "../actions/login";

export default function LoginForm(): ReactElement {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsPending(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const result: LoginResponse = await login({ email, password});

        setIsPending(false);

        if (result.success) {
            router.push("/dashboard");
        } else {
            setError(result.error || "An error occurred");
        }
    }

    return(
        <div className="min-h-full flex flex-col gap-8 justify-center items-center">
            <div className="text-3xl">
                Login
            </div>
            <div className="w-full mx-auto sm:max-w-sm">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input className="w-full p-2 bg-black text-white border border-white/50 rounded-lg" id="email" name="email" type="email" />
                    </div>
                    <div className="flex flex-col gap-2 mb-8">
                        <label htmlFor="password">Password</label>
                        <input className="w-full p-2 bg-black text-white border border-white/50 rounded-lg" id="password" name="password" type="password" />
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <SubmitButton loading={isPending} text="Login" />
                </form>
                <p className="mt-10 text-center text-sm text-gray-400">
                    Dont't have an account? <a href="/signup" className="text-blue-500">Signup</a>
                </p>
            </div>
        </div>
    );
}