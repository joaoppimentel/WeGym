import '../../scss/exercicio.scss';
import { Image } from 'react-bootstrap';
import { exercicios } from '../../tests.ts'
import { useParams } from 'react-router-dom';

const Exercicio: React.FC = () => {
    type exParams = {
        id: string
    };

    const { id } = useParams<exParams>();
    const exercicio = id && !isNaN(Number(id)) ? exercicios[Number(id) - 1] : null;

    if (!exercicio) {
        console.error("Exercício não encontrado ou ID inválido.");
        return <p>Exercício não encontrado ou ID inválido.</p>;
    }

    const getYouTubeId = (url: string) => {
        const regExp = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regExp);
        return match ? match[1] : null;
    };

    const videoId = getYouTubeId(exercicio.video);

    const renderVideo = (videoUrl: string) => {
        if (videoUrl.includes("youtube.com")) {
            return (
                <iframe
                    className="embed-responsive-item"
                    src={`${exercicio.video}?autoplay=1&controls=0&modestbranding=1&showinfo=0&disablekb=1&fs=0&loop=1&playlist=${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                ></iframe>
            );
        } else {
            return (
                <video
                    className="embed-responsive-item"
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            );
        }
    };

    return (
        <main className='exercicios'>
            <Image
                src={exercicio.img}
            />
            <div className="embed-responsive embed-responsive-16by9 exercise-video">
                {renderVideo(exercicio.video)}
            </div>
            <h1>{exercicio.nome}</h1>
            <h3 className='text-secondary'>{exercicio.categoria}</h3>

            {/* Adicionando os campos de descrição e especificações */}
            <div className="exercicio-descricao">
                <h4>Descrição:</h4>
                <p>{exercicio.descricao}</p>
            </div>

            <div className="exercicio-especificacao">
                <h4>Especificações:</h4>
                <ul>
                    {Object.entries(exercicio.especificacao).map(([key, value]) => (
                        <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>
                            {Array.isArray(value) ? (
                                value.map((item, index) => (
                                    <div key={index}>
                                        {(index + 10).toString(36)}. {item}
                                    </div>
                                ))
                            ) : (
                                value
                            )}</li>
                    ))}
                </ul>
            </div>

            <div className="exercicio-beneficios">
                <h4>Beneficios:</h4>
                <ul>
                    {exercicio.beneficios.map((value, index) => (
                        <li key={index}><strong></strong>{value}</li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Exercicio;
