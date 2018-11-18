const softOne = require('./soft.js')
const game = require('./game.js')

class Choose extends game
{
    constructor(chooser, sqlite, commander, inquirer)
    {
        super(chooser, sqlite, commander, inquirer)
    }

    main()
    {
        const firstSoft = new softOne()

        this.commander
            .version('1.0.0')
            .option('-s, --save', 'Save the more or less game')
            .parse(process.argv)

            if (this.commander.save)
            {
                // console.log('a')
                function db()
                {
                    this.sqlite.open('TP_nodeJS').then((base) =>
                    {
                        base.run("CREATE TABLE MoreLess (id INT, nbF INT, count INT")
                        base.run('INSERT into Moreless WHERE id VALUES (5)')
                        base.run("SELECT id FROM Moreless").then((rows) =>
                        {
                            rows.forEach((row) =>
                            {
                                console.log('row')
                            })
                        })
                    })

                    .catch((err) =>
                    {
                        console.log(err)
                    })
                    this.sqlite.close();
                }
                db()
            }


        this.inquirer.prompt([
            {
                type: 'list',
                message: 'What you want to do ? -h for help',
                name: 'softChoice',
                choices: [
                    'More or Less',
                    'Exit the soft'
                ]
            }
        ]).then((answers) => {
            if (answers.softChoice === 'More or Less') {
                console.log('\nYou will play More or Less game.')
                this.sleep.sleep(3)
                firstSoft.game()
            }
            else if (answers.softChoice === 'Exit the soft')
            {
                console.log('Good bye')
                this.sleep.sleep(2)
                process.exit(0)
            }
        })
    }
}

module.exports = Choose
