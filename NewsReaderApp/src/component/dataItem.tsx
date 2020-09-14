import React, {Component, useState} from 'react';
import { View, Alert } from 'react-native';
import Time from '../component/time';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
export interface dataItemProps {
  propsData: {
     url: URL,
     title: string, 
     content: string,
     urlToImage: string,
     description: string,
     source: {
         name:string
     }
     publishedAt: any
  };
  onPress: ({}) => void;
}

const DataItem: React.SFC<dataItemProps> = ({propsData, onPress}) => {
  const [data, setData] = useState(propsData);

  const handlePress = () => {
    const { url, title, content} = propsData;
    onPress({url,title,content});
  }

  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          square
          source={{
            uri:
              data.urlToImage != null
                ? data.urlToImage
                : 'https://paranoidandroid.co/assets/wallpapers/2018/submerged_4k_desktop.jpg',
          }}
        />
      </Left>
      <Body>
        <Text numberOfLines={2}>{data.title}</Text>
        <Text note numberOfLines={2}>
          {data.description}
        </Text>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 9}}>
        <Text note >{data.source.name}</Text>
        <Time publishedAt={data.publishedAt}/>
        </View>
      </Body>
      <Right>
        <Button transparent onPress={handlePress}>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default DataItem;
