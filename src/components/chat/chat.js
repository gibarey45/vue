import service from "../../services/authentication";
export default {
  name: "chat",
  data: () => ({
    message: "",
    messages: [],
    token: "",
    commands: [
      ":login",
      ":register",
      ":logout",
      ":balance",
      ":deposit",
      ":withdraw",
      ":exchange",
      ":currency",
      ":help"
    ]
  }),
  mounted() {
    this.showWelcome();
    this.showFirstInstructions();
  },
  methods: {
    sendMessage(message, author) {
      if (message === "") {
        return;
      }
      this.messages.push({
        text: message,
        author: author
      });
      if (
        this.commands.indexOf(message.toLowerCase().split(" ")[0]) === -1 &&
        author === "client"
      ) {
        this.messages.push({
          text: "Invalid command",
          author: "server"
        });
      }
      if (message.toLowerCase().startsWith(":login")) {
        this.$modal.show("authentication");
      }
    },

    showWelcome() {
      this.sendMessage(
        'Welcome to ChatBot, Please type ":help" for commands',
        "server"
      );
    },
    showFirstInstructions() {
      let message =
        "You must be registered first<br>" +
        "For register you should write the command:<br>" +
        '":register"<br>' +
        "If you are already registered to login you should write the command:<br>" +
        '":login"';
      this.sendMessage(message, "server");
    },
    processLogin() {
      service
        .login({ username: this.username, password: this.password })
        .then(response => {
          localStorage.token = response.token;
          this.sendMessage("User logged in", "server");
        })
        .catch(error => {
          if (error.response.data.code === 401) {
            this.sendMessage(error.response.data.message, "server");
          }
        });
      this.$modal.hide("loginForm");
    }
  }
};
