import { useLoaderData } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import HappyClint from '../../components/happyClint/HappyClint';
import TemMember from '../../components/temMember/temMember';

const Home = () => {
    const { happyClint, clint, premium, experience, experienceColor, ourTem } =
        useLoaderData() || {};
    console.log(premium[0]);

    return (
        <>
            {/* experiences */}
            <section
                style={{ backgroundColor: experienceColor }}
                className="py-24">
                <div className="myContainer md:flex px-4">
                    <div className="md:w-1/4 mb-10 md:mb-0 text-center md:text-left">
                        <h2 className="md:text-5xl text-3xl font-semibold mb-5 ">
                            Maximize Your <br className="lg:block hidden" />{' '}
                            Trade Show <br className="lg:block hidden" />{' '}
                            Experience
                        </h2>
                        <button className="primaryBtn uppercase">
                            get IN Touch
                        </button>
                    </div>
                    <div className="md:w-3/4 grid sm:grid-cols-2 grid-cols-1 gap-4">
                        {experience.map((data, idx) => {
                            console.log(idx);
                            return (
                                <div key={idx} className="flex gap-3">
                                    <img
                                        src={data.imgUrl}
                                        alt={data.title}
                                        className="w-14 h-14"
                                    />
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-2">
                                            {data.title}
                                        </h2>
                                        <p className="text-lg font-medium">
                                            {data.Description}
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
                    <div className="lg:w-1/2 sm:flex lg:block gap-2 lg:mb-0 mb-5">
                        <div className="h-1/2 lg:w-fit sm:w-1/2">
                            <h2 className="lg:text-5xl text-3xl font-semibold mb-5 ">
                                {premium[0].title}
                            </h2>
                            <p className="text-lg font-medium xl:pr-12 sm:pb-0 pb-3">
                                {premium[0].description}
                            </p>
                        </div>
                        <div className="lg:h-1/2 lg:w-fit sm:w-1/2">
                            <img
                                src={premium[0].themaiUrl}
                                alt="Premium Item 1"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src={premium[0].imageUrl}
                            alt="Premium Item Image"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </section>
            {/* clint section */}
            <section className="py-24 px-2">
                <div>
                    <Marquee pauseOnHover={true}>
                        {clint.map((singClint) => {
                            return (
                                <>
                                    <div
                                        className="lg:mx-16 mx-8 w-36"
                                        key={singClint.id}>
                                        <img
                                            src={singClint.logo}
                                            alt="Clint 1"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </>
                            );
                        })}
                    </Marquee>
                </div>
            </section>
            {/* Tablescape Services */}
            <section className=" bg-slate-500">
                <div className="w-screen  sm:flex">
                    <div className="sm:w-1/2 lg:h-[45rem] md:h-[30rem] h-96 ">
                        <img
                            src="https://i.ibb.co/JBv8tBw/tabilcape.jpg"
                            alt="Table Cape Events"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="sm:w-1/2 flex items-center lg:ml-32 md:ml-20 ml-5 pb-5 sm:pb-0">
                        <div>
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
                            <button className="primaryBtn uppercase ">
                                get in touch
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* clints detels */}
            <section className="myContainer py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-center">
                    {happyClint.map((hClint, inx) => {
                        return <HappyClint info={hClint} key={'hpC' + inx} />;
                    })}
                </div>
            </section>
            {/* our tem section */}
            <section className="myContainer py-24">
                <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-5">
                    {ourTem.map((temMember, inx) => {
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
            <section className="bg-green-500 py-24">
                <div className="myContainer grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5">
                    
                </div>
            </section>
        </>
    );
};

export default Home;
