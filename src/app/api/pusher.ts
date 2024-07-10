import { pusher } from "@/lib/pusher";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: any, res: NextResponse) {
  const { socket_id, channel_name, username } = req.body;
  
  const random_string = Math.random().toString(36).slice(2);
  
  const presenceData = {
    user_id: random_string,
    user_info: {
      username
    }
  }
  
  try{
    const auth = pusher.authenticate(socket_id, channel_name, presenceData);
  }catch(e) {
    console.log(e)
  }
}