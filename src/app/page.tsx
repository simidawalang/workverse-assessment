"use client";

import { useAppContext } from "@/context";
import Image from "next/image";
import { FormEvent } from "react";

export default function Home() {
  const { todoList } = useAppContext();
  
  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    
    
  }
  return (
    <main className="h-screen p-4">
      {todoList.length !== 0 && 
        todoList.map(({ id, task }: any, i: number) => <div key={id}>{i + 1}. {task}</div >)}
<p>{process.env.app_id}</p>

<form>
<input />
</form>
    </main>
  );
}
