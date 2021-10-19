var app = new Vue({
    el:'#app',
    data:{
        hours:0,
        salary:''
    },
    methods: {
        calculate:function(){
            if(this.hours>8){
                extra=this.hours-8;
                this.salary=((520000/48)*8)+(extra*5800);
            }else{
                extra=0;
                this.salary=((520000/48)*this.hours);
            }
            console.log('extra:'+extra)
        }
    },
})