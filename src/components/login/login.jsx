import GoogleLogin from "react-google-login";
import { setUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import "./login.css";
import CustomButton from "./customButton";

export default function Login() {
  const dispatch = useDispatch();

  const clientID =
    "967378069105-vh2cgj5gf9q1c3vuqlmqljcg48p21vlt.apps.googleusercontent.com";

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID,
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (res) => {
    dispatch(setUser(res));
  };

  const onFailure = (res) => {
    console.log(res);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <b>
        <p>Para poder realizar su compra primero debe iniciar sesión primero</p>
        <div>
          <GoogleLogin
            // render={() => <CustomButton />}
            clientId={clientID}
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
        </div>
      </b>
    </div>
  );
}
