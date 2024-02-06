import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const [timeInterval, setTimeInterval] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setMessage("Sending...");
    setError("");

    const response = await fetch("/api/servo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ timeInterval }),
    });

    if (!response.ok) {
      setError("An error occurred. Please try again.");
    } else {
      setMessage("Time interval set successfully!");
    }
    router.refresh();
  };

  return (
    <div className="flex items-center justify-center h-screen p-4">
      <form
        className="grid gap-4 w-full max-w-sm items-center p-4 bg-white shadow rounded"
        onSubmit={handleSubmit}
      >
        <Label htmlFor="time-interval">Set Time Interval (in minutes)</Label>
        <Input
          id="time-interval"
          min="1"
          placeholder="Enter time interval"
          type="number"
          value={timeInterval}
          onChange={(e) => setTimeInterval(e.target.value)}
        />
        <Button type="submit">Confirm</Button>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
