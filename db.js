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
            db.run("CREATE TABLE userAnswer (id INT, aw TEXT)");

            var stmt = db.prepare("INSERT INTO userAnswer VALUES (?,?)");
            for (var i = 0; i < 10; i++)
            {
                var colTwo = "a"
                stmt.run(i, colTwo);
            }

            stmt.finalize();

            db.each("SELECT id, aw FROM userAnswer", function(err, row)
            {
                console.log("User id : "+row.id, row.dt);
            });
        });

        db.close();
    }
}

module.exports = Sqlite