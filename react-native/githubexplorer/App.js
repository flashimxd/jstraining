import React, { Component } from 'react';

import { Container, Content, Header, Body, Title, Form, Item, 
          Input, Icon, Spinner, Button, Text 
        } from 'native-base';

import RepoList from './repoList';

export default class App extends Component<{}> {
  
  state = {
    search : '',
    loading: false,
    repositories: []
  };

  fetchRepositories = async () => {
    if(this.state.search.length > 0){
      this.setState({loading: true});

      const response = await fetch(`https://api.github.com/search/repositories?q=${this.state.search}`);
      const repositories = await response.json();

      console.log(repositories.items);
      this.setState({
        repositories: repositories.items, loading: false
      });

    }
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>GitHub Explore</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item last>
              <Icon active name='search' />
              <Input placeholder="Buscar palavra chave"
                value={this.state.search}
                onChangeText={text => this.setState({search: text})}/>
            </Item>
          </Form>
          <Button block style={{marginTop: 10}} onPress={this.fetchRepositories}>
              <Text>Buscar</Text>
          </Button>
          { this.state.loading ? <Spinner color="#999"/> : <RepoList repositories={this.state.repositories} />}
        </Content>
      </Container>
    );
  }
}
