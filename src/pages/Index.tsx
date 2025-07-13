import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, CheckCircle, ArrowRight, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  HUNGER
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Turn Your Network Into Income. Start Earning Through Smart Referrals Today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button variant="gradient" size="xl" className="gap-2">
                  Start Earning Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="xl">
                  Sign In
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8">
              <Badge variant="secondary" className="gap-2">
                <CheckCircle className="w-4 h-4" />
                Verified Platform
              </Badge>
              <Badge variant="secondary" className="gap-2">
                <Users className="w-4 h-4" />
                5,000+ Users
              </Badge>
              <Badge variant="secondary" className="gap-2">
                <DollarSign className="w-4 h-4" />
                UGX 50M+ Paid
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to start earning through referrals
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-gradient-card border-border shadow-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">1</span>
                </div>
                <CardTitle>Sign Up & Activate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Register with a referral code and activate your account with UGX 10,000
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">2</span>
                </div>
                <CardTitle>Share Your Code</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Get your unique referral code and share it with friends and family
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border shadow-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">3</span>
                </div>
                <CardTitle>Earn 40% Commission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Earn UGX 4,000 for every person who activates using your referral code
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Hunger?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for serious earners who want reliable income
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-lg">High Commissions</h3>
              <p className="text-muted-foreground">
                Earn 40% on every activation - that's UGX 4,000 per referral
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Mobile Money</h3>
              <p className="text-muted-foreground">
                Easy payments through MTN and Airtel mobile money
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Real-time Tracking</h3>
              <p className="text-muted-foreground">
                Monitor your referrals and earnings in real-time
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-warning" />
              </div>
              <h3 className="font-semibold text-lg">Verified Platform</h3>
              <p className="text-muted-foreground">
                Secure, transparent, and trusted by thousands
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Earning?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of users already earning through referrals. Your network is your net worth.
            </p>
            <Link to="/signup">
              <Button variant="gradient" size="xl" className="gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Hunger</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 Hunger Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
