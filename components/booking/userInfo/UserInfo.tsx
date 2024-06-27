"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import FormAnimation from "@/components/animation/FormAnimation";

type Props = {
  // activeForm: number;
  setActiveForm: (arg: number) => void;
};

const UserInfo = (props: Props) => {
  const userSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z
      .string()
      .min(2, {
        message: "Email must be at least 2 characters.",
      })
      .email(),
    password: z
      .string()
      .min(2, {
        message: "Email must be at least 2 characters.",
      })
      .max(20, {
        message: "Password cannot be more than 20 chars",
      }),
  });

  type UserType = z.infer<typeof userSchema>;

  const {
    formState: { errors },
  } = useForm<UserType>({ resolver: zodResolver(userSchema) });

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof userSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values, "hello");
    props.setActiveForm(2);
  }

  return (
    <FormAnimation>
      <div className="w-full mt-4 h-full">
        <div className=" h-full w-full flex flex-col   bg-white items-center justify-center  ">
          <div className="w-[70%] h-full flex flex-col gap-3 max-[750px]:w-[80%]  max-[500px]:w-[90%]  max-[750px]:m-auto">
            <h2 className=" w-full text-text_royal_green text-[20px]">
              Please enter your booking details{" "}
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3 w-full"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-[3px]">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          className=" bg-transparent"
                          placeholder="Enter your name"
                          {...field}
                          // {...register("name")}
                        />
                      </FormControl>
                      <span>{errors.name && errors.name.message}</span>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-[3px]">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          className=" bg-transparent"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <span>{errors.name && errors.name.message}</span>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-[3px]">
                      <FormLabel>password</FormLabel>
                      <FormControl>
                        <Input
                          className=" bg-transparent"
                          placeholder="Enter your Email"
                          {...field}
                        />
                      </FormControl>
                      <span>{errors.name && errors.name.message}</span>
                    </FormItem>
                  )}
                />
                <Button className="flex ml-auto" type="submit">
                  Next
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </FormAnimation>
  );
};

export default UserInfo;
