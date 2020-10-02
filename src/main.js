import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mysql'
});

connection.connect((err) => {
	if (err) {
    console.log('error connecting:' + err.stack);
	return;
	}
	console.log('success');
});

  app.get('/', (req, res) => {
	connection.query(
	'SELECT * FROM userdata',
	(error, results) => {
	console.log(results);
    res.render('hello.ejs');
    }
	);
  });

  app.listen(3000);

