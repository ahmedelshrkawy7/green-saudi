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
import { Outlet, Route, Routes } from "react-router-dom";
import Otp from "./pages/Auth/otp/Otp";
import LoginForm from "./pages/Auth/LoginForm";
import Forget from "./pages/Auth/Forget";
import Reset from "./pages/Auth/Reset";
import Offset from "./pages/offset/Offset";
import Plant from "./pages/plantsection/plant/Plant";
import OffsetStatistics from "./pages/offset/offsetStatistics/OffsetStatistics";
import OffsetDetails from "./pages/offset/offset-details/OffsetDetails";
import DonateDetails from "./pages/plantsection/plantDonor/DonateDetails";
import Certificate from "./pages/certificate/Certificate";

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
      <Mobile />
      <Nav />

      <Routes>
        <Route path="/auth" element={<Register />}>
          <Route path="/auth/register" element={<LoginForm />} />
          <Route path="/auth/otp" element={<Otp />} />
          <Route path="/auth/forget" element={<Forget />} />
          <Route path="/auth/reset" element={<Reset />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
        <Route path="*" element={<Home />} />
        <Route path="/offset" element={<Offset />} />
        <Route path="/offsetstatistics" element={<OffsetStatistics />} />
        <Route path="/offsetdetails" element={<OffsetDetails />} />
        <Route path="plant" element={<Outlet />}>
          <Route index element={<Plant />} />
          <Route path="/plant/donorDetails" element={<DonateDetails />} />
          <Route path="/plant/certificate" element={<Certificate />} />
        </Route>
        <Route path="*" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
