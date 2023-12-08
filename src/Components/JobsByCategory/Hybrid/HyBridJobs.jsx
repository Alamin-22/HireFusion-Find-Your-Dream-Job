import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import AllJobCard from "../JobCardByCategory/AllJobCard";
import { Helmet } from "react-helmet-async";

const HyBridJobs = () => {
    const [hyBridJobs, setHyBridJobs] = useState([]);
    const axios = useAxios()

    useEffect(() => {
        axios.get(`/jobsdata?Category=Hybrid`)
            .then(res => {
                setHyBridJobs(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [axios])



    return (
        <div className="space-y-1">
            <Helmet><title>Hire Fusion | Hybrid</title></Helmet>
            {
                hyBridJobs.slice(0, 8).map(job => <AllJobCard key={job._id} job={job}></AllJobCard>)
            }
        </div>
    );
};

export default HyBridJobs;