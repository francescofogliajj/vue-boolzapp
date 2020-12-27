var app = new Vue({

  el: "#root",

  data: {
    contacts: [
      {
      	name: 'Michele',
      	avatar: '_1',
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
        avatar: '_2',
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
    		avatar: '_3',
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
    		avatar: '_4',
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
    userInput: "",
    dropdownIndex: "",
    dropdownDisplay: false
  },

  methods: {

    addActiveClass(index) {
			this.activeIndex = index;
		},

    sendMessage() {

      let newObj = {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        text: this.newMessage,
        status: 'sent'
      };
      this.contacts[this.activeIndex].messages.push(newObj);
      this.newMessage = "";

      setTimeout( () => {
        let newAutoObj = {
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
          text: 'ok',
          status: 'received'
        }
        this.contacts[this.activeIndex].messages.push(newAutoObj);
      }, 1000);

		},

    searchContact() {
			this.contacts.forEach( (contact) => {
				contact.visible = false;

        let nameLowerCase = contact.name.toLowerCase();
        let userInputLowerCase = this.userInput.toLowerCase();

				if (nameLowerCase.includes(userInputLowerCase)) {
					contact.visible = true;
				}

			});
    },

    toggleDropdown(index) {
      this.dropdownIndex = index;

      if(this.dropdownDisplay) {
        this.dropdownDisplay = false;
      } else {
        this.dropdownDisplay = true;
      }

    },

    hideDropdown() {
      this.dropdownDisplay = false;
    },

    deleteMessage(index) {
      this.contacts[this.activeIndex].messages.splice(index, 1);
      this.hideDropdown();
    }

  }

});
