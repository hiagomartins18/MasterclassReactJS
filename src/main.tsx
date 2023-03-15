import React from "react";
import ReactDOM from "react-dom/client";


import { Sidebar } from "./components/Sidebar/Sidebar";
import { Timeline } from "./pages/Timeline";


import "./global.css";

import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import './global.css';


// Map - Tem retorno / forEach - Não tem retorno
// Prop "key" = uma espécie de chave de identificação.

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// Componenents: Pequenas partes de inferface reutilizaveis.
// TypeScript: Tipagem estática(Mecanismo para evitar erros enquanto desenvolvemos o app) para o JavaScript.
