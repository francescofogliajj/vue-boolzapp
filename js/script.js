var app = new Vue({

  el: "#root",

  data: {
    contacts: [
      {
      	name: 'Michele',
      	avatar: 'img/avatar_1.png',
      	visible: true,
      	messages: [
			    {
    				date: '10/01/2020 15:30:55',
    				text: 'Hai portato a spasso il cane?',
    				status: 'sent'
			    },
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Ricordati di dargli da mangiare',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 16:15:22',
    				text: 'Tutto fatto!',
    				status: 'received'
    			}
        ]
      },
      {
  		  name: 'Fabio',
        avatar: 'img/avatar_2.png',
		    visible: true,
		    messages: [
			    {
    				date: '20/03/2020 16:30:00',
    				text: 'Ciao come stai?',
    				status: 'sent'
			    },
			    {
    				date: '20/03/2020 16:30:55',
    				text: 'Bene grazie! Stasera ci vediamo?',
    				status: 'received'
			    },
			    {
    				date: '20/03/2020 16:35:00',
    				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
    				status: 'sent'
			    }
		    ]
	    },
      {
    		name: 'Samuele',
    		avatar: 'img/avatar_3.png',
    		visible: true,
    		messages: [
    			{
    				date: '28/03/2020 10:10:40',
    				text: 'La Marianna va in campagna',
    				status: 'received'
    			},
    			{
    				date: '28/03/2020 10:20:10',
    				text: 'Sicuro di non aver sbagliato chat?',
    				status: 'sent'
    			},
    			{
    				date: '28/03/2020 16:15:22',
    				text: 'Ah scusa!',
    				status: 'received'
    			}
		    ]
	    },
      {
    		name: 'Luisa',
    		avatar: 'img/avatar_4.png',
    		visible: true,
    		messages: [
			    {
    				date: '10/01/2020 15:30:55',
    				text: 'Lo sai che ha aperto una nuova pizzeria?',
    				status: 'sent'
			    },
			    {
    				date: '10/01/2020 15:50:00',
    				text: 'Si, ma preferirei andare al cinema',
    				status: 'received'
			    }
		    ]
      }
    ],
    activeIndex: 0,
    newMessage : "",
    newSendMessage: {},
		newReceivedMessage: {},
    userInput: "",
  },

  methods: {

    addActiveClass(index) {
			this.activeIndex = index;
		},

    sendMessage() {

			let contactMessages = this.contacts[this.activeIndex].messages;
			this.newSendMessage.text = this.newMessage;
			this.newMessage = "";
			this.newSendMessage.status = "sent";
			contactMessages.push(this.newSendMessage);
			this.newSendMessage = {};

			setTimeout( () => {
				this.newReceivedMessage.text = "Ok",
				this.newReceivedMessage.status = "received",
				contactMessages.push(this.newReceivedMessage);
				this.newReceivedMessage = {};
			}, 1000);

		},

    searchContact() {
			this.contacts.forEach( (contact) => {
				contact.visible = false;

				if (contact.name.includes(this.userInput)) {
					contact.visible = true;
				}

			});
    },

  }

});
