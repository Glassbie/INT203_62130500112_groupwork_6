const constraints = {
    fname: {
        presence: true,
    },
    lname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 100
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
   
}
    
    
    const app = {
        data() {
            return {
                fname: 'Thitikorn' ,
                lname: 'Panyawachirayan' ,
                status: 'IT Student' ,
                image: './images/1.jpg' ,
                age : null,
                gender: null,
                email: null,
                errors: []

                
            }
        },
        methods: {
            checkForm(){
                this.errors = validate({fname: this.fname,
                                        lname: this.lname,
                                        age: this.age,
                                        gender: this.gender,
                                        email: this.email,
                                        },
                                        constraints)
                if(!this.errors){
                    alert("Your profile is updated successfully.")
                }
            }
        }

    }
    Vue.createApp(app).mount('#app')