import {
    FaFacebookF,
    FaLinkedinIn,
    FaPhone,
    FaSquareTwitter,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <>
            {/*<!-- Top bar --> */}
            <div className="border-b border-slate-200 bg-slate-100 px-8">
                <div className="flex justify-between items-center w-full max-w-full  py-2  text-sm text-slate-500   ">
                    <div className="">
                        <Link
                            
                            className="flex items-center gap-2 transition-colors duration-300 hover:text-emerald-500">
                            <FaPhone /> <p>+306750009800</p>
                        </Link>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-end gap-4">
                            <Link
                                
                                className="transition-colors duration-300 hover:text-emerald-500">
                                <FaFacebookF />
                            </Link>
                            <Link
                                
                                className="transition-colors duration-300 hover:text-emerald-500">
                                <FaSquareTwitter />
                            </Link>
                            <Link
                                
                                className="transition-colors duration-300 hover:text-emerald-500">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBar;
