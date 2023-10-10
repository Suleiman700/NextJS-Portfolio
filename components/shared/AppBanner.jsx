import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowDownCircle } from 'react-icons/fi';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import {useState} from 'react';
import HireMeModal from '../HireMeModal.jsx';

function AppBanner() {
	const [activeTheme] = useThemeSwitcher();
    const [showModal, setShowModal] = useState(false);

    function showHireMeModal() {
        if (!showModal) {
            document
                .getElementsByTagName('html')[0]
                .classList.add('overflow-y-hidden');
            setShowModal(true);
        } else {
            document
                .getElementsByTagName('html')[0]
                .classList.remove('overflow-y-hidden');
            setShowModal(false);
        }
    }

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Hello, I am Suleiman
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					A Full-Stack Developer
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
                    <div className="flex justify-center">
                        <a
                            download="Resume.pdf"
                            href="/files/Resume.pdf"
                            className="font-general-medium flex justify-center items-center w-36 mx-1 sm:w-48 mt-5 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                            aria-label="Download Resume"
                        >
                            <FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                            <span className="text-sm sm:text-lg duration-100">
							Download CV
						</span>
                        </a>
                        <button
                            onClick={showHireMeModal}
                            className="font-general-medium flex justify-center bg-indigo-500 hover:bg-indigo-600 items-center w-36 mx-1 sm:w-48 mt-5 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg text-white focus:ring-1 focus:ring-indigo-900 duration-500"
                            aria-label="Download Resume"
                        >
                            <span className="text-sm sm:text-lg duration-100">
							Hire Me
						</span>
                        </button>
                    </div>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className=""
			>
				<img
					layout="responsive"
					src={
						activeTheme === 'dark'
							? '/images/developer.png'
							: '/images/developer.png'
					}
					alt="Developer"
				/>
			</motion.div>
            {showModal ? (
                <HireMeModal
                    onClose={showHireMeModal}
                    onRequest={showHireMeModal}
                />
            ) : null}
            {showModal ? showHireMeModal : null}
		</motion.section>
	);
}

export default AppBanner;
