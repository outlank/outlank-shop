import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile'

import Home from './pages/home'

class Routes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'blueTab',
      hidden: false
    }
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <TabBar hidden={this.state.hidden}>
          <TabBar.Item
            title='首页'
            key='Home'
            icon={<i className='iconfont icon-home' />}
            selectedIcon={<i className='iconfont icon-homefill' />}
            selected={this.state.selectedTab === 'home'}
            onPress={() => { this.setState({ selectedTab: 'home' }) }}
          />
          <TabBar.Item
            title='分类'
            key='Class'
            icon={<i className='iconfont icon-home' />}
            selectedIcon={<i className='iconfont icon-homefill' />}
            selected={this.state.selectedTab === 'class'}
            onPress={() => { this.setState({ selectedTab: 'class' }) }}
          />
          <TabBar.Item
            title='购物车'
            key='Cart'
            icon={<i className='iconfont icon-home' />}
            selectedIcon={<i className='iconfont icon-homefill' />}
            selected={this.state.selectedTab === 'cart'}
            onPress={() => { this.setState({ selectedTab: 'cart' }) }}
          />
          <TabBar.Item
            title='订单'
            key='Order'
            icon={<i className='iconfont icon-home' />}
            selectedIcon={<i className='iconfont icon-homefill' />}
            selected={this.state.selectedTab === 'order'}
            onPress={() => { this.setState({ selectedTab: 'order' }) }}
          />
          <TabBar.Item
            title='我的'
            key='User'
            icon={<i className='iconfont icon-home' />}
            selectedIcon={<i className='iconfont icon-homefill' />}
            selected={this.state.selectedTab === 'user'}
            onPress={() => { this.setState({ selectedTab: 'user' }) }}
          />
        </TabBar>
      </div>
    )
  }
}

export default Routes
