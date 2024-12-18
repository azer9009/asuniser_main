import React, { useState } from 'react';
import Stabilizator from '../img/Stabilizator.jpg';
import VideoRu from '../img/ru.mp4';
import VideoEn from '../img/en.mp4';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import Map from '../img/map.jpg'
import Kulek from '../img/kulek.mp4'

const MainContent = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null); 

  const togglePlay = (videoId) => {
    const videoElement = document.getElementById(videoId);

    if (playingVideoId && playingVideoId !== videoId) {
      const currentlyPlaying = document.getElementById(playingVideoId);
      if (currentlyPlaying) currentlyPlaying.pause();
    }

    if (videoElement.paused) {
      videoElement.play();
      setPlayingVideoId(videoId);
    } else {
      videoElement.pause();
      setPlayingVideoId(null);
    }
  };

  return (
    <section className="bg-[#11141b] w-full p-[30px] flex-1  overflow-y-auto flex flex-col items-center">
      <div className="flex flex-col items-center justify-center px-[260px]">
        <h2 className="text-[30px] text-center text-white">
          <span className="line-left line"></span> Инверторный гибридный стабилизатор{' '}
          <span className="line-right line"></span>
        </h2>
        <p className="text-white text-[14px] max-w-[1000px] mt-[32px] text-left">
          Инновационный стабилизатор напряжения, который не имеет аналогов в мире по своим техническим
          характеристикам. Это трехфазный/однофазный инверторный стабилизатор напряжения TP.AsUniSer.
          Данный стабилизатор обеспечивает полную защиту подключенного оборудования от повышенного и
          пониженного входного напряжения, высоковольтных выбросов, провалов входного напряжения,
          гармонических искажений и электрических помех. На данный момент он является самым
          эффективным решением для стабилизации выходного напряжения - настоящий гарант защиты.
        </p>
        <p className="text-white text-[14px] max-w-[1000px] mt-[40px] text-left">
          Инверторный стабилизатор построен на технологии двойного преобразования энергии обеспечивает
          технические характеристики, не достижимые при работе стабилизаторов предыдущего поколения.
        </p>
        <img src={Stabilizator} alt="Stabilizator" className="mt-[20px]" />
        <ul className="text-white list-disc text-[14px] mt-[22px]">
          <li>цель проекта: создание производства инверторных стабилизаторов напряжения нового поколения, реализация произведённых устройств на Азербайджанский и международном рынках;</li>
          <li>уникальность устройства заключается в: широком диапазоне нестабильного входного напряжения; возможности фильтрации напряжения и исключения реактивных составляющих в сети;</li>
          <li>многофункциональности (источник бесперебойного питания, возможность подключения солнечных панелей, ветрогенераторов, АКБ и любых альтернативных источников энергии);</li>
          <li>низкой себестоимости изготовления;</li>
          <li>области применения результатов проекта: крупные предприятия, имеющие потери электроэнергии из-за реактивных токов создающихся из-за компрессоров, двигателей и прочего оборудования; оборудование, требующее постоянное стабильное напряжение; оборудование и объекты, работающие от возобновляемых источников энергии, АКБ, бензогенераторов и прочее; индивидуальные и многоквартирные дома, имеющие нестабильное низкое напряжение.</li>
        </ul>
      </div>

     
      <div className="mt-[40px]">
        <p className="text-white text-center text-[35px] font-semibold">Rus</p>
        <div className="relative w-[1000px] h-[500px]">
          <video className="w-full h-auto" preload="auto" id="videoRu">
            <source src={VideoRu} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
          <button
            onClick={() => togglePlay("videoRu")}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-white bg-[#1F272F] px-[50px] rounded-[10px] text-white text-4xl p-4"
          >
            {playingVideoId === "videoRu" ? <FaPause size="20px" /> : <FaPlay size="20px" />}
          </button>
        </div>
      </div>

      <div>
        <p className="text-white text-center text-[35px] font-semibold mt-[60px]">Eng</p>
        <div className="relative w-[1000px] h-[500px]">
          <video className="w-full h-auto" preload="auto" id="videoEn">
            <source src={VideoEn} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
          <button
            onClick={() => togglePlay("videoEn")}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-white bg-[#1F272F] px-[50px] rounded-[10px] text-white text-4xl p-4"
          >
            {playingVideoId === "videoEn" ? <FaPause size="20px" /> : <FaPlay size="20px" />}
          </button>
        </div>
      </div>
      

          <div className='mt-[140px] flex flex-col items-center gap-[40px] px-[200px]' >
          <h2 className="text-[30px] text-center text-white">
          <span className="line-left line"></span> Подключения к систему альтернативный энергии

          <span className="line-right line"></span>
           </h2>
           <img src={Map} alt="" />
            <p className='text-white max-w-[1000px] text-[14px] ' >Ветрогенератор оснащенным каждый мощностью от 5 ти до 50 киловат, будет реализован и укомплектован автоматической инверторной схемой управления, преобразования энергии ветра от 20 ти до 450 вольт в переменную 220 вольт 50 герц, с возможностью их увеличении мощности от 1 го мегаватт до нескольких десятков мегаватт. И в дальнейшем сливать энергию в общую городскую сеть. Установки будут оснащаться с гибридным преобразователем с целью его подключения паралельным соединением и получением на выходе от 50 ти киловат до 10 мегаватт электроэнергии. Сами ветрогенераторы будут применяться в более новых технологиях с наивысшим КПД преобразования энергии ветра в электрическую, за счет линейного генератора и высоким уровнем прямого взаимодействия приложенной силы вала на генератор. Классические генераторы в нем отсутствуют, так как вся потенциальная энергия теряется именно на рычаге и вся энергия сводится с потерей 80%. Что касается линейного генератора то вся энергия преобразуется без потери 99% и может быть увеличена каскадными подключениями, для увеличения выходной мощности электроэнергии.</p>
            <div className="relative w-[1000px] h-[500px] mt-[40px]">
        <video className="w-full h-auto" preload="auto" id="videoKulek">
          <source src={Kulek} type="video/mp4" />
        </video>
        <button
          onClick={() => togglePlay("videoKulek")}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[1px] border-white bg-[#1F272F] px-[50px] rounded-[10px] text-white text-4xl p-4"
        >
          {playingVideoId === "videoKulek" ? <FaPause size="20px" /> : <FaPlay size="20px" />}
        </button>
      </div>
            <div className='flex flex-row w-full justify-around mt-[80px]' >
              <div>
                <p className='text-[#D7B56D] text-[23px] ' >
                  About Us
                </p>
                <p className='text-[#CCCCCC] text-[14px] max-w-[340px]'>
                We believe great service is great for business. We are working on customer demand, excellent service and customer satisfaction is our first priority.
                </p>
              </div>
              <div>
                <p className='text-[#D7B56D] text-[23px] ' >
                  Contact Info
                </p>
                <ul className=' text-[14px] text-[#CCCCCC]' >
                  Address: 50F,Ahmad Rajably str.,AZ1052
                  <li className='text-[#CCCCC]'>Tel: +994 12 409 09 94</li>
                  <li className='text-[#CCCCC]'>Mob: +994 50 500 09 94</li>
                  <li className='text-[#bebebeccC]'>Mob: +994 51 500 09 94</li>
                  <li className='text-[#CCCCC]'>Email: office@asuniser.az</li>
                </ul>
              </div>
            </div>
            <div class="py-[10px] text-center text-white " >©AsUniSer 2020</div>
          </div>

    </section>
  );
};

export default MainContent;
