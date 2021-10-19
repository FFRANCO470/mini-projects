var app = new Vue({
    el: '#app',
    data: {
      //entradas
      nombre:'',
      edad:0,
      arraydatos:[  ],
      tipocompra:'',
      compra:0,
      //salida
      total:0,
    },
    methods: {
      calcular:function(){
        if(this.compra<0){
          alert('Compra no es negativa');
        }else{
          if(this.tipocompra == 'camisa'){
            this.total = this.compra * 20000;
            this.msjcompra('El total es de :' + this.total);
          }else if(this.tipocompra == 'pantalon'){
            this.total = this.compra * 50000;
            this.msjcompra('El total es de :' + this.total);
          }else{
            alert('seleccione una opcion')
          }
        }
      },
      msjcompra:function(tata){
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: tata,
          showConfirmButton: false,
          //5000 son 5 seg
          timer: 2000})
      },
      prueba:function(ttt){
        Swal.fire({
          icon: 'error',
          title: 'Oops la patada...',
          text: ttt,
          footer: '<a href>Quiere amanzar duendes?</a>'
        })
      },
      agregar:function(){
        this.arraydatos.push({nombre:this.nombre, edad:this.edad});
        this.mensaje();
      },
      validaredad:function(){
        if(this.edad>=18){
          this.mensaje('ud es mayor de edad');
        }else{
          this.prueba('ud es menor de edad');
        }
      },
      mensaje:function(msj){
        // Swal.fire(
        //   'HECHO!',
        //   'OK para continuar!',
        //   'success'
        // )
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: msj,
          showConfirmButton: false,
          //5000 son 5 seg
          timer: 2000
        })
      }
    },
  })