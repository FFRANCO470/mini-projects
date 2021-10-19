var app = new Vue({
    el:'#app',
    //FRANCISCO FRANCO FF_02
    data:{
        price:0,
        apple:0,
        total:''
    },
    methods: {
      calculate:function(){
          if(this.apple<0 || this.price<0){
            alert("Verifique valores");
          }else if(this.apple>10){
            this.total=this.price*this.apple*0.8;
          }else if(this.apple>5){
            this.total=this.price*this.apple*0.85;
          }else if(this.apple>2){
            this.total=this.price*this.apple*0.9;
          }else{
            this.total=this.price*this.apple;
          }
      }  
    },
})