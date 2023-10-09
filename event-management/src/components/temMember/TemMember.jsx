import PropTypes from 'prop-types';
import { FaFacebook, FaSquareTwitter, FaTelegram } from 'react-icons/fa6';
import '../../assets/css/hover.css';

const TemMember = ({ temMember }) => {
    const { name, imgUrl, jobs } = temMember || {};
    return (
        <div className="bg-green-100 hover:-translate-y-3  duration-300 relative">
            <div className="relative overflow-hidden hoverForComingSocialMedia">
                <img
                    src={imgUrl}
                    alt={name}
                    className="w-full h-96 object-cover object-center "
                />
                <div className="absolute top-5 viseableSosaimidia -right-36 duration-300">
                    <div className="flex justify-center bg-emerald-600/70 gap-3 text-2xl text-white/80 p-2 rounded-sm">
                        <FaFacebook />
                        <FaSquareTwitter />
                        <FaTelegram />
                    </div>
                </div>
            </div>
            <div className="pl-7 pb-7">
                <h2 className="text-2xl font-bold my-3">{name}</h2>
                <h3 className="text-xl font-medium">{jobs}</h3>
            </div>
            {/* sociale media  */}
        </div>
    );
};

export default TemMember;

TemMember.propTypes = {
    temMember: PropTypes.object.isRequired,
};
