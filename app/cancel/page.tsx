import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CancelPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl items-center px-4 py-20 sm:px-6 lg:px-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Checkout canceled</CardTitle>
          <CardDescription>No worries. You can choose another plan or schedule a guided demo anytime.</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button asChild>
            <Link href="/#pricing">Back to pricing</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/#demo">Schedule demo</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
