class db
{
    constructor()
    {

    }

    db()
    {
        var sqlite3 = require('sqlite3').verbose();
        var db = new sqlite3.Database('TP_nodeJS');

        db.serialize(function()
        {
            db.run("CREATE TABLE MoreLess (id INT,  nbF INT, count INT)");

            // var stmt = db.prepare("INSERT INTO userAnswer VALUES (?,?)");
            // for (var i = 0; i < 10; i++)
            // {
            //     var colTwo = "a"
            //     stmt.run(i, colTwo);
            // }

            // stmt.finalize();

            // db.each("SELECT id, aw FROM userAnswer", function(err, row)
            // {
            //     console.log("User id : "+row.id, row.dt);
            // });

            db.run ("CREATE TABLE Bonus (id INT, fName TEXT, lName TEXT)")
        });
         if (db.run("SELECT id FROM Moreless" && "SELECT * FROM Bonus"))
         {
            console.log("db created.")
         }
         else
         {
            console.log('db not created.')
         }
        db.close();
    }
}

module.exports = db