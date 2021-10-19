var app = new Vue({
    el:'#app',
    data: {
        num1:0,
        num2:0,
        num3:0,
        num4:0
    },
    methods: {
        exchange:function(){
            this.num3=parseInt(this.num1);
            this.num4=parseInt(this.num2);
        }
    },
})