"use client";

import { SignInButton, SignOutButton, auth, useSession } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api"

export default function Home() {
  const { isSignedIn } = useSession();
  const createConsent = useMutation(api.consents.createConsent);
  return (
    <main>
      {isSignedIn ?
        <SignOutButton /> :
        <SignInButton />}


      {isSignedIn &&
        <form onSubmit={(e) => {
          e.preventDefault();
          const htmlForm = e.target as HTMLFormElement;
          const form = new FormData(e.target as HTMLFormElement);
          const name = form.get("name") as string;
          createConsent({
            name
          });
          htmlForm.reset();
        }}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="text-black" />
          <button type="submit">Submit</button>
        </form>
      }
    </main>
  );
}
