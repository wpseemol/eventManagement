import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function HeroBanar({ children }) {
    useEffect(() => {
        const slider = new Glide('.glide-02', {
            type: 'slider',
            focusAt: 'center',
            perView: 1,
            autoplay: 3500,
            animationDuration: 700,
            gap: 0,
            classes: {
                nav: {
                    active: '[&>*]:bg-wuiSlate-700',
                },
            },
        }).mount();

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <>
            {/*<!-- Component: Slider with indicators inside --> */}
            <div className="relative w-full  glide-02">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex  overflow-hidden p-0">
                        <li>
                            <img
                                src="https://memo.thevendry.com/wp-content/uploads/2022/05/Alexandria_-ballroom_palm_court.jpg"
                                className="w-full xl:h-[45rem] md:h-96 h-80 object-cover object-center"
                            />
                        </li>
                        <li>
                            <img
                                src="https://m.media-amazon.com/images/I/81O8PyG9EiS._AC_UF894,1000_QL80_.jpg"
                                className="w-full xl:h-[45rem] md:h-96 h-80 object-cover object-center"
                            />
                        </li>
                        <li>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1663040492045-85ba19cbb55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                className="w-full xl:h-[45rem] md:h-96 h-80 object-cover object-center"
                            />
                        </li>
                        <li>
                            <img
                                src="https://blog.lottenypalace.com/wp-content/uploads/2015/11/Christmas-Lotte-New-York-Palace-960x430.jpg"
                                className="w-full xl:h-[45rem] md:h-96 h-80 object-cover object-center"
                            />
                        </li>
                        <li>
                            <img
                                src="https://blog.lottenypalace.com/wp-content/uploads/2015/11/Holiday-Parties-Lotte-New-York-Palace.jpg"
                                className="w-full xl:h-[45rem] md:h-96 h-80 object-cover object-center"
                            />
                        </li>
                    </ul>
                </div>
                {/*    <!-- Indicators --> */}
                <div
                    className="absolute bottom-0 z-10 flex items-center justify-center w-full gap-2"
                    data-glide-el="controls[nav]">
                    <Link to="/sign-up"></Link>
                    <button
                        className="p-4 group"
                        data-glide-dir="=0"
                        aria-label="goto slide 1">
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                    <button
                        className="p-4 group"
                        data-glide-dir="=1"
                        aria-label="goto slide 2">
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                    <button
                        className="p-4 group"
                        data-glide-dir="=2"
                        aria-label="goto slide 3">
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                    <button
                        className="p-4 group"
                        data-glide-dir="=3"
                        aria-label="goto slide 4">
                        <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                    </button>
                </div>

                <div className="absolute top-0 left-0 w-full">{children}</div>
                <div className="absolute top-0 w-full bg-gray-700/40 h-full">
                    <div className="flex flex-col items-center justify-center text-white">
                        <div className=" xl:mt-52 md:py-28 py-24 sm:px-2 px-2">
                            <h3 className="sm:text-xl text-sm font-semibold uppercase">
                                welcome to event rentals
                            </h3>
                            <h2 className="xl:text-7xl md:text-3xl md:my-4 text-2xl font-bold">
                                Beautifully Crafted,{' '}
                                <br className="hidden sm:block" /> Designed to
                                Impress
                            </h2>
                            <p className="sm:text-lg text-sm font-medium">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium{' '}
                                <br className="hidden sm:block" /> doloremque
                                laudantium,We Are solar the
                            </p>
                            <button className="secondaryBtn sm:mt-4">
                                find more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


HeroBanar.propTypes = {
    children: PropTypes.node.isRequired,
};