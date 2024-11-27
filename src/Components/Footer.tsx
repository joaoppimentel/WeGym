import { FiUser, FiHome } from "react-icons/fi";
import { RiQrCodeFill } from "react-icons/ri";
import "../scss/footer.scss";
import { Link, useNavigate } from "react-router-dom";
import { Sheet } from "react-modal-sheet";
import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

import PermissionQR from '../img/PermissionQR.png';

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
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const getCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });

                // Se o vídeo for carregado, vincula o stream à tag <video>
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }

                // Após permissão, verificar dispositivos disponíveis
                const devices = await navigator.mediaDevices.enumerateDevices();
                const hasCamera = devices.some(device => device.kind === "videoinput");

                if (hasCamera) {
                    setHasPermission(true);
                    setIsMusicPlaying(true);  // Inicia a música assim que a permissão for concedida
                } else {
                    setHasPermission(false);
                }
            } catch {
                setHasPermission(false);
            }
        };

        getCamera();

        // Limpa o stream quando o componente é desmontado
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop()); // Para as faixas de vídeo
            }
        };
    }, []);

    // Controla a reprodução da música
    useEffect(() => {
        if (isMusicPlaying && audioRef.current) {
            audioRef.current.play();
        } else if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;  // Reseta o áudio
        }
    }, [isMusicPlaying]);

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
                        </div>
                    ) : hasPermission ? (
                        <div className="qr-code-content">
                            <p className="text-success">
                                Permissão concedida. Escaneie o QR Code.
                            </p>
                            <video
                                ref={videoRef}
                                autoPlay
                                playsInline
                                width="100%" // A largura pode ser ajustada conforme necessário
                                height="auto"
                            />
                            <Button className="qr-button" onClick={onClose}>
                                Fechar
                            </Button>
                        </div>
                    ) : (
                        <div className="qr-code-content">
                            <img
                                className="mb-5"
                                src={PermissionQR}
                                width={300}
                                height={300}
                                alt="Permissão necessária"
                            />
                            <p className="mt-5 text-danger">
                                O aplicativo requer acesso à câmera para funcionar. Verifique as configurações de permissão do dispositivo.
                            </p>
                            <Button variant="outline-dark" onClick={onClose}>
                                Fechar
                            </Button>
                        </div>
                    )}
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />

            {/* Música de fundo */}
            <audio ref={audioRef} loop>
                <source src="/path-to-your-audio-file.mp3" type="audio/mp3" />
                Seu navegador não suporta o formato de áudio.
            </audio>
        </Sheet>
    );
};