import PropTypes from 'prop-types';

import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';


const AllJobPageCard3 = ({ job }) => {



    const {  JobTitle, Category, ApplicationStartDate, ApplicationEndDate, Salary, AppliedCount, JobBanner, LoggedInUser } = job;
    const { user } = useAuth();

    const handleViewDetails = () => {
        if (!user) {
            Swal.fire("Sorry!!", "You have to login for visit this page", "info")
        }
    }


    return (

        <tr className='h-24 mb-4 shadow-xl rounded-lg'>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded   " />

                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-10 h-10 rounded-full" src={JobBanner} alt="" />
                        <div>
                            <h2 className="font-medium text-gray-800  ">{JobTitle}</h2>
                            <p className="text-sm font-normal text-gray-600 ">{Category}</p>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 ">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                    <h2 className="text-sm font-normal text-emerald-500">{ApplicationStartDate}</h2>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Job Name</td>
            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{ApplicationEndDate}</td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <p className="px-3 py-1 text-xs text-indigo-500 rounded-full  bg-indigo-100/60">{Salary}</p>
                    <p className="px-3 py-1 text-xs text-blue-500 rounded-full  bg-blue-100/60">{AppliedCount}</p>
                    <p className="px-3 py-1 text-xs text-pink-500 rounded-full  bg-pink-100/60">{LoggedInUser}</p>
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <button onClick={handleViewDetails} className="text-gray-500 transition-colors duration-200  hover:text-red-500 focus:outline-none">
                        view
                    </button>

                    <button className="text-gray-500 transition-colors duration-200  hover:text-yellow-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>

    );
};
AllJobPageCard3.propTypes = {
    job: PropTypes.object.isRequired,
};

export default AllJobPageCard3;



