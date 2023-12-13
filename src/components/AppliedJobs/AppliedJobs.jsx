import { Link, useLoaderData } from 'react-router-dom';
import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'
import locationIcon from '../../assets/icons/Location2.png';
import moneyIcon from '../../assets/icons/money.png';


const AppliedJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    return (
        <div>
            <h2
                style={{
                    background: `url(${bg1}), url(${bg2})`,
                    backgroundColor: '#f5f3ff',
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundPosition: 'bottom left 0, top right 0',
                    backgroundSize: '20%, 20%'
                }}
                className="bg-red-400 text-3xl font-extrabold text-center pt-32 pb-32">Applied Jobs</h2>
            <div className="max-w-6xl mx-auto">
                <div className="display grid grid-cols-1 gap-6 mt-28">
                    {
                        jobs.map(job =>
                            <>
                                <div className="border-2 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="p-24">
                                            <img className='w-36 h-12' src={job.logo} alt="" />
                                        </div>
                                        <div className="">
                                            <h2 className="text-xl font-extrabold">{job.job_title}</h2>
                                            <p className='mt-2'>{job.company_name}</p>
                                            <div className='mt-4 mb-4'>
                                                <button className="btn btn-outline text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500 mr-2">{job.remote_or_onsite}</button>
                                                <button className="btn btn-outline text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500">{job.job_type}</button>
                                            </div>
                                            <div className="flex mb-8">
                                                <div className='flex mr-4'>
                                                    <img src={locationIcon} alt="" className='mr-1' />
                                                    <span>{job.location}</span>
                                                </div>
                                                <div className='flex'>
                                                    <img src={moneyIcon} alt="" className='mr-1' />
                                                    <span>{job.salary}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pr-24">
                                        <Link to={`/job/${job.id}`}>
                                            <button className='btn w-32 bg-gradient-to-r from-sky-500 to-indigo-500 text-white'>View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;