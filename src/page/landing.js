import React, { Component } from 'react';
import { Card, Image, Button, Header, Icon } from 'semantic-ui-react';
import './style.scss';
import {Link} from 'react-router-dom';
export default class Landing extends Component {
  render() {
    return (
        <div>
        <Header as='h1' textAlign='center'>
        Open Tender Ketua Pelaksana
        </Header>
        <section id="Steps" class="steps-section">
        {/*start timeline*/}
        <h2 class="steps-header">
          Timeline Pendaftaran
        </h2>
    
        <div class="steps-timeline">
    
          <div class="steps-one">
            <img class="steps-img" src="http://placehold.it/50/3498DB/FFFFFF" alt="" />
            <h3 class="steps-name">
              5 Oktober 2019
            </h3>
            <p class="steps-description">
              Pendaftaran
            </p>
          </div>
    
          <div class="steps-two">
            <img class="steps-img" src="http://placehold.it/50/3498DB/FFFFFF" alt="" />
            <h3 class="steps-name">
              5 Oktober 2019
            </h3>
            <p class="steps-description">
              Pendaftaran
            </p>
          </div>
    
          <div class="steps-three">
            <img class="steps-img" src="http://placehold.it/50/3498DB/FFFFFF" alt="" />
            <h3 class="steps-name">
              5 Oktober 2019
            </h3>
            <p class="steps-description">
              Pendaftaran
            </p>
          </div>
    
        </div>
    
      </section>
      {/*end timeline*/}
      <div className="ui middle aligned center aligned grid container">
        <Card.Group>
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                <Card.Content>
                    <Card.Header>PK2MABA FILKOM</Card.Header>
                    <Card.Meta>2019</Card.Meta>
                    <Card.Description>ini deskripsi  singkat</Card.Description>
                </Card.Content>
              
            </Card>
            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
                <Card.Content>
                    <Card.Header>Diesnatalis FILKOM</Card.Header>
                    <Card.Meta>2019</Card.Meta>
                    <Card.Description>ini deskripsi  singkat</Card.Description>
                </Card.Content>
                
            </Card>
        </Card.Group>
      </div>
      <div className="ui middle aligned center aligned grid container" style={{margin:'100px'}}>
      <Link to="./login">
      <Button  animated='fade' color="blue">
      <Button.Content visible>Daftar Ketua Pelaksana</Button.Content>
      <Button.Content hidden>Login</Button.Content>
    </Button>
    </Link>
    </div>
      </div>
    )
  }
}