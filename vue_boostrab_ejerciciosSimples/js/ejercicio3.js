var app = new Vue({
    el:'#app',
    data: {
       num1:0,
       num2:0,
       rta:""
    },
    methods: {
      compare:function(){
        if(this.num1 < 0 && this.num2 < 0){
          if(this.num1 == this.num2){
            this.rta='ambos son iguales';
          }else if(this.num1 < this.num2){
            this.rta='el numero 1 es mayor que el numero 2';
          }else{
            this.rta='el numero 2  es mayor que el numero 1';
          }
        }else{
          if(this.num1 == this.num2){
            this.rta='ambos son iguales';
          }else if(this.num1 < this.num2){
            this.rta='el numero 2 es mayor que el numero 1';
          }else{
            this.rta='el numero 1  es mayor que el numero 2';
          }
        }
      }  
    },
})