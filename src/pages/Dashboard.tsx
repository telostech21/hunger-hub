import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Wallet, 
  Users, 
  TrendingUp, 
  Copy, 
  Share2, 
  DollarSign,
  CheckCircle,
  Settings,
  LogOut,
  Eye,
  EyeOff
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const { toast } = useToast();

  // Mock user data
  const userData = {
    fullName: "John Doe",
    referralCode: "HUNGRY2024",
    balance: 45000,
    totalEarnings: 75000,
    totalReferrals: 12,
    activatedReferrals: 8,
    pendingWithdrawals: 15000,
    isActivated: true
  };

  const referralLink = `${window.location.origin}/signup?ref=${userData.referralCode}`;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} Copied!`,
      description: `${type} has been copied to your clipboard.`,
    });
  };

  const shareReferralLink = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join Hunger - Earn Through Referrals',
        text: 'Join me on Hunger platform and start earning!',
        url: referralLink,
      });
    } else {
      copyToClipboard(referralLink, "Referral Link");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Hunger</h1>
                <p className="text-sm text-muted-foreground">Welcome back, {userData.fullName}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant={userData.isActivated ? "default" : "secondary"} className="gap-1">
                <CheckCircle className="w-3 h-3" />
                {userData.isActivated ? "Activated" : "Pending"}
              </Badge>
              
              <Link to="/settings">
                <Button variant="ghost" size="icon">
                  <Settings className="w-4 h-4" />
                </Button>
              </Link>
              
              <Button variant="ghost" size="icon">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setShowBalance(!showBalance)}
                className="h-6 w-6"
              >
                {showBalance ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {showBalance ? `UGX ${userData.balance.toLocaleString()}` : "***,***"}
              </div>
              <p className="text-xs text-muted-foreground">
                Available for withdrawal
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">
                UGX {userData.totalEarnings.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                All-time earnings
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">
                {userData.totalReferrals}
              </div>
              <p className="text-xs text-muted-foreground">
                {userData.activatedReferrals} activated
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Withdrawals</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">
                UGX {userData.pendingWithdrawals.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Being processed
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Referral Section */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Your Referral Code
              </CardTitle>
              <CardDescription>
                Share this code to earn UGX 4,000 per activated referral
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex-1 p-3 bg-muted rounded-lg font-mono text-lg font-bold text-center tracking-wider">
                  {userData.referralCode}
                </div>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => copyToClipboard(userData.referralCode, "Referral Code")}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Referral Link</h4>
                <div className="flex items-center gap-2">
                  <div className="flex-1 p-2 bg-muted rounded text-sm break-all">
                    {referralLink}
                  </div>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => copyToClipboard(referralLink, "Referral Link")}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Button 
                variant="gradient" 
                className="w-full" 
                onClick={shareReferralLink}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Referral Link
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Manage your account and earnings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/withdraw" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Wallet className="w-4 h-4 mr-2" />
                  Request Withdrawal
                </Button>
              </Link>
              
              <Link to="/referrals" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  View Referrals
                </Button>
              </Link>
              
              <Link to="/settings" className="block">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Account Settings
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Earnings Breakdown */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle>Earnings Breakdown</CardTitle>
            <CardDescription>
              Track your earning performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Referral Commissions</p>
                  <p className="text-sm text-muted-foreground">40% per activated referral</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">UGX {(userData.activatedReferrals * 4000).toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">{userData.activatedReferrals} referrals</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <p className="text-2xl font-bold text-success">{userData.activatedReferrals}</p>
                  <p className="text-sm text-muted-foreground">Activated</p>
                </div>
                <div className="text-center p-4 bg-warning/10 rounded-lg">
                  <p className="text-2xl font-bold text-warning">{userData.totalReferrals - userData.activatedReferrals}</p>
                  <p className="text-sm text-muted-foreground">Pending</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">UGX 4,000</p>
                  <p className="text-sm text-muted-foreground">Per referral</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;