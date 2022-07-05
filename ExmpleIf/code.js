const app = Vue.createApp({
    data: function(){
        return{
            show: false
        }
    },
    methods:{
        handleKeyPressed(e){
            console.log(e)
            console.log(e.key);
            if (e.code = 'KeyA') {
                this.show = true
            }
            if (e.code != 'KeyA'){
                this.show = false
            }
        }
    }
})

app.mount('#app')