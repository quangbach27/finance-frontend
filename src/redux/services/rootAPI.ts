import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootAPI = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),

  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ fullName, email, password }) => {
        return {
          url: "/signup",
          body: { fullName, email, password },
          method: "POST",
        };
      },
    }),

    login: builder.mutation({
      query: ({ email, password }) => {
        return {
          url: "/login",
          body: { email, password },
          method: "POST",
        };
      },
    }),

    verifyOTP: builder.mutation({
      query: ({ email, otp }) => {
        return {
          url: "/verify-otp",
          body: { email, otp },
          method: "POST",
        };
      },
    }),

    getAuthUser: builder.query({
      query: () => "/auth-user",
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyOTPMutation,
  useGetAuthUserQuery,
} = rootAPI;
