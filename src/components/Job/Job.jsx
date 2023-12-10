import locationIcon from '../../assets/icons/Location2.png';
import moneyIcon from '../../assets/icons/money.png';


const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div>
            <div className="card pt-12 pl-12 pb-10 rounded-none border-2">

                <img src={logo} alt="Shoes" className="w-36 mb-8 h-10" />

                <h2 className="text-xl font-extrabold">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="btn btn-outline btn-info mr-2">{remote_or_onsite}</button>
                    <button className="btn btn-outline btn-info">{job_type}</button>
                </div>
                <div className="flex">
                    <div className='flex mr-6'>
                        <img src={locationIcon} alt="" />
                        <span>{location}</span>
                    </div>
                    <div className='flex'>
                        <img src={moneyIcon} alt="" />
                        <span>{salary}</span>
                    </div>
                </div>

                <button className='btn w-32 bg-gradient-to-r from-sky-500 to-indigo-500 text-white'>View Details</button>

            </div>
        </div>
    );
};

export default Job;