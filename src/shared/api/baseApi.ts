import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL,
      prepareHeaders: (headers) => {
        headers.set("Authorization", `Bearer ${import.meta.env.VITE_API_KEY}`);
        headers.set("accept", "application/json");
        return headers;
      },
    })(args, api, extraOptions);

    if (result.error) {
      const status = Number(result.error.status)
      switch (status) {
        case 400:
          toast.error("Bad Request");
          break;
        case 401:
          toast.error("Error API key");
          break;
        case 403:
          toast.error("Forbidden access");
          break;
        case 404:
          toast.error("Not Found");
          break;
        case 429:
          toast.error("Too Many Requests");
          break;
        default:
          if (status >= 400 && status < 500) {
            toast.error("Request error");
          }
          else if (status >= 500) {
            toast.error("Server Error");
          }
      }
    }

    return result;
  },
  tagTypes: ["Movies", "PopularMovies"],
  endpoints: () => ({}),
});
