"use server";
import { signIn } from "@/auth"

const handleSignInGoogle = async () => {
    try {
        "use server"
        await signIn("google");
    } catch (error) {
        console.error('Error signing in with Google:', error);
    }
};

export default handleSignInGoogle;