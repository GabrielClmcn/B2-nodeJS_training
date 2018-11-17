const chooser = require ('./softChooser')
const db = require ('./db')
const commander = require ('commander')
const inquirer = require ('inquirer')
// const sleep = require ('sleep')
const fs = require ('fs')
const async = require ('async')

class game
{
    constructor()
    {
        this.chooser = chooser
        this.db = db
        this.commander = commander
        this.inquirer = inquirer
        // this.sleep = sleep
        this.fs = fs
        this.async = async
    }
}

module.exports = game
