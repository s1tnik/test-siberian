import { QueryCache, QueryClient } from "react-query";
import { toast } from "react-toastify";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
  queryCache: new QueryCache({
    onError: (e) => {
      toast.error(e.message || `Something went wrong`, {
        position: "bottom-left",
      });
    },
  }),
});
