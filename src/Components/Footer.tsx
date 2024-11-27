import { FiUser, FiHome } from "react-icons/fi";
import { RiQrCodeFill } from "react-icons/ri";
import '../scss/footer.scss';
import { Link, useNavigate } from "react-router-dom";
import { Sheet } from "react-modal-sheet";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Footer: React.FC = () => {
    const navigate = useNavigate();

    const [isOpen, setOpen] = useState(false);

    const handleLogOut = () => {
        localStorage.removeItem("isLogged");
        navigate("/");
        navigate(0);
    }
    return (
        <>
            <footer className="footer">
                <Link to="/">
                    <FiHome />
                    <span>Menu</span>
                </Link>
                <button className="qr-code">
                    <RiQrCodeFill />
                </button>
                <button onClick={() => setOpen(true)}>
                    <FiUser />
                    <span>Account</span>
                </button>

                <Sheet isOpen={isOpen} onClose={() => setOpen(false)} detent="content-height">
                    <Sheet.Container>
                        <Sheet.Header />
                        <Sheet.Content>
                            <div className="logout">
                                <h4>Fazer Logout?</h4>
                                <p className="text-muted">Você está prester a finalizar sua sessão</p>
                                <Button variant="outline-light text-danger" onClick={handleLogOut}>Logout</Button>
                                <Button variant="outline-light text-dark" onClick={() => setOpen(false)}>Cancelar</Button>
                            </div>
                        </Sheet.Content>
                    </Sheet.Container>
                    <Sheet.Backdrop />
                </Sheet>
            </footer>
        </>
    );
};

export default Footer;
