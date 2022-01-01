import * as yup from 'yup';

let validationSchema = yup.object().shape({
    email: yup.string().email("doğru email formatı girin").required("zorunlu alan"),
    password: yup.string().min(5,"lütfen en az 5 karakter girin!").required("zorunlu alan"),
    passwordConfirm: yup.string().oneOf([yup.ref("password")],"şifreler aynı değil!").required("zorunlu alan"), //oneOf eşitlediğini öğrenmek için kullanılıyor.
});
// docs: https://github.com/jquense/yup
export default validationSchema