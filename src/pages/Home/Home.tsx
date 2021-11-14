import { useSelector } from "react-redux";

import Chart from "../../components/Chart/Chart";
import Info from "../../components/Info/Info";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

import "./Home.css";

export default function Home() {
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
            <Info />
            <Chart data={arr} title="First 200 entries in TX" grid datakey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}