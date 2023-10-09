import { Link, useLoaderData } from 'react-router-dom';
import Product from '../../components/product/Product';
import { useState } from 'react';

const Services = () => {
    const { Products } = useLoaderData() || {};

    console.log(Products);
    const [shoingItmes, setShoingItmes] = useState(3);

    return (
        <>
            {/* prodact setion */}
            <section className=" py-24">
                <div className="myContainer mb-16 p-2 sm:p-0">
                    <h2 className="md:text-7xl text-4xl font-semibold mb-20 text-black">
                        Shop
                    </h2>
                    <p className='text-xl font-medium mb-6'>
                        Showing <span>1 - {shoingItmes} </span> Of{' '}
                        <span> {Products.length} </span> Results
                    </p>
                    <div className=" grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-5">
                        {Products?.slice(0, shoingItmes).map((product, inx) => {
                            return (
                                <Product
                                    product={product}
                                    key={`product${inx}`}
                                />
                            );
                        })}
                    </div>
                    {/* <div className="flex justify-center mt-6 -mb-8">
                        <Link to="/services">
                            <button className="primaryBtn  ">View All</button>
                        </Link>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default Services;
