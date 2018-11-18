const game = require('./game.js')
const fs = require('fs')
const commander = require('commander')

class moreOrLess extends game
{
    constructor(chooser, commander, inquirer, fs, async)
    {
        super(chooser, commander, inquirer, fs, async)
    }

    game()
    {
        const nbToFind = Math.round(Math.random() * (1 + 100) - 1)
        var count = 0
        let i = 0
        let nom = "nom"+i

        console.log('Welcome to the game of more or less, if you need help type -h.')
        console.log('Choose a number between 1 and 100 : ')

        this.commander
            .version('1.0.0')
            .option('-r, --rules', 'You only just need to find a number between 1 and 100. Just type a number and enter.\n -s, --save create a file log, do it at the end of the game.')
            .parse(process.argv)

        if (this.commander.r)
        {
            console.log('You only just need to find a number between 1 and 100. Just type a number and enter.\n-s, --save create a file log, do it at the end of the game.')
        }

        else
        {
            const funct = (name) =>
            {
                const a =
                [{
                 type:'input',
                 message:'Enter a number',
                 name: name
                }]
                return this.inquirer.prompt(a)
            }

            const quizz = async () =>
            {
                let answers = await funct(nom)

                count++

                if (answers[nom] > nbToFind)
                {
                    console.log('Too big, enter a smaller number than : ' + answers[nom])    
                    quizz()
                }
            
                else if (answers[nom] < nbToFind)
                {
                    console.log('Too small, enter a larger number than : ' + answers[nom])
                    quizz()
                }
            
                else if (answers[nom] == nbToFind)
                {
                    if (count == 1)
                    {
                        console.log('Congratulations you find it in ' + count + ' shot. A new file is created.')
                    }
                
                    else
                    {
                        console.log('Congratulations you find it in ' + count + ' shots. A new file is created.')
                    }

                    function save()
                    {
                        let path = "save_mol.txt"
                        let message = "This is the local save for the more or less game.\nnumber to find : " + nbToFind + "\ncount : " + count
                        let eMessage = "An error was occured (how did you get this message ???)." 
            
                        fs.writeFile(path, message), (err) =>
                        {
                            if (err)
                            {
                                console.log(eMessage)
                            }
                            else
                            {
                                console.log('The file is save, you can now send it to the db.')
                            }
                        }
                    }
                    save()
                }
            }
	        quizz()
        }
    }
}

module.exports = moreOrLess
