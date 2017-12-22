import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'
import TestApi from '../views/test/api-test'

export default () => [
  <Route key="/" path="/" render={() => <Redirect to="/list" />} exact />,
  <Route key="list" path="/list" component={TopicList} />,
  <Route key="detail" path="/detail" component={TopicDetail} />,
  <Route key="test" path="/test" component={TestApi} />,
]
