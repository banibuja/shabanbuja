// AllControllers.js
const SendController = require('./sendEmail');


const defineRoutes = (app) => {
   

    app.post('/sendEmailContactUs', SendController.sendEmailContactUs);




};

module.exports = defineRoutes;
