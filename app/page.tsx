import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  MessageSquareMore,
  Route,
  ShieldCheck,
  Users
} from "lucide-react";

import { DemoForm } from "@/components/demo-form";
import { PricingSection } from "@/components/pricing-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featureItems = [
  {
    title: "AI-powered routing",
    description: "Automatically classify urgency, intent, and ownership in seconds.",
    icon: Bot
  },
  {
    title: "Multi-channel ingestion",
    description: "Email, Slack, WhatsApp, and SMS sync into one triage brain.",
    icon: MessageSquareMore
  },
  {
    title: "Real-time analytics",
    description: "Track queue health, response times, and deflection as it happens.",
    icon: BarChart3
  },
  {
    title: "Team performance tracking",
    description: "Measure throughput and handoff quality by rep, queue, or shift.",
    icon: Users
  },
  {
    title: "Custom routing rules",
    description: "Blend AI confidence with your own workflow logic and SLAs.",
    icon: Route
  },
  {
    title: "Tool integrations",
    description: "Connect your existing ticketing and CRM stack without migration pain.",
    icon: ShieldCheck
  }
];

const workflowSteps = [
  {
    title: "Ingest",
    detail: "Tickets from Email, Slack, WhatsApp, and SMS are captured in one pipeline."
  },
  {
    title: "Classify",
    detail: "AI detects urgency, sentiment, topic, and the best team owner in seconds."
  },
  {
    title: "Route",
    detail: "Rules + confidence scoring push each case to the right queue instantly."
  }
];

const testimonials = [
  {
    quote: "AI Triage cut our manual sorting by 78% in week one.",
    name: "Placeholder Customer",
    title: "Head of Support, SaaSCo"
  },
  {
    quote: "We finally route high-priority issues instantly across channels.",
    name: "Placeholder Customer",
    title: "Operations Lead, Fintech Group"
  },
  {
    quote: "The analytics gave us immediate clarity on staffing bottlenecks.",
    name: "Placeholder Customer",
    title: "CX Director, Marketplace Brand"
  }
];

export default function Home() {
  return (
    <main className="pb-10">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border/80 bg-card/35 px-6 py-12 backdrop-blur md:px-12">
          <Badge variant="secondary" className="mb-6">
            Built for modern support teams
          </Badge>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Stop Drowning in Support Tickets
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            AI Triage Routes Everything Instantly - Save 10+ Hours/Week
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="#pricing">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#demo">Schedule Demo</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <Card className="bg-secondary/25">
              <CardContent className="pt-6">
                <p className="text-2xl font-semibold">10+ hrs</p>
                <p className="text-sm text-muted-foreground">Saved per week</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/25">
              <CardContent className="pt-6">
                <p className="text-2xl font-semibold">4 channels</p>
                <p className="text-sm text-muted-foreground">Email, Slack, WhatsApp, SMS</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/25">
              <CardContent className="pt-6">
                <p className="text-2xl font-semibold">Real-time</p>
                <p className="text-sm text-muted-foreground">Operational analytics</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <Activity className="h-5 w-5 text-accent" />
          <h2 className="text-2xl font-semibold">Features</h2>
        </div>
        <div className="mb-6 grid gap-4 rounded-2xl border border-border/80 bg-card/40 p-4 md:grid-cols-3 md:p-6">
          {workflowSteps.map((step, index) => (
            <div key={step.title}>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Step {index + 1}</p>
              <p className="mt-1 text-base font-semibold">{step.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featureItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <PricingSection />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <Badge variant="secondary" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-semibold">Trusted by fast-moving support teams</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.title}>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">“{testimonial.quote}”</p>
                <p className="mt-6 text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <DemoForm />
    </main>
  );
}
