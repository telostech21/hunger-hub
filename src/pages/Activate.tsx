import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Smartphone, Shield, CheckCircle, AlertCircle, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Activate = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mobileNo.trim()) {
      toast({
        title: "Mobile Number Required",
        description: "Please enter your mobile number to proceed.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate activation process
    setTimeout(() => {
      localStorage.setItem("userActivated", "true");
      toast({
        title: "Activation Submitted!",
        description: "Your payment is being verified. You'll be notified once approved.",
      });
      
      // For demo purposes, automatically approve and redirect
      setTimeout(() => {
        toast({
          title: "Account Activated!",
          description: "Welcome to Hunger platform. Start referring now!",
        });
        setIsSubmitting(false);
        navigate("/dashboard");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Activate Your Account
          </h1>
          <p className="text-muted-foreground">
            Complete your payment to unlock all features
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Payment Instructions */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-warning">
                <AlertCircle className="w-5 h-5" />
                Payment Required
              </CardTitle>
              <CardDescription>
                Activation fee: UGX 10,000
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Mobile Money Payment
                </h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">MTN Mobile Money</span>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="font-medium">Airtel Money</span>
                    <Badge variant="secondary">Available</Badge>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Payment Instructions:</h4>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Open your mobile money app</li>
                  <li>Send <span className="font-semibold text-primary">UGX 10,000</span> to:</li>
                  <li className="font-mono bg-muted px-2 py-1 rounded ml-4">0761863923</li>
                  <li>Note your mobile number used for payment</li>
                  <li>Enter your mobile number in the form</li>
                </ol>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                <p className="text-sm text-primary font-medium">
                  ⚡ Your account will be activated within 24 hours after payment verification
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Transaction ID Form */}
          <Card className="bg-gradient-card border-border shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Confirm Payment
              </CardTitle>
              <CardDescription>
                Enter your payment details below
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mobileNo">Mobile No.</Label>
                  <Input
                    id="mobileNo"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the mobile number used for payment
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="proof">Proof of Payment (Optional)</Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload screenshot or drag and drop
                    </p>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="gradient" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit for Verification"}
                </Button>
              </form>

              <div className="mt-6 space-y-2">
                <h4 className="font-semibold text-sm">What happens next?</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Our team will verify your payment</li>
                  <li>• You'll receive a confirmation email/SMS</li>
                  <li>• Your account will be activated</li>
                  <li>• You can start earning through referrals</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Activate;