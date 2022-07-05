const app = Vue.createApp({
    template: `
        <form autocomplete="off">
            <div>
                <input v-model='name'type="text" name="name" id="name" placeholder="Enter your first name">
            </div>
            <div>
                <input v-model='surname'type="text" name="surname" id="surname" placeholder="Enter your last name">
            </div>
            <div>
                <input v-model='age' type="text" name="age" id="age" placeholder="Enter your age">
            </div>
            <div>
                <button v-on:click="checkAge()" type="submit">Submit</button>
            </div>
        </form>
        <p v-if="isOver18 && mustDisplay">{{successMessage}}</p>
        <p v-if="!isOver18 && mustDisplay">{{failMessage}}</p>

    `,
    data: function(){
        return{
            name: '',
            surname:'',
            age: undefined,
            isOver18:false,
            mustDisplay:false,
            successMessage: `you pressed A`  ,
            failMessage: `you did not press a`
        }
    },
    methods:{
        checkAge(){
            if(age.value == 'a' || 'A'){
                this.isOver18 = true;
                this.mustDisplay = true;
            }else{
                this.isOver18 = false;
                this.mustDisplay = true;
            }
        }
    }
})

app.mount("#App");