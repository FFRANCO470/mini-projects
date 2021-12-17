const XLSX = require('xlsx')

function leerExcel(ruta){
    //
    const workbook = XLSX.readFile(ruta);
    //guardar las hojas una vez leido el excel. arreglo con el nombre de las hojas
    const workbookSheets = workbook.SheetNames;
    //console.log(workbookSheets);

    const sheet = workbookSheets[0];
    //array con objetos del excel
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
    console.log(dataExcel );

}

leerExcel('compra.xlsx');
