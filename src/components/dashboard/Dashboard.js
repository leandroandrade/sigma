import React, { Component } from 'react';

import { StatisticsService } from '../../service/StatisticsService';

import { BarChartDashboard } from './charts/BarChartDashboard';
import { DoughnutChartDashboard } from './charts/DoughnutChartDashboard';

export class NewDasboard extends Component {

    constructor() {
        super();

        this.state = {
            numberOfVisitors: 0,
            numberOfPurchases: 0,
            totalRevenue: 0,
        };

        this.statisticsService = new StatisticsService();
    }

    componentDidMount() {
        this.setState({ numberOfVisitors: this.statisticsService.getNumberOfVisitors() });
        this.setState({ numberOfPurchases: this.statisticsService.getNumberOfPurchases() });
        this.setState({ totalRevenue: this.statisticsService.getTotalRevenue() });
    }

    render() {
        return (
            <div className="p-grid p-fluid dashboard">
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Users</span>
                        <span className="detail">Number of visitors</span>
                        <span className="count visitors">{this.state.numberOfVisitors}</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Sales</span>
                        <span className="detail">Number of purchases</span>
                        <span className="count purchases">{this.state.numberOfPurchases}</span>
                    </div>
                </div>
                <div className="p-col-12 p-lg-4">
                    <div className="card summary">
                        <span className="title">Revenue</span>
                        <span className="detail">Income for today</span>
                        <span className="count revenue">{this.state.totalRevenue}</span>
                    </div>
                </div>

                <BarChartDashboard />
                <DoughnutChartDashboard />
            </div>
        );
    }
}