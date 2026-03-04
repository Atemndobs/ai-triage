import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SuccessPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Checkout started successfully</CardTitle>
          <CardDescription>
            Your Stripe test checkout is complete. You can now return to the landing page or contact sales for enterprise rollout.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button asChild>
            <Link href="/">Back to homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#demo">Talk to sales</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
