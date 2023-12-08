import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import AllJobCard from "../JobCardByCategory/AllJobCard";
import { Helmet } from "react-helmet-async";


const PartTimeJobs = () => {


    const [partTimeJobs, setPartTimeJobs] = useState([]);
    const axios = useAxios()

    useEffect(() => {
        axios.get(`/jobsdata?Category=PartTime`)
            .then(res => {
                setPartTimeJobs(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [axios])


    return (
        <div className="space-y-1">
            <Helmet><title>Hire Fusion | PartTime</title></Helmet>
            {
                partTimeJobs?.slice(0,8).map(job=> <AllJobCard key={job._id} job={job}></AllJobCard>)
            }
        </div>
    );
};

export default PartTimeJobs;