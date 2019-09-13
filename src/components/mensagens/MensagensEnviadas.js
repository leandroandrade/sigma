import React, { Component } from 'react';
import { Panel } from "primereact/panel";
import { Button } from 'primereact/button';


export class MensagensEnviadas extends Component {

    render() {

        const header = (
            <div>
                <span className="p-panel-title">Mensagens Enviadas</span>

                <Button icon="pi pi-plus"
                        iconPos="left"
                        tooltip="Nova mensagem"
                    // label="Nova Mensagem"
                        className="alinhar-direita-botao-mensagens-enviadas"
                />
            </div>
        );

        return (
            <div className="p-grid p-fluid dashboard">
                <div className="p-col-12 contacts">
                    <Panel header={ header }>

                    </Panel>
                </div>
            </div>
        );
    }
}