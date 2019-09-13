export class MensagensService {

    getMensagens() {
        return [
            {
                id: 1,
                remetente: 'João Paulo',
                texto: 'Gostaria de elogiar seu trabalho',
                data: '15/02/2019',
                tipo: 'Elogio'
            },
            {
                id: 2,
                remetente: 'Paulo Torres',
                texto: 'Temos um buraco na garagem',
                data: '10/02/2019',
                tipo: 'Reclamação'
            },
            {
                id: 3,
                remetente: 'Maria Oliveira',
                texto: 'Gostaria de elogiar seu trabalho',
                data: '08/01/2019',
                tipo: 'Elogio'
            },
            {
                id: 4,
                remetente: 'Ana Guaraní',
                texto: 'Várias rachaduras no prédio',
                data: '15/02/2017',
                tipo: 'Reclamação'
            },
            {
                id: 5,
                remetente: 'John Marcos',
                texto: 'Parabéns pelo trabalho executado na fachada.',
                data: '15/02/2019',
                tipo: 'Elogio'
            },

        ];
    }
}