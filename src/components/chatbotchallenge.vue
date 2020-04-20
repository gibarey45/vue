<template>
    <main>
        <h1 class="headline">CHATBOT CHALLENGE</h1>
        <div>
            <div class="row justify-content-center">
                <div class="col-md-6 no-gutters">
                    <div class="row box">
                        <div class="col-md-12">
                            <section ref="chatArea" class="chat-area">
                                    <ul class="chat-box-list">
                                        <li
                                                class="message"
                                                v-for="(message, idx) in messages"
                                                :key="idx"
                                                :class="message.author"
                                        >
                                            <p>
                                                <span class="message message-client" v-if="message.author === 'client'">{{ message.text }}</span>
                                                <span class="message message-server" v-if="message.author === 'server'" v-html="message.text"></span>
                                            </p>
                                        </li>
                                    </ul>
                            </section>
                        </div>
                        <div class="col-md-12">
                            <div class="row m-1">
                                <input class="form-control col-md-10"
                                        type="text"
                                        v-model="message"
                                        @keyup.enter="sendMessage (message, 'client')"
                                       placeholder="Please, type your message here" autocomplete="false"
                                />
                                <button class="col-md-2 btn btn-success" @click="sendMessage">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <modal ref="authentication" name="authentication" width="400px" height="auto" :clickToClose="false">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <h5 class="card-title col-12">
                                Insert Data to Login
                            </h5>
                            <input autofocus ref="login_input_username" class="form-control col-12 mb-1" v-model="username" placeholder="Insert Username"/>

                            <input autofocus ref="login_input_password" class="form-control col-12 mb-1" v-model="password" placeholder="Insert Password"
                                   v-on:keyup.enter="processLogin()"/>
                            <button @click="processLogin()" class="btn btn-success col-12">Login</button>
                        </div>
                    </div>
                </div>
            </modal>

            <modal name="register"  width="400px" height="auto" :clickToClose="false">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <h5 class="card-title col-12">
                                Insert Data to Register
                            </h5>
                            <input autofocus class="form-control col-12 mb-1" v-model="name"
                                   placeholder="Insert Name"/>
                            <input class="form-control col-12 mb-1" v-model="username"
                                   placeholder="Insert Username"/>
                            <input class="form-control col-12 mb-1" type="email" v-model="email"
                                   placeholder="Insert Email"/>
                            <input class="form-control col-12 mb-1" type="password" v-model="password"
                                   placeholder="Password" />
                            <input class="form-control col-12 mb-1" type="password" v-model="passwordConfirmation"
                                   placeholder="Confirm Password" v-on:keyup.enter="processRegister()"/>
                            <button @click="processRegister()" class="btn btn-success col-12">Register</button>
                        </div>
                    </div>
                </div>
            </modal>

        </div>
    </main>
</template>
<script src="./chatbotchallenge.js"></script>
<style src = "./chatbotchallenge.scss"></style>
