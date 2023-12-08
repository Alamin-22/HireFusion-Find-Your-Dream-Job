import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
const AllJobPageCard2 = ({ job }) => {

    const { _id, JobTitle, Category, ApplicationStartDate, ApplicationEndDate, Salary, AppliedCount, JobBanner, LoggedInUser } = job;

    const { user } = useAuth();

    const handleViewDetails = () => {
        if (!user) {
            Swal.fire("Sorry!!", "You have to login for visit this page", "info")
        }
    }



    return (
        <div className='flex justify-center'>
            <div className="relative md:flex w-full max-w-4xl flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="flex items-center  m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img src={JobBanner} alt="Job Related Img" className=" object-cover rounded-md md:w-20 md:h-28" />
                </div>
                <div className="p-2">
                    <div className='flex space-x-3 '>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {JobTitle}
                        </h4>
                        <button className=' btn btn-primary btn-sm btn-outline'>{Category}</button>
                    </div>
                    <div className='md:flex  md:space-x-10'>
                        <div className='text-left'>
                            <p>Application Start: <span className='font-medium'>{ApplicationStartDate}</span></p>
                            <p>Application Deadline: <span className='font-medium'>{ApplicationEndDate}</span></p>
                        </div>
                        <div className='text-left'>
                            <p>Salary: <span className='font-medium'>{Salary}</span></p>
                            <p>Applied: <span className='font-medium'>{AppliedCount}</span></p>
                        </div>
                        <Link onClick={handleViewDetails} to={`/jobDetails/${_id}`} className='btn btn-sm btn-primary'>Details</Link>
                        <div className='flex flex-row-reverse justify-between md:grid'>
                            
                            <p>Posted By: <span className='font-semibold'>{LoggedInUser}</span></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

AllJobPageCard2.propTypes = {
    job: PropTypes.object.isRequired,
};
export default AllJobPageCard2;

