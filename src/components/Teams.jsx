import React,{useState,useEffect} from 'react';
import { FaArrowRight } from 'react-icons/fa';


const Teams = () => {
  const[url,setUrl] = useState("None")
  useEffect(()=>{
    const cu= window.location.href;
    setUrl(cu)
  },[])
  const teamMembers = [
    {
      id: 1,
      imgSrc:
        'https://res.cloudinary.com/pruebaweb/image/upload/v1718181542/erika_eyrixf.jpg',
      name: 'Erika Patricia Montoya',
      pais: 'Peru',
      hobby: 'aprender cosas nuevas',
      delay: 0.1,
    },
    {
      id: 2,
      imgSrc: 'https://res.cloudinary.com/pruebaweb/image/upload/v1696916616/IMG_4131_ebn4ka.jpg',
      name: 'Jocelyn Castro',
      pais: 'Chile',
      hobby: 'Programar',
      delay: 0.3,
    },
    {
      id: 3,
      imgSrc: 'https://res.cloudinary.com/pruebaweb/image/upload/v1718181808/Mio_xu15hg.jpg',
      name: 'Mio Ogura',
      pais: 'Japon',
      hobby: 'Ir a conciertos',
      delay: 0.5,
    },
    {
      id: 4,
      imgSrc:
        'https://res.cloudinary.com/pruebaweb/image/upload/v1718181793/eva_qdqcuy.png',
      name: 'Eva Garcia',
      pais: 'Espana',
      hobby: 'Autoaprendizaje de tecnologias',
      delay: 0.1,
    },
    {
      id: 5,
      imgSrc: 'https://res.cloudinary.com/pruebaweb/image/upload/v1718181859/belen_oycys1.jpg',
      name: 'Belen Aguirre',
      pais: 'Argentina',
      hobby: 'Aprender',
      delay: 0.3,
    },
    {
      id: 6,
      imgSrc: 'https://res.cloudinary.com/pruebaweb/image/upload/v1718182006/Nikoo_dikvtj.jpg',
      name: 'Niko Salehi',
      pais: 'Iran',
      hobby: 'Viajar',
      delay: 0.5,
    },
    {
      id: 7,
      imgSrc: 'https://res.cloudinary.com/pruebaweb/image/upload/v1718182084/georman_zntwpi.jpg',
      name: 'Georman Calderon',
      pais: 'Venezuela',
      hobby: 'Senderismo',
      delay: 0.5,
    },
  ];

  return (
    <div className="container-xxl py-6 pb-5 bg-gray-800" id="team">
      <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0 text-slate-300">Team Clouders 6</h1>
            <h2 className="display-5 mb-0 text-slate-300">{url}</h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a className="btn btn-primary py-3 px-5" href="https://github.com/georve/team-presentation">
              Github
            </a>
          </div>
        </div>
        <div className="row g-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`col-lg-4 col-md-6 wow fadeInUp`}
              data-wow-delay={member.delay}
            >
              <div className="team-item position-relative">
                <img className="img-fluid rounded " src={member.imgSrc} alt="" style={{ width: '300px', height: '320px' }} />
                <div className="team-text bg-white rounded-end p-4">
                  <div>
                    <h5>{member.name}</h5>
                    <span>{member.pais}</span>
                    <span className='m-2'>{member.hobby}</span>
                  </div>
                  <FaArrowRight className="text-primary" size={40} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
