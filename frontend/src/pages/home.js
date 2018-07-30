import React from 'react'
import { Flex, WhiteSpace, WingBlank, ListView, Card } from 'antd-mobile'
import './home.css'
import { Random } from 'mockjs'

const data = []
for (let i = 0; i < 100; i++) data.push({
  image: Random.image('200x200', '#a9a9a9', '0.0'),
  name: Random.ctitle(),
  describe: Random.csentence,
  price: Random.float(0, 9999, 2, 2),
  sales: Random.natural(0, 9999),
  id: Random.guid()
})
const num_rows = data.length
let pageIndex = 0

function getData (pIndex = 0) {
  const dataBlob = {}
  for (let i = 0; i < num_rows; i++) {
    const ii = (pIndex * num_rows) + i
    dataBlob[`${ii}`] = `row - ${ii}`
  }
  return dataBlob
}

class home extends React.Component {
  constructor (props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
    this.state = {
      dataSource,
      isLoading: true
    }
  }

  componentDidMount () {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = getData()
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false
      })
    }, 600)
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return
    }
    console.log('reach end', event)
    this.setState({ isLoading: true })
    setTimeout(() => {
      this.rData = { ...this.rData, ...getData(++pageIndex) }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      })
    }, 1000)
  }

  render () {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{ height: 8, }}
      />
    )
    let index = data.length - 1
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1
      }
      const obj1 = data[index--]
      const obj2 = data[index--]
      return (
        <Flex>
          <Flex.Item>
            <Card>
              <Card.Body>
                <div className='img'>
                  <img src={Random.image('200x200', '#a9a9a9', 'test')} />
                </div>
                <div className='name'>商品名称</div>
                <div className='describe'>商品描述</div>
              </Card.Body>
              <Card.Footer content='价格： 100' extra={<div>销量：50</div>} />
            </Card>
          </Flex.Item>
          <Flex.Item>
            <Card>
              <Card.Body>
                <div className='img'>
                  <img src={Random.image('200x200', '#a9a9a9', 'test')} />
                </div>
                <div className='name'>商品名称</div>
                <div className='describe'>商品描述</div>
              </Card.Body>
              <Card.Footer content='价格： 100' extra={<div>销量：50</div>} />
            </Card>
          </Flex.Item>
        </Flex>
      )
    }
    return (
      <WingBlank>
        <h1>home page</h1>
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderHeader={() => <span>header</span>}
          renderFooter={() => (
            <div style={{ padding: 30, textAlign: 'center' }}>{this.state.isLoading ? 'Loading...' : 'Loaded'}</div>)}
          renderRow={row}
          renderSeparator={separator}
          className='home-list'
          pageSize={4}
          useBodyScroll
          onScroll={() => { console.log('scroll') }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />

        <WhiteSpace size='lg' />
      </WingBlank>
    )
  }
}

export default home
