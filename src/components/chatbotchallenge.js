import authentication from '../utils/authentication'
import
export default {
    data: () => ({
        message: '',
        messages: [],
        token: '',
        commands: [':login', ':register', ':logout', ':balance', ':deposit', ':withdraw', ':exchange', ':currency', ':help']
    }),
    mounted(){
        this.showWelcome()
        this.showFirstInstructions()
    },
    methods: {
        sendMessage(message, author){
            if ( message === '') {
                return;
            }
            this.messages.push({
                text: message,
                author: author
            })
            if (this.commands.indexOf(message.toLowerCase().split(' ')[0]) === -1 && author === 'client')
            {
                this.messages.push({
                    text: 'Invalid command',
                    author: 'server'
                })
            }
            if (message.toLowerCase().startsWith(':login')) {
                this.$modal.show('authentication')
            }
            if (message.toLowerCase().startsWith(':register')) {
                this.formError = ''
                this.$modal.show('register')
            }
            if (message.toLowerCase().startsWith(':logout')) {
                localStorage.token = ''
                this.sendMessage('User logged out', 'server')
            }
            if (message.toLowerCase().startsWith(':balance')) {
                this.processBalance(message)
            }

        },

        showWelcome() {
            this.sendMessage('Welcome to ChatBot, Please type ":help" for commands', 'server')
        },
        showFirstInstructions() {
            let message = 'You must be registered first<br>' +
                'For register you should write the command:<br>' +
                '":register"<br>' +
                'If you are already registered to login you should write the command:<br>' +
                '":login"';
            this.sendMessage(message, 'server');
        },
        processLogin() {
            authentication.login({"username": this.username, "password": this.password})
                .then( (response) => {
                    localStorage.token = response.token
                    this.sendMessage('User logged in', 'server')
                })
                .catch((error) => {
                    if (error.response.data.code === 401) {
                        this.sendMessage(error.response.data.message, 'server');
                    }
                })

            this.$modal.hide('loginForm')
        },
        processRegister() {
            if (this.password === this.passwordConfirm) {
                authentication.register({
                    "name": this.name,
                    "username": this.username,
                    "email": this.email,
                    "password": this.password
                })
                    .then( (response) => {
                        this.$modal.hide('registerForm')
                        this.sendMessage('Welcome ' + response.result + ', Now you can log in', 'server')
                    })
                    .catch((error) => {
                        this.formError = error.response.data.detail
                    })
                return
            }
            this.formError = 'Password confirmation not match'
        },
        processBalance() {
            let paramsArray = message.split(" ");
            let params = {
                'currency': paramsArray[1],
            };
            this.requestOrder('currency', params)
        },

    }
}