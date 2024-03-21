const express = require("express");
const { create, get, deletes, update } = require("../controller/crud.controller");

const crudRouter = express.Router()

crudRouter.post('/create', create);
crudRouter.get('/get', get);
crudRouter.delete('/delete/:id', deletes);
crudRouter.put('/update/:id', update);

module.exports = crudRouter;
