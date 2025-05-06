import { SignUp } from "@clerk/clerk-react"

const RegisterPage = () => {
    return(
        <div className="d-flex vh-100 align-items-center justify-content-center">
        <SignUp signInUrl="/Login"/>
        
     </div>

    )
}

export default RegisterPage