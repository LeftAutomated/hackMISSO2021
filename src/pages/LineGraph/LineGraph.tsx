import React from 'react';
import { useSelector } from "react-redux";

import Chart from "../../components/Chart/Chart";
import "./LineGraph.css";

export default function LineGraph() {
    const posts = useSelector((state: any) => state.posts);

    const arr: any = [];
    let xbar = 0;
    Object.entries(posts).filter(([key, value]: any) => {
        xbar++;
        arr.push({
            name: xbar,
            injuries: value.INJ_M1
        })
    }
    );

    return (
        <div className="home">
            <Chart data={arr} title="First 200 entries in TX" grid datakey="Active User" />
        </div>
    )
}