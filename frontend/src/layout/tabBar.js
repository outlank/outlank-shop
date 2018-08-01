import React from 'react'
import createHistory from 'history/createBrowserHistory'

import { TabBar } from 'antd-mobile'

const history = createHistory()

const homePages = {
  '/': 'home',
  '/class': 'class',
  '/cart': 'cart',
  '/user': 'user',
  '/order': 'order'
}

class tabBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: homePages[props.match.path],
      hidden: !homePages[props.match.path]
    }
  }

  render () {
    return (
      <TabBar hidden={this.state.hidden}>
        <TabBar.Item
          title='首页'
          key='Home'
          icon={<i className='iconfont icon-home' />}
          selectedIcon={<i className='iconfont icon-homefill' />}
          selected={this.state.selectedTab === 'home'}
          onPress={() => { history.replace('/') }}
        />
        <TabBar.Item
          title='分类'
          key='Class'
          icon={<i className='iconfont icon-home' />}
          selectedIcon={<i className='iconfont icon-homefill' />}
          selected={this.state.selectedTab === 'class'}
          onPress={() => { history.replace('/class') }}
        />
        <TabBar.Item
          title='购物车'
          key='Cart'
          icon={<i className='iconfont icon-home' />}
          selectedIcon={<i className='iconfont icon-homefill' />}
          selected={this.state.selectedTab === 'cart'}
          onPress={() => { history.replace('/cart') }}
        />
        <TabBar.Item
          title='订单'
          key='Order'
          icon={<i className='iconfont icon-home' />}
          selectedIcon={<i className='iconfont icon-homefill' />}
          selected={this.state.selectedTab === 'order'}
          onPress={() => { history.replace('/order') }}
        />
        <TabBar.Item
          title='我的'
          key='User'
          icon={<i className='iconfont icon-home' />}
          selectedIcon={<i className='iconfont icon-homefill' />}
          selected={this.state.selectedTab === 'user'}
          onPress={() => { history.replace('/user') }}
        />
      </TabBar>
    )
  }
}

export default tabBar
