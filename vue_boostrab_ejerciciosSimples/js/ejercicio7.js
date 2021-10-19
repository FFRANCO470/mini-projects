var app = new Vue({
    el:'#app',
    data:{
        units:0,
        cost:''
    },
    methods: {
        calculate:function(){
            var costUnits=0, costWorkforce=0;
            if(this.units>1000){
                costUnits=5000, costWorkforce=3000;
                this.cost=(this.units*costUnits)+(this.units*costWorkforce)
            }else{
                costUnits=6000, costWorkforce=4000;
                this.cost=(this.units*costUnits)+(this.units*costWorkforce)
            }
            console.log('costUnits: '+costUnits);
            console.log('costWorkforce: '+costWorkforce);
        },
    },
})