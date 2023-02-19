const swaggerAutogen = require('swagger-autogen')();
const port = process.env.PORT;
const doc = {
	info: {
		title: 'E-Commerce Documentation',
		description: 'Description',
	},
	host: 'localhost:5000',
	schemes: ['http'],
};
const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
// 	require('./app.js'); // Your project's root file
// }); 
swaggerAutogen(outputFile, endpointsFiles, doc);