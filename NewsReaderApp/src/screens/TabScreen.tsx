import React, {Component} from 'react';
import {
  Container,
  Header,
  Right,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  Left,
  Body,
  Title,
} from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#009387'}} hasTabs>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'black'}}>
          <Tab 
            heading={
              <TabHeading style={{backgroundColor:'#009387'}}>
                <Text>Ogólne</Text>
              </TabHeading>
            }>
            <Tab1 />
          </Tab>
          <Tab 
            heading={
              <TabHeading style={{backgroundColor:'#009387'}}
              activeTabStyle={{backgroundColor:'#000'}}
              activeTextStyle={{color:'black'}}>
                <Text >Business</Text>
              </TabHeading>
            }>
            <Tab2 />
          </Tab>
          <Tab 
            heading={
              <TabHeading style={{backgroundColor:'#009387'}}>
                <Text >Technologia</Text>
              </TabHeading>
            }>
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
