import '../../scss/home.scss';
import Logo from '../../img/WeGym.png';
import { Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { categorias, exercicios } from '../../tests.ts'
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

    return (
        <main>
            <div className="logo mt-3">
                <Image className="mt-5" width="70" src={Logo} />
                <h4>WeGym</h4>
            </div>

            <section className="exercicios">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        620: {
                            slidesPerView: 2,
                        },
                        890: {
                            slidesPerView: 3,
                        }
                    }}

                >
                    {exercicios.map((exercicio) => (
                        <SwiperSlide>
                            <Link to={`/exercicio/${exercicio.id}`}>
                                <Image className="mt-5 rounded-3" src={exercicio.img} />
                                <h4>{exercicio.nome}</h4>
                            </Link>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </section>

            <section className="categorias">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        620: {
                            slidesPerView: 2,
                        },
                        890: {
                            slidesPerView: 3,
                        }
                    }}

                >
                    {categorias.map((categoria) => (
                        <SwiperSlide>
                            <div className="background rounded-3"></div>
                            <h4>{categoria.nome}</h4>
                            <categoria.icon className='icon' />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </section>
        </main>
    );
};

export default Home;
