import type { RouterOutputs } from "~/utils/api";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export const PostView = (props: PostWithUser) => {
  const { post, author } = props;

  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4">
      <Image
        src={author.profilePicture}
        alt={`${author.username}'s profile picture`}
        width={56}
        height={56}
        className="rounded-full"
      />
      <div className="flex flex-col ">
        <div className="flex gap-1 text-slate-300">
          <span className="font-semibold">{`${
            author.username || `${author.firstName}${author.lastName}`
          }`}</span>{" "}
          · <span className="font-thin">{dayjs(post.createdAt).fromNow()}</span>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
};
