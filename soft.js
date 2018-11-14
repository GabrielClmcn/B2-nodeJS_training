const game = require ('./game.js')

class moreOrLess extends game
{
    constructor(chooser, db, commander, inquirer, sleep, rdint, fs)
    {
        super(chooser, db, commander, inquirer, sleep, rdint, fs)
    }

    game()
    {
        console.log('Welcome to the game of more or less, if you need help type -h.')
        console.log('Choose a number between 1 and 100 : ')
        const nbToFind = Math.round(Math.random * (1 - 100) + 1)
        var count = 0
        var nb = 0

        // commander
        //     .version('1.0.0')
        //     .option('-h, --help', 'You only just need to find a number between 1 and 100. Just type a number and enter.\n -s, --save create a file log, do it at the end of the game.')
        //     .option('-s, --save', save())

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
            console.log('OK, you are a good player')
            if (nb == nbToFind)
            {
                save()
                {
                    fs.writeFile ("/tmp/save_mol", "This is the local save for the more or less game.\n number to find : " + nbToFind + "\n count : " + count, function(err) {
                        if (err)
                        {
                            console.log('An error was occured. The file can\'t be save. please verify the disk space or the rules.')
                        } 
                        else 
                        {
                            console.log('The file is save, you can now send it to the db.')
                        }
                    })
                }
            }
            else
            {
                console.log('Their is no file for more or less game.')
            }

            if (count == 1)
            {
                console.log('Congratulations you have find in ' + count + ' shot.')
            }
            else
            {
                console.log('Congratulations you have find in ' + count + ' shots.')
            }
        }
    }
}

module.exports = moreOrLess