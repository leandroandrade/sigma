import React, { Component } from 'react';
import { CarService } from '../service/CarService';
import { StatisticsService } from '../service/StatisticsService';
import { CitiesService } from '../service/CitiesService';
import { ContactsService } from '../service/ContactsService';
import { TasksService } from '../service/TasksService';

import { Panel } from 'primereact/panel';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Chart } from 'primereact/chart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FullCalendar } from 'primereact/fullcalendar';

export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            numberOfVisitors: 0,
            numberOfPurchases: 0,
            totalRevenue: 0,
            tasks: [],
            city: null,
            selectedCar: null,
            lineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#007be5'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#20d077'
                    }
                ]
            }
        };

        this.statisticsService = new StatisticsService();
        this.citiesService = new CitiesService();
        this.contactsService = new ContactsService();
        this.tasksService = new TasksService();

        this.onTaskChange = this.onTaskChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
        this.carservice = new CarService();
    }

    onTaskChange(e) {
        let selectedTasks = [...this.state.tasks];
        if (e.target.checked)
            selectedTasks.push(e.target.value);
        else
            selectedTasks.splice(selectedTasks.indexOf(e.target.value), 1);

        this.setState({ tasks: selectedTasks });
    }

    onCityChange(e) {
        this.setState({ city: e.value });
    }

    componentDidMount() {
        this.setState({ numberOfVisitors: this.statisticsService.getNumberOfVisitors() });
        this.setState({ numberOfPurchases: this.statisticsService.getNumberOfPurchases() });
        this.setState({ totalRevenue: this.statisticsService.getTotalRevenue() });
        this.setState({ listOfCities: this.citiesService.getAllCities() });

        this.carservice.getCarsSmall().then(data => this.setState({ cars: data }));
    }

    render() {
        /*let cities = [
            { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
            { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
            { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
            { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
            { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } },
            { label: 'Brasília', value: { id: 6, name: 'Brasília', code: 'BSB' } }
        ];*/

        let fullcalendarOptions = {
            defaultDate: '2017-02-01',
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true
        };

        let events = [
            {
                "id": 1,
                "title": "All Day Event",
                "start": "2017-02-01"
            },
            {
                "id": 2,
                "title": "Long Event",
                "start": "2017-02-07",
                "end": "2017-02-10"
            },
            {
                "id": 3,
                "title": "Repeating Event",
                "start": "2017-02-09T16:00:00"
            },
            {
                "id": 4,
                "title": "Repeating Event",
                "start": "2017-02-16T16:00:00"
            },
            {
                "id": 5,
                "title": "Conference",
                "start": "2017-02-11",
                "end": "2017-02-13"
            },
            {
                "id": 6,
                "title": "Meeting",
                "start": "2017-02-12T10:30:00",
                "end": "2017-02-12T12:30:00"
            },
            {
                "id": 7,
                "title": "Lunch",
                "start": "2017-02-12T12:00:00"
            },
            {
                "id": 8,
                "title": "Meeting",
                "start": "2017-02-12T14:30:00"
            },
            {
                "id": 9,
                "title": "Happy Hour",
                "start": "2017-02-12T17:30:00"
            },
            {
                "id": 10,
                "title": "Dinner",
                "start": "2017-02-12T20:00:00"
            },
            {
                "id": 11,
                "title": "Birthday Party",
                "start": "2017-02-13T07:00:00"
            },
            {
                "id": 12,
                "title": "Click for Google",
                "url": "http://google.com/",
                "start": "2017-02-28"
            }
        ];

        const tasks = this.tasksService.getTasks().map((task, idtask) =>
            <li key={idtask}>
                <Checkbox value={task.value} onChange={this.onTaskChange} checked={this.state.tasks.indexOf(task.value) > -1 ? true : false}></Checkbox>
                <span className="task-name">{task.name}</span>
            </li>
        );

        const contacts = this.contactsService.getContacts().map((contact, idcontact) =>
            <li key={idcontact}>
                <button className="p-link" key={idcontact}>
                    <img src={contact.image} width="35" alt="avatar1" />
                    <span className="name">{contact.name}</span>
                    <span className="email" style={{ marginTop: '2px' }}>
                        {contact.email}
                    </span>
                </button>
            </li>
        );

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
                <div className="p-col-12 p-md-6 p-lg-4">
                    <Panel header="Tasks" style={{ height: '100%' }}>
                        <ul className='task-list'>{tasks}</ul>
                    </Panel>
                </div>
                <div className="p-col-12 p-md-6 p-lg-4 p-fluid contact-form">
                    <Panel header="Contact Us">
                        <div className="p-grid">
                            <div className="p-col-12">
                                <Dropdown value={this.state.city} options={this.state.listOfCities} placeholder="Select a City" onChange={this.onCityChange} autoWidth={false} />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Name" />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Age" />
                            </div>
                            <div className="p-col-12">
                                <InputText type="text" placeholder="Message" />
                            </div>
                            <div className="p-col-12">
                                <Button type="button" label="Send" icon="fa-send" />
                            </div>
                        </div>
                    </Panel>
                </div>

                <div className="p-col-12 p-lg-4 contacts">
                    <Panel header="Contacts">
                        <ul>{contacts}</ul>
                    </Panel>
                </div>
                <div className="p-col-12 p-lg-6">
                    <div className="card">
                        <h1 style={{ fontSize: '16px' }}>Recent Sales</h1>
                        <DataTable value={this.state.cars} style={{ marginBottom: '20px' }} responsive={true}
                            selectionMode="single" selection={this.state.selectedCar} onSelectionChange={(e) => this.setState({ selectedCar: e.value })}>
                            <Column field="vin" header="Vin" sortable={true} />
                            <Column field="year" header="Year" sortable={true} />
                            <Column field="brand" header="Brand" sortable={true} />
                            <Column field="color" header="Color" sortable={true} />
                        </DataTable>
                    </div>
                </div>
                <div className="p-col-12 p-lg-6">
                    <div className="card">
                        <Chart type="line" data={this.state.lineData} />
                    </div>
                </div>
                <div className="p-col-12 p-lg-8">
                    <Panel header="Calendar" style={{ height: '100%' }}>
                        <FullCalendar events={events} options={fullcalendarOptions}></FullCalendar>
                    </Panel>
                </div>

                <div className="p-col-12 p-lg-4">
                    <Panel header="Activity" style={{ height: '100%' }}>
                        <div className="activity-header">
                            <div className="p-grid">
                                <div className="p-col-6">
                                    <span style={{ fontWeight: 'bold' }}>Last Activity</span>
                                    <p>Updated 1 minute ago</p>
                                </div>
                                <div className="p-col-6" style={{ textAlign: 'right' }}>
                                    <Button label="Refresh" icon="pi pi-refresh" />
                                </div>
                            </div>
                        </div>

                        <ul className="activity-list">
                            <li>
                                <div className="count">$900</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Income</div>
                                    <div className="p-col-6">95%</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{ backgroundColor: '#f9c851' }}>$250</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Tax</div>
                                    <div className="p-col-6">24%</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{ backgroundColor: '#20d077' }}>$125</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Invoices</div>
                                    <div className="p-col-6">55%</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{ backgroundColor: '#f9c851' }}>$250</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Expenses</div>
                                    <div className="p-col-6">15%</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{ backgroundColor: '#007be5' }}>$350</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Bonus</div>
                                    <div className="p-col-6">5%</div>
                                </div>
                            </li>
                            <li>
                                <div className="count" style={{ backgroundColor: '#ef6262' }}>$500</div>
                                <div className="p-grid">
                                    <div className="p-col-6">Revenue</div>
                                    <div className="p-col-6">25%</div>
                                </div>
                            </li>
                        </ul>
                    </Panel>
                </div>
            </div>
        );
    }
}