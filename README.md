### Comandos
- Agregar Productos a la base de datos
  - `node index.js --command add --title "product1" --price "10" --stock "10" `
  - `node index.js --command add --title "product2" --price "20" --stock "10" `
  - `node index.js --command add --title "product3" --price "30" --stock "10" `
  - `node index.js --command add --title "product4" --price "40" --stock "10" `
  - `node index.js --command add --title "product5" --price "50" --stock "10" `

 - Buscar Productos por id en la base de datos 
   - `node index.js --command get --id "número id del documento" `
   - Ej : `node index.js --command get --id "622a761ab2e2378f36e2f6da"`

 - Buscar todos los Productos de la base de datos 
   - `node index.js --command getAll`

 - Actualizar Productos de la base de datos 
   - `node index.js --command update --id "número id del documento" --title "product1uptated" --price "100" --stock "10"`
   - EJ :  `node index.js --command update --id "622a761ab2e2378f36e2f6da" --title "product1uptated" --price "100" --stock "10"`

 - Borrar Productos por id de la base de datos 
   - `node index.js --command delete --id "número id del documento" `
   - EJ : `node index.js --command delete --id "622a76c9905269a173998bc7" `


  