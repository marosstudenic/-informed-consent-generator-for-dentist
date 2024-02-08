"use client";

import { SignInButton, SignOutButton, auth, useSession } from "@clerk/nextjs";
import { useAction, useMutation, useQuery } from "convex/react";
import Image from "next/image";
import { api } from "../../convex/_generated/api"
import Header from "@/components/Header";
import { UploadButton, UploadFileResponse } from "@xixixao/uploadstuff/react";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";


const Thumbnail = ({ image, setImage, title }: { image: string | null, setImage: Dispatch<SetStateAction<string | null>>, title: string }) => {
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);

  return (
    <div>
      <h2 className="text-xl font-bold">{title}</h2>

      {
        image && <Image src={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${image}`} width={200} height={200} alt="" /> ||
        <UploadButton
          uploadUrl={generateUploadUrl}
          fileTypes={[".pdf", "image/*"]}
          onUploadComplete={async (uploaded: UploadFileResponse[]) => {
            setImage((uploaded[0].response as any).storageId);
          }}
          onUploadError={(error: unknown) => {
            // Do something with the error.
            alert(`ERROR! ${error}`);
          }}
        />
      }
    </div >
  )
}

export default function Home() {
  const { isSignedIn } = useSession();
  const createConsent = useMutation(api.consents.createConsent);
  const [imageA, setImageA] = useState<string | null>(null);
  const [imageB, setImageB] = useState<string | null>(null);
  const consents = useQuery(api.consents.getConsents);

  return (
    <>
      <main className='container'>
        <div className="max-w-md">
          <h1 className="text-2xl mt-16">Vytvor informovaný súhlas so všetkým čo k tomu patrí a informuj pacienta o procedúre a rizikách</h1>
          <p className="text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maiores alias libero dolores voluptates quae, recusandae commodi vel quas possimus molestias id iure. Odio suscipit, delectus labore ipsum maxime consectetur.
          </p>
        </div>

        <div className="grid grid-cols-2 mt-8">
          <Thumbnail image={imageA} setImage={setImageA} title="test a" />
          <Thumbnail image={imageB} setImage={setImageB} title="test b" />
        </div >


      </main >
    </>
  );
}
