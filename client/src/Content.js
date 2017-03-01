import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MainCards from './MainCards';
import LeftCards from './LeftCards';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.setState({
      cards: this.fetchCards()
    });
  }

  fetchCards() {
    return [{
      title: 'Titulo1',
      image: 'img',
      description: 'Description1',
      type: 'info',
      time: new Date(),
    },
    {
      title: 'Titulo2',
      image: 'img',
      description: 'Description2',
      type: 'info',
      time: new Date(),
    },
    {
      title: 'Titulo3',
      image: 'img',
      description: 'Description3',
      type: 'info',
      time: new Date(),
    }];
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <Row>
          <Col span={16}>
            <MainCards />
          </Col>
          <Col span={8}>
            <LeftCards />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content;
