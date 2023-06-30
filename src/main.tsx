import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from "./public/components/Layout.tsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
