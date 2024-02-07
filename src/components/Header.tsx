import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ui/ModeToggle";

const Header = () => {
    return (
        <header className="container border-b">
            <div className="flex justify-between items-center h-16">
                <h1>Header</h1>
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