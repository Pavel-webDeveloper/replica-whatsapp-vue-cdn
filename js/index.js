
const app = new Vue({
    el: "#app",
    data: {
        contatti: [
        
            {
                id: 1,
                nome: "Mario",
                immagine: "avatar_1.jpg",
                visible: true,
                message: [
                    {
                        date: '27/06/2025 15:30:47',
                        content: "Hai portato a spasso il cane?",
                        status: "inviato",
                    },
                    {
                        date: '27/06/2025 17:30:49',
                        content: "Ricordati di stendere i panni",
                        status: "inviato",
                    },
                    {
                        date: '28/06/2025 06:26:13',
                        content: "Non preoccuparti, tutto fatto!!",
                        status: "ricevuto",
                    }
                ]
            },

            {
                id: 2,
                nome: "Simone",
                immagine: "avatar_2.jpg",
                visible: true,
                message: [
                    {
                        date: '27/06/2025 18:11:23',
                        content: "Buongiorno come stai? Volevo chiederti se domani ci sei a lavoro",
                        status: "inviato",
                    },
                    {
                        date: '27/06/2025 19:22:12',
                        content: "Si domani faccio le 7 le 15",
                        status: "ricevuto",
                    },
                    {
                        date: '27/06/2025 19:30:33',
                        content: "ok, allora ci vediamo domani",
                        status: "ricevuto",
                    }
                ]
            },

            {
                id: 3,
                nome: "Luca",
                immagine: "avatar_3.jpg",
                visible: true,
                message: [
                    {
                        date: '27/06/2025 06:10:34',
                        content: "Buongiorno!!",
                        status: "ricevuto",
                    },
                    {
                        date: '27/06/2025 06:30:43',
                        content: "Buongiorno a te, anche tu sveglia presto oggi??",
                        status: "inviato",
                    },
                    {
                        date: '27/06/2025 06:33:21',
                        content: "Si, oggi faccio la mattina e tu dove vai di bello??",
                        status: "ricevuto",
                    }
                ]
            },

            {
                id: 4,
                nome: "Fabio",
                immagine: "avatar_4.jpg",
                visible: true,
                message: [
                    {
                        date: '27/06/2025 12:20:32',
                        content: "Ciao sono Fabio l'amico di Michele",
                        status: "ricevuto",
                    },
                    {
                        date: '27/06/2025 12:24:34',
                        content: "Ciao Fabio Dimmi tutto?",
                        status: "inviato",
                    },
                    {
                        date: '27/06/2025 12:25:21',
                        content: "Volevo sapere se ti va stasera di giocare a calcetto?",
                        status: "ricevuto",
                    }
                ]
            },

            {
                id: 5,
                nome: "Samuele",
                immagine: "avatar_5.jpg",
                visible: true,
                message: [
                    {
                        date: '27/06/2025 11:21:43',
                        content: "Oggi ho una visita che sono stato male ultimamente",
                        status: "ricevuto",
                    },
                    {
                        date: '27/06/2025 11:24:11',
                        content: "Mi dispiace cosa è successo?",
                        status: "inviato",
                    },
                    {
                        date: '27/06/2025 12:12:43',
                        content: "Scusa ero in visita dopo ti spiego",
                        status: "ricevuto",
                    }
                ]
            },

            {
                id: 6,
                nome: "Monia",
                immagine: "avatar_6.jpg",
                visible: true,
                message: [
                    {
                        date: '27/06/2025 17:21:41',
                        content: "Salve la contatto da parte di una grande azienda, ho visto il suo curriculum e vorremmo organizzare un incontro conoscitivo. Lei quando sarebbe disponibile?",
                        status: "ricevuto",
                    },
                    {
                        date: '27/06/2025 17:34:49',
                        content: "Salve si sarei disponibile giovedi' dopo le 16 se per lei va bene",
                        status: "inviato",
                    },
                    {
                        date: '27/06/2025 17:45:12',
                        content: "Perfetto allora restiamo per giovedì, le manderò in comunicazione l'orario",
                        status: "ricevuto",
                    }
                ]
            },

            {
                id: 7,
                nome: "Domenico",
                immagine: "avatar_7.jpg",
                visible: true,
                message: [
                    {
                        date: '27/06/2025 21:29:34',
                        content: "Ciao Domenico come stai?",
                        status: "inviato",
                    },
                    {
                        date: '27/06/2025 21:35:25',
                        content: "Tutto bene è tanto che non ti sento",
                        status: "ricevuto",
                    },
                    {
                        date: '27/06/2025 21:36:34',
                        content: "Lo so, stavo per chiamarti l'altro giorno poi tra mille impegni ti scordi le cose",
                        status: "inviato",
                    }
                ]
            },

            {
                id: 8,
                nome: "Michele",
                immagine: "avatar_8.jpg",
                visible: true,
                message: [
                    {
                        date: '27/06/2025 16:45:21',
                        content: "Ehi ma ti ha chiamato Fabio per il calcetto?",
                        status: "ricevuto",
                    },
                    {
                        date: '27/06/2025 16:47:21',
                        content: "Si mi ha scritto stamattina",
                        status: "inviato",
                    },
                    {
                        date: '27/06/2025 16:47:51',
                        content: "Mi sono scordato di rispondergli",
                        status: "inviato",
                    }
                ]
            },

            {
                id: 9,
                nome: "Sonia",
                immagine: "avatar_9.jpg",
                visible: true,
                message: [
                    {
                        date: '27/06/2025 10:20:42',
                        content: "Ma è vero che Samuele si è lasciato??",
                        status: "ricevuto",
                    },
                    {
                        date: '27/06/2025 10:22:34',
                        content: "Non lo so, chi te l'ha detto a te",
                        status: "inviato",
                    },
                    {
                        date: '27/06/2025 10:24:25',
                        content: "No perchè ho visto delle storie un pò strane",
                        status: "ricevuto",
                    }
                ]
            },
        ],
        activeObj: 0,
        searchInput: "",
        scriviMess: "",
        
    },
    methods: {
        // toLocaleDateString('it-IT'))
    // toLocaleTimeString('it-IT'))

    // SELEZIONA LA CHAT 
        selezionaChat(itemId){
            // console.log(itemId, "itemId");
            const chatSelezionata = this.filtraChat().find((user) => {   
                // cerca il primo elemento che ha l’id uguale a itemId.
                return user.id === itemId;
            });
            // AGGIORNO L'INDICE DELL'ELEMENTO SELEZIONATO
            this.activeObj = this.filtraChat().indexOf(chatSelezionata); 
            // console.log(this.activeObj);
              
        },

        filtraChat(){
            if(this.searchInput == ""){
                return this.contatti;
            }
            else {
                // console.log(this.searchInput, "searchInput");
                const listaFiltrata = this.contatti.filter((item)=>{
                return item.nome.toLowerCase().includes(this.searchInput.toLowerCase());
                });
                if( listaFiltrata.length === 0){
                    this.searchInput = "NESSUN ELEMENTO TROVATO";
                    console.warn("Chat selezionata non trovata tra i risultati filtrati.");
                }
                // console.log(listaFiltrata);
                // console.log(this.activeObj);
                if( listaFiltrata.length <= this.activeObj){
                    this.activeObj = 0;
                }
                return listaFiltrata;
            }
        },

        inviaMess(){
            // console.log(this.scriviMess);
            // console.log(this.filtraChat()[this.activeObj]);
            const newMessage = {
                content: this.scriviMess,
                date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
                status: "inviato",
            };
            // console.log(newMessage);
            this.filtraChat()[this.activeObj].message.push(newMessage);
            
            let risposte = [
                "Ciao, bello risentirti",
                "Come stai? spero tutto bene",
                "adesso non posso parlare",
                "allora confermato per stasera?",
                "ci vediamo domani",
                "oggi non ci sono",
                "tutto bene grazie e tu?"
            ];

            let rispostaCasual = Math.floor(Math.random() * risposte.length);
            // console.log(risposte[rispostaCasual], "rispostaCasual");

            setTimeout(()=> {
                let rispostaMess = {
                    content: risposte[rispostaCasual],
                    date: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
                    status: "ricevuto",
                };
                this.filtraChat()[this.activeObj].message.push(rispostaMess);
            }, 3000);
            
            
        }
    },
    computed: {
        dataAttiva(){
            const listaMessaggi = this.contatti[this.activeObj].message;
            const ultimoMess = listaMessaggi[listaMessaggi.length -1].date;

            const [data, ora] = ultimoMess.split(" ");
            return {data, ora}
        },
    },
    mounted(){
        this.filtraChat();
    }
})