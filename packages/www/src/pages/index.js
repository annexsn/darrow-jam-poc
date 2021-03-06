import React, {useEffect} from "react";
import { Container, Heading, Button, Flex, NavLink } from "theme-ui";
import netlifyIdentity from "netlify-identity-widget";

export default props => {
    useEffect(() => {
        netlifyIdentity.init({});
    });
    return (
        <Container>
            <Flex sx ={{flexDirection: "column", padding: 3}}>
                <Heading>Our Site</Heading>
                <Button sx={{ marginTop: 2 }}
                        onClick={() => {
                            netlifyIdentity.open();
                        }}>
                    Log In
                </Button>
                <Button sx={{ marginTop: 2 }}
                        onClick={() => {
                            console.log(netlifyIdentity.currentUser());
                        }}>
                    Log User
                </Button>
            </Flex>
        </Container>
    );
}

