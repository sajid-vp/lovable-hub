import { useState, useEffect } from "react";
import { Download, Smartphone, CheckCircle, Share, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import seaLogo from "@/assets/sea-logo-white.png";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function Install() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    // Listen for install prompt (Android/Chrome)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--blue))] via-[hsl(var(--teal))] to-[hsl(var(--turquoise))] flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[hsl(var(--blue))] to-[hsl(var(--teal))] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <img src={seaLogo} alt="SEA Logo" className="w-12 h-12 object-contain" />
          </div>
          <CardTitle className="text-2xl font-bold">SEA Portal</CardTitle>
          <CardDescription className="text-base">
            Install the Sharjah Education Academy app for quick access
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isInstalled ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">App Installed!</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  You can now access SEA Portal from your home screen
                </p>
              </div>
              <Link to="/">
                <Button className="w-full bg-gradient-to-r from-[hsl(var(--blue))] to-[hsl(var(--teal))] hover:opacity-90">
                  Open Portal
                </Button>
              </Link>
            </div>
          ) : isIOS ? (
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-4 space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[hsl(var(--blue))]" />
                  Install on iPhone/iPad
                </h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[hsl(var(--blue))] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <span>Tap the <Share className="w-4 h-4 inline mx-1" /> Share button at the bottom of Safari</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[hsl(var(--blue))] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[hsl(var(--blue))] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <span>Tap <strong>"Add"</strong> in the top right corner</span>
                  </li>
                </ol>
              </div>
              <Link to="/" className="block">
                <Button variant="outline" className="w-full">
                  Continue in Browser
                </Button>
              </Link>
            </div>
          ) : deferredPrompt ? (
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-4 space-y-2">
                <h3 className="font-semibold">Benefits of Installing</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Quick access from home screen
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Works offline
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Full screen experience
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Faster loading times
                  </li>
                </ul>
              </div>
              <Button 
                onClick={handleInstall}
                className="w-full bg-gradient-to-r from-[hsl(var(--blue))] to-[hsl(var(--teal))] hover:opacity-90"
              >
                <Download className="w-5 h-5 mr-2" />
                Install App
              </Button>
              <Link to="/" className="block">
                <Button variant="outline" className="w-full">
                  Continue in Browser
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-xl p-4 space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-[hsl(var(--blue))]" />
                  Install on Android
                </h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[hsl(var(--blue))] text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                    <span>Tap the <MoreVertical className="w-4 h-4 inline mx-1" /> menu button in your browser</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[hsl(var(--blue))] text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                    <span>Tap <strong>"Install app"</strong> or <strong>"Add to Home Screen"</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[hsl(var(--blue))] text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                    <span>Tap <strong>"Install"</strong> to confirm</span>
                  </li>
                </ol>
              </div>
              <Link to="/" className="block">
                <Button variant="outline" className="w-full">
                  Continue in Browser
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
