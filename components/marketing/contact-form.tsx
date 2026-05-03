"use client";

import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = (data: FormValues) => {
    console.info("Contact demo submit", data);
    reset();
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
        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          <Send className="h-4 w-4" aria-hidden />
          Send message
        </Button>
        {isSubmitSuccessful ? (
          <p className="text-sm font-bold text-accent" role="status">
            Thanks! This is a demo — your note was logged to the console.
          </p>
        ) : null}
      </form>
    </Card>
  );
}
