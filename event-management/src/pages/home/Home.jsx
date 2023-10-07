import { useLoaderData } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import clint1 from '../../assets/clintes/clintitme1.png';
import clint2 from '../../assets/clintes/clintitme2.png';
import clint3 from '../../assets/clintes/clintitme3.png';
import clint4 from '../../assets/clintes/clintitme4.png';
import clint5 from '../../assets/clintes/clintitme5.png';

const Home = () => {
    const { premium, experience, experienceColor } = useLoaderData() || {};
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
                        <div className="lg:mx-16 mx-8">
                            <img
                                src={clint1}
                                alt="Clint 1"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="lg:mx-16 mx-8">
                            <img
                                src={clint2}
                                alt="Clint 2"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="lg:mx-16 mx-8">
                            <img
                                src={clint3}
                                alt="Clint 3"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="lg:mx-16 mx-8">
                            <img
                                src={clint4}
                                alt="Clint 4"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="lg:mx-16 mx-8">
                            <img
                                src={clint5}
                                alt="Clint 5"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </Marquee>
                </div>
            </section>
            {/* Tablescape Services */}
            <section className="py-24">
                <div className="w-screen  sm:flex">
                    <div className="sm:w-1/2 lg:h-[40rem] md:h-[30rem] h-96 px-3">
                        <img
                            src="https://i.ibb.co/JBv8tBw/tabilcape.jpg"
                            alt="Table Cape Events"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="sm:w-1/2 flex items-center lg:ml-32 md:ml-20 ml-5">
                        <div>
                            <h2 className="md:text-5xl text-3xl font-semibold ">
                                Tablescape Rentals And Services
                            </h2>

                            <p className="text-lg font-medium my-5">
                                Etiam et leo ullamcorper, accumsan tortor ac,
                                bibendum urna ornare. Nulla porttitor dui et
                                blandit auctor. Mauris bibendum eleifend mattis
                                egestas, tortor ipsum facilisis justo, dapibus
                                metus condimentum magna felis sit amet nisl.
                                Donec vel mauris ac ante mollis egestas ac sed
                                magna. Duis sit amet fermentum et ipsum nec.
                            </p>
                            <button className="primaryBtn uppercase">
                                get in touch
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
