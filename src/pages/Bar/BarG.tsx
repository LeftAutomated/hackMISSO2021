import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from "react-redux";

import "./BarG.css";

export default function BarG() {

    const posts = useSelector((state: any) => state.posts);

    const arr: any = [];
    let xbar = 0;
    Object.entries(posts).filter(([key, value]: any) => {
        xbar++;
        arr.push({
            name: xbar,
            employees: value.EMP_Q1,
            injuries: value.INJ_M1,
        })
    }
    );

    return (
        <div className="home">
            <div className="chart">
                <h3 className="chartTile"># of Employees vs # of Injuries | First 20 Companies in TX</h3>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <BarChart
                        width={500}
                        height={300}
                        data={arr.slice(0, 20)}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="employees" fill="#8884d8" />
                        <Bar dataKey="injuries" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}