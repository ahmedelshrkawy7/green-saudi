import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Hero from "./pages/Hero";
import Nav from "./pages/Nav";
import Mobile from "./pages/MobileMenu";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Counter from "./pages/Counter";
import Process from "./pages/Process";
import LatestProjects from "./pages/LatestProjects";
import ClientsTalk from "./pages/ClientsTalk";
import Services from "./pages/Services";
import Footer from "./pages/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { Route, Routes } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 6 * 1000,
    },
  },
});

function Home() {
  return (
    <div className="d-flex flex-column gap-5">
      <Mobile />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Counter />
      <Process />
      <LatestProjects />
      <ClientsTalk />
      <Blog />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
