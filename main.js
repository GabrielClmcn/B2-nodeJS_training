#!/usr/bin/env node
const Sqlite = require ('./db.js')
const softChooser = require ('./chooseSoft.js')
const softOne = require ('./soft.js')
const softTwo = require ('./bonus.js')

const db = New Sqlite()
const choose = New softChooser()
const firstSoft = New softOne()
const secondSoft = New softTwo()


choose.main()