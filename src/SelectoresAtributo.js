import React, { Component } from "react"
import Imagen from "react-image"

class SelectoresAtributo extends Component {
    render() {
        return (
            <div>
                <a href="https://www.google.es" target="_blanck">Enlace a Google que cumple un selector de atributos</a>
                <br />
                <a href="https://www.google.es" target="_self">Enlace a Google que cumple un selector de atributos target="_self"</a>
                <br />
                <Imagen alt="Foto del K2" src={require("./img/descargar.jfif")} />
                <br />
                <p className="claseparrafo-1">Este párrafo va
                a cumplir estilos compenetreados entre los generales y el especifico de una clase,este tiene que ir seguido de un guion</p>
                <br />
                <p className="claseselector1">Este párrafo
                 va a cumplir estilos compenetreados entre los generales y el especifico de una clase, este puede ir seguido de cualquier parte</p>
                <br />
            </div>
        )
    }
}
export default SelectoresAtributo