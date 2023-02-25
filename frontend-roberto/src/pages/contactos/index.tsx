import * as Label from '@radix-ui/react-label';
import { Banner, Container, Form, Input, Textarea} from "./styles";


export default function Contactos(){

    return (
<>

        <Container>
            <Banner>
                <h1>Contactos</h1>
            </Banner>

            <Form>
                <h2>CONTACTE NOS</h2>
                <div
    style={{ display: 'flex', padding: '0 20px', flexWrap: 'wrap', gap: 15, alignItems: 'center', }}
  >
                    <Label.Root
                    className="LabelRoot"
                    htmlFor="name">
                        Nome
                    </Label.Root>
                    <Input  type="text" id="name" placeholder='Seu Nome'  required />
                    </div>

                <div
    style={{ display: 'flex', padding: '0 20px', flexWrap: 'wrap', gap: 15, alignItems: 'center' }}
  >

                    <Label.Root
                    className="LabelRoot"
                    htmlFor="email">
                        E-mail
                    </Label.Root>
                    <Input  type="email" id="email" placeholder='Seu e-mail' required />

                </div>

                <div
    style={{ display: 'flex', padding: '0 20px', flexWrap: 'wrap', gap: 15, alignItems: 'center'  }}
  >

                    <Label.Root
                    className="LabelRoot"
                    htmlFor="text">
                        Mensagem
                    </Label.Root>
                    <Textarea id="menssage" placeholder='Digite aqui a sua mensagem' required />

                </div>
                <Input  type="submit" value="Enviar" style={{ display: 'flex', padding: '20px', flexWrap: 'wrap', width:'260px', height:'60px', borderRadius:'10px', boxShadow:'10px 4px 4px rgba(0,0,0,0.25)',fontSize:'36px', backgroundColor:'$blue', lineHeight:'42px'}}/>
                
            </Form>

        </Container>


</>
    )
}