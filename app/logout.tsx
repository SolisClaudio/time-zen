'use client';

import { signOut } from "next-auth/react";

export default function Logout() {
    // Compare this snippet from app/logout.tsx:
    return (
        <span onClick={() => 
            signOut()
            }
        >
            Logout
        </span>
    )

}
