import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const getStorageLink = ({ fileId }: { fileId: string }) => {
  console.log(process.env, "process.env")
  return `https://reliable-caterpillar-771.convex.cloud/api/storage/${fileId}`
}