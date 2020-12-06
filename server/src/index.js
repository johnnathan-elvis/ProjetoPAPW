const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

//Rota / Recurso
 


/** Métodos HTTP:
 * 
 * GET: Buscar uma informção no Back-end
 * POST: Criar uma informção no Back-end
 * PUT: Alterar uma informção no Back-end
 * DELETE: Deletar uma informção no Back-end
 */

 /**
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizadps para identificar recursos
  * Request Body: Corpo da requisição, utilização
  * 
  */

  /**
   * SQL: MySQL
   */

   /**
    * Driver: 
    */


app.listen(3333);
  