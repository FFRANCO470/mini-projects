var app = new Vue({
    el: '#app',
    data: {
      horas:'',
      normal:'',
      extra:'',
      pbon:'',
      bon:'',
      pimp:'',
      imp:'',
      total:'',
    },
    methods: {
      calcular:function(){
        var base=0, totalhoras=0, pago=4200, extrapago = 6300, salario=230000;

        if(parseFloat(this.horas)<0){
          alert('las horas son positivas');
        }else if(parseFloat(this.horas)<=180){
          this.normal = parseFloat(this.horas);
          this.extra = 0;
          base = salario+(parseFloat(this.normal) *pago) ;
        }else{
          this.normal=180;
          this.extra = parseFloat(this.horas) - 180;
        base = salario + (parseFloat(this.normal)*pago)+(parseFloat(this.extra)*extrapago);
        }

        if (base<600000) {
          this.pbon = 10;
          this.bon = base * 0.1;
          this.pimp =0;
          this.imp =0;
          this.total=base+ parseFloat(this.bon);
        }else if (base>=600000 && base<=1000000){
          this.pbon = 0;
          this.bon = 0;
          this.pimp = 20;
          this.imp = base * 0.2;
          this.total=base - parseFloat(this.imp);
        }else{
          this.pbon = 0;
          this.bon = 0;
          this.pimp = 30;
          this.imp = base * 0.3;
          this.total=base - parseFloat(this.imp);
        }
      }
    },
  })