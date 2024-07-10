import { pusher } from "@/lib/pusher";

export default async function handler(req: any, res: any) {
  const { username, todo } = req.body;
  
  await pusher.trigger("presence-channel", "todo-update", { username, todo });
  
  res.json({ status: 200 });
}