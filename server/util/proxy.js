const axios = require('axios')

const baseUrl = 'http://cnodejs.org/api/v1'

module.exports = function(req, res, next) {
  const path = req.path
  const user = req.session.user || {}
  const needAccessToken = req.query.needAccessToken

  if (needAccessToken && user.accessToken) {
    res.status(401).send({
      success: false,
      msg: 'need login'
    })
  }

  const query = Object.assign({}, req.query)
  if (query.needAccessToken) {
    delete query.needAccessToken
  }

  axios(`${baseUrl}${path}`, {
    method: req.method,
    params: query,
    data: Object.assign({}, req.body, { accesstoken: user.accessToken }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencode'
    }
  }).then(result => {
    if (result.code === 200) {
      res.send(result.data)
    } else {
      res.status(result.status).send(result.data)
    }
  }).catch(err => {
    if (err.response) {
      res.status(500).send(err.response.data)
    } else {
      res.statis(500).send({
        success: false,
        message: '未知错误'
      })
    }
  })
}
