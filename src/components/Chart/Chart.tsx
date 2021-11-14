import React, { PureComponent } from 'react';
import "./Chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({ title, data, grid }: any) {
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="black" />
                    <Line type="monotone" dataKey="injuries" stroke="blue" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="lightgrey" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}