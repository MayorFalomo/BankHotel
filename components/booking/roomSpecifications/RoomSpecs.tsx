import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import FormAnimation from "@/components/animation/FormAnimation";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
type Props = {
  setActiveForm: (arg: number) => void;
};

const RoomSpecs = (props: Props) => {
  const roomSchema = z.object({
    numberOfRooms: z.string(),
    roomSize: z.string(),
    // roomService: z.string(),
    roomService: z.enum(["Yes", "No", "Undecided"]),
    roomDescription: z.string().min(2, {
      message: "Description must be at least 2 characters.",
    }),
  });

  type roomType = z.infer<typeof roomSchema>;

  const {
    formState: { errors },
  } = useForm<roomType>({ resolver: zodResolver(roomSchema) });

  const form = useForm<z.infer<typeof roomSchema>>({
    resolver: zodResolver(roomSchema),
    defaultValues: {
      numberOfRooms: "",
      roomSize: "",
      roomService: "Yes",
      roomDescription: "",
    },
  });

  function onSubmit(data: z.infer<typeof roomSchema>) {
    console.log(data, "data");
    props.setActiveForm(3);
  }

  return (
    <FormAnimation>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 w-[70%] m-auto"
        >
          <h2 className="scroll-m-20 text-2xl text-text_royal_green font-semibold tracking-tight">
            {" "}
            Room Specifications
          </h2>
          <FormField
            control={form.control}
            name="numberOfRooms"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-[3px]">
                <FormLabel>How many rooms would you like</FormLabel>
                <FormControl>
                  <Input
                    className=" bg-transparent"
                    placeholder="Enter number"
                    {...field}
                    // {...register("name")}
                  />
                </FormControl>
                <span>
                  {errors.numberOfRooms && errors.numberOfRooms.message}
                </span>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="roomSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select a room size</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Room size</SelectLabel>
                      <SelectItem value="palace">Palace (2 guest) </SelectItem>
                      <SelectItem value="presidential">
                        {" "}
                        Presidential{" "}
                      </SelectItem>
                      <SelectItem value="executive"> Executive </SelectItem>
                      <SelectItem value="large"> Large sized </SelectItem>
                      <SelectItem value="single">
                        {" "}
                        Single sized (1 person){" "}
                      </SelectItem>
                      <SelectItem value="family">
                        {" "}
                        Family size (6 people){" "}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="roomService"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Room Service</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center gap-3 "
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0 ">
                      <FormControl>
                        <RadioGroupItem value="Yes" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="No" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Undecided" />
                      </FormControl>
                      <FormLabel className="font-normal">Undecided </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="roomDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your preferred room"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center gap-2">
            <Button onClick={() => props.setActiveForm(1)}>Previous </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </Form>
    </FormAnimation>
  );
};

export default RoomSpecs;
