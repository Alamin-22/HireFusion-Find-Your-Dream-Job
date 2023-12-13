
import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import AllJobPageCard2 from "../Components/AllPageComponents/AllJobPageCard2";
import LoadingSk from "../Components/loading/LoadingSk";
import { GoSearch } from 'react-icons/go';
import { Helmet } from "react-helmet-async";
// import AllJobPageCard3 from "../Components/AllPageComponents/AllJobPageCard3";
import "./CSS/pagination.css"
import AllJobPageCard from "../Components/AllPageComponents/AllJobPageCard";
const All_jobs = () => {
    const axios = useAxios();
    const [allJobs, setAllJobs] = useState([]);
    const [count, setCount] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(10);
    // to store search data
    const [searchItems, setSearchItems] = useState('');
    // to store the filtered jobs
    const [filteredJobs, setFilteredJobs] = useState([]);
    // pagination
    // const itemsPerPage = 10;
    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);



    useEffect(() => {
        axios.get(`/jobsdata?page=${currentPage}&size=${itemPerPage}`)
            .then(res => {
                setAllJobs(res.data);
                setFilteredJobs(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [axios, currentPage, itemPerPage]);

    useEffect(() => {
        axios.get('/jobsdataCount')
            .then(res => {
                console.log(res.data)
                setCount(res.data.count)
            })
            .catch(error => {
                console.log(error)
            })
    }, [axios])

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = allJobs.filter(job =>
            job.JobTitle && job.JobTitle.toLowerCase().includes(searchItems.toLowerCase())
        );
        setFilteredJobs(filtered);
    };

    const handleItemPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemPerPage(val);
        setCurrentPage(0);
    }
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage <= pages.length - 2) {
            setCurrentPage(currentPage + 1)
        }
    }


    return (
        <div>
            <Helmet><title>Hire Fusion | All Jobs</title></Helmet>

            {allJobs.length === 0 ? (
                <LoadingSk />
            ) : (
                <div className="max-w-7xl my-3">
                    <div className="md:flex md:justify-center mx-5">
                        <div className="md:w-1/2 mb-5">
                            <h1 className="text-xl text-center font-semibold text-gray-700">
                                Search By Job Title
                            </h1>
                            <div>
                                <form onChange={handleSearch}>
                                    <div className="flex md:w-full flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:space-x-0 md:flex-row md:justify-center">
                                        <input
                                            type="text"
                                            className="md:w-3/4 md:rounded-r-none px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                            placeholder="Search By Job Title"
                                            value={searchItems}
                                            onChange={(e) => setSearchItems(e.target.value)}
                                        />
                                        <button type="submit" className="w-full btn btn-primary md:rounded-l-none md:w-auto md:mx-4">
                                            <GoSearch />
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-6">
                            {filteredJobs.map(job => (
                                <AllJobPageCard key={job._id} job={job} ></AllJobPageCard>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className="pagination space-x-2">

                <button className="btn" onClick={handlePrevPage}>Prev</button>
                {
                    pages.map((page, idx) => <button
                        className={currentPage === page ? " btn btn-primary  " : "btn "}
                        // className={currentPage ? page && "selected"  }
                        onClick={() => setCurrentPage(page)}
                        key={idx}>{page}
                    </button>)
                }
                <button className="btn" onClick={handleNextPage}>Next</button>
                <select name="" id="" onChange={handleItemPerPage} className='options '>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default All_jobs;
