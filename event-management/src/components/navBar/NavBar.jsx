import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import siteLogo from '../../assets/Images/event management log.png';
import { AuthContext } from '../../providers/AuthProvider';
import LoginInformation from '../loginInformation/LoginInformation';
import '../../assets/css/hover.css';

export default function NavbarTopBarPreview() {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const loginRegInfo = useContext(AuthContext);
    const { user, logOut } = loginRegInfo || {};

    // console.log(user?.email);

    return (
        <>
            <div className=" relative border-b-1 z-20 w-full border-b border-gray-800/50 bg-gray-800/50 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-gray-800/50 lg:border-gray-800/50 lg:backdrop-blur-sm lg:after:hidden text-xl ">
                <div className="relative max-w-full sm:px-6 sm:mx-10 mx-3">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                        role="navigation">
                        {/*      <!-- Brand logo --> */}
                        <Link
                            id="WindUI"
                            aria-label="WindUI logo"
                            aria-current="page"
                            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 z-10"
                            to="/">
                            <div className="w-20 h-20 rounded-full  bg-gray-200/70 flex justify-center items-center">
                                <img
                                    src={siteLogo}
                                    alt="site logo"
                                    className="w-12 hover:scale-125 duration-300"
                                />
                            </div>
                        </Link>
                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                    isToggleOpen
                        ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 '
                        : ''
                }
              `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? 'true' : 'false'}
                            aria-label="Toggle navigation">
                            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute top-[5.5rem] left-0 z-[-1] h-fit w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain  px-8 pb-6  font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 lg:text-white text-black ${
                                isToggleOpen
                                    ? 'visible opacity-100 backdrop-blur-sm'
                                    : 'invisible opacity-0'
                            }`}>
                            <li role="none" className="flex items-stretch">
                                <div
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-4">
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? 'pending'
                                                : isActive
                                                ? 'active'
                                                : ''
                                        }>
                                        <span>Home</span>
                                    </NavLink>
                                </div>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <div
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-4">
                                    <NavLink
                                        to="/services"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? 'pending'
                                                : isActive
                                                ? 'active'
                                                : ''
                                        }>
                                        <span> Services </span>
                                    </NavLink>
                                </div>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <div
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-4">
                                    <NavLink
                                        to="/account"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? 'pending'
                                                : isActive
                                                ? 'active'
                                                : ''
                                        }>
                                        <span>My Account</span>
                                    </NavLink>
                                </div>
                            </li>

                            <li role="none" className="flex items-stretch">
                                <div
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-4">
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? 'pending'
                                                : isActive
                                                ? 'active'
                                                : ''
                                        }>
                                        <span>Contact</span>
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                        {/*      <!-- Actions --> */}
                        <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
                            {user?.email ? (
                                <div className="relative duration-300 abaterImageHover">
                                    <img
                                        alt=""
                                        className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri"
                                        src={
                                            user?.photoURL
                                                ? user?.photoURL
                                                : 'https://i.ibb.co/wBfQjTy/user-Image.png'
                                        }
                                    />
                                    <div className="hidden hover:block duration-300 loginInformationShow">
                                        <LoginInformation
                                            info={user}
                                            logOutFun={logOut}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <Link to="/sign-up">
                                    <button className="primaryBtn">
                                        Get Start
                                    </button>
                                </Link>
                            )}
                        </div>
                    </nav>
                </div>
            </div>

            {/*<!-- End Navbar with Topbar--> */}
        </>
    );
}
