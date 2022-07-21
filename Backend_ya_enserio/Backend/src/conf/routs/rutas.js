const routes = require('express').Router();
const { Router, query } = require('express');
const conexion = require('../conexionbd');

 //nos permitira crear rutas
routes.get('/',(req,res)=>{
    res.send('Ruta principal');
}); 
//se define la ruta que necesitemos

//----Metodo Get----Transportes----

routes.get('/db',(req,res)=>{
    let sql = 'select * from table_transporte'
    //'Select user.nombre, rol.descripcion from userrol inner join rol, user where userrol.idrol = rol.idrol and userrol.iduser = user.iduser;'
    conexion.query(sql, (err,rows, fields)=>{
        if (err) throw err;
        else
        {
          res.json(rows)
        }
    })
});

//----Metodo Get ---- Un elemento-----------

routes.get('/db/:id',(req,res)=>{
    const {id} = req.params
    let sql = 'select * from table_transporte where id_transporte = ?'
    //'Select user.nombre, rol.descripcion from userrol inner join rol, user where userrol.idrol = rol.idrol and userrol.iduser = user.iduser;'
    conexion.query(sql,[id],(err,rows, fields)=>{
        if (err) throw err;
        else
        {
          res.json(rows)
        }
    })
});

//----Metodo Post------ Agregar -----

routes.post('/db',(req,res)=>{
    const{transporte, placas} = req.body
    let sql = `insert into table_transporte (transporte, placas) values ('${transporte}','${placas}')`
    conexion.query(sql,(err,rows, fields)=>{
        if (err) throw err;
        else
        {
          res.json({status: "Agregado"})
        }
    })
});

//---------ELiminar--------------

routes.delete('/db/:id',(req,res)=>{
    const {id}=req.params
    let sql = `delete from table_transporte where id_transporte = ('${id}')`;
    //'Select user.nombre, rol.descripcion from userrol inner join rol, user where userrol.idrol = rol.idrol and userrol.iduser = user.iduser;'
    conexion.query(sql,(err,rows)=>{
        if (err) throw err;
        else
        {
          res.json({status: "Eliminado"})
        }
    })
});

//-------------EDITAR O MODIFICAR---------------

routes.put('/db/:id',(req,res)=>{
    const {id}=req.params
    const{transporte, placas} = req.body
    let sql = `update table_transporte set 
               transporte = '${transporte}', 
               placas = '${placas}' 
               where id_transporte = '${id}'`
    //'Select user.nombre, rol.descripcion from userrol inner join rol, user where userrol.idrol = rol.idrol and userrol.iduser = user.iduser;'
    conexion.query(sql,(err,rows, fields)=>{
        if (err) throw err;
        else
        {
          res.json({status: "Modificado"})
        }
    })
});

module.exports=routes;
