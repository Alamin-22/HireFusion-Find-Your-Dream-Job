import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import MyJobTableRow from "../Components/AppliedComponents/MyJobTableRow";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";

const My_Job = () => {
    const { user } = useAuth();
    const axios = useAxios();
    const [allPosted, setAllPosted] = useState([]);





    useEffect(() => {
        axios.get(`/jobsdata/myJobs?email=${user?.email}`)
            .then(res => {
                setAllPosted(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [axios, user.email])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`jobsdata/${id}`)
                    .then(data => {
                        console.log(data)
                        if (data.data.deletedCount) {
                            Swal.fire({ title: "Deleted!", text: "Your file has been deleted.", icon: "success" });
                            const remaining = allPosted.filter(post => post._id !== id);
                            setAllPosted(remaining);
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        Swal.fire({ title: "Sorry!", text: "Something Wen Wrong", icon: "error" });
                    })

            }
        });
    }


    return (
        <div>
            <Helmet><title>Hire Fusion | My Jobs</title></Helmet>
            {allPosted.length == 0 ?
                <> <h1 className="text-3xl text-center flex justify-center h-[60vh] items-center">You have not Posted any Job Yet</h1> </>
                :
                <div className="overflow-x-auto h-[60vh]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Job Id</th>
                                <th>Company</th>
                                <th>Job</th>
                                <th>Category</th>
                                <th>Salary</th>
                                <th>Applied</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                allPosted?.map(jobCard => <MyJobTableRow key={jobCard._id} handleDelete={handleDelete} jobCard={jobCard}></MyJobTableRow>)
                            }
                        </tbody>
                    </table>
                </div>
            }

        </div>
    );
};

export default My_Job;