const chooser = require ('./softChooser')
const db = require ('./db')
const commander = require ('commander')
const inquirer = require ('inquirer')
const sleep = require ('sleep')

class game
{
    constructor(chooser, db, commander, inquirer, sleep)
    {
        this.chooser = chooser
        this.db = db
        this.commander = commander
        this.inquirer = inquirer
        this.sleep = sleep
    }    
}

module.exports = game