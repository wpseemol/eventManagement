import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../assets/css/hover.css';

const Product = ({ product }) => {
    const navigate = useNavigate();
    const { id, name, price, type, fecerImgUrl,  } = product || {};
    const handalClickProduct = () => {
        navigate(`/services/${id}`);
    };
    return (
        <>
            <div
                className="w-full prodactContainer "
                onClick={handalClickProduct}>
                <div className="overflow-hidden relative">
                    <img
                        src={fecerImgUrl}
                        alt={name}
                        className="w-full h-96 object-cover object-center border duration-300  productImage"
                    />
                    <div className="absolute -bottom-[30rem]  w-full h-full duration-300 prodectHoverBtn">
                        <div className="flex justify-center mt-72">
                            <button className="primaryBtn ">Add to Card</button>
                        </div>
                    </div>
                </div>

                <div className="p-5 text-white ">
                    <h3 className="text-lg font-semibold"> {type} </h3>
                    <h2 className="text-3xl font-bold mb-4"> {name} </h2>
                    <h2 className="text-base font-medium">${price} </h2>
                </div>
            </div>
        </>
    );
};

export default Product;

Product.propTypes ={
    product: PropTypes.object.isRequired,
} 
