import React, { Component } from "react"
class TablaFormulario extends Component {
    render() {
        return (
            <div>
                <from name="formulario1" id="formulario1id" action="">
                    <fieldset>
                        <legend>Datos del fomulario</legend>
                        <label for="nombreid">Nombre: </label>
                        <input type="text" name="nombre" id="nombreid" /><br />
                        <label for="nombreid">Busqueda: </label>
                        <input type="text" name="nombre" className="claseinput1" id="nombreid" /><br />
                        <br></br>
                    </fieldset>
                </from>
            </div>
        )
    }
}
export default TablaFormulario