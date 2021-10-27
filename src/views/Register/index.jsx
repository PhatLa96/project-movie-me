import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { RegisterAction } from "../../redux/actions/ManagerUserAction";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object().shape({
  taiKhoan: yup.string().required("*Tài khoản không được bỏ trống !"),
  matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
  email: yup
    .string()
    .required("*Email không được bỏ trống !")
    .email("* Email không hợp lệ "),
  soDt: yup
    .string()
    .required("*Số điện thoại không được bỏ trống !")
    .matches(phoneRegExp, "Số điện thoại không hợp lệ!"),
  hoTen: yup.string().required("*Tên không được bỏ trống !"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.

    paddingInline: "20px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  text: {
    color: "#fff",
  },
}));

const Register = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // const { values, handleChange, errors, touched, handleBlur, isValid } =
  //   useFormik({
  //     initialValues: {
  //       taiKhoan: "",
  //       matKhau: "",
  //       email: "",
  //       soDt: "",
  //       maNhom: "GP05",
  //       hoTen: "",
  //     },
  //     validationSchema: schema,
  //     // validateOnMount: true,
  //   });
  // console.log(values);

  const handleSubmit = (user) => {
    // event.preventDefault();
    // if (!isValid) return;

    dispatch(RegisterAction(user));
  };
  // useEffect(() => {
  //   if (SignUpUser) {
  //     closeModal();
  //     // console.log(closeModal());
  //   }
  // }, [SignUpUser]);
  return (
    <div className="text-light" style={{ paddingTop:"15px" }}>
      <Container style={{ paddingTop: 10 }} component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.paper}>
          <img
            src="	https://tix.vn/app/assets/img/login/group@2x.png"
            alt="logo"
            style={{
              width: "200px",
              marginBottom: "10px",
              cursor: "pointer",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Typography style={{ paddingBottom: 15 }} component="h7" variant="h8">
            Đăng Ký để được nhiều ưu đãi, mua vé và bảo mật thông tin!
          </Typography>
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              email: "",
              soDt: "",
              maNhom: "GP09",
              maLoaiNguoiDung: "KhachHang", // điền QuanTri backend cũng áp dụng KhachHang
              hoTen: "",
            }}
            validationSchema={schema} // validationSchdema:  thu vien yup nhập sai ko submit được
            onSubmit={handleSubmit}
          >
            {(formikProps) => (
              <Form className="col-sm-12  text-white">
                <div className="form-group">
                  <label>Tài khoản&nbsp;</label>
                  <ErrorMessage
                    name="taiKhoan"
                    render={(msg) => <span className="text-danger">{msg}</span>}
                  />
                  <Field name="taiKhoan" type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Mật khẩu&nbsp;</label>
                  <ErrorMessage
                    name="matKhau"
                    render={(msg) => <span className="text-danger">{msg}</span>}
                  />
                  <Field
                    name="matKhau"
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Họ và tên&nbsp;</label>
                  <ErrorMessage
                    name="hoTen"
                    render={(msg) => <span className="text-danger">{msg}</span>}
                  />
                  <Field name="hoTen" type="text" className="form-control" />
                </div>

                <div className="form-group">
                  <label>Email&nbsp;</label>
                  <ErrorMessage
                    name="email"
                    render={(msg) => <span className="text-danger">{msg}</span>}
                  />
                  <Field name="email" type="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Số điện thoại&nbsp;</label>
                  <ErrorMessage
                    name="soDt"
                    render={(msg) => <span className="text-danger">{msg}</span>}
                  />
                  <Field name="soDt" type="text" className="form-control" />
                </div>

                <div className="text-center p-2">
                  <button type="submit" className="btn btn-success">
                    Đăng Ký
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <Box mt={5}></Box>
      </Container>
    </div>
  );
};
export default Register;
