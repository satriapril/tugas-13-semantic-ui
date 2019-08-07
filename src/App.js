import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Table, Menu, Grid, Segment, Divider, Header, Icon, Search, Button, Placeholder, List, Label, Container } from "semantic-ui-react";

class App extends Component {
  render(){
    return(
      <div>
        <Container style={{marginTop:"3em"}}>
          <Segment placeholder>
            <Grid columns={2} stackable textAlign="center">
              <Divider vertical>OR</Divider>

              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <Header icon>
                    <Icon name="search"/>
                      Cari Document
                  </Header>
                  <Search placeholder="Search document..."/>
                </Grid.Column>

                <Grid.Column>
                  <Header icon>
                    <Icon name="pdf file outline"/>
                      Tambah Document Baru
                  </Header>
                  <Button primary>Create Document</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Grid columns={3}>
            <Grid.Column>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line/>
                  <Placeholder.Line/>
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line/>
                  <Placeholder.Line/>
                  <Placeholder.Line/>
                </Placeholder.Paragraph>
              </Placeholder>
            </Grid.Column>

            <Grid.Column>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line/>
                  <Placeholder.Line/>
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line/>
                  <Placeholder.Line/>
                  <Placeholder.Line/>
                </Placeholder.Paragraph>
              </Placeholder>
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Content>
                  <h4>Website Terkini</h4>
                </List.Content>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="https://google.com">Google</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="https://facebook.com">Facebook</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="https://semantic-ui.com">Semantic UI</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="https://niomic.com">Niomic</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="https://reactjs.org">React</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>

          <Table celled striped>
            <Table.Header>
              <Table.Row>
                  <Table.HeaderCell textAlign="right" colSpan="3">
                  <Search placeholder="Search document..."/>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">Nama Document</Table.HeaderCell>
                <Table.HeaderCell textAlign="center">Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell textAlign="center">PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left"/>
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right"/>
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
