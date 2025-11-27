import { Mail, Heart } from "lucide-react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";


const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl mb-6">Get in Touch</h1>
            <p className="text-lg text-foreground/70">
              Have a project in mind or just want to say hello? Drop me a message 🌿
            </p>
          </div>

          <form onSubmit={handleSubmit} className="dreamy-card mb-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  required
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or just say hi..." 
                  required
                  className="rounded-xl min-h-[150px]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full rounded-xl h-12 text-base"
              >
                Send Message
              </Button>
            </div>
          </form>

          <div className="dreamy-card text-center space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
              <div className="flex justify-center gap-4">
                <a 
                  href="mailto:hello@matchadays.com" 
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-foreground/70 flex items-center justify-center gap-2">
                Made with <Heart className="w-4 h-4 text-primary fill-primary" /> and matcha
              </p>
              <p className="text-sm text-foreground/50 mt-2">
                hello@matchadays.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;