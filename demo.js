const readXlsxFile = require('read-excel-file/node')

readXlsxFile('./file.xlsx').then((rows) => {
    console.log(rows)
    
  })