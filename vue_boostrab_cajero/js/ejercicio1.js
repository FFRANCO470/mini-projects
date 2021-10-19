var app = new Vue({
    //FRANCISCO FRANCO FF_02
    el:'#app',
    data:{
        questions:0,
        answers:0,
        nivel:''
    },
    methods: {
        calculate:function(){
            var valor=(this.answers/this.questions)*100;
            if(this.answers>this.questions){
                alert("No es posible, verifique los valores")
            }else if(valor == 100){
                this.nivel="Excelente";
            }else if(valor < 100 && valor>=91 ){
                this.nivel="Muy bueno";
            }else if(valor < 91 && valor>=61 ){
                this.nivel="Bueno";
            }else if(valor < 61 && valor>=40 ){
                this.nivel="Regular";
            }else if(valor < 40){
                this.nivel="Malo";
            }
        },
    },
})