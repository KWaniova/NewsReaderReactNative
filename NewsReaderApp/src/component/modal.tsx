import * as React from 'react';
import {Dimensions, Modal, Share, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import AutoHeightWebView from 'react-native-autoheight-webview'


import {
  Container,
  Header,
  Title,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
} from 'native-base';
export interface ModalComponentProps {
  showModal: boolean;
  articleData: {
    url: URL;
    title: string;
    content: string,
  };
  onClose: () => void;
}

const webViewHeight = Dimensions.get('window').height - 56;
const ModalComponent: React.SFC<ModalComponentProps> = ({
  showModal,
  articleData,
  onClose,
}) => {
  const {url} = articleData;

  const handleShare = () => {
      const {url, title} = articleData;
      const message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
      return Share.share(
          {title, message, url: message},
          {dialogTitle: `Share ${title}`}
      )
  };
  if (url != undefined) {
    return (
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={onClose}>
        <Container
          style={{margin: 15, marginBottom: 0, backgroundColor: '#fff'}}>
          <Header style={{backgroundColor: '#009387'}}>
            <Left>
              <Icon
                type={'MaterialIcons'}
                onPress={onClose}
                name="close"
                style={{color: 'white'}}
              />
            </Left>
            <Body>
              <Title children={articleData.title} style={{color: 'white'}} />
            </Body>
            <Right>
              <Icon
                type={'MaterialIcons'}
                onPress={handleShare}
                name="share"
                style={{color: 'white'}}
              />
            </Right>
          </Header>
          <Content contentContainerStyle={{height: webViewHeight}}>
            {/* <Text>
              {articleData.content}
            </Text> */}
            <AutoHeightWebView
              source={{uri: url}}

              style={{ width: Dimensions.get('window').width - 15, marginTop: 35 }}
              //   style={{flex: 1}}
              onError={onClose}
              startInLoadingState
              scalesPageToFit
             
            //   javaScriptEnabled={true}
            //   domStorageEnabled={true}
            //   startInLoadingState={true}
            //   automaticallyAdjustContentInsets
              
            
            />
          </Content>
        </Container>
      </Modal>
    );
  } else {
    return null;
  }
};

export default ModalComponent;
