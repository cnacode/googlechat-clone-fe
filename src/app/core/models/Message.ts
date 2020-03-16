export class Message {
  id: string;
  body: string;
  createdAt: Date | { toLocaleDateString };
  owner: string;
  numberOfReplies: number;
}
