import React from 'react'
import { Modal, List, Button, TabBar } from 'antd-mobile'
import './product.css'

class page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render () {
    const showModal = key => (e) => {
      e.preventDefault() // 修复 Android 上点击穿透
      this.setState({
        [key]: true
      })
    }
    const onClose = key => () => {
      this.setState({
        [key]: false
      })
    }

    return (
      <div className='product-page'>
        <TabBar prerenderingSiblingsNumber={0}>
          <TabBar.Item
            title='首页'
            key='Home'
            icon={<i className='iconfont icon-home' />}
            selectedIcon={<i className='iconfont icon-homefill' />}
            onPress={() => { this.setState({ selectedTab: 'home' }) }}
          />
          <TabBar.Item
            title='购物车'
            key='Cart'
            icon={<i className='iconfont icon-home' />}
            selectedIcon={<i className='iconfont icon-homefill' />}
            selected={this.state.selectedTab === 'cart'}
            onPress={() => { this.setState({ selectedTab: 'cart' }) }}
          />
        </TabBar>
        <Button type='primary' onClick={showModal('modal2')}>购买 </Button>
        <Modal popup visible={this.state.modal2} onClose={onClose('modal2')} animationType='slide-up'>
          <List renderHeader={() => <div> 委托买入 </div>} className='popup-list'>
            {['股票名称', '股票代码', '买入价格'].map((i, index) => (<List.Item key={index}>{i}</List.Item>))}
            <List.Item>
              <Button type='primary' onClick={onClose('modal2')}>买入 </Button>
            </List.Item>
          </List>
        </Modal>
      </div>
    )
  }
}

export default page
