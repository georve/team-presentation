import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      imgSrc:
        'https://res.cloudinary.com/pruebaweb/image/upload/v1718181542/erika_eyrixf.jpg',
      name: 'Erika Patricia Montoya',
      pais: 'Peru',
      hobby: '',
      delay: 0.1,
    },
    {
      id: 2,
      imgSrc: 'https://res.cloudinary.com/pruebaweb/image/upload/v1696916616/IMG_4131_ebn4ka.jpg',
      name: 'Jocelyn Castro',
      pais: 'Espana',
      hobby: '',
      delay: 0.3,
    },
    {
      id: 3,
      imgSrc: 'https://res.cloudinary.com/pruebaweb/image/upload/v1718181808/Mio_xu15hg.jpg',
      name: 'Mio Ogura',
      pais: 'Japon',
      hobby: '',
      delay: 0.5,
    },
    {
      id: 4,
      imgSrc:
        'https://res.cloudinary.com/pruebaweb/image/upload/v1718181793/eva_qdqcuy.png',
      name: 'Eva Garcia',
      pais: 'Espana',
      hobby: '',
      delay: 0.1,
    },
    {
      id: 5,
      imgSrc: 'https://res.cloudinary.com/pruebaweb/image/upload/v1718181859/belen_oycys1.jpg',
      name: 'Belen Aguirre',
      pais: 'Espana',
      hobby: '',
      delay: 0.3,
    },
    {
      id: 6,
      imgSrc: 'https://res.cloudinary.com/pruebaweb/image/upload/v1718182006/Nikoo_dikvtj.jpg',
      name: 'Niko Salehi',
      pais: 'Iran',
      hobby: '',
      delay: 0.5,
    },
    {
      id: 7,
      imgSrc: 'https://res.cloudinary.com/pruebaweb/image/upload/v1718182084/georman_zntwpi.jpg',
      name: 'Georman Calderon',
      pais: 'Venezuela',
      hobby: '',
      delay: 0.5,
    },
  ];

  return (
    <div className="container-xxl py-6 pb-5" id="team">
      <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-lg-6">
            <h1 className="display-5 mb-0">Team Members</h1>
          </div>
          <div className="col-lg-6 text-lg-end">
            <a className="btn btn-primary py-3 px-5" href="">
              Contact Us
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
                <img className="img-fluid rounded h-4 w-4" src={member.imgSrc} alt="" />
                <div className="team-text bg-white rounded-end p-4">
                  <div>
                    <h5>{member.name}</h5>
                    <span>{member.pais}</span>
                    <span>{member.hobby}</span>
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
