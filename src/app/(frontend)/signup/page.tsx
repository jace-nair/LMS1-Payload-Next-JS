import { ReactElement } from "react";
import SignupForm from "./components/SignupForm";

export default async function SignupPage(): Promise<ReactElement> {
    return(
        <div className="h-[calc(100vh-20rem)]">
            <SignupForm></SignupForm>
        </div>
    );
}