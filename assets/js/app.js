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
        },
        
        emailGenerate(counter){
            if(counter = 9){
                this.counter = 0
                this.emails = []
                
                while(this.counter < 10){
                    console.log(this.counter)
                    this.createEmail()
                    this.counter++    
                }
                
            }
        }
    },
    mounted(){

        this.emailGenerate(this.counter)
        console.log(this.counter)
        console.log(this.emails)
    }
}).mount("#app");
