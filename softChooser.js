const softOne = require ('./soft.js')
const softTwo = require ('./bonus.js')
const game = require ('./game.js')
const globalLol = game && softOne && softTwo

class Choose extends globalLol{
    constructor(chooser, db, commander, inquirer, sleep)
    {
        super(chooser, db, commander, inquirer, sleep)
    }

    main()
    {
       
        const mOrL = 'More or Less\n'
        const soft2 = 'Bonus : Soft 2\n'
        const q = 'Exit' + process.exit(0)

        commander
        .version('1.0.0')
        .option('-h, --help', '')
        .option('-s, --save', save())
       
        inquirer.prompt([
            {
                type: 'checkbox',
                message: 'What you want to do ?',
                name: 'softChoice',
                choices: [
                mOrL,
                soft2,
                save,
                q
            ]}
        ]).then((answers) => {
            console.log(answers)
            if (answers == softOne.game())
            {
                console.log('You will play More or Less game.')
                sleep.sleep(5)
            }

            else if (answers == soft2)
            {
                console.log('you choose the bonus !')
                sleep.sleep(5)
            }
            else
            {
                console.log('Good bye')
                sleep.sleep(5)
            }
        })
    }

    save()
    {
        inquirer.prompt([
            {
                type: 'checkbox',
                message: 'What you want to do ?',
                name: 'Save to db',
                choices: [
                s1 = softOne.save(),
                s2 = softTwo.save(),
                q
            ]}
        ]).then((answers) => {
            if (answers == s1)
            {
                if ("tmp/save_mol")
                {
                    this.db.run("INSERT INTO MoreLess")
                    console.log('Check your db.')
                }
                else
                {
                    console.log('The save dosn\'t exist. please restart a game, play it and press -s')
                }
            }
            else (answers == s2)
            {
                if ("tmp/save_b")
                {
                    this.db.run("INSERT INTO Bonus")
                    console.log('Check your db.')
                }
                else
                {
                    console.log('The save dosn\'t exist. please restart a game, play it and press -s')
                }
            }
        })
    }
}

module.exports = Choose