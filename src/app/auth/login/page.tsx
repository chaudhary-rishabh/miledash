import Auth from "@/components/Auth";

export default function Example() {
    return (
        <>
            <Auth
                title="Log in"
                emailLabel="Email address"
                passwordLabel="Password"
                forgotPasswordText="Forgot password?"
                submitButtonText="Log in"
                signupText="New to MileDash? Sign Up"
                signupLink="/auth/signup"
            />
        </>
    )
}
