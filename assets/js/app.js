console.log("ciao");

const { createApp } = Vue;
createApp({
    data() {
        return {
            emails: [],
            ciao: 'ciao',
            counter: 0
        };
    },
    methods:{
        createEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    console.log(response.data.response);
                    email = response.data.response;
                    this.emails.push(email)
                    return email
            });
        }
    },
    mounted(){
        
        while (this.counter < 9) {
            this.createEmail()
            this.counter++
        }
        console.log(this.counter)
        console.log(this.createEmail())
        console.log(this.emails)
    }
}).mount("#app");
