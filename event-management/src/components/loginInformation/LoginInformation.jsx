import PropTypes from 'prop-types';

const LoginInformation = ({ info, logOutFun }) => {
    const handalLogout = () => {
        logOutFun()
            .then(() => {
                // Sign-out successful.
                console.log('log out successful');
            })
            .catch(() => {
                // An error happened.
            });
    };

    return (
        <>
            <div className="absolute right-0 bg-gray-600/80 text-white rounded-md">
                <div className="w-fit m-5">
                    <ul>
                        <li>{info?.displayName}</li>
                        <li className="my-3">{info?.email}</li>
                    </ul>
                    <button
                        onClick={handalLogout}
                        className="secondaryBtn rounded-md mt-4">
                        Log Out
                    </button>
                </div>
            </div>
        </>
    );
};

export default LoginInformation;

LoginInformation.propTypes = {
    info: PropTypes.object.isRequired,
    logOutFun: PropTypes.func,
};
