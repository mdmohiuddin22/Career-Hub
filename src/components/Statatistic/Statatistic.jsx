import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
    { name: 'Assignment 1', uv: 55, pv: 2400 },
    { name: 'Assignment 2', uv: 53, pv: 1398 },
    { name: 'Assignment 3', uv: 27, pv: 9800 },
    { name: 'Assignment 4', uv: 36, pv: 3908 },
    { name: 'Assignment 5', uv: 56, pv: 4800 },
    { name: 'Assignment 6', uv: 37, pv: 3800 },
    { name: 'Assignment 6', uv: 60, pv: 4300 },
    { name: 'Assignment 7', uv: 34, pv: 4300 }
  ];
const Statatistic = () => {
    return (
        <div>
    
    <AreaChart width={1000} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>

        </div>
    );
};

export default Statatistic;