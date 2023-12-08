/** @format */

import React, { useState, useEffect, useRef } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Spinner } from "keep-react";
import { Cards } from "./components/Cards";  

const App = () => {


  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const loaderRef = useRef(null);



  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products?page=${page}&limit=10`);
      const data = await response.json();
      setUsers((prevUsers) => [...prevUsers, ...data]);
    };

    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container pt-5 pb-5'>
      <h1 className=' font-inter font-bold mb-3 text-decoration-underline'>
        Products
      </h1>
      <div className='row'>
        {users?.map((value, index) => {
          return (
            <div className='col-md-3 mt-4' key={index}>
              <Cards data={value} />
            </div>
          );
        })}
      </div>

      <div className='flex justify-center ' ref={loaderRef}>
        <span className='pr-2'>
          <Spinner color='success' size='md' />
        </span>
        Loading...
      </div>
    </div>
  );
};

export default App;
