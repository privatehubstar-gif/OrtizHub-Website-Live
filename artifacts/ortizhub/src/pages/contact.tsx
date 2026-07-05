import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Instagram, Youtube, Twitter, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      form.reset();
    }, 1000);
  }

  return (
    <div className="container mx-auto px-6 py-20 lg:py-32">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Col - Info */}
        <div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Get in <span className="text-primary">Touch.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Whether you're looking for speaking engagements, coaching, or simply have a question about the resources — reach out.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-serif text-white mb-4">Direct Communication</h3>
              <a href="mailto:contact@ortizhub.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-lg">
                <Mail size={20} />
                contact@ortizhub.com
              </a>
            </div>

            <div>
              <h3 className="text-lg font-serif text-white mb-4">The Network</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all bg-secondary/50">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all bg-secondary/50">
                  <Youtube size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all bg-secondary/50">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all bg-secondary/50">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col - Form */}
        <div className="bg-secondary/20 p-8 md:p-10 rounded-xl border border-border">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                <Mail size={32} />
              </div>
              <h3 className="text-3xl font-serif text-white mb-4">Message Received.</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. The team will get back to you shortly.
              </p>
              <Button 
                variant="outline" 
                className="mt-8"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase tracking-widest text-xs">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          className="bg-background border-border h-12 rounded-none focus-visible:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase tracking-widest text-xs">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          type="email"
                          className="bg-background border-border h-12 rounded-none focus-visible:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white uppercase tracking-widest text-xs">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help?" 
                          className="bg-background border-border min-h-[150px] resize-y rounded-none focus-visible:ring-primary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest font-bold text-base mt-4"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending..." : "Submit Message"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}
