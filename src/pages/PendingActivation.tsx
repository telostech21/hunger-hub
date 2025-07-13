import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PendingActivation = () => {
  const navigate = useNavigate();

  const handleWhatsAppContact = () => {
    const phoneNumber = "256761863923";
    const message = "Hello, I just submitted my payment for account activation. Please confirm my payment.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
            <Clock className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Payment Submitted
          </h1>
          <p className="text-muted-foreground">
            Your payment is under review
          </p>
        </div>

        {/* Main Card */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-primary">
              <CheckCircle className="w-5 h-5" />
              Payment Received
            </CardTitle>
            <CardDescription>
              We have received your payment submission
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center space-y-3">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-primary font-medium mb-2">
                  ⏳ Please wait for admin confirmation
                </p>
                <p className="text-sm text-muted-foreground">
                  Our team will verify your payment within 24 hours. You'll receive a notification once your account is activated.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Need help or want faster confirmation?
                </p>
                <Button 
                  onClick={handleWhatsAppContact}
                  variant="outline"
                  size="lg"
                  className="w-full bg-green-500/10 border-green-500/20 hover:bg-green-500/20 text-green-700 dark:text-green-400"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact us on WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  +256 761863923
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <h4 className="font-semibold text-sm mb-2">What happens next?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Admin verifies your payment details</li>
                <li>• You receive confirmation notification</li>
                <li>• Your account gets activated</li>
                <li>• You can access the dashboard and start earning</li>
              </ul>
            </div>

            <Button 
              onClick={() => navigate("/login")}
              variant="secondary"
              className="w-full"
            >
              Back to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PendingActivation;