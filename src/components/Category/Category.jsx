
const Category = ({ category }) => {
    const {logo, category_name, availability} = category;
    return (
        <div>
            <div className="card bg-violet-100 shadow-xl pt-12 pl-12 pb-10 rounded-none">
                <img src={logo} alt="Shoes" className="w-14 mb-8"/>
                <h2 className="text-xl font-extrabold">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default Category;