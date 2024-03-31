import { setUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import "./login.css";
import CustomButton from "./customButton";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const dispatch = useDispatch();

  //   const onSuccess = (res) => {
  //     dispatch(setUser(res));
  //   };

  //   const onFailure = (res) => {
  //     console.log(res);
  //   };

  return (
    <div>
      <b>
        <p>Para poder realizar su compra primero debe iniciar sesión primero</p>
        <div>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse?.credential);
              dispatch(setUser(decoded));
              //console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </b>
    </div>
  );
}
