import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import AllJobCard from "../JobCardByCategory/AllJobCard";
import { Helmet } from "react-helmet-async";

const RemoteJobs = () => {


    const [remoteJobs, setRemoteJobs] = useState([]);
    const axios = useAxios()

    useEffect(() => {
        axios.get(`/jobsdata?Category=Remote`)
            .then(res => {
                setRemoteJobs(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [axios])
    return (
        <div className="space-y-1">
            <Helmet><title>Hire Fusion | Remote</title></Helmet>
            {
                remoteJobs?.slice(0, 8).map(job => <AllJobCard key={job._id} job={job}></AllJobCard>)
            }
        </div>
    );
};

export default RemoteJobs;