import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [timeInterval, setTimeInterval] = useState("");
  console.log(timeInterval);
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const response = await fetch("/api/servo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ timeInterval }),
    });

    if (!response.ok) {
      // handle error
    }

    // handle success
  };
  console.log(handleSubmit);

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="grid gap-4 w-full max-w-sm items-center"
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
      </form>
    </div>
  );
}
