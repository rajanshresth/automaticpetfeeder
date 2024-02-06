/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/LNpxjnYjyh6
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <div className="grid gap-4 w-full max-w-sm items-center">
      <Label htmlFor="time-interval">Set Time Interval (in minutes)</Label>
      <Input id="time-interval" min="1" placeholder="Enter time interval" type="number" />
      <Button type="submit">Confirm</Button>
    </div>
  )
}
