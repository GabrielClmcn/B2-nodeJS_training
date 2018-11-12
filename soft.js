const constr = require ('./game')

class moreOrLess extends constr
{
    constructor(chooser, db, commander, inquirer, sleep)
    {
        super(chooser, db, commander, inquirer, sleep)
    }

    game()
    {
        console.log('Welcome to the game of more or less, if you need help type -h.')
        console.log('Choose a number between 1 and 100 : ')
        const nbToFind = 1
        var count = 0

        commander
            .version('1.0.0')
            .option('-h, --help', 'You only just need to find a number between 1 and 100. Just type a number and enter.')

        count ++
        if (nb > nbToFind)
        {
            console.log('Too big, enter a smaller number : ')
        }
        else if (nb < nbToFind)
        {
            console.log('Too small, to enter a larger number : ')
        }
        else
        {
            if (count == 1)
            {
                console.log('Congratulations you have find in ' + count + ' shot')
            }
            else
            {
                console.log('Congratulations you have find in ' + count + ' shots')
            }
        }
    }
}

module.exports = softOne