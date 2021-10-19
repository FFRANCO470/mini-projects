var app = new Vue({
    el:'#app',
    data:{
        registros:[],
        numero:0,
        nombre:'',
        cantidad:'',
        precio:'',
    },
    methods: {
        
        add:function(){
            this.numero++
            this.registros.push({numero:this.numero, nombre:this.nombre,cantidad:this.cantidad, precio:this.precio});
        },
        eliminar:function(posicion){
            this.registros.splice(posicion,1);
            alert("pocicion  "+posicion);
        }
    },
})