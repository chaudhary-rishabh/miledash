import Link from "next/link";

interface AuthProps {
    title: string;
    emailLabel: string;
    passwordLabel: string;
    forgotPasswordText: string;
    submitButtonText: string;
    signupText: string;
    signupLink: string;
}

export default function Auth({
    title,
    emailLabel,
    passwordLabel,
    forgotPasswordText,
    submitButtonText,
    signupText,
    signupLink,
}: AuthProps) {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    {title}
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            {emailLabel}
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-xl bg-white px-3 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                {passwordLabel}
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-gray-500 hover:text-gray-800">
                                    {forgotPasswordText}
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-xl bg-white px-3 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-xl bg-white-500 px-3 py-2.5 text-sm/6 font-semibold bg-green-500 text-white shadow-lg hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            {submitButtonText}
                        </button>
                    </div>
                </form>

                <div>
                    <Link
                        href={signupLink}
                        className="my-5 flex w-full justify-center rounded-xl bg-white-500 px-3 py-1.5 text-sm/6 font-semibold text-green-500 hover:text-green-700"
                    >
                        {signupText}
                    </Link>
                </div>
            </div>
        </div>
    );
}
