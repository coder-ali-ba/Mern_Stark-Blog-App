import { SignIn  } from "@clerk/clerk-react"

const LoginPage = () => {
    return(
        <div className="d-flex vh-100 align-items-center justify-content-center">
           <SignIn  signUpUrl="/register"/>
        </div>

    )
}

export default LoginPage