const game = require('./game.js')

class moreOrLess extends game {
    constructor(chooser, db, commander, inquirer, fs, async) {
        super(chooser, db, commander, inquirer, fs, async)
    }

    game() {
        console.log('Welcome to the game of more or less, if you need help type -h.')
        console.log('Choose a number between 1 and 100 : ')
        const nbToFind = Math.round(Math.random * (1 - 100) + 1)
        var count = 0
        var nb = 0
        let i = 0
        let nom = "nom"+i

        this.commander
            .version('1.0.0')
            .option('-c, --caca', 'You only just need to find a number between 1 and 100. Just type a number and enter.\n -s, --save create a file log, do it at the end of the game.')
            .parse(process.argv)

        if (this.commander.caca) {
            console.log('You only just need to find a number between 1 and 100. Just type a number and enter.\n-s, --save create a file log, do it at the end of the game.')
        }
        else {
            count++

            const funct = (name) => {
                const a =
                [{
                 type:'input',
                 message:'Enter a number',
                 name: name
                }]
                return this.inquirer.prompt(a)
            }

          const quizz = async () => {
            // const answers = await funct()
            let answers = await funct(nom)

              while (answers[nom] != nbToFind){
            if (answers[nom] > nbToFind) {
                console.log('Too big, enter a smaller number than : '+answers[nom])
                i++
                  let answers = await funct(nom)

            }else if (answers[nom] < nbToFind) {
              i++
                console.log('Too small, enter a larger number than : '+answers[nom])
                  let answers = await funct(nom)
            }else if (answers[nom] == nbToFind) {
                    if (count == 1) {
                        console.log('Congratulations you have find in ' + count + ' shot.')
                    }else {
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
          console.log("ASSSS");
        }
        quizz()
      }

    }
}

module.exports = moreOrLess
