"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const serviceId = 'service_ykuzkum';
const templateId = 'template_1imfr4d';
const publicKey = 'cdzGhshVCfR2dD6Zc';

export function ContactForm() {
  const [feedback, setFeedback] = useState<{ kind: "success" | "error"; text: string } | null>(
    null,
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = async (data: FormValues) => {
    setFeedback(null);

    if (!serviceId?.trim() || !templateId?.trim() || !publicKey?.trim()) {
      setFeedback({
        kind: "error",
        text: "Contact email is not configured yet. Please reach us using the email above.",
      });
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        { publicKey },
      );
      reset();
      setFeedback({
        kind: "success",
        text: "Thanks! Your message was sent. We will get back to you soon.",
      });
    } catch {
      setFeedback({
        kind: "error",
        text: "Something went wrong sending your message. Please try again or email us directly.",
      });
    }
  };

  return (
    <Card className="p-6 sm:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div>
          <Label htmlFor="name">Your name</Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="e.g. Samir"
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", { required: "Please add your name." })}
          />
          {errors.name ? (
            <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@school.edu"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            })}
          />
          {errors.email ? (
            <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your school or ask a question..."
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              required: "Please write a short message.",
              minLength: { value: 12, message: "A bit more detail helps (12+ characters)." },
            })}
          />
          {errors.message ? (
            <p className="mt-1.5 text-xs font-semibold text-red-600">{errors.message.message}</p>
          ) : null}
        </div>
        <Button type="submit" variant="primary" className="w-full sm:w-auto" disabled={isSubmitting}>
          <Send className="h-4 w-4" aria-hidden />
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
        {feedback ? (
          <p
            className={
              feedback.kind === "success"
                ? "text-sm font-bold text-accent"
                : "text-sm font-semibold text-red-600"
            }
            role="status"
          >
            {feedback.text}
          </p>
        ) : null}
      </form>
    </Card>
  );
}
