import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const MyJobTableRow = ({ jobCard, handleDelete }) => {

    const { _id, CompanyLogo, Salary, JobTitle, JobApplicantsNumber, Category } = jobCard;




    return (
        <tr>
            <th>{_id}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={CompanyLogo} alt="Applicants image" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{JobTitle}</td>
            <td>{Category}</td>
            <td>{Salary}</td>
            <td>{JobApplicantsNumber}</td>
            <td>
                <div className="join join-vertical space-y-1">
                    <Link to={`/updatejob/${_id}`}><button className="btn btn-outline  btn-success btn-sm">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline  btn-secondary btn-sm">Delete</button>
                </div>
            </td>
        </tr>

    );
};
MyJobTableRow.propTypes = {
    jobCard: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
};

export default MyJobTableRow;