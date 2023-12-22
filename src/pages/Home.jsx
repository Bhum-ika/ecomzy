import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className="flex justify-center items-center w-full h-full">
      {loading ? (
        <Spinner />
      ) : posts.length > 1 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl p-2 mx-auto space-y-10 gap-x-5 min-h-[80vh]">{
        posts.map((post) => <Product key={post.id} post={post} />)}
     </div> ) : (
        <div>
          <p>No products found!</p>
        </div>
      )}
    </div>
  );
};

export default Home;
