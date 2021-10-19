var app = new Vue({
    el:'#app',
    data:{
        num1:0,
        num2:''
    },
    methods: {
        add:function(){
            this.num2=parseInt(this.num1)+1;
        }
    },
})