//este archivo arranca el codigo de los otros archivos
import React from "react";
import ReactDOM from "react-dom";
//llama a  la funcion app del archivo App
import App from "./App";
import App2 from "./ImagenConLink";




//llamada para que renderize el App
ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<App2 />, document.getElementById("root"));