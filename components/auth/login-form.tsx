"use client";

import * as z from "zod";
import { login } from "@/actions/login";
import { useForm } from "react-hook-form"
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas"

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values)
        .then((data) => {
          setSuccess(data.success);
          setError(data.error);
        })
    });
  }
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6">
          <div className="space-y-6">
            <FormField control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                  {...field}
                  disabled={isPending}
                  placeholder="john.doe@example.com"
                  type="email"
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}/>
            <FormField control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pasword</FormLabel>
                <FormControl>
                  <Input 
                  {...field}
                  disabled={isPending}
                  placeholder="********"
                  type="password"
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}/>
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit"
            disabled={isPending}
            className="w-full"
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
