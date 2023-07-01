import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
import SecondPage from "./components/SecondPage";
import RefComponent from "./components/RefComponent";
import ControledComponent from "./components/ControledComponent";
import Contador from "./components/Contador";
import ToDoList from "./components/ToDoList";
import ReducerComponent from "./components/ReducerComponent";
import ProductsComponent from "./components/ProductsComponent";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto mt-20 mb-14">
        <Header />
        <menu className="flex gap-4 justify-evenly">
          <Link
            to={"/hola-mundo"}
            className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
          >
            Hola mundo
          </Link>
          <Link
            to={"/second-page"}
            className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
          >
            Segunda pagina
          </Link>
          <Link
            className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
            to={"/ref-component"}
          >
            useRef
          </Link>
          <Link
            className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
            to={"/control-component"}
          >
            Componente controlado
          </Link>

          <Link
            className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
            to={"/contador"}
          >
            Contador
          </Link>
          <Link
            className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
            to={"/to-do-list"}
          >
            To do list
          </Link>
          <Link
            className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
            to={"/reducer-component"}
          >
            Reducer component
          </Link>
          <Link
            className=" bg-slate-100 hover:bg-slate-50 p-2 rounded-xl"
            to={"/productos"}
          >
            Productos
          </Link>
        </menu>
      </div>

      <section className="p-4">
        <Routes>
          <Route path="hola-mundo" element={<HelloWorld />} />
          <Route path="second-page" element={<SecondPage />} />
          <Route path="ref-component" element={<RefComponent />} />
          <Route path="control-component" element={<ControledComponent />} />
          <Route path="contador" element={<Contador />} />
          <Route path="to-do-list" element={<ToDoList />} />
          <Route path="reducer-component" element={<ReducerComponent />} />
          <Route path="productos" element={<ProductsComponent />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
};

export default App;
