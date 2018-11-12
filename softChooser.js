const softOne = require ('./soft.js')
const softTwo = require ('./bonus.js')
const game = require ('./game.js')

class Choose extends softOne, softTwo, game
{
    constructor()
    {

    }

    main()
    {
        const mOrL = 'More or Less' + softOne.game()
        const soft2 = 'Bonus : Soft 2' + softTwo.bonus()
        const q = 'Exit' + process.exit(0)
        const inquirer = require('inquirer')

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
                q
            ]}
        ]).then((answers) => {
            if (answers == mOrl)
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
        // TODO
    }
}

module.exports = softChooser