import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet-async";


const Update = () => {


    const { user } = useAuth()
    const { email } = user;
    const axios = useAxios();
    const Job = useLoaderData();
    const { _id, JobTitle, Category, ApplicationStartDate, ApplicationEndDate, Salary, AppliedCount, JobBanner, LoggedInUser, CompanyLogo, CompanySlogan, DetailDescription, } = Job;
    const [startDate, setStartDate] = useState(new Date(ApplicationStartDate));
    const [deadlineDate, setDeadlineDate] = useState(new Date(ApplicationEndDate));


    const HandleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const UserName = form.userName.value;
        const Title = form.title.value;
        const Category = form.category.value;
        const StartDate = form.start.value;
        const Deadline = form.deadline.value;
        const Salary = form.salary.value;
        const JobDetails = form.details.value;
        const photo = form.photo.value;
        const logo = form.logo.value;
        const CompanySlogan = form.CompanySlogan.value;
        // const AppliedCount = form.AppliedCount.value;
        const UpdatedJob = {
            LoggedInUser: UserName,
            JobTitle: Title,
            Category: Category,
            ApplicationStartDate: StartDate,
            Salary: Salary,
            ApplicationEndDate: Deadline,
            DetailDescription: JobDetails,
            JobBanner: photo,
            AppliedCount: AppliedCount,
            CompanyLogo: logo,
            CompanySlogan: CompanySlogan,
            postedEmail: email,
        };
        console.log(UpdatedJob);
        // send data to the server;
        axios.put(`/jobsdata/${_id}`, UpdatedJob)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire("Updated!", "Job Successfully Updated", "success")
                }
            })
            .catch(error => {
                console.log(error)
            })


    }
    return (
        <div>
            <Helmet><title>Hire Fusion | Update</title></Helmet>
            <div className="max-w-4xl mx-auto shadow-2xl">
                <form onSubmit={HandleAddJob} className=" bg-[#a6faf02d] " >
                    <div className="p-3 ">
                        <h1 className="text-3xl text-center font-bold">Job Update Form</h1>
                        {/*Title and Category */}
                        <div className="md:flex mb-8 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Title of the Job</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="title" placeholder="Title of the Job" className="input input-bordered w-full" defaultValue={JobTitle} required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <label className="input-group">
                                    <select name="category" defaultValue={Category} className="select select-bordered w-full" required>
                                        <option disabled >Select Category</option>
                                        <option value="OnSite">On Site</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Hybrid">Hybrid</option>
                                        <option value="PartTime">Part Time</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        {/* form Date row */}
                        <div className="flex md:flex mb-8 gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Application Start</span>
                                </label>
                                <label className="input-group">
                                    <DatePicker name="start" className="input cursor-pointer input-bordered w-[95%] md:w-[364px] lg:w-[428px]"
                                        placeholderText="MM/DD/YYYY"
                                        selected={startDate} onChange={(date) => setStartDate(date)}
                                    />
                                </label>
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Application Deadline</span>
                                </label>
                                <label className="input-group">
                                    <DatePicker name="deadline" className="input cursor-pointer input-bordered w-[95%] md:w-[364px] lg:w-[428px]"
                                        placeholderText="MM/DD/YYYY" selected={deadlineDate} onChange={(date) => setDeadlineDate(date)}
                                    />
                                </label>
                            </div>
                        </div>
                        {/* form Salary row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Salary range</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="salary" placeholder="$70,000 - $90,000" className="input input-bordered w-full" defaultValue={Salary} required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 md:ml-4">
                                <label className="label">
                                    <span className="label-text">Job Applicants Number</span>
                                </label>
                                <label className="input-group">
                                    <input className="input input-bordered w-full" required
                                        type="number"
                                        name="jobApplicants"
                                        value={AppliedCount}
                                        readOnly
                                    />
                                </label>
                            </div>
                        </div>
                        {/* form Job banner and Count row */}
                        <div className="md:flex mb-8 gap-4">
                            <div className="form-control  md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text">Job Banner</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" defaultValue={JobBanner} required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2  ">
                                <label className="label">
                                    <span className="label-text">Company Logo</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="logo" placeholder="Company Logo Url" className="input input-bordered w-full" defaultValue={CompanyLogo} required />
                                </label>
                            </div>
                        </div>
                        <div className="md:flex mb-8 gap-4">
                            <div className="form-control  md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text">Company Slogan</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="CompanySlogan" placeholder="Company Slogan...." className="input input-bordered w-full" defaultValue={CompanySlogan} required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2  ">
                                <label className="label">
                                    <span className="label-text">Logged In User Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="userName" placeholder="Logged In User Name" className="input input-bordered w-full" defaultValue={LoggedInUser} required />
                                </label>
                            </div>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Job Description</span>
                            </label>
                            <label className="input-group">
                                <textarea className="textarea textarea-bordered w-full h-64" name="details" required defaultValue={DetailDescription} placeholder="Write Job Description........"></textarea>
                            </label>
                        </div>
                        <input type="submit" value="Update Job" className="btn btn-primary my-3 btn-block " />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;