import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { getArticles } from '../../service/news';
import { StyleSheet, Alert, View, ActivityIndicator} from 'react-native';
import DataItem from '../../component/dataItem';
import Modal from '../../component/modal';
import ModalComponent from '../../component/modal';

export default class Tab1 extends Component {
    
    constructor(props){
        super(props);

        this.state ={
            isLoading: true,
            data: null ,
            setModalVisible : false,
            modalArticleData: {}
        }
    }

    handleItemDataOnPress = (articleData) => {
        this.setState({
            setModalVisible: true,
            modalArticleData: articleData
        })
    }

    handleModalClose = () => {
        this.setState({
            setModalVisible: false,
            modalArticleData: {}
        });
    }

    componentDidMount( ) {
        getArticles('general').then(data => {
            this.setState({
                isLoading: false,
                data: data
            });
        }, error => {
            Alert.alert('Error', 'Something went wrong!');
        }
        )
    }
  
    render() {
        let view = this.state.isLoading ? (
            <View style={styles.loading}>
                 <ActivityIndicator
                 animating = {true}
                 color = '#bc2b78'
                 size = "large"/>
                <Text>Please Wait...</Text>
            </View>
        ) : (
            <List
            key={Math.random()}
            dataArray={this.state.data}
            renderRow={(item) => {
                return <DataItem onPress={this.handleItemDataOnPress} propsData={item}/>
            }} />  
        )
    return (
      <Container>
        <Content>
            {view}
        </Content>
        <ModalComponent 
            showModal={this.state.setModalVisible}
            articleData={this.state.modalArticleData}
            onClose={this.handleModalClose}/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    loading: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF88'
      }
    })