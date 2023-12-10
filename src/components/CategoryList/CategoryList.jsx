import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);


    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCategoryList(data))
    },[])
    
    return (
        <div className="mb-32">
            <h2 className="text-6xl font-extrabold text-center mb-4">Job Category List</h2>
            <p className="text-center text-base font-medium mb-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    categoryList.map(category=> <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;