import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
const AllJobPageCard = ({ job }) => {
    const { user } = useAuth();
    const { _id, JobTitle, Category, ApplicationStartDate, ApplicationEndDate, Salary, JobApplicantsNumber, JobBanner, LoggedInUser, } = job;

    const handleViewDetails = () => {
        if (!user) {
            Swal.fire("Sorry!!", "You have to login for visit this page", "info")
        }
    }

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className='h-72'>
                    <img src={JobBanner} alt="Job Related pic" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {JobTitle}
                        <div className="badge badge-accent">{Category}</div>
                    </h2>
                    <p className='text-lg text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200  '>Salary: <span>{Salary}</span></p>
                    <p className='text-lg text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200'>Applied: <span>{JobApplicantsNumber}</span></p>
                    <p className='text-lg text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200'>Application Start: <span>{ApplicationStartDate}</span></p>
                    <p className='text-lg text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200'>Application End: <span>{ApplicationEndDate}</span></p>

                    <div className="card-actions justify-between">
                        <Link onClick={handleViewDetails} to={`/jobDetails/${_id}`} className="btn btn-primary btn-sm">Details</Link>
                        <div >Posted By: {LoggedInUser}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AllJobPageCard.propTypes = {
    job: PropTypes.object.isRequired,
};
export default AllJobPageCard;

