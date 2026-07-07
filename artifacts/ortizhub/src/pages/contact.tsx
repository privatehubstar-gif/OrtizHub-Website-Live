import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Youtube, Twitter, Linkedin, Mail, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CONTACT_EMAIL = "Imana.junior9@gmail.com";

const socialLinks = {
  youtube: "https://youtube.com/@ortizimanajnr",
  linkedin: "https://www.linkedin.com/in/ortiz-imana-jnr",
  x: "https://twitter.com/ImanaJunior1",
};

const subjectOptions = [
  { value: "books", label: "Books & Reading" },
  { value: "products", label: "Digital Products" },
  { value: "coaching", label: "Coaching & Mentorship" },
  { value: "speaking", label: "Speaking Engagement" },
  { value: "partnership", label: "Partnership / Collaboration" },
  { value: "general", label: "General Inquiry" },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.enum(["books", "products", "coaching", "speaking", "partnership", "general"], {
    message: "Please select a subject.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: undefined, message: "" },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setError(null);

    const subjectLabel = subjectOptions.find((o) => o.value === values.subject)?.label ?? values.subject;

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: `OrtizHub — ${subjectLabel}`,
          message: values.message,
          _captcha: "false",
          _template: "table",
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try emailing directly.");
      }
    } catch {
      setError("Network error. Please try emailing directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="container mx-auto px-6 pt-20 pb-16 lg:pt-28 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            OrtizHub International
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Get in <span className="text-primary">Touch.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Whether you're looking for speaking engagements, coaching, a collaboration, or simply have a question — reach out and the team will get back to you.
          </p>
        </motion.div>
      </div>

      {/* Two-col content */}
      <div className="container mx-auto px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Direct email */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-5">Direct Email</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-white hover:text-primary transition-colors text-lg font-medium"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* What I help with */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-5">What I Help With</h3>
              <ul className="space-y-3">
                {["Books & Resources", "Coaching & Mentorship", "Speaking Engagements", "Partnerships & Collaborations"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-5">Follow the Journey</h3>
              <div className="flex gap-3">
                <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all bg-secondary/40">
                  <Youtube size={18} />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all bg-secondary/40">
                  <Linkedin size={18} />
                </a>
                <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all bg-secondary/40">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Response time note */}
            <div className="border border-primary/20 rounded-xl p-5 bg-primary/5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-white font-semibold block mb-1">Response Time</span>
                Messages are typically answered within 24–48 hours. No shortcuts. No pretending.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-secondary/20 border border-border rounded-2xl p-8 md:p-10"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-8"
                >
                  <CheckCircle size={36} className="text-primary" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Received.</h3>
                <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
                  Thank you for reaching out. Ortiz will get back to you within 24–48 hours.
                </p>
                <Button
                  variant="outline"
                  className="mt-10 rounded-none uppercase tracking-widest text-sm"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white uppercase tracking-widest text-xs">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" className="bg-background border-border h-12 rounded-none focus-visible:ring-primary" {...field} />
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
                            <Input placeholder="your@email.com" type="email" className="bg-background border-border h-12 rounded-none focus-visible:ring-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white uppercase tracking-widest text-xs">Subject</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border h-12 rounded-none focus:ring-primary">
                              <SelectValue placeholder="What is this regarding?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {subjectOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
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
                            placeholder="Tell me how I can help you..."
                            className="bg-background border-border min-h-[180px] resize-y rounded-none focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {error && (
                    <p className="text-sm text-red-400 border border-red-400/20 bg-red-400/5 rounded p-3">
                      {error}{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-red-300">
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 bg-primary text-black hover:bg-primary/90 rounded-none uppercase tracking-widest font-bold text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your message goes directly to Ortiz's inbox. No spam, no middlemen.
                  </p>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
