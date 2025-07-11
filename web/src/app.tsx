import CreateRoom from "./pages/create-room";
import Room from "./pages/rooms";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { BrowserRouter, Route, Router } from "react-router-dom";

const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Router>
      <Route index element={<CreateRoom />} index />
      <Route element={<Room />} path="/rooms/:id" />
      </Router>
    </BrowserRouter>
    </QueryClientProvider>
  
  )
}
  

