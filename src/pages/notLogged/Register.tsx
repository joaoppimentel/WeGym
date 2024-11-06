import '../../scss/login.scss'
import Logo from '../../img/WeGym.png'
import { Image, Form, Row, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        navigate('/verify', { state: { email } });
    };

    return (
        <main>
            <div className="logo">
                <Image className="mt-5"
                    width="70"
                    src={Logo} />
                <h4>WeGym</h4>
            </div>
            <Form onSubmit={handleSubmit}>
                <Row className="my-3">
                    <h4>Faça seu Cadastro</h4>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label className="required fw-semibold" htmlFor="formEmail">E-mail</Form.Label>
                    <Form.Control
                        id="formEmail"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label className="required fw-semibold" htmlFor="formId">ID</Form.Label>
                    <Form.Control id="formId" type="number" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="required fw-semibold" htmlFor="formConfirmPassword">Senha</Form.Label>
                    <Form.Control id="formConfirmPassword" type="password" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="required fw-semibold" htmlFor="formPassword">Confirmar Senha</Form.Label>
                    <Form.Control id="formPassword" type="password" required />
                </Form.Group>
                <Button variant="primary w-100 mb-3" type="submit">
                    Criar Conta
                </Button>
                <p className="btn-login">Possui uma conta? <Link className="" to="/login"> Cadastre-se</Link></p>
            </Form>
        </main>
    )
}

export default Register;