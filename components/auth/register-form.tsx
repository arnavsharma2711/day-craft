"use client";

import * as z from "zod";
import { register } from "@/actions/register";
import { useForm } from "react-hook-form"
import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button";
import { CardWrapper } from "@/components/auth/card-wrapper"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schemas"

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values)
        .then((data) => {
          setSuccess(data.success);
          setError(data.error);
        })
    });
  }
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6">
          <div className="space-y-6">
          <FormField control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input 
                  {...field}
                  disabled={isPending}
                  placeholder="John Doe"
                  type="text"
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}/>
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
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
