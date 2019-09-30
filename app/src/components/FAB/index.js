import React from 'react'
import {Container, Link} from 'react-floating-action-button'

function FAButton() {
    return (
        <Container>
            <Link href="/flights"
                  tooltip="Let's Find A Flight!"
                  className="btn btn-lg text-white"
                  icon="fas fa-plane"
                  styles={{background: "#17A2B8", left: "50px", top: "25px"}}
                    onClick={() => console.log('FAB clicked')}
            />
        </Container>
    )
}

export default FAButton;