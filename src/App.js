import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./routes";
import ThemeProvider from "./theme";
import { queryClient } from "./react-query/queryClient";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router />
        <LoadingScreen />
        <ReactQueryDevtools />
        <ToastContainer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
