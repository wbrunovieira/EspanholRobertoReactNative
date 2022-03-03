import React from "react";
import { Input } from "../../components/Input";
import { Container, Title } from "./styles";

export function Login(){
    return(
        <Container>
            <Title>Login</Title>

            <Input
                placeholder="email"
            />

            <Input
                placeholder="password"
            />

        </Container>
    )
}