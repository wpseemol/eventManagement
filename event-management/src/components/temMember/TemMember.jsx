

const TemMember = ({temMember}) => {
    const { name, imgUrl,jobs} = temMember || {};
    return (
        <div className="bg-green-100 hover:-translate-y-3  duration-300 relative">
            <img
                src={imgUrl}
                alt={name}
                className="w-full h-96 object-cover object-center "
            />
            <div className="pl-7 pb-7">
                <h2 className="text-2xl font-bold my-3">{name}</h2>
                <h3 className="text-xl font-medium">{jobs}</h3>
            </div>
            {/* sociale media  */}
            
        </div>
    );
};

export default TemMember;