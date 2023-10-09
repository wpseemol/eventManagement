import { useLoaderData } from "react-router-dom";
import TemMember from "../../components/temMember/temMember";

const About = () => {

      const {

          ourTem,
          
      } = useLoaderData() || {};
    return (
        <>
            <section className="myContainer py-24">
                <div>
                    <div>
                        <h2 className="md:text-6xl sm:text-4xl text-3xl font-bold mb-5 underline px-3 sm:px-0">
                            About
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 px-3 sm:px-0 ">
                        <div className="mb-10">
                            <div className="">
                                <h2 className="md:text-6xl sm:text-4xl text-3xl font-medium mb-5">
                                    We are Event Rentals Company with a mission!
                                </h2>
                                <p className="text-lg font-medium w-2/3">
                                    Are you looking for a tent? Well look no
                                    more! We have the stretch tents that you
                                    need for all of yr event needs, big or
                                    small!
                                </p>
                            </div>
                            <div className=" sm:flex  gap-4 mt-10">
                                <img
                                    src="https://i.ibb.co/bK6VZVD/svgviewer-png-output-3.png"
                                    alt="Corporate Events"
                                    className="w-16 h-16 object-cover"
                                />
                                <div>
                                    <h2 className="md:text-4xl text-2xl font-semibold ">
                                        Corporate Events
                                    </h2>
                                    <p className="text-lg font-medium sm:w-2/3">
                                        The modern world is in a continuous
                                        movement and people everywhere are
                                        looking for quick, safe means of
                                        accessing accurate information. Prompt
                                        information is vital.
                                    </p>
                                </div>
                            </div>
                            <div className="sm:flex gap-4 my-5">
                                <img
                                    src="https://i.ibb.co/1J0r7Xh/svgviewer-png-output-4.png"
                                    alt="Booth Desgin"
                                    className="w-16 h-16 object-cover"
                                />
                                <div>
                                    <h2 className="md:text-4xl text-2xl font-semibold ">
                                        Booth Desgin
                                    </h2>
                                    <p className="text-lg font-medium sm:w-2/3">
                                        The modern world is in a continuous
                                        movement and people everywhere are
                                        looking for quick, safe means of
                                        accessing accurate information. Prompt
                                        information is vital.
                                    </p>
                                </div>
                            </div>
                            <div className="sm:flex gap-4">
                                <img
                                    src="https://i.ibb.co/PWVt7LG/svgviewer-png-output-5.png"
                                    alt="Booth Desgin"
                                    className="w-16 h-16 object-cover"
                                />
                                <div>
                                    <h2 className="md:text-4xl text-2xl font-semibold ">
                                        Booth Desgin
                                    </h2>
                                    <p className="text-lg font-medium sm:w-2/3">
                                        The modern world is in a continuous
                                        movement and people everywhere are
                                        looking for quick, safe means of
                                        accessing accurate information. Prompt
                                        information is vital.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://i.ibb.co/FXwtHcf/table-4-680x800.jpg"
                                alt="Event Rentals"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="w-full h-[40rem] relative">
                    <img
                        src="https://i.ibb.co/CtFMDZG/wild-wedding-flowers.jpg"
                        alt="Weaiding table"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-zinc-800/20 w-full h-full"></div>
                </div>
            </section>

            <section className="myContainer py-20">
                <div className="flex justify-center">
                    <div className="text-center mb-16">
                        <p className="text-lg font-medium">Expert Team</p>
                        <h2 className="md:text-5xl text-3xl font-bold ">
                            Professional Team
                        </h2>
                    </div>
                </div>
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
        </>
    );
};

export default About;
