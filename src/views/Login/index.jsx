import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import * as yup from "yup";
import { LoginAction } from "../../redux/actions/ManagerUserAction";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("*Tài khoản không được bỏ trống !"),
  matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      padding: theme.spacing(8),
    },
  },
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
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
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  let location = useLocation();

  const handleSubmit = (user) => {
    dispatch(
      LoginAction(user, () => {
        history.goBack();
      })
    );
  };
  const handleDangKy = () => {
    history.push("/dangky");
  };
  return (
    <div className="text-light">
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
            }}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="col-sm-12 mx-auto">
                <div className="form-group position-relative">
                  <label>Tài khoản</label>
                  <ErrorMessage
                    name="taiKhoan"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  />
                  <Field type="text" className="form-control" name="taiKhoan" />
                </div>

                <div className="form-group position-relative">
                  <label>Mật khẩu</label>
                  <ErrorMessage
                    name="matKhau"
                    render={(msg) => (
                      <small className="text-danger">{msg}</small>
                    )}
                  />
                  <Field
                    type="password"
                    className="form-control"
                    name="matKhau"
                  />
                </div>
                <p
                  className="text-success"
                  style={{ cursor: "pointer" }}
                  onClick={handleDangKy}
                >
                  * Đăng ký
                </p>
                <button
                  style={{
                    backgroundColor: "#3E63b6",
                    borderColor: "#3E63b6",
                    cursor: "pointer",
                  }}
                  type="submit"
                  className="btn btn-success  container"
                >
                  Đăng nhập
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
    </div>
  );
}
