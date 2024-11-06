import '../../scss/login.scss';
import Logo from '../../img/WeGym.png';
import { Image, Form, Row, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const Verify: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};

    const handleVerify = (event: React.FormEvent) => {
        event.preventDefault();
        localStorage.setItem("isLogged", "logado");
        navigate('/');
        navigate(0);
    }

    return (
        <main>
            <div className="logo">
                <Image className="mt-5" width="70" src={Logo} />
                <h4>WeGym</h4>
            </div>
            <Form onSubmit={handleVerify}>
                <Row className="my-3">
                    <h4>Verifique seu E-mail</h4>
                    <p>Enviamos um código de verificação para <br />{email}</p>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label className="required fw-semibold" htmlFor="verificationCode">Código de Verificação</Form.Label>
                    <Form.Control id="verificationCode" type="number" required />
                </Form.Group>

                <Button variant="primary w-100 mb-3" type='submit'>
                    Confirmar
                </Button>
                <p>Não recebeu? Verifique sua caixa de Spam</p>
            </Form>
        </main>
    );
};

export default Verify;
