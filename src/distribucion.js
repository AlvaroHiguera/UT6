import React from 'react'
const Distribucion = () => {
    return (
        <div className="pagina">
            <header>
                <nav className="menu">
                    <div className="menu_1"><p>Bloque 1 del header</p></div>
                    <div className="menu_2"><p>Bloque 2 del header</p></div>
                    <div className="menu_3"><p>Bloque 3 del header</p></div>
                </nav>
            </header>
            <aside className="pagina_aside1"><p>Aside 1 </p></aside>

            <main className="pagina_main"><p>Main</p></main>

            <aside className="pagina_aside2"><p>Aside 2</p></aside>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}
export default Distribucion