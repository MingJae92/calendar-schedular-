
import { GoogleLogin, GoogleLoginProps } from '@react-oauth/google';

function App(): JSX.Element {
    const responseMessage = (response: GoogleLoginProps) => {
        console.log(response);
    };
    const errorMessage = (error: any) => {
        console.log(error);
    };
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin onSuccess={responseMessage as GoogleLoginProps['onSuccess']} onError={errorMessage as GoogleLoginProps['onError']} />
        </div>
    );
}

export default App;
