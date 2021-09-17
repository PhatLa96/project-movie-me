import {
  Avatar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { RegisterAction } from "../../redux/actions/ManagerUserAction";
const schema = yup.object().shape({
  taiKhoan: yup.string().required("User is required"),
  matKhau: yup.string().required("Password is required"),
  hoTen: yup.string().required("Họ và tên is required"),
  soDt: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]+$/g, "Phone must be number!!!!"),
  email: yup.string().required("Email is required").email("Email is invalid"),
});
function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm({ resolver: yupResolver(schema) });
  const onLoginSubmit = (data) => {
    console.log(data);
    dispatch(RegisterAction(data));
  };
  return (
    <div>
      <Container maxWidth="sm" component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký
          </Typography>
          <form
            onSubmit={handleSubmit(onLoginSubmit)}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  classes={{ root: classes.textField }}
                  variant="outlined"
                  autoFocus
                  required
                  fullWidth
                  id="taiKhoan"
                  label="Tài khoản"
                  autoFocus
                  {...register("taiKhoan")}
                />
                {errors.taiKhoan && (
                  <p className={classes.textError}>{errors.taiKhoan.message}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  classes={{ root: classes.textField }}
                  variant="outlined"
                  required
                  fullWidth
                  name="matKhau"
                  label="Mật khẩu"
                  type="password"
                  id="matKhau"
                  autoComplete="current-password"
                  {...register("matKhau")}
                />
                {errors.matKhau && (
                  <p className={classes.textError}>{errors.matKhau?.message}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  classes={{ root: classes.textField }}
                  name="soDt"
                  variant="outlined"
                  required
                  fullWidth
                  id="soDt"
                  label="Số điện thoại"
                  {...register("soDt")}
                />
                {errors.soDt && (
                  <p className={classes.textError}>{errors.soDt?.message}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  classes={{ root: classes.textField }}
                  name="hoTen"
                  variant="outlined"
                  required
                  fullWidth
                  id="hoTen"
                  label="Họ và tên"
                  {...register("hoTen")}
                />
                {errors.hoTen && (
                  <p className={classes.textError}>{errors.hoTen?.message}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  classes={{ root: classes.textField }}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className={classes.textError}>{errors.email?.message}</p>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ĐĂNG KÝ
            </Button>
            {/* <NavLink to="/">
              <Button variant="contained" fullWidth color="primary">
                Back to home
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button className="mt-3" fullWidth color="primary">
                Do you already have an account? Login now
              </Button>
            </NavLink> */}
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Register;
