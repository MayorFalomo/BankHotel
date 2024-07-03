"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormAnimation from "@/components/animation/FormAnimation";
import {
  getEmail,
  getName,
  getPhoto,
  getUserId,
} from "@/app/GlobalRedux/features/user";
import { AppDispatch } from "@/app/GlobalRedux/store";
import { useDispatch } from "react-redux";
import axios from "axios";

type Props = {
  // activeForm: number;
  setActiveForm: (arg: number) => void;
};

const UserInfo = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [picture, setPicture] = useState<string>("");

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
    photo: z.optional(z.string()),
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
      photo: "",
    },
  });

  const uploadImage = (files: any) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "t3dil6ur");
    axios
      .post(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/image/upload`, formData)
      .then((res) => setPicture(res.data.url))
      .catch((err) => console.log(err));
  };

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof userSchema>) {
    dispatch(getName(values.name));
    dispatch(getEmail(values.email));
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/create-user`,
        data: {
          ...values,
          photo: picture,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        dispatch(getUserId(response.data._id));
        dispatch(getPhoto(picture));
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
                        />
                      </FormControl>
                      <span>{errors.name && errors.name.message}</span>
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={form.control}
                  name="photo"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-[3px]">
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Picture</Label>
                        <Input
                          id="picture"
                          onChange={(e) => uploadImage(e.target.files)}
                          type="file"
                        />
                      </div>
                      <span>{errors.name && errors.name.message}</span>
                    </FormItem>
                  )}
                /> */}
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
