import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData, useParams } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

const SinglePage = () => {
    const { Products } = useLoaderData();
    const selectedId = useParams();
    const [startDate, setStartDate] = useState(new Date());

    const selectedProdact = Products.find(
        (element) => element?.id === selectedId?.servic
    );

    const { name, disc, imgGallery, fecerImgUrl, Features, dimensions, price } =
        selectedProdact;

    return (
        <>
            <section className="myContainer py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img
                        src={fecerImgUrl}
                        alt=""
                        className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                    />
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src={imgGallery}
                    />
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src={imgGallery[1]}
                    />
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src={imgGallery[2]}
                    />
                    <img
                        alt=""
                        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                        src={imgGallery}
                    />
                </div>
            </section>
            <section className="myContainer mb-6">
                <div className="flex flex-col-reverse md:flex-row  gap-2 px-2 sm:px-0">
                    <div>
                        <div>
                            <h2 className="md:text-5xl text-3xl font-semibold mb-5">
                                {name}
                            </h2>
                            <p className="text-lg font-medium w-3/4"> {disc} </p>
                        </div>
                        <div className="mt-8">
                            <h2 className="md:text-4xl text-2xl font-semibold mb-5">
                                Features
                            </h2>
                            <ul className="list-disc list-inside">
                                {Features.map((elm, inx) => (
                                    <li className="" key={'fea' + inx}>
                                        {elm}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h2 className="md:text-4xl text-2xl font-semibold mb-5">
                                Dimensions
                            </h2>
                            <table className="table-auto border">
                                {
                                    <tbody>
                                        {dimensions?.map((item, inx) => {
                                            return (
                                                <tr key={'tbl' + inx}>
                                                    <td className="border p-2 border-slate-300">
                                                        {item[0]}
                                                    </td>
                                                    <td className="border p-2 border-slate-300">
                                                        {item[1]}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                }
                            </table>
                        </div>
                    </div>

                    <div>
                        <div className="border  rounded-lg">
                            <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                                <div className="p-6">
                                    <p className='text-xl font-bold text-black'> ${price} </p>
                                    <div className=" my-4 p-2 flex items-center gap-2">
                                        <DatePicker
                                            className="outline-none border border-black/30 rounded-md p-2 w-28"
                                            selected={startDate}
                                            onChange={(date) =>
                                                setStartDate(date)
                                            }
                                        />
                                        <span className="font-medium">TO</span>
                                        <DatePicker
                                            className="outline-none border border-black/30 rounded-md p-2 w-28"
                                            selected={startDate}
                                            onChange={(date) =>
                                                setStartDate(date)
                                            }
                                        />
                                    </div>
                                    <button className="primaryBtn">
                                        Reant Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SinglePage;
