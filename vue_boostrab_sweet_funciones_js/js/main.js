var app = new Vue({
    el: '#app',
    data: {
      largoCadenaInput:'',
      largoCadenaOutput:'',

      cadena:'',
      parteCadena:'',
      respuesta:'',

      mayusculaMinuscula:'',
      mayuscula:'',
      minuscula:'',

      cadena1:'',
      cadena2:'',
      cadenaUnida:'',

      cadenaEspacio:'',
      cadenaSinEspacio:'',

      cadenaPosiciones:'',
      pocision1:'',
      pocision2:'',
      cadenaConPosicionslice:'',
      cadenaConPosicionssubString:'',
      cadenaConPosicionssubStringContrario:'',

      
    },//data
    methods: {
      
      msjcompra:function(tata){
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: tata,
          showConfirmButton: false,
          timer: 2000})
      },


      largoCadena:function(){
        this.largoCadenaOutput = this.largoCadenaInput.length
      },

      encontrarParteCadena : function(){
        this.respuesta = this.cadena.indexOf(this.parteCadena)
      },

      pasarMinusculasMayusuculas : function(){
        this.mayuscula =  this.mayusculaMinuscula.toUpperCase()
        this.minuscula =  this.mayusculaMinuscula.toLowerCase()
      },

      unirCadenas : function(){
        this.cadenaUnida = this.cadena1.concat(this.cadena2)
      },

      quitarEspacios : function(){
        this.cadenaSinEspacio = this.cadenaEspacio.trimEnd().trimStart()
        //this.cadenaSinEspacio = this.cadenaSinEspacio.trim()
      },

      cadenaPorPocision : function(){
        this.cadenaConPosicionslice = this.cadenaPosiciones.slice(this.pocision1,this.pocision2)
        this.cadenaConPosicionssubString = this.cadenaPosiciones.substring(this.pocision1,this.pocision2)
        this.cadenaConPosicionssubStringContrario = this.cadenaPosiciones.substring(this.pocision2,this.pocision1)
        
      },
      
    },//methods
  })