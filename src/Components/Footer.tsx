import { FiUser, FiHome } from "react-icons/fi";
import { RiQrCodeFill } from "react-icons/ri";
import "../scss/footer.scss";
import { Link, useNavigate } from "react-router-dom";
import { Sheet } from "react-modal-sheet";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

import PermissionQR from '../img/PermissionQR.png';
import NoPermission from '../img/PermissionError.png';

const Footer: React.FC = () => {
    const navigate = useNavigate();

    const [isQrOpen, setQrOpen] = useState(false);
    const [isLogoutOpen, setLogoutOpen] = useState(false);

    const handleLogOut = () => {
        localStorage.removeItem("isLogged");
        navigate("/");
        navigate(0);
    };

    return (
        <>
            <footer>
                <Link to="/">
                    <FiHome />
                    <span>Menu</span>
                </Link>
                <button className="qr-code" onClick={() => setQrOpen(true)}>
                    <RiQrCodeFill />
                </button>

                <QrCodeSheet isOpen={isQrOpen} onClose={() => setQrOpen(false)} />

                <button onClick={() => setLogoutOpen(true)}>
                    <FiUser />
                    <span>Account</span>
                </button>

                <Sheet
                    isOpen={isLogoutOpen}
                    onClose={() => setLogoutOpen(false)}
                    detent="content-height"
                >
                    <Sheet.Container>
                        <Sheet.Header />
                        <Sheet.Content>
                            <div className="logout">
                                <h4>Fazer Logout?</h4>
                                <p className="text-muted">
                                    Você está prestes a finalizar sua sessão
                                </p>
                                <Button
                                    variant="outline-light text-danger"
                                    onClick={handleLogOut}
                                >
                                    Logout
                                </Button>
                                <Button
                                    variant="outline-light text-dark"
                                    onClick={() => setLogoutOpen(false)}
                                >
                                    Cancelar
                                </Button>
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

interface QrCodeSheetProps {
    isOpen: boolean;
    onClose: () => void;
}

const QrCodeSheet: React.FC<QrCodeSheetProps> = ({ isOpen, onClose }) => {
    const [hasPermission, setHasPermission] = useState<null | boolean>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);


    const checkCameraPermission = async () => {
        try {
            // @ts-ignore
            const permissionCamera = (await navigator.permissions.query({ name: "camera" })).state
            switch (permissionCamera) {
                case "granted":
                    return true;
                case "denied":
                    setErrorMessage(
                        `É necessária autorização para utilizar a câmera. 
                            Verifique as configurações de seu navegador`
                    );
                    return false;
                case "prompt":
                    return null;
            }
        } catch (err: any) {
            console.error(err);
            setErrorMessage(`Occorreu um erro ao utilizar a câmera ${err.message}`);
            return false;
        }
    };

    const fetchPermission = async (ask: boolean = false) => {
        if (ask)
            try {
                await navigator.mediaDevices.getUserMedia({ video: true });
            } catch {
                setHasPermission(false)
            }
        if (isOpen) {
            const permission = await checkCameraPermission();
            setHasPermission(permission);

            if (permission) {
                getVideo();
            }
        } else {
            stopVideo();
        }
    };
    useEffect(() => {

        fetchPermission();
    }, [isOpen]);

    const getVideo = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setMediaStream(stream);

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }
        } catch (err: any) {
            console.error(err);
        }
    };

    const stopVideo = () => {
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
            setMediaStream(null);
        }
    };

    return (
        <Sheet isOpen={isOpen} onClose={onClose} detent="content-height">
            <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                    {hasPermission === null ? (
                        <div className="qr-code-content">
                            <img className="mb-5" src={PermissionQR} width={300} height={300} />
                            <p className="mt-5">
                                O Aplicativo requer acesso a câmera para poder ler o QRCode
                            </p>
                            <button className="qr-button btn text-light" onClick={async () => {
                                fetchPermission(true)
                            }}>
                                Solicitar Permissão
                            </button>
                        </div>
                    ) : hasPermission ? (
                        <div className="qr-code-content">
                            <h3>Escanear QR Code</h3>
                            <p>
                                Mantenha o QR Code dentro da área determinada
                                para uma melhor leitura
                            </p>
                            <video
                                key={isOpen ? 'open' : 'closed'}
                                ref={videoRef}
                                width="100%"
                                height="700">
                            </video>
                            <button className="qr-button btn">
                                Ler QRCode
                            </button>
                        </div>
                    ) : (
                        <div className="qr-code-content">
                            <img
                                className="mb-5 p-3"
                                src={NoPermission}
                                width={300}
                                height={300}
                            />
                            <p className="mt-5 text-danger">
                                {errorMessage}
                            </p>
                            <button className="qr-button btn" onClick={onClose}>Fechar</button>
                        </div>
                    )}
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    );
};