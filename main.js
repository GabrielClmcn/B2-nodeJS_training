#!/usr/bin/env node
const Sqlite = require ('./db.js')
const softChooser = require ('./softChooser.js')
const softOne = require ('./soft.js')
// const softTwo = require ('./bonus.js')

const db = new Sqlite()
const choose = new softChooser()
// const firstSoft = new softOne()
// const secondSoft = new softTwo()

//db.db()
choose.main()