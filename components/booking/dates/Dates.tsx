import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { toast } from "@/components/ui/use-toast";
import FormAnimation from "@/components/animation/FormAnimation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/GlobalRedux/store";
import axios from "axios";
import { getCheckIn, getCheckOut } from "@/app/GlobalRedux/features/user";

type Props = {
  setActiveForm: (arg: number) => void;
};

const Dates = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useSelector((state: RootState) => state.userSlice.value);

  const dateSchema = z.object({
    checkInDate: z.date({
      required_error: "A date of birth is required.",
    }),
    checkOutDate: z.date({
      required_error: "A date of birth is required.",
    }),
  });

  //we infer the typeof schema for typescript to remain happy when describing useForm()
  const form = useForm<z.infer<typeof dateSchema>>({
    resolver: zodResolver(dateSchema),
  });

  //Function to handle form
  async function onSubmit(data: z.infer<typeof dateSchema>) {
    dispatch(getCheckIn(data?.checkInDate.toISOString()));
    dispatch(getCheckOut(data?.checkOutDate.toISOString()));
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/save-dates`,
        data: { id, ...data },
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.data) {
        props.setActiveForm(4);
      }
    } catch (error) {
      console.log(error, "An Error has occurred");
    }
    props.setActiveForm(4);
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <FormAnimation>
      <div className="flex flex-col h-full w-[90%] items-center justify-center m-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-[20px] space-y-8"
          >
            <h2 className="scroll-m-20 text-2xl text-text_royal_green font-semibold tracking-tight">
              Select date of checkin and checkout{" "}
            </h2>
            <FormField
              control={form.control}
              name="checkInDate"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Date to checkIn</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[100%] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick checkin date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        // disabled={(date) =>
                        //   date > new Date() || date < new Date("1900-01-01")
                        // }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="checkOutDate"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Date to CheckOut</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[100%] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick checkout date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        // disabled={(date) =>
                        //   date > new Date() || date < new Date("1900-01-01")
                        // }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <div className="flex justify-between items-center gap-2">
              <Button onClick={() => props.setActiveForm(3)}>Previous</Button>
              <Button type="submit">Next</Button>
            </div>
          </form>
        </Form>
      </div>
    </FormAnimation>
  );
};

export default Dates;
