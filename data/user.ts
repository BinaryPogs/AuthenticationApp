import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    if (!email) {
        console.error('No email provided');
        return null;
    }

    try {
        const user = await db.user.findUnique({ where: { email } });
        return user;
    } catch (error) {
        console.error('Failed to retrieve user by email:', error);
        return null;
    }
}

export const getUserById = async (id: string | undefined) => {
    if (!id) {
        console.error('No ID provided');
        return null;
    }

    try {
        const user = await db.user.findUnique({ where: { id } });
        return user;
    } catch (error) {
        console.error('Failed to retrieve user by ID:', error);
        return null;
    }
}