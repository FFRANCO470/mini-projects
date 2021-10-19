var app = new Vue({
    //FRANCISCO FRANCO
    el:'#app',
    data:{
        edad:0
    },
    methods: {
        evaluate:function(){
            if(this.edad>=18 && this.edad<=20){
                alert("la edad es aceptada")
            }else{
                alert("la edad es rechazada")
            }
        }
    },
})