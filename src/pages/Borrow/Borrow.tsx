import Loading from "@/components/Shared/Loading";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  useCreateBorrowMutation,
  useGetSingleBookQuery,
} from "@/redux/api/baseApi";
import type { IBorrow } from "@/type/type";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";

import { useNavigate, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

const Borrow = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const {
    data: book,
    isError,
    isLoading,
  } = useGetSingleBookQuery(bookId as string);
  const [createBorrow] = useCreateBorrowMutation();

  const form = useForm<IBorrow>({
    defaultValues: {
      book: bookId || "",
      quantity: 1,
      dueDate: new Date(),
    },
  });
  const { handleSubmit, control, setValue } = form;
  const onSubmit: SubmitHandler<IBorrow> = async (data) => {
    if (book && data.quantity > book?.data?.copies) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You cannot borrow more copies than available!",
      });
      return;
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Book Borrowed Successfully!",
      showConfirmButton: false,
      text: `Return by: ${data.dueDate.toDateString()}`,
      timer: 1500,
    });
    await createBorrow(data).unwrap();
    navigate("/borrow-summary");
    form.reset();
  };

  if (isLoading) return <Loading />;
  if (isError || !book) {
    return (
      <p className="text-red-500 text-center mt-10 text-3xl font-semibold">
        Failed to load book.
      </p>
    );
  }

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-96 mx-auto bg-white shadow-md rounded-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          Confirm Your Book Borrowing
        </h2>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Quantity Field */}
            <FormField
              control={control}
              name="quantity"
              rules={{
                required: "Quantity is required",
                min: 1,
                max: book.copies,
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Due Date Field */}
            {/* <FormField
                            control={control}
                            name="dueDate"
                            rules={{ required: "Due date is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Due Date</FormLabel>
                                    <FormControl>
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={(date) => {
                                                setValue("dueDate", date!);
                                            }}
                                            className="rounded-lg w-full border"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}

            <FormField
              control={control}
              name="dueDate"
              rules={{ required: "Due date is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(date) => {
                        if (date) setValue("dueDate", date);
                      }}
                      disabled={(date) => date < new Date()}
                      className="rounded-lg w-full border"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-red-400 text-white cursor-pointer"
            >
              Confirm Borrow
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Borrow;
