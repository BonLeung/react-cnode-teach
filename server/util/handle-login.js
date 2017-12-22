const router = require('express').Router()
const axios = require('axios')

const baseUrl = 'http://cnodejs.org/api/v1'

router.post('/login', function(req, res, next) {
  axios.post(`${baseUrl}/accesstoken`, {
    accesstoken: req.body.accessToken
  }).then(result => {
    if (result.code === 200 && result.data.success) {
      req.session.user = {
        accessToken: req.body.accessToken,
        loginName: result.data.loginname,
        id: result.data.id,
        avatarUrl: result.data.avatar_url
      }
      res.json({
        success: true,
        data: result.data
      })
    }
  }).catch(err => {
    if (err.response) {
      res.json({
        success: false,
        data: err.response
      })
    } else {
      next(err)
    }
  })
})

module.exports = router
