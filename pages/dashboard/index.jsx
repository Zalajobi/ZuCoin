import React from "react";
import Header from "../../components/Header";
import Chart from "../../components/Dashboard/Chart";
import DashboardContent from "../../components/Dashboard/DashboardContent";

const Dashboard = (props) => {
    return (
        <React.Fragment >
            <Header/>

            <DashboardContent/>
        </React.Fragment>
    )
}

export default Dashboard;