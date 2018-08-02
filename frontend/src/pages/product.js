import React from 'react'
import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile'
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
        <Button onClick={this.showModal('modal2')}>popup</Button>
        <WhiteSpace />
        <Modal
          popup
          visible={this.state.modal2}
          onClose={this.onClose('modal2')}
          animationType="slide-up"
        >
          <List renderHeader={() => <div>委托买入</div>} className="popup-list">
            {['股票名称', '股票代码', '买入价格'].map((i, index) => (
              <List.Item key={index}>{i}</List.Item>
            ))}
            <List.Item>
              <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
            </List.Item>
          </List>
        </Modal>
      </div>
    )
  }
}

export default page
