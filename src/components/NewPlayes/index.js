import React from 'react';
import { Grid, Row, Form, Container, Button } from 'semantic-ui-react';
import Game from '../../assets/game.png';
import '../../index.css';

export default () => {
    return (
        <Container>
            <Grid columns={2}>

                <Grid.Row>
                    <Grid.Column>
                        <Form  style={{maxWidth: "600px"}}>
                            <Form.Field>
                                <label>Player One:</label>
                                <input placeholder="Nick Name" />
                            </Form.Field>
                            <Form.Field>
                                <label>Player two:</label>
                                <input placeholder="Nick Name" />
                            </Form.Field>
                            <Button type='submit'>Start!</Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <img src={ Game } class="image-game" alt="Rock - Paper - Scissors" />
                    </Grid.Column>
                </Grid.Row>
            
            </Grid>
         
        </Container>
    )
}