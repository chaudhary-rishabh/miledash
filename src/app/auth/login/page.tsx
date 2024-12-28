import Auth from "@/components/Auth";
import MainLayout from "@/layout/MainLayout";

export default function Example() {
    return (
        <MainLayout>
            <Auth
                title="Log in"
                emailLabel="Email address"
                passwordLabel="Password"
                forgotPasswordText="Forgot password?"
                submitButtonText="Log in"
                signupText="New to MileDash? Sign Up"
                signupLink="/auth/signup"
            />
        </MainLayout>
    )
}
