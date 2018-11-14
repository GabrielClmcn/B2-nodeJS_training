const chooser = require ('./softChooser')
const db = require ('./db')
const commander = require ('commander')
const inquirer = require ('inquirer')
const sleep = require ('sleep')
const rdint = require ('randomint')
const fs = require ('fs')

class game
{
    constructor()
    {
        this.chooser = chooser
        this.db = db
        this.commander = commander
        this.inquirer = inquirer
        this.sleep = sleep
        this.rdint = rdint
        this.fs = fs
    }    
}

module.exports = game