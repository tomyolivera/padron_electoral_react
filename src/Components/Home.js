import React from 'react'
import { Link } from 'react-router-dom'
import FormularioConsultar from './Consultar/FormularioConsultar'
import { Cuadro } from './Styled/Cuadro'

const Home = () => {
    return (
        <>
            <Cuadro>
                <h1>Home</h1>
            </Cuadro>

            <Cuadro>
                <h1>Consultar DNI</h1>
                <FormularioConsultar />
            </Cuadro>

            <Cuadro>
                <h1>Votar</h1>
                <Link to="/votar" className="btn btn-success">Ir a votar</Link>
            </Cuadro>
        </>
    )
}

export default Home
