import glide from "@glidejs/glide";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const Contact = () => {
      
    const { imgGallery } = useLoaderData();
 



     useEffect(() => {
         const slider = new glide('.glide-06', {
             type: 'carousel',
             focusAt: 'center',
             perView: 3,
             autoplay: 3000,
             animationDuration: 700,
             gap: 24,
             classNames: {
                 nav: {
                     active: '[&>*]:bg-wuiSlate-700',
                 },
             },
             breakpoints: {
                 1024: {
                     perView: 2,
                 },
                 640: {
                     perView: 1,
                 },
             },
         }).mount();

         return () => {
             slider.destroy();
         };
     }, []);
    return (
        <>
            <section className="myContainer py-24">
                <div>
                    <h2 className="md:text-5xl text-3xl font-semibold mb-5 capitalize">
                        Get in touch
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-1">
                        <div>
                            <p>
                                Efficiently unleash cross-media information
                                without cross-media value. Quickly maximize
                                timely deliverable. Exerci tation ullamcorper
                                suscipit lobortis nisl ut aliquip ex ea commodo
                                no.
                            </p>
                            <div className="">
                                <div className="mt-8 flex gap-4 items-center">
                                    <div className="w-16">
                                        <img
                                            src="https://i.ibb.co/0hW9XCs/svgviewer-png-output.png"
                                            alt="Email Icon"
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">
                                            Email Address
                                        </h2>
                                        <p>hello@example.com</p>
                                    </div>
                                </div>
                                <div className="my-6 flex gap-4 items-center">
                                    <div className="w-16">
                                        <img
                                            src="https://i.ibb.co/4Jj8MHz/svgviewer-png-output-1.png
"
                                            alt="Phone Icon"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="">
                                        <h2 className="text-xl font-bold">
                                            Phone Number
                                        </h2>
                                        <p>+31 123 456 789 - Office</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="w-16">
                                        <img
                                            src="https://i.ibb.co/wcSWhHF/svgviewer-png-output-2.png"
                                            alt="Address Icon"
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold">
                                            Our Address
                                        </h2>
                                        <p>
                                            Our Address 6954 bin broug road, NY
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className=" font-medium text-xl">
                                    Your Name (required)
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name=""
                                    placeholder="Your Name..."
                                    className="border w-full p-3 rounded  outline-emerald-500 focus:outline "
                                />
                            </div>

                            <div>
                                <label className="font-medium text-xl">
                                    Your Phone(required)
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name=""
                                    placeholder="Phone"
                                    className="border w-full p-3 rounded outline-emerald-500 focus:outline"
                                />
                            </div>

                            <div>
                                <label className="font-medium text-xl">
                                    Your E-mail(required)
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name=""
                                    placeholder="Your E-mail..."
                                    className="border w-full p-3 rounded outline-emerald-500 focus:outline"
                                />
                            </div>

                            <div>
                                <label className="font-medium text-xl">
                                    Your Address
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name=""
                                    placeholder="Your Address..."
                                    className="border w-full p-3 rounded outline-emerald-500 focus:outline"
                                />
                            </div>
                            <div className="col-span-2 ">
                                <div className="relative">
                                    <textarea
                                        type="text"
                                        placeholder="Write your message..."
                                        rows="5"
                                        className="peer relative w-full rounded border border-slate-200 px-4 py-2 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"></textarea>
                                    <label className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
                                        Write your message...
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<!-- Component: Card Carousel --> */}
            <div className="glide-06 relative w-full overflow-hidden rounded bg-white shadow-xl shadow-slate-200">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        {imgGallery.map((imgUrl)=>{
                            return (
                                <>
                                    <li>
                                        <img
                                            src={imgUrl}
                                            className="w-full h-80 object-cover"
                                        />
                                    </li>
                                </>
                            );
                        })}

                        {/* <li>
                            <img
                                src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                                className="m-auto max-h-full w-full max-w-full"
                            />
                        </li> */}
                        
                    </ul>
                </div>
                {/*    <!-- Controls --> */}
                <div
                    className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
                    data-glide-el="controls">
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5">
                            <title>prev slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                    </button>
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir=">"
                        aria-label="next slide">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5">
                            <title>next slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Contact;
