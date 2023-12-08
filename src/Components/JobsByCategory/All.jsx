import { useEffect } from "react";
import useAxios from "../../Hooks/useAxios";
import { useState } from "react";
import AllJobCard from "./JobCardByCategory/AllJobCard";


const All = () => {
    const axios = useAxios();
    const [allJobs, setAllJobs] = useState([]);
    useEffect(() => {
        axios.get('/jobsdata')
            .then(res => {
                setAllJobs(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [axios])

    


    return (
        <div>
            <div className=" space-y-1">
                {
                    allJobs.slice(0,8).map(job => <AllJobCard key={job._id} job={job}></AllJobCard>)
                }
            </div>
        </div>
    );
};

export default All;