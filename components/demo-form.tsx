"use client";

import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type DemoState = {
  loading: boolean;
  message: string | null;
  isError: boolean;
};

export function DemoForm() {
  const [state, setState] = useState<DemoState>({
    loading: false,
    message: null,
    isError: false
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    try {
      setState({ loading: true, message: null, isError: false });

      const response = await fetch("/api/demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const body = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(body.error ?? "Could not submit the demo request.");
      }

      setState({
        loading: false,
        message: body.message ?? "Thanks! We will reach out within one business day.",
        isError: false
      });

      form.reset();
    } catch (error) {
      setState({
        loading: false,
        message: error instanceof Error ? error.message : "Something went wrong.",
        isError: true
      });
    }
  };

  return (
    <section id="demo" className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Book a Demo</CardTitle>
          <CardDescription>Tell us your support setup and we’ll build your AI triage rollout plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Jane Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="jane@company.com" type="email" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" placeholder="Acme Support Ops" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="What channels and ticket volume do you handle today?"
                required
              />
            </div>
            <Button size="lg" type="submit" disabled={state.loading} className="w-full sm:w-auto">
              {state.loading ? "Submitting..." : "Schedule Demo"}
            </Button>
            {state.message ? (
              <p className={state.isError ? "text-sm text-destructive" : "text-sm text-emerald-400"} role="status">
                {state.message}
              </p>
            ) : null}
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
