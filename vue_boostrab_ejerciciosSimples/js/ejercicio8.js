var app = new Vue({
    el:'#app',
    //FRANCISCO FRANCO FF_01
    data:{
        hours:0,
        salary:''
    },
    methods: {
        calculate:function(){
            var costHours = 3200, costExtra = 4300, profRisk = 0.05 , ss = 0.1, bonus=0.8;
            if(this.hours>48){
                extra=this.hours-48;
                salaryHours = (8*costHours)+(extra*costExtra);
            }else{
                extra=0;
                salaryHours = (this.hours*costHours)+(extra*costExtra);
            }
            costProRisk= salaryHours*profRisk;
            costss=salaryHours*ss;
            costBonus=salaryHours*bonus;
            this.salary=salaryHours - costProRisk - costss + costBonus;
            console.log('salaryHours :' + salaryHours);
            console.log('extra : ' + extra);
            console.log('costProRisk : ' + costProRisk);
            console.log('costss : ' + costss);
            console.log('costBonus : ' + costBonus);
        }
    },
})