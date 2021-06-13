import React from 'react'
import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react';

export default function SignInOrUpButtonGroup() {
    return (
        <div>
            <Button.Group>
                <Button animated inverted>
                  <Button.Content visible>Sign In</Button.Content>
                  <Button.Content hidden>
                    <Icon color="blue" name="sign in" />
                  </Button.Content>
                </Button>
                <Button.Or />
                <Button animated inverted>
                  <Button.Content visible>Sign Up</Button.Content>
                  <Button.Content hidden>
                    <Icon color="blue" name="user plus" />
                  </Button.Content>
                </Button>
              </Button.Group>
        </div>
    )
}
