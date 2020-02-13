import React, { Component } from "react"
import SelectoresAtributo from "./SelectoresAtributo"
import TablaFormulario from "./TablaFormulario"
import Animacion from "./AnimacionScripts.js"
import Distribucion from "./distribucion"
import Medidafr from "./medidafr"

class App extends Component {
    render() {
        return (
            <div>
                <SelectoresAtributo />
                <TablaFormulario />
                <Animacion />
                <Distribucion />
                <Medidafr />
            </div>
        )
    }


}
export default App