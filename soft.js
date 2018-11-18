const game = require('./game.js')

class moreOrLess extends game
{
    constructor(chooser, db, commander, inquirer, fs, async)
    {
        super(chooser, db, commander, inquirer, fs, async)
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
            .option('-h, --help', 'You only just need to find a number between 1 and 100. Just type a number and enter.\n -s, --save create a file log, do it at the end of the game.')
            .option('-s, --save', 'Saving')
            .parse(process.argv)

        if (this.commander.toto)
        {
            console.log('You only just need to find a number between 1 and 100. Just type a number and enter.\n-s, --save create a file log, do it at the end of the game.')
        }

        else
        {
            console.log(nbToFind)

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
                        console.log('Congratulations you find it in ' + count + ' shot.')
                    }
                
                    else
                    {
                        console.log('Congratulations you find it in ' + count + ' shots.')
                    }
                }
            }
            
            save()
            {
                let path = "save_mol.txt"
                let message = "This is the local save for the more or less game.\n number to find : " + nbToFind + "\n count : " + count
                let eMessage = "An error was occured. The file can\'t be save. please verify the disk space or the rules." 

                this.fs.writeFile(path, message), (err) =>
                {
                    if (err){
                        console.log(eMessage)
                    }
                    else
                    {
                        console.log('The file is save, you can now send it to the db.')
                        // sleep.sleep(5)
                    }
                }

            }
	        quizz()
        }
    }
}

module.exports = moreOrLess
