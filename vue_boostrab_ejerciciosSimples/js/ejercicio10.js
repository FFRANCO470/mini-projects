var app = new Vue({
    el:'#app',
    //FRANCISCO FRANCO FF_01
    data:{
        hours:0,
        shoes:0,
        salary:''
    },
    methods: {
        calculate:function(){
            this.salary = (this.hours*6300)+(this.shoes*1000);
        }
    },
})