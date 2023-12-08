import { useLoaderData } from "react-router-dom";
import ApplyForm from "../Form/ApplyForm";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import moment from "moment";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
    const job = useLoaderData();
    const { user } = useAuth();
    const { email } = user;
    const { JobTitle, postedEmail, CompanySlogan, CompanyLogo, Category, ApplicationStartDate, ApplicationEndDate, Salary, AppliedCount, JobBanner, LoggedInUser, DetailDescription } = job;


    const [isApplicationOpen, setApplicationOpen] = useState(false);
    const currentDate = Date.now();
    const countdown = moment(ApplicationStartDate).fromNow();

    const handleApplyClick = () => {
        if (currentDate > new Date(ApplicationEndDate)) {
            Swal.fire("Time End", "The application deadline for this job has passed. You cannot apply Now", "error")
        } else if (currentDate < new Date(ApplicationStartDate)) {
            Swal.fire("Application  not started", `The application will be start with${countdown}`, "info")
        }
        else if (postedEmail === email) {
            Swal.fire("Sorry!", "Employers cannot apply for their own job listings.", "error")

        } else {
            setApplicationOpen(true);
        }
    };

    return (
        <div>
            <Helmet><title>Hire Fusion | Job Details</title></Helmet>
            <div className="max-w-2xl px-8 mx-auto py-4 bg-white rounded-lg shadow-md ">
                <figure >
                    <img src={JobBanner} alt="job Related banner" className=" mx-auto" />
                </figure>
                <div className="mt-7 flex justify-between">

                    <div>
                        <p className="text-gray-600  font-bold">Job Title:</p>
                        <p className="text-xl font-bold text-gray-700  hover:text-gray-600  hover:underline cursor-pointer" tabIndex="0" role="link"> {JobTitle}</p>
                        <p className="mt-2 text-base text-gray-600 ">
                            {CompanySlogan}</p>
                    </div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={CompanyLogo} />
                        </div>
                    </div>
                </div>

                <div className="mt-2">
                    <p className="text-xl font-bold text-gray-700  hover:text-gray-600  cursor-pointer hover:underline" tabIndex="0" role="link">
                        Description
                    </p>
                    {DetailDescription}
                </div>
                <div className="mt-5">
                    <p className="text-lg  text-gray-700  hover:text-gray-600 ">Salary: {Salary}</p>
                    <p className="text-lg  text-gray-700  hover:text-gray-600 ">Applied: {AppliedCount}</p>
                    <p className="text-lg  text-gray-700  hover:text-gray-600 ">Category: <span className="font-semibold">{Category}</span></p>
                </div>
                <div className="mt-1 flex justify-between items-end ">
                    <div>
                        <p className="text-lg  text-gray-700  hover:text-gray-600 ">Application Start: {ApplicationStartDate}</p>
                        <p className="text-lg  text-gray-700  hover:text-gray-600 ">Application End: {ApplicationEndDate}</p>
                        <p className="text-lg  text-gray-700  hover:text-gray-600 ">Posted By: {LoggedInUser}</p>

                    </div>
                    {/* <button className="btn btn-primary ">Apply</button> */}
                    <button className="btn btn-primary" onClick={handleApplyClick}>
                        Apply
                    </button>
                    {isApplicationOpen && (
                        <dialog id="my_modal_3" className="modal" open>
                            <div className="modal-box">
                                <form method="dialog">
                                    <button
                                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                        onClick={() => setApplicationOpen(false)}
                                    >
                                        ✕
                                    </button>
                                </form>
                                <ApplyForm job={job} />

                            </div>
                        </dialog>
                    )}

                </div>
            </div>
        </div>
    );
};

export default JobDetails;





