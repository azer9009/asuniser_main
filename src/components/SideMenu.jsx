import React from 'react';
import Logo from '../img/logo.svg';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const SideMenu = () => {
  return (
    <nav className="bg-[#11141b] w-[18%] flex flex-col h-screen justify-between left-0 z-10 sticky top-0">
      <div className="px-[18px] py-[10px] flex flex-col items-center justify-center gap-[20px]">
        <img src={Logo} alt="" className="w-[200px] h-[306px]" />
        <ul className="text-[#b5b5b5] text-[18px] cursor-pointer">
          <li className="p-[10px] text-center hover:text-white duration-500">Главная</li>
          <li className="p-[10px] text-center hover:text-white duration-500 border-[3px] border-[#D7B56D]">
            Альтернативная энергия
          </li>
          <li className="p-[10px] text-center hover:text-white duration-500">Argo</li>
          <li className="p-[10px] text-center hover:text-white duration-500">Контакт</li>
        </ul>
      </div>
      <div className="flex justify-between p-[12px] items-center border-t-[1px] border-t-[#D7B56D] border-opacity-[50%]">
        <p className="text-[#D7B56D] text-[15px]">AsUniSer</p>
        <div className="flex gap-[5px] iconWrapper">
          <FaFacebookSquare size="15px" color="#D7B56D" />
          <FaInstagram size="15px" color="#D7B56D" />
          <FaTwitterSquare size="15px" color="#D7B56D" />
        </div>
      </div>
    </nav>
  );
};

export default SideMenu;
