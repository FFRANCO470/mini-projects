var app = new Vue({
    el:'#app',
    data:{
    //  entradas = letra de materia + letra tipo parcial + numero
        // prgramacion
        pp1:'',
        pp2:'',
        pq1:'',
        pq2:'',
        pt1:'',
        pt2:'',
        //calculo 
        cp1:'',
        cp2:'',
        cq1:'',
        cq2:'',
        //quimica 
        qp1:'',
        qq1:'',
        qt1:'',
        //trabajo integrador
        i:'',
    //proceso = letra materia + letra tipo trabajo + p de porcentaje
        // prgramacion
        ppp:0.4,
        pqp:0.2,
        ptp:0.4,
        //quimica 
        qpp:0.45,
        qqp:0.25,
        qtp:0.3,
        //calculo 
        cpp:0.6,
        cqp:0.4,
        //trabajo integrador
        ip:0.1,
    //salidas
        //letras de las materias
        p:'',
        calculo:'',
        q:'',
        general:'',
        //mensajes
        pm:'',
        cm:'',
        qm:'',
        generalm:'',

    },
    methods: {
        calcular:function(){
            if(this.pp1 < 0 || this.pp2 < 0|| this.pq1 < 0 || this.pq2 < 0 || this.pt1 < 0 || this.pt2 < 0
                || this.cp1 < 0 || this.cp2 < 0 || this.cq1 < 0 || this.cq2 < 0 
                || this.qp1 < 0 || this.qq1 < 0 || this.qt1 < 0 ){
                    alert('nota negativa');
            }else{
            //hallar notas
                this.p = (((((parseFloat(this.pp1)+parseFloat(this.pp2))/2)*parseFloat(this.ppp))+(((parseFloat(this.pq1)+parseFloat(this.pq2))/2)*parseFloat(this.pqp))+(((parseFloat(this.pt1)+parseFloat(this.pt2))/2)*parseFloat(this.ptp)))*0.9)+(parseFloat(this.ip)*parseFloat(this.i));
                
                this.c = ((( parseFloat(this.cp1) + parseFloat(this.cp2))/2)*parseFloat(this.cpp))+(((parseFloat(this.cq1)+parseFloat(this.cq2))/2)*parseFloat(this.cqp));
                this.q = (parseFloat(this.qp1)*parseFloat(this.qpp))+(parseFloat(this.qq1)*parseFloat(this.qqp))+(parseFloat(this.qt1)*parseFloat(this.qtp));
                this.general = (parseFloat(this.p) + parseFloat(this.c) + parseFloat(this.q))/3;
                //enviar mensages
                if(this.p>=3) {this.pm = 'Aprobado';} else{this.pm = 'No aprobado'};
                if(this.c>=3) {this.cm = 'Aprobado';} else{this.cm = 'No aprobado'};
                if(this.q>=3) {this.qm = 'Aprobado';} else{this.qm = 'No aprobado'};
                if(this.general>=4.8){
                    this.generalm = 'Becado';
                }else if (this.general<4.8 && this.general>=3){
                    this.generalm = 'Aprobado';
                }else{
                    this.generalm = 'Rechazado';
                }
            }
        }
    },
})