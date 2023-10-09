import PropTypes from 'prop-types';

const WorkWith = ({ singClint, inx }) => {
    return (
        <li className=" " key={'key' + inx}>
            <img
                src={singClint?.logo}
                alt="Clint 1"
                className="w-40 h-full object-cover object-center"
            />
        </li>
    );
};

export default WorkWith;
WorkWith.propTypes = {
    singClint: PropTypes.object,
    inx: PropTypes.string,
};
