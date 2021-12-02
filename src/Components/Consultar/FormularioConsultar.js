import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Form, Formik, Field, ErrorMessage } from 'formik';

import { Button } from 'reactstrap';
import { ConsultarPersona } from '../../Api';

const FormularioConsultar = () => {
    const history = useHistory();
    const [ultimoDni, setUltimoDni] = useState(0);
    
    return (
        <Formik
            initialValues={{ dni: '' }}
            validate={ async ({ dni }) => {
                const errors = {};

                if (!dni || dni <= 0)
                    errors.dni = 'El DNI no es válido';

                return errors;
            }}
            onSubmit={ async ({ dni }) => {
                if(ultimoDni === dni) return;
                setUltimoDni(dni);
                await ConsultarPersona(dni);

                history.push(`consultar/${dni}`);
            }}
        >
            {({ errors, isSubmitting }) => (
                <Form>
                    <div className="form-group my-4">
                        <label htmlFor="dni">DNI</label>
                        <Field name="dni" type="number" className="form-control" placeholder="Ingrese el DNI" autocomplete="off" />
                        { errors.dni && <ErrorMessage name="dni" component={() => (<b className="error-message">{errors.dni}</b>)} /> }
                    </div>

                    { ultimoDni != 0 && <p className="error-message">No se encontró la persona</p> }

                    <Button color="primary" disabled={isSubmitting}>
                        { isSubmitting ? 'Consultando...' : 'Consultar' }
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export default FormularioConsultar
