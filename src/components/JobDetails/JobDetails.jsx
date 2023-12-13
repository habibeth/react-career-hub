import { useLoaderData, useParams } from "react-router-dom";
import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.png'
import { AiOutlineDollar } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt)
    const { job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    const { phone, email, address } = contact_information

    return (
        <div className="">
            <h2
                style={{
                    background: `url(${bg1}), url(${bg2})`,
                    backgroundColor: '#f5f3ff',
                    backgroundRepeat: 'no-repeat, no-repeat',
                    backgroundPosition: 'bottom left 0, top right 0',
                    backgroundSize: '20%, 20%'
                }}
                className="bg-red-400 text-3xl font-extrabold text-center pt-32 pb-32">Job Details</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-8 gap-4 mt-32">
                <div className="md:col-span-5">
                    <p className="text-base text-gray-500 font-medium text-justify mb-6"><span className="font-extrabold text-black">Job Description: </span>{job_description}</p>
                    <p className="text-base text-gray-500 font-medium text-justify mb-6"><span className="font-extrabold text-black">Job Responsibility: </span>{job_responsibility}</p>
                    <p className="text-base text-gray-500 font-medium text-justify mb-6"><span className="font-extrabold text-black">Educational Requirements: </span><br />{educational_requirements}</p>
                    <p className="text-base text-gray-500 font-medium text-justify mb-6"><span className="font-extrabold text-black">Experiences: </span><br />{experiences}</p>
                </div>
                <div className="md:col-span-3">
                    <div className="bg-violet-100 rounded-lg pt-7 pl-7 pb-7">
                        <h2 className="text-xl font-extrabold">Job Details</h2>
                        <hr className="mt-6 mb-12 border-violet-300 w-10/12" />
                        <div className="text-xl flex items-center mb-4">
                            <AiOutlineDollar className="mt-1 text-violet-400"></AiOutlineDollar>
                            <p>
                                <span className="font-bold mx-2">Salary: </span>
                                {salary} (Per Month)
                            </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <IoCalendarOutline className=" text-xl text-violet-400"></IoCalendarOutline>
                            <p className="text-xl">
                                <span className="font-bold mx-2">Job Title:</span>
                                <span className="">{job_title}</span>
                            </p>
                        </div>
                        <h2 className="text-xl font-extrabold mt-8">Contact Information</h2>
                        <hr className="mt-6 mb-12 border-violet-300 w-10/12" />
                        <div className="flex items-center mb-4">
                            <FiPhone className="mt-1 text-xl text-violet-400"></FiPhone>
                            <p className="text-xl">
                                <span className="font-bold mx-2">Phone:</span>
                                <span className="">{phone}</span>
                            </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <TfiEmail className="mt-1 text-xl text-violet-400"></TfiEmail>
                            <p className="text-xl">
                                <span className="font-bold mx-2">Email:</span>
                                <span className="">{email}</span>
                            </p>
                        </div>
                        <div className="flex item-center text-xl -ml-1 mb-4">
                            <IoLocationOutline className="mt-1 text-3xl text-violet-400"></IoLocationOutline>
                            <div className="mt-1">
                                <span className="font-bold ml-2 mr-2">Address:</span>{address}
                            </div>
                        </div>
                    </div>
                    <button className="btn w-full mt-6 bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Apply Now</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;