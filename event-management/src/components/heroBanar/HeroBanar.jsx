import { useEffect } from 'react';
import Glide from '@glidejs/glide';

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
            <div className="relative w-full h-80 border sm:border-none sm:h-fit glide-02">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li key={1}>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-03.jpg"
                                className="w-full max-w-full max-h-full m-auto"
                            />
                        </li>
                        <li key={2}>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-04.jpg"
                                className="w-full max-w-full max-h-full m-auto"
                            />
                        </li>
                        <li key={3}>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-05.jpg"
                                className="w-full max-w-full max-h-full m-auto"
                            />
                        </li>
                        <li key={4}>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-01.jpg"
                                className="w-full max-w-full max-h-full m-auto"
                            />
                        </li>
                        <li key={5}>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-02.jpg"
                                className="w-full max-w-full max-h-full m-auto"
                            />
                        </li>
                    </ul>
                </div>
                {/*    <!-- Indicators --> */}
                <div
                    className="absolute bottom-0 z-10 flex items-center justify-center w-full gap-2"
                    data-glide-el="controls[nav]">
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

                <div className="absolute top-0 left-0 w-screen">{children}</div>
                <div className="absolute top-0 w-screen bg-gray-700/40 h-full">
                    <div className="flex flex-col items-center justify-center text-white">
                        <div className=" xl:py-48 md:py-28 py-24 px-2">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
