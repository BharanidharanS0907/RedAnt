var subRoute = require('./subRoute')
var homeRoute = require('./homeRoute')

module.exports.getRoutes = function(app) {
    app.use('/sub', subRoute)  
    app.use('/', homeRoute)
}