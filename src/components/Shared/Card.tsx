import { useDeleteBookMutation } from "@/redux/api/baseApi";
import type { IBook } from "@/type/type";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Button } from "../ui/button";
import { FaEye, FaEdit, FaTrash, FaBookOpen } from "react-icons/fa";

interface BookProps {
  book: IBook;
}

const Card = ({ book }: BookProps) => {
  const navigate = useNavigate();
  const [deleteBook] = useDeleteBookMutation();

  const handleBorrow = (id: string) => {
    navigate(`/borrow/${id}`);
  };

  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteBook(id).unwrap();
        Swal.fire("Deleted!", "Book was successfully deleted.", "success");
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 border border-gray-200 p-6 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-purple-600 rounded-xl p-4 mb-5">
        <h2 className="text-white text-2xl font-bold text-center truncate">
          {book?.title}
        </h2>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 text-sm mb-6">
        <div>
          <p>
            <span className="font-semibold">Author:</span> {book?.author}
          </p>
          <p>
            <span className="font-semibold">ISBN:</span> {book?.isbn}
          </p>
          <p>
            <span className="font-semibold">Copies:</span> {book?.copies}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold">Genre:</span> {book?.genre}
          </p>
          <p>
            <span className="font-semibold">Availability:</span>{" "}
            {book?.available ? (
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                Available
              </span>
            ) : (
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                Unavailable
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          to={`/books/${book?._id}`}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
          title="View Book"
        >
          <FaEye /> View
        </Link>

        <Link
          to={`/edit-book/${book?._id}`}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium transition"
          title="Edit Book"
        >
          <FaEdit /> Edit
        </Link>

        <Button
          onClick={() => handleDelete(book?._id)}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition"
          title="Delete Book"
        >
          <FaTrash /> Delete
        </Button>

        <Button
          onClick={() => handleBorrow(book?._id)}
          disabled={!book?.available}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-medium transition ${
            book?.available
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          title={book?.available ? "Borrow Book" : "Unavailable"}
        >
          <FaBookOpen /> Borrow
        </Button>
      </div>
    </div>
  );
};

export default Card;
