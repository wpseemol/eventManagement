import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SingUp = () => {
    const loginRegInfo = useContext(AuthContext);
    const { singUp } = loginRegInfo || {};

    const navigate = useNavigate();

    const handleSingUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const username = e.target.username.value;
        const fullName = e.target.name.value;
        const picture = e.target.picture.value;
        singUp(email, password)
            .then((userCredential) => {
                // Signed up Successful
                // const user = userCredential.user;
                e.target.reset();
                navigate('/account');
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(username, fullName, picture);
    };
    return (
        <>
            {/* login section */}
            <section className="myContainer flex justify-center py-24">
                <div className="w-full border max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 text-lg">
                    <h1 className="text-3xl font-bold text-center">
                        Create Account
                    </h1>
                    <form className="space-y-6" onSubmit={handleSingUp}>
                        <div className="space-y-1 ">
                            <label className="block dark:text-gray-400">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="w-full border px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-green-400 outline-green-500"
                            />
                        </div>
                        <div className="space-y-1 ">
                            <label className="block dark:text-gray-400">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full border px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-green-400 outline-green-500"
                            />
                        </div>
                        <div className="space-y-1 ">
                            <label className="block dark:text-gray-400">
                                Profile Picture URL
                            </label>
                            <input
                                type="text"
                                name="picture"
                                placeholder="Image URL"
                                className="w-full border px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-green-400 outline-green-500"
                            />
                        </div>
                        <div className="space-y-1 ">
                            <label className="block dark:text-gray-400">
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full border px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 outline-green-500"
                            />
                        </div>
                        <div className="space-y-1 ">
                            <label className="block dark:text-gray-400">
                                Password
                            </label>
                            <input
                                required
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full border px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-green-400 outline-green-500"
                            />
                            <div className="flex justify-end text-xs dark:text-gray-400">
                                <a rel="noopener noreferrer" href="#">
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        <input
                            type="submit"
                            value="Sign Up"
                            className="block primaryBtn font-semibold w-full"
                        />
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        <p className="px-3  dark:text-gray-400">
                            Create with social accounts
                        </p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    </div>

                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                        have an account?
                        <Link
                            rel="noopener noreferrer"
                            to="/account"
                            className="underline dark:text-gray-100">
                            Login
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
};

export default SingUp;
