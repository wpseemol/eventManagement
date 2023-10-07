import { useLoaderData } from 'react-router-dom';

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
        </>
    );
};

export default Home;
