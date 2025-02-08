import { Heading1 } from "lucide-react";
import { ReactElement } from "react";
import LoginForm from "./components/LoginForm";

export default async function LoginPage(): Promise<ReactElement> {
    return(
        <div className="h-[calc(100vh-20rem)]">
            <LoginForm></LoginForm>
        </div>
    );
}