import React from "react";

const Home = () => {
  const date = new Date()
  const cleareBy =()=>{

  }
  return (
    <div className="wrapper grid grid-cols-4 bg-gray-100 p-5 h-screen">
      <div className="nav py-5 bg-gray-50 flex flex-col col-span-1">
        <h1 className="py-3">
          <a href="" className="text-2xl text-green-500 font-bold">
            Udaro<span className="italic">Khata</span>
          </a>
        </h1>
        <div className="list flex flex-col gap-y-2">
          <a href="">Home</a>
          <a href="">Customers</a>
          <a href="">Add Customers</a>
        </div>
      </div>
      <div className="content  border border-green-400 col-span-3">
        <h1 className="text-green-500 font-bold text-center text-2xl py-5">
          Welcome To UdaroKhata
        </h1>
        <div className="customers w-full ">
          <h2 className="text-lg bg-gray-200 pl-5">list of customers</h2>
          <div className="one bg-white grid grid-flow-col mt-5">
            <div className="name">Purnima</div>
            <div className="dueamount text-[#ff0000]">-5000</div>
            <div className="lastActiveDate">{date.toLocaleDateString()}</div>
            <div className="clearedBy">04/08/2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
