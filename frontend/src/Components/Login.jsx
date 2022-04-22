import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { loginRequest } from "../Login/action";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export function Login() {
  const [data, setData] = React.useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit =  () => {
    
        setData(true);
        axios
          .post("https://apartment-manager-065.herokuapp.com/login", {
            email: values.email,
            password: values.password,
          })
          .then((res) => {
            setData(false);
            dispatch(loginRequest(res.data));
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            setData(false);
          });
    
  };

  return (
    <>
        <div className="loginBox">
          <h2>Login</h2>
          <label>Email : </label>
          <input type="text" value={values.email} onChange={handleChange("email" )} placeholder="Enter Email"/>
          <br/>
          <br/>
          <label>Password : </label>
          <input type={values.showPassword ? "text" : "password"} alue={values.password} onChange={handleChange("password")} placeholder="Enter Password"/>
          <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
           </IconButton>
          <br/>
          <br/>
           <LoadingButton
            disabled={values.email == "" || values.password == ""}
            loading={data}
            variant="outlined"
            onClick={() => handleSubmit()}
            style={{marginLeft:'35%' , marginTop:'5%'}}
            >
            Login
            </LoadingButton>
        </div> 
    </>
  );
}
