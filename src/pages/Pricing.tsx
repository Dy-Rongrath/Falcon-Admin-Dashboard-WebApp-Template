import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Check,
  X,
  Star,
  Zap,
  Crown,
  Shield,
  Users,
  BarChart3,
  HelpCircle,
  ArrowRight,
  CreditCard,
  DollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  icon: React.ComponentType<{ className?: string }>;
  popular?: boolean;
  features: {
    name: string;
    included: boolean;
    limit?: string;
  }[];
  buttonText: string;
  buttonVariant: "default" | "outline";
}

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small projects and personal use",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Zap,
    features: [
      { name: "Up to 3 projects", included: true, limit: "3 projects" },
      { name: "Basic dashboard", included: true },
      { name: "Standard components", included: true },
      { name: "Community support", included: true },
      { name: "Basic analytics", included: true },
      { name: "Advanced analytics", included: false },
      { name: "Team collaboration", included: false },
      { name: "Priority support", included: false },
      { name: "Custom integrations", included: false },
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outline",
  },
  {
    id: "professional",
    name: "Professional",
    description: "Best for growing teams and businesses",
    monthlyPrice: 29,
    yearlyPrice: 290,
    icon: Users,
    popular: true,
    features: [
      { name: "Unlimited projects", included: true },
      { name: "Advanced dashboard", included: true },
      { name: "Premium components", included: true },
      { name: "Email support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Team collaboration", included: true, limit: "Up to 10 members" },
      { name: "API access", included: true },
      { name: "Custom integrations", included: false },
      { name: "Phone support", included: false },
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    monthlyPrice: 99,
    yearlyPrice: 990,
    icon: Crown,
    features: [
      { name: "Unlimited everything", included: true },
      { name: "Enterprise dashboard", included: true },
      { name: "All components", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Unlimited team members", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated support", included: true },
      { name: "SLA guarantee", included: true },
    ],
    buttonText: "Contact Sales",
    buttonVariant: "default",
  },
];

const faqs = [
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial for all paid plans. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee for all paid plans if you're not satisfied.",
  },
  {
    question: "Can I use Falcon for commercial projects?",
    answer:
      "Yes, all our plans include commercial usage rights. Enterprise plans include extended licensing.",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-falcon-text-primary font-poppins mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-falcon-text-secondary font-poppins mb-8 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. All plans include our core
          features with no hidden fees.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span
            className={cn(
              "font-poppins",
              !isYearly
                ? "text-falcon-text-primary font-medium"
                : "text-falcon-text-secondary",
            )}
          >
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-falcon-blue"
          />
          <span
            className={cn(
              "font-poppins",
              isYearly
                ? "text-falcon-text-primary font-medium"
                : "text-falcon-text-secondary",
            )}
          >
            Yearly
          </span>
          <Badge className="bg-falcon-green bg-opacity-10 text-falcon-green">
            Save 20%
          </Badge>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.id}
            className={cn(
              "relative border-falcon-border-light hover:shadow-lg transition-all",
              plan.popular && "border-falcon-blue shadow-lg scale-105",
            )}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-falcon-blue text-white font-poppins">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className="text-center pb-4">
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",
                  plan.popular
                    ? "bg-falcon-blue bg-opacity-10"
                    : "bg-falcon-bg-light",
                )}
              >
                <plan.icon
                  className={cn(
                    "h-6 w-6",
                    plan.popular
                      ? "text-falcon-blue"
                      : "text-falcon-text-secondary",
                  )}
                />
              </div>

              <CardTitle className="font-poppins text-falcon-text-primary">
                {plan.name}
              </CardTitle>
              <p className="text-sm text-falcon-text-secondary font-poppins">
                {plan.description}
              </p>

              <div className="py-4">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-falcon-text-primary font-poppins">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-falcon-text-muted font-poppins ml-1">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                {isYearly && plan.monthlyPrice > 0 && (
                  <p className="text-sm text-falcon-text-muted font-poppins mt-1">
                    ${Math.round(plan.yearlyPrice / 12)}/month billed annually
                  </p>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <Button
                className={cn(
                  "w-full font-poppins",
                  plan.buttonVariant === "default"
                    ? "bg-falcon-blue hover:bg-falcon-blue hover:bg-opacity-90"
                    : "",
                )}
                variant={plan.buttonVariant}
              >
                {plan.buttonText}
                {plan.buttonText.includes("Contact") ? (
                  <ArrowRight className="ml-2 h-4 w-4" />
                ) : null}
              </Button>

              <div className="space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-falcon-green" />
                      ) : (
                        <X className="h-4 w-4 text-falcon-text-muted" />
                      )}
                    </div>
                    <div className="flex-1">
                      <span
                        className={cn(
                          "text-sm font-poppins",
                          feature.included
                            ? "text-falcon-text-primary"
                            : "text-falcon-text-muted",
                        )}
                      >
                        {feature.name}
                      </span>
                      {feature.limit && (
                        <div className="text-xs text-falcon-text-muted font-poppins">
                          {feature.limit}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Comparison */}
      <div className="max-w-6xl mx-auto">
        <Card className="border-falcon-border-light">
          <CardHeader>
            <CardTitle className="text-center font-poppins text-falcon-text-primary">
              Compare All Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-falcon-border-light">
                    <th className="text-left py-3 font-poppins text-falcon-text-primary">
                      Feature
                    </th>
                    <th className="text-center py-3 font-poppins text-falcon-text-primary">
                      Starter
                    </th>
                    <th className="text-center py-3 font-poppins text-falcon-text-primary">
                      Professional
                    </th>
                    <th className="text-center py-3 font-poppins text-falcon-text-primary">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-falcon-border-light">
                    <td className="py-3 font-poppins text-falcon-text-secondary">
                      Projects
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      3
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      Unlimited
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="border-b border-falcon-border-light">
                    <td className="py-3 font-poppins text-falcon-text-secondary">
                      Team Members
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      1
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      10
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="border-b border-falcon-border-light">
                    <td className="py-3 font-poppins text-falcon-text-secondary">
                      Storage
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      1GB
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      100GB
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      1TB
                    </td>
                  </tr>
                  <tr className="border-b border-falcon-border-light">
                    <td className="py-3 font-poppins text-falcon-text-secondary">
                      API Calls/month
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      1,000
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      100,000
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-poppins text-falcon-text-secondary">
                      Support
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      Community
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      Email
                    </td>
                    <td className="text-center py-3 font-poppins text-falcon-text-muted">
                      24/7 Phone
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-falcon-text-primary font-poppins mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-falcon-text-secondary font-poppins">
            Can't find the answer you're looking for? Contact our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-falcon-border-light">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-falcon-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-falcon-text-primary font-poppins mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-falcon-text-secondary font-poppins text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-falcon-blue to-falcon-light-blue rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-6 opacity-90 font-poppins">
          Join thousands of teams already using Falcon to build amazing
          dashboards
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-falcon-blue hover:bg-gray-100 font-poppins"
          >
            <CreditCard className="mr-2 h-5 w-5" />
            Start Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-falcon-blue font-poppins"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
}
