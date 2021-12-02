import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Button } from 'reactstrap';
import { ConsultarPersona, Votar } from '../../Api';
import { Link } from 'react-router-dom';

const FormularioVotar = () => {
    const [estado, setEstado] = useState(0);

    return (
        <Formik
            initialValues={{ dni: '', numeroTramite: '' }}
            validate={({dni, numeroTramite}) => {
                    let errors = {};

                    if(!dni || dni <= 0)
                        errors.dni = "El DNI no es correcto";

                    if(!numeroTramite || numeroTramite <= 0)
                        errors.numeroTramite = "El numero de trámite no es correcto"

                    return errors;
                }}
            onSubmit={ async ({dni, numeroTramite}) => {
                    setEstado(400);
                    const res = await ConsultarPersona(dni, numeroTramite);
                    
                    if(res.data.voto){
                        return setEstado(405);
                    }
                    
                    await Votar(dni, numeroTramite);


                    setEstado(200);
                }}
        >
            {({ errors, isSubmitting }) => (
                <Form>
                    {
                        estado === 200
                            ? <div className="alert alert-success">
                                <h3>Voto registrado</h3>
                            </div>
                            : estado === 400
                                ? <div className="alert alert-danger">
                                    <h3>No se pudo registrar el voto: <b>DNI y/o Número de Trámite incorrecto/s</b></h3>
                                </div>
                                : estado === 405
                                    ? <div className="alert alert-danger">
                                        <h3>El voto ya fue registrado previamente</h3>
                                    </div>
                                    : null
                    }

                    <div className="form-group">
                        <label htmlFor="dni">DNI</label>
                        <Field type="number" name="dni" className="form-control" placeholder="Ingrese su DNI" />
                        { errors.dni && <ErrorMessage name="dni" component={() => (<b className="error-message">{errors.dni}</b>)} /> }
                    </div>

                    <div className="form-group my-4">
                        <label htmlFor="numeroTramite">Número de Trámite</label>
                        <Field type="number" name="numeroTramite" className="form-control" placeholder="Ingrese su Número de Trámite" />
                        { errors.numeroTramite && <ErrorMessage name="numeroTramite" component={() => (<b className="error-message">{errors.numeroTramite}</b>)} /> }
                    </div>
                    
                    <Link to="/" className="btn btn-secondary">Volver</Link>

                    <Button color="success" className="mx-2" disabled={isSubmitting}>Votar</Button>
                </Form>
            )}
        </Formik>
    )
}

export default FormularioVotar
