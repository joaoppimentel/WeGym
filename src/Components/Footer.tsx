import { FiUser, FiHome } from "react-icons/fi";
import { RiQrCodeFill } from "react-icons/ri";
import '../scss/footer.scss';
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
    const navigate = useNavigate();
    
    const handleLogOut = () => {
        localStorage.removeItem("isLogged");
        navigate("/");
        navigate(0);
    }
    return (
        <footer className="footer">
            <Link to="/">
                <FiHome />
                <span>Menu</span>
            </Link>
            <button className="qr-code">
                <RiQrCodeFill/>
            </button>
            <button onClick={handleLogOut}>
                <FiUser />
                <span>Account</span>
            </button>
        </footer>
    );
};

export default Footer;
