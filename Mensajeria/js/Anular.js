var peticion = {
  "datos": "",
  "dml": "",
  "formato": "",
  "formatoRequest": "",
  "credencial": "",
  "deserror": "",
  "codigoerror": "",
  "datosJson": ""
};

var vm = new Vue({
  el: '#appcontrol',
  store: store,

  created: function () {
  },

  data: {
    a: 1,

    peticion: [],
    campos: [],
    listaMovimientos: [],

    //recalcular cobro
     BCobro :"",
     BMovimiento :"",
     BAlerta:"",

    //boton buscar
    valorBuscar: "",
    selected: "",
    notas: "",
    gridBuscar: [
      { campo: "Movimiento" },
      { campo: "Cobro" },
    ],
  },

  methods: {

    exeDsoa: function (datos, dml, credencial, formatoenvio, formatorecibe, tabla) {

      this.peticion.datos = "";

      if (datos == "") {

        swal({ title: 'Alerta!', text: "Valor busqueda debe contener datos", type: 'warning', confirmButtonText: 'OK' })

      } else {

        var pedido = {
          "datos": datos,
          "dml": dml,
          "formato": formatoenvio,
          "credencial": credencial,
          "formatoRequest": formatorecibe
        };

        var respuesta = [];
        var url = store.state.urlDsoa;

        axios({
          method: 'POST',
          url,
          "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "9be30243-8f01-3820-f64e-d09144a7706d"
            ,
            "processData": false,
          },
          "sync": true,
          "crossDomain": true,
          "data": pedido
        })
          .then((response) => {

            this.peticion = response.data;

          // console.log("PET", this.peticion);

            if (this.peticion.codigoerror.lenght == 0) {

              swal({ title: 'Alerta!', text: "Error no identificado", type: 'warning', confirmButtonText: 'OK' })

            } else {

              if (Math.abs(this.peticion.codigoerror) != "0") {

                swal({ title: 'Alerta!', text: this.peticion.deserror, type: 'warning', confirmButtonText: 'OK' })

              } else {

                switch (tabla) {

                  case "7004":

                    this.campos = JSON.parse(this.peticion.datos);

                    if (this.peticion.codigoerror == "0" && this.peticion.dml == "U") {

                      //botón confirmar
                      Swal.fire({
                        title: ' ',
                        text: "El registro fue anulado correctamente",
                        type: 'success',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ok'
                      }).then((result) => {
                        if (result.value) {
                          window.location.href = "Anular.html";
                        }
                      })
                    }
                    break;

                  case "7005":
                    this.campos = JSON.parse(this.peticion.datos);

                    if (this.peticion.codigoerror == "0" && this.peticion.dml == "U") {

                      //botón confirmar
                      Swal.fire({
                        title: ' ',
                        text: "El registro fue anulado correctamente",
                        type: 'success',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Ok'
                      }).then((result) => {
                        if (result.value) {
                          window.location.href = "Anular.html";
                        }
                      })
                    }
                    break;

                    case "7018":


                      var convert = require('xml-js');
                      var xml = this.peticion.datos;
                      var options = {ignoreComment: true, alwaysChildren: true};
                      var result = convert.xml2js(xml, options); // or convert.xml2json(xml, options)
                      console.log(result);


                      console.log("xmltojson 44444443", this.peticion.datos);
                  
                      if (jsonObj.GN_COD_ERROR == 0) {
                    
                        Swal.fire({ title: "Exito!", text: "El cobro fue recalculado correctamente", showConfirmButton: true });
                      
                      } else {

                        Swal.fire({ title: "Alerta!", text:  "", showConfirmButton: true });

                      }
                      break;

                  default:
                  // code block
                }

                if (this.campos.registros == "0") {

                  swal({ title: "Alerta!", text: "No se encontraron registros", showConfirmButton: true });

                }
              }
            }
          })

          .catch(function (error) {
            console.log("SE PRODUJO ERROR " + error);
          });

        return this.respuesta;
      }
    },

    buscarCobro: function () {

      console.log("buscar buscarCobro", this.BCobro, this.BMovimiento);

      var header = '';
      header = headerPeticion("7018", 'E', '123', 'kate', '', '');

      var filas = '';
      filas = addColumna(filas, 'GN_COD_ERROR', '', 0);
      filas = addColumna(filas, 'GV_MSG_ERROR', '', 0);

      var parametros = '';
      parametros = addParametro(parametros, 'GN_NUM_COBRO', this.BCobro, '', '=', 0);
      parametros = addParametro(parametros, 'GN_NUM_MOVIMIENTO', this.BMovimiento, '', '=', 0);
      parametros = addParametro(parametros, 'GN_COD_COMPANIA', '01', '', '=', 0);

      var pet = getPeticion(header, parametros, filas);

      this.exeDsoa(pet, "E", "1235666", "N", "N", "7018");

    },

    buscarObjeto: function () {

      console.log("buscar", this.selected, this.valorBuscar);

      var header = '';
      var objeto = '';
      var filas = '';
      var parametros = '';


      if (this.selected == "Movimiento") {

        objeto = "7004";
        header = headerPaginacion(objeto, 'JJ', '123', 'kate', '1', '10', 'COD_CLIENTE');

        filas = addColumna(filas, 'NUM_MOVIMIENTO', '', 0);
        filas = addColumna(filas, 'FEC_CREACION', '', 0);
        filas = addColumna(filas, 'DES_OBSERVACIONES', '', 0);
        filas = addColumna(filas, 'MTO_COBRAR', '', 0);
        filas = addColumna(filas, 'IND_ESTADO', '', 0);

        parametros = addParametro(parametros, 'NUM_MOVIMIENTO', this.valorBuscar, '', '=', 0);
        parametros = addParametro(parametros, 'IND_ESTADO', 'R', '', '=', 0);

      } else if (this.selected == "Cobro") {

        objeto = "7005";
        header = headerPaginacion(objeto, 'JJ', '123', 'kate', '1', '10', 'COD_CLIENTE');

        filas = addColumna(filas, 'NUM_COBRO', '', 0);
        filas = addColumna(filas, 'FEC_COBRO', '', 0);
        filas = addColumna(filas, 'MTO_PAGADO', '', 0);
        filas = addColumna(filas, 'MTO_TOTAL', '', 0);
        filas = addColumna(filas, 'IND_ESTADO', '', 0);

        parametros = addParametro(parametros, 'NUM_COBRO', this.valorBuscar, '', '=', 0);
        parametros = addParametro(parametros, 'IND_ESTADO', "'R','A'", '', 'IN', 0);

      }

      var pet = getPeticion(header, parametros, filas);

      this.exeDsoa(pet, "JJ", "1235666", "N", "N", objeto);

    },

    anularObjeto: function (item) {

      var header = '';
      var objeto = '';
      var filas = '';
      var parametros = '<ParamItem/>';

      if (this.selected == "Movimiento") {

        objeto = "7004";
        header = headerPaginacion(objeto, 'U', '123', 'kate', '1', '10', 'COD_CLIENTE');

        filas = addColumna(filas, 'IND_ESTADO', 'N', 0);
        filas = addColumna(filas, 'NUM_MOVIMIENTO', item.NUM_MOVIMIENTO, 0);
        filas = addColumna(filas, 'COD_COMPANIA', '01', 0);

      } else if (this.selected == "Cobro") {

        objeto = "7005";
        header = headerPaginacion(objeto, 'U', '123', 'kate', '1', '10', 'COD_CLIENTE');

        filas = addColumna(filas, 'IND_ESTADO', 'N', 0);
        filas = addColumna(filas, 'NUM_COBRO', item.NUM_COBRO, 0);
        filas = addColumna(filas, 'COD_COMPANIA', '01', 0);
      }

      var pet = getPeticion(header, parametros, filas);

      this.exeDsoa(pet, "U", "1235666", "N", "N", objeto);

    },

    genPDF: function () {
      var doc = new jsPDF;
      doc.text('Página 1', 20, 20);
      doc.addPage();
      doc.text('Página 2', 20, 20);
      doc.save('TEST.pdf');
    },

    limpiarForm: function () {
      this.valorBuscar = "";
    },

  }
});
