import user from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className="hero max-w-5xl mx-auto mb-32">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-2/4 flex justify-end mx-auto">
                    <img src={user} className="max-w-md rounded-lg" />
                </div>
                <div className="flex item-center w-2/4 justify-center mt-16">
                    <div className=''>
                        <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;