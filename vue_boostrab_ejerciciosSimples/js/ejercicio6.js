var app = new Vue({
    el:'#app',
    //FRANCISCO FRANCO FF_01
    data:{
        hours:0,
        salary:''
    },
    methods: {
        calculate:function(){
            var costHours=5000, costExtra=1000;
            if(this.hours>8){
                extra=this.hours-8;
                this.salary=(8*costHours)+(extra*costExtra);
            }else{
                this.salary=(this.hours*costHours)
            }
            
        }
    },
})