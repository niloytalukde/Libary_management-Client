import type { IBook, IBorrow } from '@/type/type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IUpdateBookArgs {
    id: string;
    bookData: IBook;
}

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://libary-management-system-ten.vercel.app/api" }),
    tagTypes: ["books", "borrows"],
    endpoints: (builder) => ({
        getAllBook: builder.query({
            query: () => ({
                url: "/books",
                method: "GET"
            }),
            providesTags: ["books"],
        }),
        getSingleBook: builder.query({
            query: (id) => ({
                url: `/books/${id}`,
                method: "GET"
            }),
            providesTags: (id) => [{ type: 'books', id }],
        }),
        createBook: builder.mutation<IBook, IBook>({
            query: (bookData) => ({
                url: "/books",
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["books"],
        }),
        updateBook: builder.mutation<IBook, IUpdateBookArgs>({
            query: ({ bookData, id }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: bookData
            }),
            invalidatesTags: ["books"],
        }),
        deleteBook: builder.mutation<void, string>({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{ type: 'books' }]
        }),
        // Borrow part
        getAllBorrow: builder.query({
            query: () => ({
                url: "/borrow",
                method: "GET"
            }),
            providesTags: ["borrows"],
        }),
        createBorrow: builder.mutation<IBorrow, IBorrow>({
            query: (borrowData) => ({
                url: "/borrow",
                method: "POST",
                body: borrowData
            }),
            invalidatesTags: ["books", "borrows"],
        }),
    })
});

export const { useGetAllBookQuery, useGetSingleBookQuery, useCreateBookMutation, useUpdateBookMutation, useDeleteBookMutation, useGetAllBorrowQuery, useCreateBorrowMutation } = baseApi;