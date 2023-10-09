import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const HappyClint = ({ info }) => {
    const { icon, number, proj, title, description } = info || {};
    return (
        <>
            <div className="font-bold px-2">
                {title && (
                    <h2 className="md:text-5xl text-3xl font-semibold mb-5 text-center lg:text-left">
                        {title}
                    </h2>
                )}
                {description && (
                    <p className="text-lg font-medium text-center lg:text-left">
                        {description}
                    </p>
                )}

                {icon && (
                    <div className=" flex flex-col items-center">
                        {icon && (
                            <img
                                src={icon}
                                alt=""
                                className="w-16 h-full object-cover object-center"
                            />
                        )}
                        {number && (
                            <h2 className="text-3xl my-3">
                                <CountUp end={number} duration={10} />
                            </h2>
                        )}
                        {proj && <h2 className="text-3xl">{proj}</h2>}
                    </div>
                )}
            </div>
        </>
    );
};

export default HappyClint;

HappyClint.propTypes = {
    info: PropTypes.object.isRequired,
};
