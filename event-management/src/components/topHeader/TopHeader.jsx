import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaPhone,
    FaSquareTwitter,
} from 'react-icons/fa6';

const TopHeader = () => {
    return (
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
    );
};

export default TopHeader;
