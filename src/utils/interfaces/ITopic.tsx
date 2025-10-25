import { ITopicComment } from "@/utils/interfaces/ITopicComment";

export interface ITopic {
  id: number;
  title: string;
  description?: string;
  content: string;

  comments?: ITopicComment[];
}
