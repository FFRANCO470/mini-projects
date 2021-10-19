var app = new Vue({
    el: '#app',
    data: {

      arraydatos:[1,2,3,4],
      arraydatos2:[{cant:1, precio:2}, {cant:3, precio:4}], //matris
      arraydatos3:[{cant:1, precio:2, nombre:"manzana"}, {cant:3, precio:4, nombre:"pera"},{cant:5, precio:6, nombre:"piña"}], //matris2
      
      arraydatos4:[],
      
      // INPUT
      precio:'',
      cant:'',
      nombre:'',
    },
    methods: {
      // llena el arraydatos4 con la funcion push
      agregar:function(){
        this.arraydatos4.push({nombre:this.nombre, cant: this.cant, precio:this.precio});
      },

      eliminar:function(posicion){
        this.arraydatos4.splice(posicion,1)
        alert("posicion :  " + posicion);
      },

      calculate:function(){
        
        //imprimer en la consola los elementos del array
        //this.arraydatos.forEach(objeto => {
          //console.log(objeto);
        //})

        //imprimir en la consola los elementos de la matriz
        //console.log(this.arraydatos2);

        // hace las operacones para cada uno de los elementos de la matris o sea por cada {}
        // this.arraydatos2.forEach(objeto => {
          // console.log("cant: " + objeto.cant + " precio: " + objeto.precio);
          // var total = objeto.cant*objeto.precio
          // console.log(total);
        // })

        var con=0;
        var acu=0;
        this.arraydatos3.forEach(objeto => {
          con++;
          console.log(objeto.nombre + " : " + objeto.precio)
          acu += objeto.precio
        });
        console.log(con)
        console.log(acu)
      },
      calculate2:function(){
        // for (let index = 0; index < this.arraydatos2.length; index++) {
          // hace las operacones para cada uno de los elementos de la matris o sea por cada {}
          // console.log("cant: " + this.arraydatos2[index].cant + "precio: " + this.arraydatos2[index].precio);
          // console.log(this.arraydatos2[index].cant*this.arraydatos2[index].precio);
        // }

        //hace las operaciones entre los distintos elementos de la matriz
        // console.log("cant: " + this.arraydatos2[0].cant + "precio: " + this.arraydatos2[1].precio);
        // console.log(this.arraydatos2[0].cant*this.arraydatos2[1].precio);

        // acumula los valores de los elementos can dentro de los objetos {} de la matriz cada objeto es una fila en la consola
        let suma=0;
        for (let index = 0; index < this.arraydatos2.length; index++) {
          suma += this.arraydatos2[index].cant;
          console.log(suma)
          
        }

      }
    },
  })