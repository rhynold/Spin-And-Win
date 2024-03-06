import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import logo from '../images/logo.png';
import howToSteps from '../images/FINAL_steps.png';

function GamePage() {
    const wheelRef = useRef(null);
    const [selectedPrize, setSelectedPrize] = useState(null);
    const navigate = useNavigate();

    const prizes = [
        { name: 'Prize 1', value: '$10000', probability: 0.05, angle: 80 },
        { name: 'Prize 2', value: '$750', probability: 0.10, angle: 135},
        { name: 'Prize 3', value: '$100', probability: 0.15, angle: 260 },
        { name: 'Prize 4', value: '$20', probability: 0.30, angle: 165 },
        { name: 'Prize 5', value: '$0', probability: 0.40, angle: 100 }
    ];

    const handleSpin = () => {
        gsap.to(wheelRef.current, {
            rotation: '+=2160',
            transformOrigin: 'center center',
            duration: 4,
            ease: 'none',
            onComplete: () => {
                const totalProbability = prizes.reduce((acc, prize) => acc + prize.probability, 0);
                const randomNumber = Math.random() * totalProbability;
                let cumulativeProbability = 0;
                let selectedPrize = null;

                for (const prize of prizes) {
                    cumulativeProbability += prize.probability;
                    if (randomNumber < cumulativeProbability) {
                        selectedPrize = prize;
                        break;
                    }
                    }
                    if (!selectedPrize) {
                        selectedPrize = prizes[prizes.length - 1];
                    }

                setSelectedPrize(selectedPrize);

                gsap.to(wheelRef.current, {
                    rotation: `+=${selectedPrize.angle}`,
                    transformOrigin: 'center center',
                    duration: 2,
                    ease: 'Power2.easeOut',
                    onComplete: () => {
                        console.log('Selected Prize:', selectedPrize);
                        if (selectedPrize.name === 'Prize 5') {
                            navigate('/lose');
                        } else {
                            navigate('/win', { state: { prizeValue: selectedPrize.value } });
                        }
                    }
                });
            }
        });
    };
    
    return (
        <div>
            <Link to="/">
            <img src={logo} alt="Business Logo" style={{ width: '300px', height: 'auto', }} />
            </Link>

            <div className="gamebox">

            <svg id="spin-wheel" viewBox="0 0 500 500">

                <defs>
                    <linearGradient id="linear-gradient" x1="131.43" y1="454.7" x2="370.84" y2="40.04" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#676767"/>
                    <stop offset="0" stopColor="#ffd23f"/>
                    <stop offset="0" stopColor="#fed54c"/>
                    <stop offset=".01" stopColor="#fddf71"/>
                    <stop offset=".03" stopColor="#fde791"/>
                    <stop offset=".04" stopColor="#fcefac"/>
                    <stop offset=".05" stopColor="#fbf5c2"/>
                    <stop offset=".07" stopColor="#fbf9d3"/>
                    <stop offset=".09" stopColor="#fbfcdf"/>
                    <stop offset=".12" stopColor="#fbfee6"/>
                    <stop offset=".21" stopColor="#fbffe8"/>
                    <stop offset=".22" stopColor="#f9f5c9"/>
                    <stop offset=".26" stopColor="#f6e594"/>
                    <stop offset=".3" stopColor="#f3d767"/>
                    <stop offset=".34" stopColor="#f1cc42"/>
                    <stop offset=".37" stopColor="#f0c325"/>
                    <stop offset=".41" stopColor="#eebd10"/>
                    <stop offset=".45" stopColor="#eeb904"/>
                    <stop offset=".48" stopColor="#eeb800"/>
                    <stop offset=".54" stopColor="#eeb803"/>
                    <stop offset=".58" stopColor="#eebb0c"/>
                    <stop offset=".61" stopColor="#efc01c"/>
                    <stop offset=".65" stopColor="#f0c733"/>
                    <stop offset=".68" stopColor="#f2d151"/>
                    <stop offset=".71" stopColor="#f4dc76"/>
                    <stop offset=".74" stopColor="#f7e9a1"/>
                    <stop offset=".77" stopColor="#f9f8d2"/>
                    <stop offset=".78" stopColor="#fbfee4"/>
                    <stop offset=".81" stopColor="#fbfce0"/>
                    <stop offset=".83" stopColor="#fbf9d6"/>
                    <stop offset=".86" stopColor="#fbf2c4"/>
                    <stop offset=".88" stopColor="#fce9ab"/>
                    <stop offset=".9" stopColor="#fdde8b"/>
                    <stop offset=".93" stopColor="#fed064"/>
                    <stop offset=".94" stopColor="#ffc647"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-2" x1="-326.21" y1="-5.71" x2="64.44" y2="-5.71" gradientTransform="translate(261.04 93.53) rotate(-88.82) scale(1.19 1.37)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#676767"/>
                    <stop offset="0" stopColor="#ffd23f"/>
                    <stop offset=".31" stopColor="#ffb012"/>
                    <stop offset=".36" stopColor="#fec243"/>
                    <stop offset=".44" stopColor="#fee094"/>
                    <stop offset=".5" stopColor="#fef3c7"/>
                    <stop offset=".54" stopColor="#fefbdb"/>
                    <stop offset=".54" stopColor="#fef8d6"/>
                    <stop offset=".55" stopColor="#fee9b6"/>
                    <stop offset=".56" stopColor="#fedd9b"/>
                    <stop offset=".57" stopColor="#fed285"/>
                    <stop offset=".58" stopColor="#feca74"/>
                    <stop offset=".6" stopColor="#fec568"/>
                    <stop offset=".63" stopColor="#fec161"/>
                    <stop offset=".7" stopColor="#ffc160"/>
                    <stop offset=".73" stopColor="#fbbf5a"/>
                    <stop offset=".78" stopColor="#f1ba4b"/>
                    <stop offset=".83" stopColor="#dfb232"/>
                    <stop offset=".88" stopColor="#c8a60f"/>
                    <stop offset=".9" stopColor="#bea200"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-3" x1="-311.24" y1="-21.67" x2="74.41" y2="-21.67" gradientTransform="translate(282.72 123.35) rotate(-87.29) scale(1.08 1.2)" href="#linear-gradient-2"/>
                    <linearGradient id="linear-gradient-4" x1="299.47" y1="249.66" x2="299.47" y2="448.7" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#e21f26"/>
                    <stop offset=".82" stopColor="#e21f26"/>
                    <stop offset=".82" stopColor="#de1e25"/>
                    <stop offset=".9" stopColor="#ae1d1e"/>
                    <stop offset=".96" stopColor="#911c1a"/>
                    <stop offset="1" stopColor="#861c19"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-5" x1="197.93" y1="450" x2="197.93" y2="244.7" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#676767"/>
                    <stop offset="0" stopColor="#ffd23f"/>
                    <stop offset=".02" stopColor="#fed343"/>
                    <stop offset=".35" stopColor="#fee894"/>
                    <stop offset=".58" stopColor="#fef5c7"/>
                    <stop offset=".7" stopColor="#fefbdb"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-6" x1="291.49" y1="171.65" x2="149.48" y2="89.66" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#ee2c24"/>
                    <stop offset="1" stopColor="#ee2f24"/>
                    </linearGradient>
                    <filter id="drop-shadow-2" filterUnits="userSpaceOnUse">
                    <feOffset dx="15" dy="8"/>
                    <feGaussianBlur result="blur" stdDeviation="5"/>
                    <feFlood floodColor="#231f20" floodOpacity=".45"/>
                    <feComposite in2="blur" operator="in"/>
                    <feComposite in="SourceGraphic"/>
                    </filter>
                    <linearGradient id="linear-gradient-7" x1="161.01" y1="246.09" x2="161.01" y2="419.14" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#676767"/>
                    <stop offset="0" stopColor="#de1f26"/>
                    <stop offset=".12" stopColor="#de2025"/>
                    <stop offset="1" stopColor="#e22c25"/>
                    </linearGradient>
                    <filter id="drop-shadow-3" filterUnits="userSpaceOnUse">
                    <feOffset dx="11" dy="-33"/>
                    <feGaussianBlur result="blur-2" stdDeviation="22"/>
                    <feFlood floodColor="#231f20" floodOpacity=".74"/>
                    <feComposite in2="blur-2" operator="in"/>
                    <feComposite in="SourceGraphic"/>
                    </filter>
                    <linearGradient id="linear-gradient-8" x1="413.97" y1="138.2" x2="329.09" y2="285.2" href="#linear-gradient-5"/>
                    <filter id="drop-shadow-4" filterUnits="userSpaceOnUse">
                    <feOffset dx="0" dy="-42"/>
                    <feGaussianBlur result="blur-3" stdDeviation="22"/>
                    <feFlood floodColor="#231f20" floodOpacity=".69"/>
                    <feComposite in2="blur-3" operator="in"/>
                    <feComposite in="SourceGraphic"/>
                    </filter>
                    <linearGradient id="linear-gradient-9" x1="302.52" y1="49" x2="302.52" y2="241.16" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#676767"/>
                    <stop offset="0" stopColor="#ffd23f"/>
                    <stop offset=".02" stopColor="#fed343"/>
                    <stop offset=".5" stopColor="#fee894"/>
                    <stop offset=".84" stopColor="#fef5c7"/>
                    <stop offset="1" stopColor="#fefbdb"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-10" x1="109.08" y1="99.35" x2="221.81" y2="237.8" href="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-11" x1="395.95" y1="391.29" x2="255.88" y2="251.22" href="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-12" x1="46" y1="295.32" x2="249.32" y2="295.32" href="#linear-gradient-5"/>
                    <linearGradient id="linear-gradient-13" x1="254.69" y1="296.75" x2="455" y2="296.75" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#95311f"/>
                    <stop offset="0" stopColor="#98301f"/>
                    <stop offset="0" stopColor="#b22d20"/>
                    <stop offset="0" stopColor="#c82b21"/>
                    <stop offset="0" stopColor="#d92922"/>
                    <stop offset="0" stopColor="#e52723"/>
                    <stop offset="0" stopColor="#ec2723"/>
                    <stop offset="0" stopColor="#ee2724"/>
                    <stop offset=".46" stopColor="#ec2623"/>
                    <stop offset=".62" stopColor="#e52623"/>
                    <stop offset=".74" stopColor="#d92522"/>
                    <stop offset=".83" stopColor="#c82321"/>
                    <stop offset=".91" stopColor="#b2211f"/>
                    <stop offset=".98" stopColor="#981f1d"/>
                    <stop offset="1" stopColor="#901f1d"/>
                    </linearGradient>
                    <linearGradient id="linear-gradient-14" x1="253.17" y1="159.2" x2="423.5" y2="159.2" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#d43427"/>
                    <stop offset=".97" stopColor="red"/>
                    </linearGradient>
                    <filter id="drop-shadow-5" filterUnits="userSpaceOnUse">
                    <feOffset dx="-6" dy="-30"/>
                    <feGaussianBlur result="blur-4" stdDeviation="20"/>
                    <feFlood floodColor="#231f20" floodOpacity=".64"/>
                    <feComposite in2="blur-4" operator="in"/>
                    <feComposite in="SourceGraphic"/>
                    </filter>
                    <radialGradient id="radial-gradient" cx="387.62" cy="377.79" fx="387.62" fy="377.79" r="79.69" gradientTransform="translate(103.28 97.22) scale(.38)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#676767"/>
                    <stop offset="0" stopColor="#abff16"/>
                    <stop offset="0" stopColor="#aef412"/>
                    <stop offset=".02" stopColor="#b4de0b"/>
                    <stop offset=".04" stopColor="#b9cd06"/>
                    <stop offset=".07" stopColor="#bdc102"/>
                    <stop offset=".11" stopColor="#bfba00"/>
                    <stop offset=".21" stopColor="#c0b900"/>
                    <stop offset=".21" stopColor="#dabd07"/>
                    <stop offset=".21" stopColor="#eec00d"/>
                    <stop offset=".21" stopColor="#fac210"/>
                    <stop offset=".22" stopColor="#ffc312"/>
                    <stop offset=".45" stopColor="#febf10"/>
                    <stop offset=".62" stopColor="#fcb60a"/>
                    <stop offset=".78" stopColor="#faa600"/>
                    <stop offset=".78" stopColor="#faa600"/>
                    <stop offset=".82" stopColor="#faa703"/>
                    <stop offset=".86" stopColor="#faac0d"/>
                    <stop offset=".89" stopColor="#fcb41f"/>
                    <stop offset=".93" stopColor="#fdbf38"/>
                    <stop offset=".94" stopColor="#ffc647"/>
                    </radialGradient>
                    <radialGradient id="radial-gradient-2" cx="387.62" cy="377.79" fx="387.62" fy="377.79" r="80.19" gradientTransform="translate(103.28 97.22) scale(.38)" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#676767"/>
                    <stop offset="0" stopColor="#ffd23f"/>
                    <stop offset="0" stopColor="#fed54c"/>
                    <stop offset=".01" stopColor="#fddf71"/>
                    <stop offset=".03" stopColor="#fde791"/>
                    <stop offset=".04" stopColor="#fcefac"/>
                    <stop offset=".05" stopColor="#fbf5c2"/>
                    <stop offset=".07" stopColor="#fbf9d3"/>
                    <stop offset=".09" stopColor="#fbfcdf"/>
                    <stop offset=".12" stopColor="#fbfee6"/>
                    <stop offset=".21" stopColor="#fbffe8"/>
                    <stop offset=".22" stopColor="#f9f5c9"/>
                    <stop offset=".26" stopColor="#f6e594"/>
                    <stop offset=".3" stopColor="#f3d767"/>
                    <stop offset=".34" stopColor="#f1cc42"/>
                    <stop offset=".37" stopColor="#f0c325"/>
                    <stop offset=".41" stopColor="#eebd10"/>
                    <stop offset=".45" stopColor="#eeb904"/>
                    <stop offset=".48" stopColor="#eeb800"/>
                    <stop offset=".54" stopColor="#eeb803"/>
                    <stop offset=".58" stopColor="#eebb0c"/>
                    <stop offset=".61" stopColor="#efc01c"/>
                    <stop offset=".65" stopColor="#f0c733"/>
                    <stop offset=".68" stopColor="#f2d151"/>
                    <stop offset=".71" stopColor="#f4dc76"/>
                    <stop offset=".74" stopColor="#f7e9a1"/>
                    <stop offset=".77" stopColor="#f9f8d2"/>
                    <stop offset=".78" stopColor="#fbfee4"/>
                    <stop offset=".81" stopColor="#fbfce0"/>
                    <stop offset=".83" stopColor="#fbf9d6"/>
                    <stop offset=".86" stopColor="#fbf2c4"/>
                    <stop offset=".88" stopColor="#fce9ab"/>
                    <stop offset=".9" stopColor="#fdde8b"/>
                    <stop offset=".93" stopColor="#fed064"/>
                    <stop offset=".94" stopColor="#ffc647"/>
                    </radialGradient>
                </defs>

                <g>
                    <ellipse cx="251.13" cy="247.37" rx="222.46" ry="211.61" fill="none" stroke="url(#linear-gradient)" strokeMiterlimit="10" strokeWidth="50"/>
                    <ellipse cx="251.83" cy="250.78" rx="208.49" ry="205.22" fill="#300" strokeWidth="0"/>
                    <ellipse cx="250" cy="249.5" rx="241.03" ry="229.46" transform="translate(-13.68 14.5) rotate(-3.23)" fill="none" stroke="url(#linear-gradient-2)" strokeMiterlimit="10" strokeWidth="6"/>
                    <ellipse cx="250.64" cy="249.66" rx="211.88" ry="207.37" transform="translate(-19.85 21.65) rotate(-4.76)" fill="none" stroke="url(#linear-gradient-3)" strokeMiterlimit="10"/>
                </g>
                <g id="spinning_wheel" data-name="spinning wheel" ref={wheelRef}>
                    <path d="m251.64,249.66c31.89,58.86,63.77,117.73,95.66,176.59,0,0-38.98,23.59-92.79,22.41.51-31.48.58-63.86.12-97.1-.48-34.95-1.5-68.93-2.99-101.9Z" fill="url(#linear-gradient-4)" strokeWidth="0"/>
                    <g>
                    <path d="m275.73,393.71v-2.33h2.93v2.33h-2.93Zm13.23,3.7l-2.26-1.54c.78-1.12,1.09-2,1.09-2.87,0-1.04-.33-1.46-1.09-1.46-1.56,0-1.78,5.36-5.19,5.36-2.38,0-3.86-1.73-3.86-4.53,0-1.83.7-3.12,1.72-4.14l1.91,1.77c-.62.75-.94,1.39-.94,2.16,0,.89.23,1.33,1.01,1.33,1.48,0,1.56-5.36,5.11-5.36,2.3,0,4.02,1.58,4.02,4.86,0,1.25-.47,3.16-1.52,4.41Zm.12-3.7v-2.33h3.32v2.33h-3.32Z" strokeWidth="0"/>
                    <path d="m287.55,385.51v-2.83h-6.4v2.49h-2.07c-.27-1.5-.62-2.45-1.21-3.45v-2.62h9.68v-2.37h2.69v8.77h-2.69Z" strokeWidth="0"/>
                    <path d="m284,374.96c-4.24,0-6.36-2-6.36-4.9s2.15-4.9,6.36-4.9,6.48,2,6.48,4.9-2.24,4.9-6.48,4.9Zm0-6.44c-3.28,0-3.79.71-3.79,1.54s.51,1.54,3.79,1.54,3.9-.71,3.9-1.54-.62-1.54-3.9-1.54Z" strokeWidth="0"/>
                    <path d="m284,363.73c-4.24,0-6.36-2-6.36-4.9s2.15-4.9,6.36-4.9,6.48,2,6.48,4.9-2.24,4.9-6.48,4.9Zm0-6.44c-3.28,0-3.79.71-3.79,1.54s.51,1.54,3.79,1.54,3.9-.71,3.9-1.54-.62-1.54-3.9-1.54Z" strokeWidth="0"/>
                    </g>
                    <path d="m249.32,244.7c.36,68.42.73,136.84,1.09,205.25,0,0-51.49,2.48-104.97-29.72,34.63-58.51,69.25-117.02,103.88-175.53Z" fill="url(#linear-gradient-5)" strokeWidth="0"/>
                    <g>
                    <path d="m200.75,375.37l.41-2.29,2.88.58-.41,2.29-2.88-.58Zm12.35,6.26l-1.96-1.96c.96-.95,1.42-1.75,1.58-2.6.18-1.02-.07-1.5-.82-1.65-1.53-.31-2.68,4.92-6.04,4.24-2.34-.47-3.49-2.46-3-5.22.32-1.8,1.23-2.93,2.41-3.73l1.57,2.12c-.74.61-1.16,1.18-1.3,1.94-.16.88,0,1.35.77,1.51,1.46.29,2.47-4.96,5.96-4.26,2.26.46,3.67,2.35,3.1,5.58-.22,1.23-1.01,3.01-2.27,4.03Zm.76-3.61l.41-2.29,3.26.66-.41,2.29-3.26-.66Z" strokeWidth="0"/>
                    <path d="m214.46,370.44c-2.1-3.6-3.71-6.38-5.36-6.71-1.09-.22-1.73.33-1.89,1.27-.15.86.31,1.63.77,2.36l-2.1,1.52c-1.1-1.62-1.5-2.97-1.16-4.89.46-2.62,2.36-4.14,4.78-3.65,1.96.39,3.75,2.79,5.13,4.89.04-.67.13-1.62.23-2.2l.38-2.17,2.76.56-1.67,9.4-1.88-.38Z" strokeWidth="0"/>
                    <path d="m212.16,358.59c-4.16-.84-5.9-3.22-5.39-6.08.51-2.86,2.97-4.4,7.11-3.56,4.16.84,6.02,3.25,5.51,6.11-.51,2.86-3.06,4.38-7.22,3.54Zm1.13-6.33c-3.22-.65-3.84-.06-3.99.76-.15.82.23,1.61,3.45,2.26,3.22.65,3.96.08,4.1-.74.15-.82-.35-1.63-3.57-2.28Z" strokeWidth="0"/>
                    </g>
                    <path d="m249.08,49.77c.08,64.98.16,129.96.24,194.93-29.75-57.78-59.51-115.57-89.26-173.35,0,0,41.19-25.83,89.03-21.58Z" fill="url(#linear-gradient-6)" strokeWidth="0"/>
                    <g filter="url(#drop-shadow-2)">
                    <path d="m209.67,96.53l.34,2.3-3.28.55-.34-2.3,3.28-.55Zm-.42-3.67l2.46,1.15c-.61,1.24-.79,2.15-.66,3.01.15,1.03.54,1.38,1.29,1.26,1.54-.26.97-5.59,4.35-6.16,2.35-.39,4.07,1.06,4.48,3.84.27,1.81-.24,3.2-1.09,4.37l-2.15-1.43c.51-.84.72-1.53.61-2.29-.13-.88-.43-1.27-1.2-1.15-1.46.25-.76,5.55-4.27,6.14-2.28.38-4.2-.9-4.68-4.14-.18-1.23,0-3.2.86-4.6Zm13.61,1.47l.34,2.3-2.89.48-.34-2.3,2.89-.48Z" strokeWidth="0"/>
                    <path d="m211.5,103.88c3.11,2.63,5.51,4.67,7.17,4.4,1.1-.18,1.52-.93,1.38-1.87-.13-.86-.8-1.42-1.47-1.94l1.49-2.19c1.55,1.13,2.35,2.26,2.63,4.19.39,2.63-.92,4.74-3.35,5.15-1.97.33-4.42-1.28-6.37-2.76.17.64.39,1.58.48,2.15l.32,2.18-2.78.46-1.39-9.44,1.89-.32Z" strokeWidth="0"/>
                    <path d="m217.42,114.21c4.18-.7,6.58.92,7,3.79.42,2.87-1.41,5.2-5.57,5.9-4.18.7-6.69-.9-7.11-3.77-.42-2.88,1.5-5.22,5.69-5.92Zm.94,6.36c3.24-.54,3.64-1.32,3.52-2.14s-.73-1.44-3.96-.89c-3.24.54-3.75,1.34-3.63,2.17s.84,1.42,4.08.87Z" strokeWidth="0"/>
                    </g>
                    <path d="m248.67,246.09c-35.3,57.68-70.59,115.37-105.89,173.05,0,0-40.53-20.17-69.43-69,58.44-34.69,116.88-69.37,175.32-104.06Z" fill="url(#linear-gradient-7)" filter="url(#drop-shadow-3)" strokeWidth="0"/>
                    
                    <g id="section2">
                    <path d="m136.31,340.43l1.56-1.64,2.06,2.22-1.56,1.64-2.06-2.22Zm6.83,12.63l-.56-2.8c1.3-.2,2.1-.57,2.68-1.19.69-.73.74-1.27.2-1.85-1.1-1.18-4.83,2.42-7.23-.17-1.67-1.8-1.56-4.14.31-6.11,1.22-1.29,2.58-1.66,3.97-1.61l.16,2.69c-.94.05-1.59.27-2.1.81-.6.63-.73,1.11-.18,1.7,1.04,1.12,4.68-2.58,7.18.11,1.62,1.75,1.77,4.16-.43,6.47-.83.88-2.44,1.87-4.01,1.94Zm2.55-2.51l1.56-1.64,2.33,2.51-1.56,1.64-2.33-2.51Z" strokeWidth="0"/>
                    <path d="m148.73,334.78l-3.78,3.97-1.97-2.13,6.31-6.63,1.45,1.57c.32,4.66,1.6,6.52,4.82,10.35l-2.39,2.51c-2.58-3.13-3.85-5.51-4.44-9.64Z" strokeWidth="0"/>
                    <path d="m157.8,337.29l-.43-2.71c.99-.05,1.96-.31,2.6-.98.83-.88.95-1.76.18-2.59-.74-.8-1.62-.69-2.32.04-.47.5-.61.82-.81,1.73l-1.69.37-4.25-5.06,5.22-5.49,1.97,2.13-3.17,3.33,1.15,1.48c.2-.44.4-.72.7-1.03,1.53-1.61,3.68-2.06,5.52-.08,1.95,2.1,1.53,4.93-.26,6.82-1.44,1.52-2.99,2.04-4.43,2.03Z" strokeWidth="0"/>
                    <path d="m162.15,325.64c-2.98-3.21-3.14-6.22-1.19-8.27,1.94-2.04,4.79-1.82,7.75,1.38,2.98,3.21,3.22,6.31,1.27,8.36-1.94,2.04-4.85,1.75-7.83-1.46Zm4.31-4.53c-2.3-2.48-3.13-2.37-3.69-1.79-.56.58-.67,1.47,1.63,3.95,2.3,2.49,3.21,2.46,3.77,1.88.56-.58.59-1.55-1.71-4.04Z" strokeWidth="0"/>
                    </g>

                    <path d="m74.9,148.37c56.15,32.35,112.29,64.69,168.44,97.04-65.67-.11-131.34-.22-197.01-.32,0,0-.66-53.55,28.57-96.71Z" strokeWidth="0"/>

                    <g id="section1">
                    <path d="m80.69,206.89l1.94-1.98c.84,1.07,1.56,1.6,2.36,1.81.95.25,1.41,0,1.59-.79.37-1.62-4.47-3.11-3.66-6.64.56-2.46,2.49-3.59,5.05-2.92,1.67.43,2.68,1.47,3.37,2.76l-2.07,1.56c-.53-.82-1.05-1.3-1.75-1.48-.82-.21-1.27-.07-1.45.73-.35,1.54,4.52,2.89,3.68,6.56-.55,2.38-2.39,3.79-5.39,3.01-1.14-.3-2.77-1.23-3.66-2.62Zm3.35,1l2.12.55-.79,3.43-2.12-.55.79-3.43Zm3.17-13.82l2.12.55-.69,3.03-2.12-.55.69-3.03Z" fill="#fff" strokeWidth="0"/>
                    <path d="m91.87,208.25l2.58.67,1.52-6.62-2.28-.59.49-2.14c1.43.07,2.39-.06,3.43-.43l2.39.62-2.29,10.02,2.16.56-.64,2.79-8-2.08.64-2.79Z" fill="#fff" strokeWidth="0"/>
                    <path d="m102.35,207.08c1-4.38,3.33-6.11,5.98-5.42,2.65.69,3.97,3.39,2.97,7.75-1,4.38-3.36,6.23-6.01,5.54-2.66-.69-3.94-3.49-2.94-7.87Zm5.88,1.53c.78-3.39.25-4.09-.51-4.28-.76-.2-1.52.16-2.3,3.55s-.28,4.21.48,4.4c.76.2,1.55-.28,2.33-3.68Z" fill="#fff" strokeWidth="0"/>
                    <path d="m110.8,218.56c1.66-.13,2.65-.89,2.87-1.91l.5-2.18.55,2.09c-.36.16-.77.21-1.19.1-.99-.26-1.74-1.18-1.46-2.39.26-1.13,1.31-1.67,2.41-1.39,1.4.36,1.89,1.73,1.44,3.71-.55,2.38-2.25,3.87-4.88,3.95l-.23-1.99Z" fill="#fff" strokeWidth="0"/>
                    <path d="m118.65,211.32c1-4.38,3.33-6.11,5.98-5.42,2.66.69,3.97,3.39,2.97,7.75-1,4.38-3.36,6.23-6.01,5.54-2.66-.69-3.94-3.49-2.94-7.87Zm5.88,1.53c.78-3.39.25-4.09-.5-4.28-.76-.2-1.52.16-2.3,3.55s-.28,4.21.48,4.4c.76.2,1.55-.28,2.33-3.68Z" fill="#fff" strokeWidth="0"/>
                    <path d="m128.89,213.98c1-4.38,3.33-6.11,5.98-5.42,2.65.69,3.97,3.39,2.97,7.75-1,4.38-3.36,6.23-6.01,5.54-2.66-.69-3.94-3.49-2.94-7.87Zm5.88,1.53c.78-3.39.25-4.09-.51-4.28-.76-.2-1.52.16-2.3,3.55s-.28,4.21.48,4.4c.76.2,1.55-.28,2.33-3.68Z" fill="#fff" strokeWidth="0"/>
                    <path d="m139.13,216.64c1-4.38,3.33-6.11,5.98-5.42,2.66.69,3.97,3.39,2.97,7.75-1,4.38-3.36,6.23-6.01,5.54-2.65-.69-3.94-3.49-2.94-7.87Zm5.88,1.53c.78-3.39.25-4.09-.51-4.28s-1.52.16-2.3,3.55-.28,4.21.48,4.4c.76.2,1.55-.28,2.33-3.68Z" fill="#fff" strokeWidth="0"/>
                    </g>

                    <path d="m253.59,241.61c57.46-32.16,114.92-64.32,172.38-96.48,0,0,26.83,33.6,28.05,98.04-30.43-.69-60.85-1.18-91.28-1.46-36.38-.33-72.76-.37-109.15-.11Z" fill="url(#linear-gradient-8)" filter="url(#drop-shadow-4)" strokeWidth="0"/>
                    <g>
                    <path d="m397.7,199.82l-1.1,2.55c-1.06-.72-1.85-.97-2.61-.88-.9.1-1.23.49-1.15,1.3.16,1.65,4.84,1.36,5.2,4.98.25,2.52-1.1,4.26-3.54,4.53-1.59.18-2.78-.44-3.77-1.42l1.34-2.2c.71.59,1.31.86,1.97.78.78-.09,1.13-.38,1.05-1.2-.15-1.57-4.82-1.14-5.19-4.9-.24-2.44.96-4.41,3.81-4.73,1.08-.12,2.79.19,3.99,1.19Zm-3.23.23l-2.02.22-.34-3.51,2.02-.22.34,3.51Zm1.38,14.14l-2.02.22-.3-3.1,2.02-.22.3,3.1Z" strokeWidth="0"/>
                    <path d="m387.97,201.57c-2.43,3.15-4.31,5.58-4.14,7.35.12,1.18.75,1.67,1.58,1.58.76-.08,1.28-.77,1.76-1.45l1.85,1.72c-1.05,1.58-2.07,2.36-3.77,2.55-2.31.26-4.1-1.26-4.36-3.86-.21-2.11,1.3-4.62,2.68-6.61-.57.15-1.39.32-1.9.38l-1.92.21-.29-2.98,8.31-.92.2,2.03Z" strokeWidth="0"/>
                    <path d="m378.71,207.24c.44,4.49-1.08,6.93-3.6,7.21-2.53.28-4.49-1.8-4.92-6.27-.44-4.49,1.06-7.05,3.59-7.34,2.53-.28,4.5,1.9,4.93,6.39Zm-5.6.62c.34,3.47,1.01,3.94,1.73,3.86s1.28-.69.94-4.16-1.02-4.07-1.74-3.99-1.27.81-.93,4.28Z" strokeWidth="0"/>
                    </g>
                    <path d="m252.74,49.06c13.11-.34,30.75.6,50.9,5.81,21.39,5.53,38.28,13.97,50.09,21.08-34.14,55.07-68.28,110.14-102.41,165.21.48-64.03.95-128.07,1.43-192.1Z" fill="url(#linear-gradient-9)" strokeWidth="0"/>
                    <g>
                    <path d="m281.22,99.21l-.26,2.01-3.06-.44.26-2.01,3.06.44Zm.81-3.57l1.75,1.6c-.89.94-1.39,1.8-1.51,2.77-.15,1.17.24,1.75,1.12,1.88,1.99.29,2.65-5.16,6.14-4.65,2.24.33,3.46,2.19,3.13,4.8-.23,1.76-1.06,2.86-2.14,3.68l-1.44-1.75c.73-.66,1.15-1.24,1.26-2.1.13-.99-.18-1.58-1.05-1.71-1.85-.27-2.38,5.19-6.08,4.66-2.22-.32-3.63-2.12-3.24-5.14.17-1.3.92-3.02,2.05-4.04Zm12.67,5.53l-.26,2.01-2.79-.4.26-2.01,2.79.4Z" strokeWidth="0"/>
                    <path d="m281.58,107.29l-.37,2.86,7.11,1.03.31-2.45,1.76.26c.07,1.44.29,2.41.7,3.41l-.29,2.23-9.99-1.45-.31,2.45-2.29-.33,1.07-8.34,2.29.33Z" strokeWidth="0"/>
                    <path d="m284.18,118.06c4.18.61,6.08,2.79,5.72,5.6-.36,2.81-2.75,4.37-6.92,3.76-4.18-.61-6.19-2.8-5.83-5.61.36-2.81,2.85-4.35,7.03-3.75Zm-.83,6.49c3.35.49,4.22-.2,4.35-1.22.13-1.02-.54-1.93-3.89-2.41-3.35-.49-4.33.18-4.46,1.2-.13,1.02.65,1.94,4,2.43Z" strokeWidth="0"/>
                    <path d="m282.79,128.94c4.18.61,6.08,2.79,5.72,5.6-.36,2.81-2.75,4.37-6.92,3.76-4.18-.61-6.19-2.8-5.83-5.61s2.85-4.35,7.03-3.75Zm-.83,6.49c3.35.49,4.22-.2,4.35-1.22.13-1.02-.54-1.93-3.89-2.41s-4.33.18-4.46,1.2c-.13,1.02.65,1.94,4,2.43Z" strokeWidth="0"/>
                    </g>
                    <path d="m155.96,72.65c31.12,57.35,62.24,114.7,93.36,172.05-57.4-33.45-114.8-66.89-172.2-100.34,0,0,27.24-47.65,78.84-71.71Z" fill="url(#linear-gradient-10)" strokeWidth="0"/>
                    <g>
                    <path d="m136.97,133.01l2.85-.72c.54,1.54,1.15,2.48,1.96,3.16.96.81,1.55.85,2.03.21.98-1.32-3.83-5.68-1.68-8.58,1.5-2.02,4.03-1.93,6.62.26,1.69,1.43,2.44,3.03,2.74,4.68l-2.84.24c-.3-1.11-.69-1.88-1.4-2.48-.83-.7-1.38-.84-1.87-.18-.93,1.26,3.97,5.5,1.73,8.51-1.45,1.95-3.99,2.17-7.02-.39-1.15-.97-2.62-2.86-3.11-4.72Zm3.34,2.98l2.15,1.82-2.09,2.81-2.15-1.82,2.09-2.81Zm8.41-11.3l2.15,1.82-1.85,2.48-2.15-1.82,1.85-2.48Z" strokeWidth="0"/>
                    <path d="m150.45,137.56c2.67-3.59,5.85-3.83,8.54-1.56s3.18,5.64.52,9.21c-2.67,3.59-5.93,3.93-8.61,1.66s-3.11-5.73-.45-9.31Zm5.95,5.02c2.07-2.78,1.73-3.76.97-4.4s-1.74-.77-3.81,2.01c-2.07,2.78-1.81,3.86-1.04,4.5s1.81.67,3.88-2.11Z" strokeWidth="0"/>
                    </g>
                    <path d="m255.31,251.79c35.77,18.58,72.11,38.14,108.96,58.74,22.51,12.59,44.61,25.22,66.3,37.89,0,0-29.01,50.01-79.51,75.48-31.92-57.37-63.84-114.74-95.76-172.11Z" fill="url(#linear-gradient-11)" strokeWidth="0"/>
                    
                    <g id="section4">
                    <path d="m351.13,352.55l-1.25-1.91,2.4-1.79,1.25,1.91-2.4,1.79Zm12.84-5.03l-2.68.12c.04-1.4-.18-2.3-.65-3.02-.56-.85-1.05-.99-1.68-.53-1.28.95,1.43,5.48-1.37,7.56-1.95,1.45-4.1.94-5.6-1.36-.98-1.5-1.1-2.99-.82-4.44l2.52.28c-.11.99-.02,1.71.39,2.34.48.73.91.95,1.55.47,1.22-.9-1.6-5.35,1.31-7.52,1.89-1.4,4.15-1.16,5.91,1.54.67,1.02,1.31,2.88,1.12,4.54Zm-1.89-3.11l-1.25-1.91,2.72-2.02,1.25,1.91-2.72,2.02Z" strokeWidth="0"/>
                    <path d="m357.41,338.65c-3.88-.92-6.88-1.63-8.25-.61-.91.68-.99,1.55-.47,2.33.47.72,1.31.9,2.12,1.06l-.44,2.66c-1.86-.29-3.04-.93-4.09-2.54-1.43-2.18-1.12-4.69.89-6.19,1.63-1.21,4.5-.91,6.87-.49-.42-.5-1-1.24-1.31-1.71l-1.18-1.81,2.3-1.71,5.14,7.84-1.57,1.17Z" strokeWidth="0"/>
                    <path d="m347.85,332.13c-3.47,2.58-6.29,2.24-7.85-.14-1.56-2.39-.88-5.33,2.58-7.9,3.47-2.58,6.39-2.31,7.95.07,1.56,2.39.8,5.39-2.68,7.97Zm-3.46-5.29c-2.69,2-2.73,2.89-2.28,3.57.45.68,1.24.95,3.93-1.05,2.69-2,2.82-2.96,2.37-3.64-.45-.68-1.34-.88-4.03,1.12Z" strokeWidth="0"/>
                    </g>

                    <path d="m46.44,248.98c67.62-1.43,135.25-2.85,202.87-4.28-59.54,33.74-119.08,67.48-178.62,101.23,0,0-28.57-55.91-24.25-96.95Z" fill="url(#linear-gradient-12)" strokeWidth="0"/>
                    
                    <g id="section5">
                    <path d="m109.66,282.75l.38-2.83c1.28.29,2.16.24,2.91-.12.89-.43,1.11-.92.79-1.66-.64-1.52-5.32.49-6.73-2.83-.98-2.31-.12-4.46,2.29-5.62,1.56-.75,2.96-.6,4.25-.04l-.72,2.59c-.9-.3-1.58-.34-2.24-.02-.77.37-1.04.78-.72,1.53.61,1.44,5.23-.69,6.7,2.75.95,2.24.3,4.55-2.51,5.91-1.07.51-2.9.85-4.4.34Zm-2.29-14.37l1.99-.96,1.21,2.84-1.99.96-1.21-2.84Zm5.5,12.96l1.99-.96,1.37,3.22-1.99.96-1.37-3.22Z" strokeWidth="0"/>
                    <path d="m117.22,273.31c-1.75-4.11-.91-7,1.58-8.2,2.49-1.2,5.08.06,6.82,4.16,1.75,4.11.96,7.11-1.53,8.31-2.49,1.2-5.12-.16-6.87-4.27Zm5.52-2.66c-1.35-3.18-2.17-3.38-2.88-3.04-.71.34-1.11,1.13.24,4.31,1.35,3.18,2.21,3.5,2.92,3.16.71-.34,1.06-1.24-.29-4.42Z" strokeWidth="0"/>
                    </g>

                    <path d="m254.69,246.84c66.69,0,133.38.02,200.06.03,0,0,4.32,43.7-23.25,99.78-32.04-19.4-65.29-38.8-99.74-58.06-26.04-14.56-51.75-28.47-77.07-41.75Z" fill="url(#linear-gradient-13)" strokeWidth="0"/>
                    
                    <g id="section3">
                    <path d="m406.01,271.58l-1.84,2.08c-.89-1.03-1.64-1.52-2.44-1.68-.96-.19-1.4.08-1.55.87-.29,1.63,4.62,2.86,3.98,6.43-.44,2.49-2.31,3.72-4.9,3.2-1.69-.34-2.74-1.32-3.5-2.57l1.99-1.67c.57.79,1.11,1.24,1.82,1.38.82.17,1.27,0,1.42-.81.28-1.55-4.66-2.63-4-6.35.43-2.41,2.21-3.92,5.24-3.3,1.15.23,2.83,1.08,3.78,2.41Zm-5.88,13.16l-2.15-.43.54-3.06,2.15.43-.54,3.06Zm2.48-13.98l-2.15-.43.62-3.47,2.15.43-.62,3.47Z" strokeWidth="0"/>
                    <path d="m394.78,270.84l-2.61-.53-1.19,6.7,2.3.46-.38,2.17c-1.43,0-2.38.2-3.41.63l-2.42-.49,1.8-10.13-2.19-.44.5-2.82,8.09,1.63-.5,2.82Z" strokeWidth="0"/>
                    <path d="m384.38,272.59c-.79,4.43-3.02,6.29-5.71,5.75-2.69-.54-4.13-3.16-3.34-7.57.79-4.43,3.05-6.41,5.73-5.87,2.68.54,4.11,3.26,3.32,7.7Zm-5.95-1.2c-.61,3.43-.05,4.09.72,4.25.77.16,1.51-.25,2.12-3.68.61-3.43.07-4.22-.69-4.37-.77-.15-1.54.37-2.15,3.8Z" strokeWidth="0"/>
                    <path d="m374.02,270.5c-.79,4.43-3.02,6.29-5.71,5.75-2.69-.54-4.13-3.16-3.34-7.57.79-4.43,3.05-6.41,5.73-5.87,2.68.54,4.11,3.26,3.32,7.7Zm-5.94-1.2c-.61,3.43-.05,4.09.72,4.25.77.15,1.51-.25,2.12-3.68s.08-4.22-.69-4.37c-.77-.16-1.54.37-2.15,3.8Z" strokeWidth="0"/>
                    </g>

                    <path d="m355.07,75.92c9.38,5.45,20.18,12.79,31.28,22.63,17.21,15.26,29.16,31.23,37.15,43.89-56.78,33.34-113.55,66.68-170.33,100.03,33.97-55.52,67.93-111.03,101.9-166.55Z" fill="url(#linear-gradient-14)" filter="url(#drop-shadow-5)" strokeWidth="0"/>
                    <g>
                    <path d="m354.89,138.76l-1.35,1.42-2.17-2.34,1.36-1.42,2.17,2.34Zm2.69-2.3l.47,2.41c-1.24.17-2.13.52-2.79,1.21-.79.83-.81,1.54-.19,2.21,1.41,1.52,5.05-2.36,7.53.31,1.59,1.72,1.49,3.98-.27,5.83-1.19,1.25-2.48,1.58-3.81,1.52l-.13-2.32c.96-.04,1.62-.23,2.21-.84.67-.7.77-1.37.15-2.04-1.31-1.41-4.86,2.57-7.48-.26-1.57-1.7-1.66-4.04.38-6.18.88-.92,2.45-1.8,3.94-1.87Zm6.87,12.62l-1.35,1.42-1.98-2.13,1.36-1.42,1.97,2.13Z" fill="#231f20" strokeWidth="0"/>
                    <path d="m352.33,154.99l3.95-4.16,1.7,1.83-6.14,6.46-1.24-1.34c-.38-4.77-1.75-6.84-4.98-10.67l2.05-2.16c2.74,3.3,4.04,5.83,4.66,10.04Z" fill="#231f20" strokeWidth="0"/>
                    <path d="m343.3,151.81l.35,2.34c-1.01.04-2.02.27-2.78,1.06-.9.95-1.01,2.07-.12,3.03.87.94,1.92.86,2.73,0,.51-.54.67-.94.86-1.85l1.49-.33,4.16,5-5,5.26-1.69-1.83,3.24-3.41-1.49-1.91c-.19.5-.42.87-.78,1.25-1.52,1.6-3.66,2.04-5.51.04-1.93-2.08-1.53-4.88.19-6.69,1.44-1.51,2.96-1.97,4.34-1.96Z" fill="#231f20" strokeWidth="0"/>
                    <path d="m339.1,163.32c2.96,3.2,3.22,6.16,1.32,8.15s-4.68,1.67-7.64-1.52c-2.96-3.2-3.3-6.24-1.4-8.23s4.75-1.6,7.71,1.6Zm-4.38,4.61c2.38,2.56,3.46,2.59,4.14,1.86s.68-1.87-1.7-4.44c-2.38-2.56-3.53-2.67-4.22-1.95s-.6,1.96,1.78,4.52Z" fill="#231f20" strokeWidth="0"/>
                    </g>
                </g>
                <g id="play_button" data-name="play button" onClick={handleSpin}>
                    <ellipse cx="250.81" cy="243.95" rx="31.19" ry="30.05" fill="url(#radial-gradient)" stroke="url(#radial-gradient-2)" strokeMiterlimit="10"/>
                    <path d="m245.83,226.95s6.12,3.15,12.42,7.36c0,0,8.16,5.62,9.66,7.16,0,0,4.92,2.81,1.77,4.02,0,0-11.25,7.83-19.83,11.78,0,0-3.3,1.47-5.76,2.54,0,0-3.66,2.54-3.42-2.14s-.3-11.11.12-15.93.36-9.37,1.14-12.25-.66-4.28,3.9-2.54Z" fill="#c00" stroke="#fff" strokeMiterlimit="10"/>
                </g>
                <g id="pointer">
                    <rect x="233.54" y="33.12" width="49.97" height="3.76" transform="translate(287.96 -224.22) rotate(88.77)" fill="#300" strokeWidth="0"/>
                    <polygon points="259.27 86.41 272.69 33.4 243.58 34.02 259.27 86.41" fill="#300" strokeWidth="0"/>
                </g>
            </svg>

                <img src={howToSteps} id="how-to-play"/>    

            </div>

            <footer>
                <h1>Copyright 2024© BuyMore Dollars. All rights reserved.</h1>
            </footer>

        </div>
    );
}

export default GamePage;