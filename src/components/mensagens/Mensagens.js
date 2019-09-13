import React, { Component } from 'react';

import { Panel } from 'primereact/panel';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { MensagensService } from '../../service/MensagensService';

export class Mensagens extends Component {

    constructor() {
        super();

        this.state = {
            tasks: [],
            display: false,
            mensagem: {},
        };

        this.mensagensService = new MensagensService();
    }

    onTaskChange = (e) => {
        let mensagensSelecionadas = [...this.state.tasks];
        if (e.target.checked)
            mensagensSelecionadas.push(e.target.value);
        else
            mensagensSelecionadas.splice(mensagensSelecionadas.indexOf(e.target.value), 1);

        this.setState({ tasks: mensagensSelecionadas });
    };

    render() {
        const dialogFooter = (
            <div>
                <Button icon="pi pi-check"
                        onClick={ () => this.setState({ display: false }) }
                        label="Ok"/>
            </div>
        );

        const listaMensagens = this.mensagensService.getMensagens().map((mensagem, idmensagem) =>
            <li key={ idmensagem } className="centralizar-lista-mensagens">
                <Checkbox value={ mensagem.id }
                          onChange={ this.onTaskChange }
                          checked={ this.state.tasks.indexOf(mensagem.id) > -1 }/>

                <button className="p-link"
                        onClick={ () => this.setState({ display: true, mensagem }) }
                        key={ idmensagem }
                        style={ { display: "flex", justifyContent: "flexStart", alignItems: "center" } }>

                    <img src="assets/layout/images/avatar_1.png"
                         width="35"
                         alt="avatar1"/>
                    <span className="task-name"
                          style={ { marginLeft: 10 } }>{ mensagem.remetente }</span>
                    <span className="task-name"
                          style={ { marginLeft: '60%', position: 'absolute' } }>{ mensagem.data }</span>
                </button>
            </li>
        );

        return (
            <div className="p-grid p-fluid dashboard">
                <div className="p-col-12 contacts">
                    <Panel header="Mensagens Recebidas">
                        <ul>{ listaMensagens }</ul>
                    </Panel>


                    <Dialog header={ this.state.mensagem.tipo }
                            visible={ this.state.display }
                            modal={ true }
                            width="400px"
                            footer={ dialogFooter }
                            onHide={ () => this.setState({ display: false }) }>
                        <p>{ this.state.mensagem.texto }</p>
                    </Dialog>

                </div>
            </div>
        );
    }
}