import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export class DoughnutChartDashboard extends Component {

    constructor() {
        super();
        this.state = {
            pieData: {
                labels: ['Reclamações', 'Sugestões', 'Elogios'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: [
                            "#FFC107",
                            "#03A9F4",
                            "#4CAF50"
                        ],
                        hoverBackgroundColor: [
                            "#FFE082",
                            "#81D4FA",
                            "#A5D6A7"
                        ]
                    }]
            }
        };
    }

    render() {
        return (
            <div className="p-col-6">
                <div className="card">
                    <h1 className="centerText">Doughnut Chart</h1>
                    <Chart type="doughnut" data={this.state.pieData} height="150" />
                </div>
            </div>
        )
    }
}
