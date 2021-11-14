import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useSelector } from "react-redux";

import "./ScatterPlot.css";

export default function ScatterPlot() {
    const posts = useSelector((state: any) => state.posts);

    const arr: any = [];
    let xbar = 0;
    Object.entries(posts).filter(([key, value]: any) => {
        xbar += 10;
        arr.push({
            x: value.EMP_Q1,
            y: value.INJ_M1,
            z: xbar
        })
    });

    return (
        <div className="home">
            <div className="chart">
                <h3 className="chartTile">Average Number of Employees vs Injuries Reported</h3>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <ScatterChart
                        width={400}
                        height={400}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="# of employees" />
                        <YAxis type="number" dataKey="y" name="# of incidents" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="A school" data={arr} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}