import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ITopicComment } from "@/utils/interfaces/ITopicComment";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

export default function Comment({
  topicComment,
  deleteComment,
}: {
  topicComment?: ITopicComment;
  deleteComment: (commentId: number) => void;
}) {
  return (
    <Card className="p-3 gap-0">
      <CardHeader className="p-0 m-0">
        <CardTitle>
          <div className="flex flex-row gap-2 items-center">
            <Avatar>
              <AvatarImage
                className="rounded-sm"
                src="https://github.com/evilrabbit.png"
                width={30}
                height={30}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Person</p>
          </div>
        </CardTitle>
        <CardAction>
          <Image
            className="cursor-pointer"
            src="/trash.svg"
            width={18}
            height={18}
            alt="Icon to delete comment."
            onClick={() => deleteComment(topicComment!.id)}
          />
        </CardAction>
      </CardHeader>
      <CardContent className="px-2">{topicComment?.comment}</CardContent>
    </Card>
  );
}
