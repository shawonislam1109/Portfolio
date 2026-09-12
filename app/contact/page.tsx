"use client";

import { useState } from "react";
import { Clock3, Github, Linkedin, Mail, MessageCircle, Send, User } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface IFormState {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<IFormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<IFormState>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: IFormState = { name: "", email: "", message: "" };
    let valid = true;

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (form.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    // Message validation
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // remove live error
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate before submit
    if (!validate()) {
      toast.error("Please fix the errors before submitting!");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/send-mail", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Try again!");
    }
  };

  return (
    <main className="min-h-screen py-8">
      <div className="mb-12">
        <p className="eyebrow">Get in touch</p>
        <h1 className="page-heading">Let&apos;s build the next good thing.</h1>
        <p className="page-copy">Tell me a little about your idea, team, or challenge. I&apos;ll get back to you as soon as I can.</p>
      </div>

      <div className="grid max-w-5xl gap-6 lg:grid-cols-[.78fr_1.22fr]">
        <aside className="glass rounded-3xl p-7 sm:p-8">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><MessageCircle size={22} /></div>
          <h2 className="mt-7 text-2xl font-semibold tracking-tight text-foreground">Let&apos;s connect.</h2>
          <p className="mt-3 leading-7 text-muted-foreground">Whether it&apos;s a new product, a technical problem, or a role you&apos;d like to discuss, my inbox is open.</p>
          <div className="mt-8 space-y-4 border-y border-border py-6 text-sm">
            <div className="flex items-center gap-3 text-muted-foreground"><Clock3 size={18} className="text-primary" /> Usually replies within 1–2 business days</div>
            <div className="flex items-center gap-3 text-muted-foreground"><Mail size={18} className="text-primary" /> Send a note using the form</div>
          </div>
          <div className="mt-7 flex gap-3">
            <a aria-label="GitHub profile" href="https://github.com/shawonislam1109" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground transition-colors hover:border-primary hover:text-primary"><Github size={19} /></a>
            <a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/rabiyul-islam" target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground transition-colors hover:border-primary hover:text-primary"><Linkedin size={19} /></a>
          </div>
        </aside>

        <Card className="glass rounded-3xl border-0 p-2 sm:p-4">
        <CardHeader className="pb-5">
          <CardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <Mail className="h-6 w-6 text-primary" />
            Send a message
          </CardTitle>
          <p className="pt-1 text-sm text-muted-foreground">Fields marked by the form are required.</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="font-medium text-foreground">
                Your Name
              </label>
              <div className="flex items-center gap-2 mt-1">
                <User className="h-5 w-5 text-primary" />
                <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className={`bg-background ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="font-medium text-foreground">
                Email Address
              </label>
              <div className="flex items-center gap-2 mt-1">
                <Mail className="h-5 w-5 text-primary" />
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  className={`bg-background ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="font-medium text-foreground">
                Message
              </label>
              <div className="flex items-center gap-2 mt-1">
                <MessageCircle className="h-5 w-5 text-primary" />
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className={`bg-background ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Send className="h-5 w-5" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Contact;
