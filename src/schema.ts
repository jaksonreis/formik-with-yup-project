import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().ensure().min(3, "Nome deve ter o mínimo de 3 caracteres").required("*Preenchimento obrigatóiro!"),
    email: Yup.string().email("Deve ser um email válido").required("*Preenchimento obrigatóiro!"),
})