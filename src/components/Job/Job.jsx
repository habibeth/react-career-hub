import { Link } from 'react-router-dom';
import locationIcon from '../../assets/icons/Location2.png';
import moneyIcon from '../../assets/icons/money.png';


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div>
            <div className="card pt-12 pl-12 pb-10 rounded-none border-2">

                <img src={logo} alt="Shoes" className="w-36 mb-8 h-10" />

                <h2 className="text-xl font-extrabold">{job_title}</h2>
                <p className='mt-2'>{company_name}</p>
                <div className='mt-4 mb-4'>
                    <button className="btn btn-outline text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500 mr-2">{remote_or_onsite}</button>
                    <button className="btn btn-outline text-sky-500 hover:text-white hover:bg-sky-500 hover:border-sky-500">{job_type}</button>
                </div>
                <div className="flex mb-8">
                    <div className='flex mr-4'>
                        <img src={locationIcon} alt="" className='mr-1'/>
                        <span>{location}</span>
                    </div>
                    <div className='flex'>
                        <img src={moneyIcon} alt="" className='mr-1' />
                        <span>{salary}</span>
                    </div>
                </div>

                <Link to={`/job/${id}`}>
                    <button className='btn w-32 bg-gradient-to-r from-sky-500 to-indigo-500 text-white'>View Details</button>
                </Link>

            </div>
        </div>
    );
};

export default Job;