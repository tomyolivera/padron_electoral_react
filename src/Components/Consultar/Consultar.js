import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { Cuadro } from '../Styled/Cuadro';
import { FormatDate } from '../../Helpers/Date';
import { ConsultarPersona } from '../../Api';
import { Link } from 'react-router-dom';

const Consultar = () => {
    const { dni } = useParams();
    const [persona, setPersona] = useState({});

    const buscarPersona = async dni => setPersona((await ConsultarPersona(dni)).data);

    useEffect(() => buscarPersona(dni), []);

    return (
        <Cuadro>
            <h1>Consultando datos de la persona con DNI: { dni }</h1>

            {
                persona.dni
                    ? <>
                        <p>Nombre completo: <b>{ persona.nombre } { persona.apellido }</b></p>
                        <p>Lugar de votación: <b>{ persona.nombreEstablecimiento }</b></p>
                        <p>
                            {
                                persona.voto
                                    ? <p class="success-message">Votó el: <b>{ FormatDate(persona.fechaVotacion) }</b> </p>
                                    : <b class="error-message">No votó</b>
                            }
                        </p>
                    </>
                    : <>
                        <h3 className="error-message">No se encontró la persona</h3>
                    </>
            }

            <Link to="/" className="btn btn-secondary">Volver</Link>
        </Cuadro>
    )
}

export default Consultar
