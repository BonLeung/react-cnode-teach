const axios = require('axios')

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/index.html').then(res => {
      resolve(res.data)
    }).catch(reject)
  })
}

module.exports = function(app) {

  app.get('*', function(req, res) {

  })
}
