import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export const CreatePostWizard = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex w-full gap-3">
      <Image
        src={user.imageUrl}
        alt="Profile image"
        width={56}
        height={56}
        className="rounded-full"
      />
      <input
        type="text"
        placeholder="What are you thinking?"
        className="grow bg-transparent outline-none"
      />
    </div>
  );
};
