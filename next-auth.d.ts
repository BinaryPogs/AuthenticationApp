import NextAuth, { type DefaultSession } from "next-auth";

// We extend the DefaultSession["user"] object to contain a role
export type ExtendedUser = DefaultSession["user"] & {
    role: "ADMIN" | "USER"
    isTwoFactorEnabled: boolean
};

declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}

import { JWT } from "@auth/core/jwt"

declare module "@auth/core/jwt" {
    interface JWT {
        role?: "ADMIN" | "USER"
    }
}