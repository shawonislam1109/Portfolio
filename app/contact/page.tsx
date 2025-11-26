"use client";

import { useState } from "react";
import { Mail, User, MessageCircle, Send } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors: any = {};
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

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // remove live error
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: any) => {
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
    <div className="min-h-screen bg-white dark:bg-neutral-900 p-6 flex flex-col items-center transition-colors">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-white my-10 text-center">
        Contact Me
      </h1>

      <Card className="w-full max-w-2xl bg-neutral-100 dark:bg-neutral-800 p-6 rounded-2xl shadow-xl border-none">
        <CardHeader>
          <CardTitle className="text-2xl text-neutral-900 dark:text-white flex items-center gap-3">
            <Mail className="h-7 w-7 text-blue-500" />
            Let's Connect
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="text-neutral-700 dark:text-neutral-300 font-medium">
                Your Name
              </label>
              <div className="flex items-center gap-2 mt-1">
                <User className="h-5 w-5 text-blue-500" />
                <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className={`bg-white dark:bg-neutral-700 ${
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
              <label className="text-neutral-700 dark:text-neutral-300 font-medium">
                Email Address
              </label>
              <div className="flex items-center gap-2 mt-1">
                <Mail className="h-5 w-5 text-blue-500" />
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  className={`bg-white dark:bg-neutral-700 ${
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
              <label className="text-neutral-700 dark:text-neutral-300 font-medium">
                Message
              </label>
              <div className="flex items-center gap-2 mt-1">
                <MessageCircle className="h-5 w-5 text-blue-500" />
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className={`bg-white dark:bg-neutral-700 ${
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
