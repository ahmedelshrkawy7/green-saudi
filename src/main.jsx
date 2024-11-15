import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Form1 from "./prototype/Form1.jsx";
import Form2 from "./prototype/Form2.jsx";
import Form3 from "./prototype/Form3.jsx";
import Form4 from "./prototype/Form4.jsx";
import Invoices from "./prototype/Invoices.jsx";
import InvoicesForm from "./prototype/InvoicesForm.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Routes>
        <Route path="/" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
        <Route path="/form4" element={<Form4 />} />
        <Route path="/invoicesform" element={<InvoicesForm />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);
