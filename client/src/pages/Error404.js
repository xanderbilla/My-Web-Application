import { Alert, Button } from 'bootstrap';
import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';

function Error404() {
    const [show, setShow] = useState(true);

    return (
        <>
            <Container className="mb-2">
                <Alert show={show} variant="success">
                    <Alert.Heading>Error 404!</Alert.Heading>
                    <p>
                        Seems! You tried something that is not on our website. Please use valid URL. If you think this is valid URL then might be the URL is in development. So, wait for it !!!
                    </p>
                    <hr />
                    <p>
                        Thank You
                    </p>
                </Alert>
            </Container>

            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
    );
}

export default Error404;