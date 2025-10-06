import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ITopic } from "@/utils/interfaces/ITopic";
import Link from "next/link";

export default function Topic({ id, title, description, content }: ITopic) {
  return (
    <Link
      // className="px-2 py-1 bg-gray-500 text-white rounded cursor-pointer"
      href={`/topic/${id}`}
    >
      <Card className={`w-full`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
