const game = require('./game.js')

class moreOrLess extends game {
    constructor(chooser, db, commander, inquirer, sleep, fs, async) {
        super(chooser, db, commander, inquirer, sleep, fs, async)
    }

    game() {
        console.log('Welcome to the game of more or less, if you need help type -h.')
        console.log('Choose a number between 1 and 100 : ')
        const nbToFind = Math.round(Math.random * (1 - 100) + 1)
        var count = 0
        var nb = 0

        this.commander
            .version('1.0.0')
            .option('-h, --help', 'You only just need to find a number between 1 and 100. Just type a number and enter.\n -s, --save create a file log, do it at the end of the game.')
            .parse(process.argv)

        if (this.commander.help) {
            console.log('You only just need to find a number between 1 and 100. Just type a number and enter.\n-s, --save create a file log, do it at the end of the game.')
        }
        else {
            count++

            const funct = () => {
                const a = 
                [{
                 type:'input',
                 msg:'Enter a number',
                 name: 'test1'
                }]
                this.inquirer.prompt(a)
            }

            async

            if (nb > nbToFind) {
                console.log('Too big, enter a smaller number : ')
            }

            else if (nb < nbToFind) {
                console.log('Too small, to enter a larger number : ')
            }

            else {
                if (nb == nbToFind) {
                    if (count == 1) {
                        console.log('Congratulations you have find in ' + count + ' shot.')
                    }
                    else {
                        console.log('Congratulations you have find in ' + count + ' shots.')
                    }

                    // if (this.commander.save) {
                    //     save()
                    //     {
                    //         fs.writeFile("/tmp/save_mol", "This is the local save for the more or less game.\n number to find : " + nbToFind + "\n count : " + count, function (err) {
                    //             if (err) {
                    //                 console.log('An error was occured. The file can\'t be save. please verify the disk space or the rules.')
                    //             }
                    //             else {
                    //                 console.log('The file is save, you can now send it to the db.')
                    //                 sleep.sleep(5)
                    //                 chooser.main()
                    //             }
                    //         })
                    //     }
                    // }
                }
                // else {
                //     console.log('Their is no file for more or less game.')
                // }
            }
        }
    }
}

module.exports = moreOrLess