// import logo from './logo.svg';
// import './App.css';
'use client'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios"
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {

    // const login = useGoogleLogin({
    //     onSuccess: async respose => {
    //         try {
    //             const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    //                 headers: {
    //                     "Authorization": `Bearer ${respose.access_token}`
    //                 }
    //             })

    //             console.log(res.data)
    //         } catch (err) {
    //             console.log(err)

    //         }

    //     }
    // });

    return (
        <GoogleOAuthProvider clientId="893619177983-rqsp4tvuer98m472857vjor93tpivdgl.apps.googleusercontent.com">
            <div className="App">
                <header className="App-header">
                    {/* <button onClick={login}>
                    <i class="fa-brands fa-google"></i>
                    Continue with google
                </button> */}
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
                </header>
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;