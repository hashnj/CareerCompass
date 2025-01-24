// import React, { useEffect } from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
// import { useRecoilValue } from 'recoil';
// import { themeState } from '../../store/atoms';
// import { IconType } from 'react-icons';


// eslint-disable-next-line react/prop-types
const SocialIcon = ({ icon }) => (
  <div className="cursor-pointer  hover:text-primary/50" size={30} >{icon}</div>
);

const Footer = () => {
  const items = [
    { type: 'icon', icon: FaFacebookSquare },
    { type: 'icon', icon: FaInstagram },
    { type: 'icon', icon: FaTwitterSquare },
    { type: 'icon', icon: FaGithubSquare },
    { type: 'icon', icon: FaDribbbleSquare },
    {
      type: 'section',
      title: 'Solutions',
      items: ['Analytics', 'Marketing', 'Commerce', 'Insights'],
    },
    {
      type: 'section',
      title: 'Support',
      items: ['FAQ', 'Mentors', 'Payment Options'],
    },
    {
      type: 'section',
      title: 'Company',
      items: ['About Us', 'Get App', 'Careers', 'Affiliate Programs'],
    },
    {
      type: 'section',
      title: 'Legal',
      items: ['Claim', 'Policy', 'Terms'],
    },
  ];

  // const theme = useRecoilValue(themeState);

  // useEffect(() => {
  //   document.body.setAttribute('class', `${theme} bg-background`);
  // }, [theme]);

  return (
    <div className='py-14 px-6 gap-8 bg-background z-30 text-gray-900/90'>
      <h1 className="text-3xl lg:text-4xl xl:text-5xl pr-2 w-full font-bold text-primary">
            CAREER C🧭MPASS
          </h1>
    <div
      className={` transition-all duration-300 gap-8 mx-auto grid lg:grid-cols-3  `}
    >
      <div>
        <div className="flex w-full">
          
        </div>
        <p className="pt-4 text-text/50  font-thin">
        Career Compass is a dynamic platform designed to guide individuals toward successful career paths by connecting them with experienced mentors. Through personalized mentoring, expert advice, and tailored resources, Career Compass empowers users to make informed career decisions. Whether you are a student, a professional exploring a career shift, or someone seeking growth in your current field, Career Compass is your trusted partner in navigating the journey to achieve your goals.
        </p>
        <div className="flex justify-between text-primary  md:w-[75%] m-6 md:mt-0 ">
          {items
            .filter((item) => item.type === 'icon')
            .map((item, index) => (
              <SocialIcon icon={item.icon} key={index} />
            ))}
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between   md:mt-6 mt-8">
        {items
          .filter((item)=> item.type === 'section')
          .map((item, index) => (
            <div key={index}>
              <h6 className="font-medium text-primary cursor-default text-xl">
                {item.title}
              </h6>
              <ul>
                {item.items.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-2 cursor-pointer text-text/60  font-normal hover:text-primary/90 text-sm"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default Footer;
