import { Link, useLoaderData } from 'react-router-dom';
import HappyClint from '../../components/happyClint/HappyClint';
import TemMember from '../../components/temMember/temMember';
import Product from '../../components/product/Product';
import FawComponet from '../../components/fawComponet/FawComponet';
import WorkWith from '../../components/workWith/workWith';
import Glide from '@glidejs/glide';
import { useEffect } from 'react';

const Home = () => {
    const {
        happyClint,
        clint,
        premium,
        experience,
        experienceColor,
        ourTem,
        Products,
    } = useLoaderData() || {};

    useEffect(() => {
        const slider = new Glide('.glide-09', {
            type: 'carousel',
            autoplay: 1,
            animationDuration: 4500,
            animationTimingFunc: 'linear',
            perView: 5,
            classes: {
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
                    gap: 36,
                },
            },
        }).mount();

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <>
            {/* experiences */}
            <section
                style={{ backgroundColor: experienceColor }}
                className="py-24">
                <div className="myContainer md:flex px-4" data-aos="flip-up">
                    <div
                        className="md:w-1/4 mb-10 md:mb-0 text-center md:text-left"
                        data-aos="zoom-in">
                        <h2 className="md:text-5xl text-3xl font-semibold mb-5 ">
                            Maximize Your <br className="lg:block hidden" />{' '}
                            Trade Show <br className="lg:block hidden" />{' '}
                            Experience
                        </h2>
                        <Link to="/contact">
                            <button
                                className="primaryBtn uppercase"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom">
                                get IN Touch
                            </button>
                        </Link>
                    </div>
                    <div className="md:w-3/4 grid sm:grid-cols-2 grid-cols-1 gap-4">
                        {experience?.map((data, idx) => {
                            return (
                                <div key={idx} className="flex gap-3">
                                    <img
                                        src={data?.imgUrl}
                                        alt={data?.title}
                                        className="w-14 h-14"
                                    />
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-2">
                                            {data?.title}
                                        </h2>
                                        <p className="text-lg font-medium">
                                            {data?.Description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Premium section */}
            <section className="myContainer py-24">
                <div className="lg:flex gap-6 px-2 sm:px-0">
                    <div
                        data-aos="zoom-in-right"
                        className="lg:w-1/2 sm:flex lg:block gap-2 lg:mb-0 mb-5">
                        <div className="h-1/2 lg:w-fit sm:w-1/2">
                            <h2 className="lg:text-5xl text-3xl font-semibold mb-5 ">
                                {premium[0]?.title}
                            </h2>
                            <p className="text-lg font-medium xl:pr-12 sm:pb-0 pb-3">
                                {premium[0]?.description}
                            </p>
                        </div>
                        <div className="lg:h-1/2 lg:w-fit sm:w-1/2">
                            <img
                                src={premium[0]?.themaiUrl}
                                alt="Premium Item 1"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2" data-aos="zoom-in-left">
                        <img
                            src={premium[0]?.imageUrl}
                            alt="Premium Item Image"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </section>
            {/* clint section */}
            <section className="py-24 px-2 w-full overflow-hidden">
                <div className="glide-09 relative ">
                    <div data-glide-el="track">
                        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                            {clint?.map((singClint, inx) => {
                                return (
                                    <WorkWith
                                        key={'ast' + singClint?.id}
                                        singClint={singClint}
                                        inx={inx}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
            {/* Tablescape Services */}
            <section className=" bg-green-500/25">
                <div className="w-screen  sm:flex">
                    <div className="sm:w-1/2 lg:h-[45rem] md:h-[30rem] h-96 ">
                        <img
                            src="https://i.ibb.co/JBv8tBw/tabilcape.jpg"
                            alt="Table Cape Events"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="sm:w-1/2 flex items-center lg:ml-32 md:ml-20 ml-5 pb-5 sm:pb-0">
                        <div
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <h2 className="md:text-5xl text-3xl font-semibold ">
                                Tablescape Rentals And Services
                            </h2>

                            <p className="text-lg font-medium md:my-5 my-2 mr-3">
                                Etiam et leo ullamcorper, accumsan tortor ac,
                                bibendum urna ornare. Nulla porttitor dui et
                                blandit auctor. Mauris bibendum eleifend mattis
                                egestas, tortor ipsum facilisis justo, dapibus
                                metus condimentum magna felis sit amet nisl.
                                Donec vel mauris ac ante mollis egestas ac sed
                                magna. Duis sit amet fermentum et ipsum nec.
                            </p>
                            <Link
                                to="/contact"
                                data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom">
                                <button className="primaryBtn uppercase ">
                                    get in touch
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* clints detels */}
            <section className="myContainer py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-center">
                    {happyClint?.map((hClint, inx) => {
                        return <HappyClint info={hClint} key={'hpC' + inx} />;
                    })}
                </div>
            </section>
            {/* our tem section */}
            <section className="myContainer py-24">
                <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-5">
                    {ourTem?.map((temMember, inx) => {
                        return (
                            <TemMember
                                temMember={temMember}
                                key={`temMember${inx}`}
                            />
                        );
                    })}
                </div>
            </section>

            {/* prodact setion */}
            <section className="bg-green-500/50 py-24">
                <div className="myContainer mb-16 p-2 sm:p-0">
                    <h2 className="md:text-5xl text-3xl font-semibold mb-5 text-white">
                        This Might Interest You
                    </h2>
                    <div className=" grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5">
                        {Products?.slice(0, 3).map((product, inx) => {
                            return (
                                <Product
                                    product={product}
                                    key={`product${inx}`}
                                />
                            );
                        })}
                    </div>
                    <div className="flex justify-center mt-6 -mb-8">
                        <Link
                            to="/services"
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <button className="secondaryBtn  bg-green-500/25">
                                View All
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* faq section */}
            <section className="myContainer py-24">
                <div className="grid sm:grid-cols-3 grid-cols-1 px-3 sm:px-0">
                    <FawComponet />
                </div>
            </section>

            {/* Latest News */}
            {/* <section className="myContainer py-24">
                <div className='text-center'>
                    <p className='text-lg font-medium'>Always Good &</p>
                    <h2 className="md:text-5xl text-3xl font-semibold mb-5">
                        Latest News
                    </h2>
                </div>
            </section> */}
        </>
    );
};

export default Home;
