import PropTypes from 'prop-types';
const AppliedTblRow = ({ applied }) => {
    const { resume, SubmittedDate, CompanyLogo, Salary, JobTitle, Category } = applied;
    return (
        <tr>
            <th>{Category}</th>
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
            <td>{Salary}</td>
            <td>{SubmittedDate}</td>
            <td className=' cursor-pointer hover:underline hover:text-blue-800'>{resume}</td>
        </tr>
    );
};
AppliedTblRow.propTypes = {
    applied: PropTypes.object.isRequired,
};

export default AppliedTblRow;





