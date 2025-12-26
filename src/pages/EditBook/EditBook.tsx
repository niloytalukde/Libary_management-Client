import Loading from "@/components/Shared/Loading";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "@/redux/api/baseApi";
import type { IBook } from "@/type/type";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateBook] = useUpdateBookMutation();
  const {
    data: book,
    isLoading,
    isError,
  } = useGetSingleBookQuery(id as string);

  const form = useForm<IBook>({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 0,
      available: true,
    },
  });

  const { handleSubmit, control, setValue } = form;
  useEffect(() => {
    if (book?.data) {
      setValue("title", book.data.title);
      setValue("author", book.data.author);
      setValue("genre", book.data.genre);
      setValue("isbn", book.data.isbn);
      setValue("description", book.data.description);
      setValue("copies", book.data.copies);
      setValue("available", book.data.available);
    }
  }, [book, setValue]);

  // const onSubmit: SubmitHandler<IBook> = async (data) => {
  //     try {
  //         await updateBook({ id: id as string, bookData: data }).unwrap();
  //         Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Book updated successfully!",
  //             showConfirmButton: false,
  //             timer: 1500,
  //         });
  //         navigate("/books");
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     } catch (error: any) {
  //         let errorMessage;
  //         if (error?.data?.error?.code === 11000) {
  //             errorMessage = "This ISBN already exists!";
  //         } else if (error?.data?.error?.message) {
  //             errorMessage = error?.data?.error?.errors?.copies?.message;
  //         }

  //         Swal.fire({
  //             position: "top-end",
  //             icon: "error",
  //             title: "Error",
  //             text: errorMessage,
  //             showConfirmButton: true,
  //         });
  //     }
  // };

  const onSubmit: SubmitHandler<IBook> = async (data) => {
    try {
      // Ensure "available" is true if copies > 0
      const updatedData = {
        ...data,
        available: data.copies > 0 ? true : false,
      };

      await updateBook({ id: id as string, bookData: updatedData }).unwrap();

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/books");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      let errorMessage;
      if (error?.data?.error?.code === 11000) {
        errorMessage = "This ISBN already exists!";
      } else if (error?.data?.error?.message) {
        errorMessage = error?.data?.error?.errors?.copies?.message;
      }

      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error",
        text: errorMessage,
        showConfirmButton: true,
      });
    }
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
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-md p-6 border border-blue-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500 ">
          Update Book Information
        </h2>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Title */}
            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Author */}
            <FormField
              control={control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter author name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Genre */}
            <FormField
              control={control}
              name="genre"
              rules={{ required: "Genre is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Genre</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value || book?.data?.genre || ""}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select Genre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FICTION">FICTION</SelectItem>
                        <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                        <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                        <SelectItem value="HISTORY">HISTORY</SelectItem>
                        <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                        <SelectItem value="FANTASY">FANTASY</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ISBN */}
            <FormField
              control={control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 9781234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write a short description..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Copies */}
            <FormField
              control={control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Number of copies"
                      {...field}
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
              Update Book
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EditBook;
