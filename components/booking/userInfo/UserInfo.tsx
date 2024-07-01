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
import {
  getEmail,
  getName,
  getPassword,
  getUserId,
} from "@/app/GlobalRedux/features/user";
import { AppDispatch, RootState } from "@/app/GlobalRedux/store";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

type Props = {
  // activeForm: number;
  setActiveForm: (arg: number) => void;
};

const UserInfo = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { name, email, password } = useSelector(
    (state: RootState) => state.userSlice?.value
  );

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
      email: "",
      password: "",
    },
  });

  //function to generate id
  function dec2hex(dec: number) {
    return dec.toString(16).padStart(2, "0");
  }

  // generateId :: Integer -> String
  function generateId(len: number) {
    var arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join("");
  }

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof userSchema>) {
    const generatedId = generateId(24);
    console.log(values, "submitted");
    dispatch(getName(values.name));
    dispatch(getName(values.email));
    dispatch(getName(values.password));
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/create-user`,
        data: {
          ...values,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data, "response data");
      if (response.data) {
        dispatch(getUserId(response.data._id));
        props.setActiveForm(2);
      }
    } catch (error) {
      console.log(error, "This is Error");
    }
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
                          // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          //   dispatch(getName(e.target.value))
                          // }
                          // // {...register("name")}
                          // value={name}
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
                          // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          //   dispatch(getEmail(e.target.value))
                          // }
                          // value={email}
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          className=" bg-transparent"
                          placeholder="Enter your Password"
                          {...field}
                          // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          //   dispatch(getPassword(e.target.value))
                          // }
                          // value={password}
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
