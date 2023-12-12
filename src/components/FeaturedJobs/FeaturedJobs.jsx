import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <h2 className="text-6xl font-extrabold text-center mb-4">Featured Jobs</h2>
            <p className="text-center text-base font-medium mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden': 'flex justify-center'}>
                <button className="btn mt-10 w-32 bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
                onClick={()=> setDataLength(jobs.length)}
                >See All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;