import * as React from 'react';
import { Container, Header, Title, Button, Icon, Left, Right, Body } from "native-base";


class Home extends React.Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none'
  };
  render () {
    return (
      <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="menu" />
              </Button>
            </Right>
          </Header>
        </Container>
    )
  }
}

export default Home;