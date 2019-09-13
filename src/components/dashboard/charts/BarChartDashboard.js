import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export class BarChartDashboard extends Component {

    constructor() {
        super();
        this.state = {
            barData: {
                labels: [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ],
                datasets: [
                    {
                        label: 'Reclamações',
                        backgroundColor: '#03A9F4',
                        borderColor: '#03A9F4',
                        data: [65, 59, 80, 81, 56, 55, 40, 12, 34, 45, 56, 65]
                    },
                    {
                        label: 'Sugestões',
                        backgroundColor: '#FFC107',
                        borderColor: '#FFC107',
                        data: [28, 48, 40, 19, 86, 27, 90, 12, 43, 22, 33, 77]
                    },
                    {
                        label: 'Elogios',
                        backgroundColor: '#4CAF50',
                        borderColor: '#4CAF50',
                        data: [28, 48, 40, 19, 86, 27, 22, 44, 12, 9, 8, 1]
                    }
                ]
            }
        };
    }

    render() {
        return (
            <div className="p-col-6">
                <div className="card">
                    <h1 className="centerText">Bar Chart</h1>
                    <Chart type="bar" data={this.state.barData} />
                </div>
            </div>
        )
    }
}
