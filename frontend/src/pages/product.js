import React from 'react'
import { Drawer, List, NavBar, Icon } from 'antd-mobile'
import './product.css'

class page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render () {
    const onOpenChange = (...args) => {
      // console.log(args)
      this.setState({ open: !this.state.open })
    }
    const sidebar = (<List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
        if (index === 0) {
          return (<List.Item
            key={index}
            thumb='https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'
            multipleLine
          >Category</List.Item>)
        }
        return (<List.Item
          key={index}
          thumb='https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'
        >Category{index}</List.Item>)
      })}
    </List>)

    return (
      <div className='product-page'>
        <NavBar icon={<Icon type='ellipsis' />} onLeftClick={onOpenChange}>Basic</NavBar>
        <Drawer
          className='product-drawer'
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          position='bottom'
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
          Click upper-left corner
        </Drawer>
      </div>
    )
  }
}

export default page
