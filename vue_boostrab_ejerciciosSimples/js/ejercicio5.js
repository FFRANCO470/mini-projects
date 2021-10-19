var app = new Vue({
    el:'#app',
    data:{
        num1:0,
        cost:''
    },
    methods: {
        calculate:function(){
            this.cost=this.num1*5;
        }
    },
})