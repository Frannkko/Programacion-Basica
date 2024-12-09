//crear o usar la base de datos base1
use base1;
// crear la coleccion libros
db.libros.insertOne(
    {
        _id: 1,
        nombre: 'El aleph', 
        autor: 'Borges', 
        editoriales: ['Planeta','Siglo XXI'], 
        precio: 20, 
        cantidad: 50
    }
);
db.libros.insertOne(
    {
        _id: 2,
        nombre: 'Martin Fierro', 
        autor: 'Jose Hernandez', 
        editoriales: ['Planeta'], 
        precio: 50,
        cantidad: 12
    }
);
db.libros.find();

db

db.libros.insertMany(
    [
        {
            _id: 3,    
            titulo: 'Aprenda PHP',    
            autor: 'Mario Molina',    
            editorial: ['Siglo XXI','Planeta'],
            precio: 50,    
            cantidad: 20
        },
        {
           _id: 4,      
            titulo: 'Java en 10 minutos',    
            editorial: ['Siglo XXI'],    
            precio: 45,    
            cantidad: 1 
        }
    ]
);
db.libros.find();

db.libros.find({_id: 1});

db.libros.find({precio: 50});

db.libros.find({precio: 45, cantidad: 1});

db.libros.updateOne({ _id: { $eq: 2 } }, { $set: { precio: 15, cantidad: 1 } });
db.libros.find();

db.libros.find({ precio: { $gt: 40 } });

db.libros.find({ precio: { $gte: 20, $lte: 45 } });

db.libros.deleteOne({ _id: 3 });

db.libros.find();
