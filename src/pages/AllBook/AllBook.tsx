import Card from "@/components/Shared/Card";
import Loading from "@/components/Shared/Loading";
import { useGetAllBookQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/type/type";

const AllBook = () => {
  const { data: books, isLoading, isError } = useGetAllBookQuery(undefined);
  if (isLoading) return <Loading />;
  if (isError || !books) {
    return (
      <p className="text-red-500 text-center mt-10 text-3xl font-semibold">
        Failed to load books.
      </p>
    );
  }

  if (books?.data?.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-10 text-xl">
        No books available at the moment.
      </p>
    );
  }
  return (
    <>
      <section className="w-11/12 mx-auto py-10 p-3">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          All Available Books
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.data.map((book: IBook) => (
            <Card key={book._id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllBook;
