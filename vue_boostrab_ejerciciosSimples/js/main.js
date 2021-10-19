var app = new Vue({
    el: '#app',
    data: {
      num1:0,
      num2:0,
      rta:0,
      ver:0
    },
    methods: { 
      add:function(){
        this.rta= parseInt(this.num1) + parseInt(this.num2);
        //alert("methods add "+this.rta); 
      },
      subtract:function(){
        this.rta=parseInt(this.num1) - parseInt(this.num2);
        //alert("methods subtract");
      },
      multiply:function(){
        this.rta=parseInt(this.num1)*parseInt(this.num2);
        //alert("methods multiply");
        console.log(this.rta)
      },
        //metodo para ocultar las cosas v-show 
      mostrar:function(){
        this.ver=1;
      },
      ocultar:function(){
        this.ver = 0;
      }

    },
})
