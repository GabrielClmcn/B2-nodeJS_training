const softOne = require('./soft.js')
const game = require('./game.js')

class Choose extends game
{
    constructor(chooser, db, commander, inquirer)
    {
        super(chooser, db, commander, inquirer)
    }

    main()
    {
        const firstSoft = new softOne()

        this.commander
            .version('1.0.0')
            .option('-a, --aaaa', 'choose a game')
            .parse(process.argv)

        this.inquirer.prompt([
            {
                type: 'list',
                message: 'What you want to do ? -h for help',
                name: 'softChoice',
                choices: [
                    'More or Less',
                    'Save',
                    'Exit the soft'
                ]
            }
        ]).then((answers) => {
            if (answers.softChoice === 'More or Less') {
                console.log('\nYou will play More or Less game.')
                // this.sleep.sleep(3)
                firstSoft.game()
            }
            else if (answers.softChoice === 'Save') {
                console.log('Launching the save process')
                // this.sleep.sleep(3)
                this.save()
            }
            else if (answers.softChoice === 'Exit the soft')
            {
                console.log('Good bye')
                // this.sleep.sleep(2)
                process.exit(0)
            }
        })
    }

    save()
    {
        this.inquirer.prompt([
        {
            type: 'list',
            message: 'Save to the db ?',
            name: 'save_to_db',
            choices: [
                'Save More or Less',
                'Exit the soft'
                ]
        }

        ]).then((answers) =>
        {
            if (answers.save_to_db === 'Save More or Less')
            {
                if ("tmp/save_mol") {
                    this.db.run("INSERT INTO MoreLess")
                    this.db.run('SELECT * FROM MoreLess')
                }

                else
                {
                    console.log('The save dosn\'t exist, please start or restart a game.')
                }
            }

            else if (answers.save_to_db === 'Exit the soft')
            {
                console.log('Good bye')
                // this.sleep.sleep(5)
                process.exit(0)
            }
        })
    }
}

module.exports = Choose
