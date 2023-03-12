const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'qy483k',

	e2e: {

		baseUrl: 'https://alura-fotos.herokuapp.com',

		setupNodeEvents(on, config) {
			return require('./cypress/plugins/index.js')(on, config)
		},
	},

	reporter: "mochawesome",
	reporterOptions: {
		reportDir: "cypress/report/mochawesome-report",
		overwrite: false,
		html: false,
		json: false,
		timestamp: "yyyymmdd_HHMMss"
	}
	
})
