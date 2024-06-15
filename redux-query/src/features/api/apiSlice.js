import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3500" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/Todos",
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/Todos",
        method: "POST",
        body: todo,
      }),
      updateTodo: builder.mutation({
        query: (todo) => ({
          url: `/Todos/${todo.id}`,
          method: "PATCH",
          body: todo,
        }),
        deleteTodo: builder.mutation({
          query: ({ id }) => ({
            url: `/Todos/${id}`,
            method: "DELETE",
            body: id,
          }),
        }),
      }),
    }),
  }),
});

export const {
  getTodoQuery,
  addTodoMutation,
  updateTodoMutation,
  deleteTodoMutation,
} = apiSlice;
