import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';

export default function SliderIndicatorsControlsInside({ children }) {
    useEffect(() => {
        const slider = new Glide('.glide-03', {
            type: 'slider',
            focusAt: 'center',
            perView: 1,
            autoplay: 3000,
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
            {/*<!-- Component: Slider with indicators & controls inside --> */}
            <div className="relative w-full 2xl:h-[50rem] xl:h-[40rem] lg:h-[30rem] sm:h-80 h-40 overflow-hidden object-contain object-center glide-03 border">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li>
                            <img
                                src="https://mindyweiss.com/wp-content/uploads/2020/05/1_TooFacedPeach-106.jpg"
                                className="w-full max-w-full max-h-full m-auto"
                            />
                        </li>
                        <li>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-01.jpg"
                                className="w-full max-w-full max-h-full m-auto "
                            />
                        </li>
                        <li>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-02.jpg"
                                className="w-full max-w-full max-h-full m-auto"
                            />
                        </li>
                        <li>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-03.jpg"
                                className="w-full max-w-full max-h-full m-auto"
                            />
                        </li>
                        <li>
                            <img
                                src="https://Tailwindmix.b-cdn.net/image-04.jpg"
                                className="w-full max-w-full max-h-full m-auto"
                            />
                        </li>
                    </ul>
                    <div className="absolute top-0 left-0">
                        <div className='w-screen'>{children}</div>
                    </div>
                </div>
                {/*    <!-- Controls --> */}
            </div>
            {/*<!-- End Slider with indicators & controls inside --> */}
        </>
    );
}
