var app = new Vue({
    el:'#app',
    data:{
        tipo:0,
        saldo:1000000,
        valor:0,
        estado:0,
        clave:1234,
        pin:'',
    },
    methods: {
        operacion:function(){
            if(this.tipo=="c"){
                this.consignar();
            }else if(this.tipo=="r"){
                this.retirar();
            }else if(this.tipo=="0"){alert("seleccione una opcion");}
        },
        consignar:function(){
            this.saldo = this.saldo + this.valor;
        },
        retirar:function(){
            if(this.valor>this.saldo){
                alert("saldo insuficiente");
            }else{this.saldo = this.saldo - this.valor;}
        },
        validar:function(){
            if(this.pin==this.clave){
                this.estado=1;
            }else{this.estado=0;alert("clave no valida");}
        }

    },
    
})