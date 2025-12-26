import App from "@/App";
import AllBook from "@/pages/AllBook/AllBook";
import Borrow from "@/pages/Borrow/Borrow";
import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";
import CreateBook from "@/pages/CreateBook/CreateBook";
import EditBook from "@/pages/EditBook/EditBook";
import Home from "@/pages/Home/Home";
import SingleBook from "@/pages/SingleBook/SingleBook";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "/books", Component: AllBook },
      { path: "/books/:id", Component: SingleBook },
      { path: "/create-book", Component: CreateBook },
      { path: "/edit-book/:id", Component: EditBook },
      { path: "/borrow-summary", Component: BorrowSummary },
      { path: "/borrow/:bookId", Component:Borrow },
    ],
  },
]);

export default router;
