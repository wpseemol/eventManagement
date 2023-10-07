import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const { experience, experienceColor } = useLoaderData();
    console.log(experience);

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
                                        <p className="font-medium">
                                            {data.Description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
