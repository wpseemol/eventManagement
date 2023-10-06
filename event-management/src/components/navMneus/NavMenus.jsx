import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaPhone, FaSquareTwitter } from 'react-icons/fa6';
import eventManagement from '../../assets/Images/eventManagement.png';

const NavMenus = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    return (
        <>
            {/* some contact data on header */}
            <div className="border-b border-slate-200 bg-slate-100">
                <div className="text-sm text-slate-500 myContainer flex justify-between items-center py-3">
                    <div className="col-span-2 items-center md:col-span-4 lg:col-span-6">
                        <a
                            href="javascript:void(0)"
                            className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-500">
                            <FaPhone />
                            +306750009800
                        </a>
                    </div>
                    <div className="col-span-2 items-center justify-end gap-6 md:col-span-4 lg:col-span-6">
                        <div className="flex items-center justify-end gap-4">
                            <Link
                                href="javascript:void(0)"
                                className="transition-colors duration-300 hover:text-emerald-500">
                                <FaFacebookF />
                            </Link>
                            <Link
                                href="javascript:void(0)"
                                className="transition-colors duration-300 hover:text-emerald-500">
                                <FaSquareTwitter />
                            </Link>
                            <Link
                                href="javascript:void(0)"
                                className="transition-colors duration-300 hover:text-emerald-500">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* nave mane section  */}
            <div className="border-2 h-40  lg:relative ">
                <div className="lg:absolute w-full h-auto relative inset-0 p-6">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium relative text-slate-700"
                        role="navigation">
                        {/*      <!-- Brand logo --> */}
                        <Link
                            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 "
                            href="javascript:void(0)">
                            <img
                                className="w-24"
                                src={eventManagement}
                                alt="Site Logo"
                            />
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
                            className={`absolute top-10 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                                isToggleOpen
                                    ? 'visible opacity-100 backdrop-blur-sm'
                                    : 'invisible opacity-0'
                            }`}>
                            <li role="none" className="flex items-stretch">
                                <div className="menuStyle">
                                    <NavLink
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? 'pending'
                                                : isActive
                                                ? 'active'
                                                : ''
                                        }
                                        to="/">
                                        <span>Home</span>
                                    </NavLink>
                                </div>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <div className="menuStyle">
                                    <NavLink
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? 'pending'
                                                : isActive
                                                ? 'active'
                                                : ''
                                        }
                                        to="/contact">
                                        <span>Contact</span>
                                    </NavLink>
                                </div>
                            </li>

                            <li role="none" className="flex items-stretch">
                                <div className="menuStyle">
                                    <NavLink
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? 'pending'
                                                : isActive
                                                ? 'active'
                                                : ''
                                        }
                                        to="/account">
                                        <span>Account</span>
                                    </NavLink>
                                </div>
                            </li>

                            <li role="none" className="flex items-stretch">
                                <div className="menuStyle">
                                    <NavLink
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className={({ isActive, isPending }) =>
                                            isPending
                                                ? 'pending'
                                                : isActive
                                                ? 'active'
                                                : ''
                                        }
                                        to="/about">
                                        <span>About</span>
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                        {/*      <!-- Actions --> */}
                        <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
                            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-xl font-bold tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none ">
                                <span>Let Start</span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default NavMenus;
