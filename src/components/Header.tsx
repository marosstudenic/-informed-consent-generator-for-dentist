import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ui/ModeToggle";
import Link from "next/link";

const Header = () => {
    return (
        <header className="container border-b">
            <div className="flex justify-between items-center h-16">
                <h1>Header</h1>
                <nav className="flex gap-4">
                    <Link href="/">Domov</Link>
                    <Link href="/consents">Všetky súhlasy</Link>
                    <Link href="/patients">Pacienti</Link>
                    <Link href="/patients/create">Vytvoriť pacienta</Link>
                    <Link href="/consents/create">Vytvoriť súhlas</Link>
                </nav>
                <div className="flex gap-4">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>

                    <ModeToggle />
                </div>
            </div>
        </header>
    );
};

export default Header;