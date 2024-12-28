import Auth from "@/components/Auth";
import MainLayout from "@/layout/MainLayout";

export default function Signup() {
    return (
        <MainLayout>
            <Auth
                title="Sign Up"
                emailLabel="Enter your email"
                passwordLabel="Create a password"
                forgotPasswordText=""
                submitButtonText="Sign Up"
                signupText="Already have an account? Log in"
                signupLink="/auth/login"
            />
        </MainLayout>
    );
}