const chooser = require ('./softChooser')
const sqlite = require ('sqlite')
const commander = require ('commander')
const inquirer = require ('inquirer')
const sleep = require ('sleep')
const fs = require ('fs')
const async = require ('async')

class game
{
    constructor()
    {
        this.chooser = chooser
        this.sqlite = sqlite
        this.commander = commander
        this.inquirer = inquirer
        this.sleep = sleep
        this.fs = fs
        this.async = async
    }
}

module.exports = game
