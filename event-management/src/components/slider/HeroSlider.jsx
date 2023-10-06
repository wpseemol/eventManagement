import { useEffect } from 'react';
import Glide from '@glidejs/glide';
function HeroSlider() {
    useEffect(() => {
        const slider = new Glide('.glide-03', {
            type: 'slider',
            focusAt: 'center',
            perView: 1,
            autoplay: 10000,
            animationDuration: 1000,
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
            {/*<!-- Component: Slider with indicators & controls inside --> */}
            <div className="relative w-full h-[45rem] glide-03 z-[-2]  ">
                {/*    <!-- Slides --> */}
                <div className="overflow-hid" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li>
                            <img
                                src="https://theeventllcga.com/wp-content/uploads/2016/08/decor-blog-1.jpg"
                                className="w-full max-w-full max-h-[45rem] m-auto object-cover object-center"
                            />
                        </li>
                        <li>
                            <img
                                src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                                className="w-full max-w-full max-h-[45rem] m-auto object-cover object-center"
                            />
                        </li>
                        <li>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-02.jpg"
                                className="w-full max-w-full max-h-[45rem] m-auto object-cover object-center"
                            />
                        </li>
                        <li>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-03.jpg"
                                className="w-full max-w-full max-h-[45rem] m-auto object-cover object-center"
                            />
                        </li>
                        <li>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-04.jpg"
                                className="w-full max-w-full max-h-[45rem] m-auto object-cover object-center"
                            />
                        </li>
                    </ul>
                </div>
                {/*    <!-- Controls --> */}
                <div
                    className="absolute left-0 flex items-center justify-center w-full h-full px-4 top-0 border bg-slate-300/40"
                    data-glide-el="controls">
                    <div>
                        <h3 className="md:text-xl text-xs font-semibold uppercase">
                            welcome to Event Rentals
                        </h3>
                        <h1 className="xl:text-7xl md:text-5xl text-xl font-extrabold sm:my-4">
                            Beautifully Crafted,
                            <br className="hidden sm:block" /> Designed to
                            Impress
                        </h1>
                        <p className="md:text-lg text-xs font-medium">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium <br /> doloremque
                            laudantium,We Are solar the
                        </p>
                        <button className="transprentBtn sm:mt-4">
                            find More
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSlider;
