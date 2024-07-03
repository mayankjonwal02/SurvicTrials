"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('/API/hello1')
      const data = await response.json()
      setData(data.message)
    }

    fetchMessage()
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-black">{data}</div>
    </main>
  );
}
