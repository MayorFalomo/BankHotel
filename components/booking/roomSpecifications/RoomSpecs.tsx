import React from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
// import { toast } from "@/components/ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/GlobalRedux/store";
import axios from "axios";
import { setRoomDetails } from "@/app/GlobalRedux/features/user";
type Props = {
  setActiveForm: (arg: number) => void;
};

const RoomSpecs = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { roomDetails, id } = useSelector(
    (state: RootState) => state.userSlice?.value
  );

  const roomSchema = z.object({
    numberOfRooms: z.string(),
    roomType: z.string(),
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
      roomType: "",
      roomService: "Yes",
      roomDescription: "",
    },
  });

  async function onSubmit(data: z.infer<typeof roomSchema>) {
    dispatch(setRoomDetails(data));

    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/room`,
        data: {
          id: id,
          ...data,
        },
      });

      if (response.data) {
        props.setActiveForm(3);
      }
    } catch (error) {
      console.log(error, "An error has occurred");
    }
  }

  return (
    <FormAnimation>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 min-[600px]:w-[70%] m-auto max-[500px]:my-[20px] max-[600px]:w-[90%] py-2 overflow-auto font-helvetica "
        >
          <h2 className="scroll-m-20 text-2xl text-text_royal_green font-helvetica font-semibold tracking-tight">
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
            name="roomType"
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
