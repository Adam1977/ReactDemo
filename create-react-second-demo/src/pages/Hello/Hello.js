import React from 'react'
import { Button } from 'antd';
import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'this is Hello Compontent'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <div>
          <Button type="primary">Button</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
        </div>
        <div>
          <DatePicker onChange={onChange} />
          <br />
          <MonthPicker onChange={onChange} placeholder="Select month" />
          <br />
          <RangePicker onChange={onChange} />
          <br />
          <WeekPicker onChange={onChange} placeholder="Select week" />
        </div>
      </div>
    )
  }
}

export default Hello