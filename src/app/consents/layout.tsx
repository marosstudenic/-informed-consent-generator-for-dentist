"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

const ConsentsLayout = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        return <div className="min-h-screen mt-5">Získavam dáta...</div>;
    }

    if (!isAuthenticated) {
        return redirect("/");
    }

    return <>{children}</>;
};

export default ConsentsLayout;