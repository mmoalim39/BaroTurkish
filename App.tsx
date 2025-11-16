
import React, { useState } from 'react';
import type { Level } from './types';
import { CURRICULUM } from './constants';
import { BriefcaseIcon, BookOpenIcon, GlobeAltIcon, AcademicCapIcon } from './components/Icons';

// --- Reusable Components (Defined outside App to avoid re-creation on re-renders) ---

const Header: React.FC<{ onHomeClick: () => void }> = ({ onHomeClick }) => (
    <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 onClick={onHomeClick} className="text-3xl font-bold text-teal-600 cursor-pointer">BaroTurkish</h1>
            <nav className="hidden md:flex space-x-8 items-center">
                <a onClick={onHomeClick} className="text-gray-600 hover:text-teal-600 transition-colors duration-300 cursor-pointer">Home</a>
                <a href="#levels" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">Courses</a>
                <a href="#payment" className="text-gray-600 hover:text-teal-600 transition-colors duration-300">Pricing</a>
            </nav>
            <button className="bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition-transform duration-300 hover:scale-105 hidden md:block">
                Start Learning
            </button>
        </div>
    </header>
);

const HeroSection: React.FC = () => (
    <section className="bg-teal-50 pt-32 pb-20 text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
                Ku Baro Luuqadda Turkish-ka Si Fudud
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Bilow ilaa Sare – Casharo muuqaal, cod, imtixaan iyo qoraal leh.
            </p>
            <button className="bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-105 shadow-lg">
                Start Learning Free
            </button>
        </div>
    </section>
);

interface InfoCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}
const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex justify-center items-center mb-4">
            <div className="bg-teal-100 p-4 rounded-full">
                {icon}
            </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const WhyLearnSection: React.FC = () => (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Sababta Aad U Baraneyso Turkish</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <InfoCard icon={<BriefcaseIcon className="w-8 h-8 text-teal-600" />} title="Fursado Shaqo" description="Fur albaabada fursado shaqo oo cusub gudaha iyo dibadda Turkiga." />
                <InfoCard icon={<AcademicCapIcon className="w-8 h-8 text-teal-600" />} title="Waxbarasho" description="Hel deeqo waxbarasho oo jaamacadeed oo tayo sare leh." />
                <InfoCard icon={<GlobeAltIcon className="w-8 h-8 text-teal-600" />} title="Safar & Dalxiis" description="Ku raaxayso safarkaaga adigoo si fudud ula hadlaya dadka deegaanka." />
                <InfoCard icon={<BookOpenIcon className="w-8 h-8 text-teal-600" />} title="Dhaqan & Luuqad" description="Baro dhaqan cusub oo qani ah iyo luuqad qurux badan." />
            </div>
        </div>
    </section>
);

const LevelCard: React.FC<{ level: Level; onSelect: (level: Level) => void; }> = ({ level, onSelect }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
        <div className="p-8 flex-grow">
            <div className="uppercase tracking-wide text-sm text-teal-500 font-semibold">{level.levelCode}</div>
            <h3 className="block mt-1 text-2xl leading-tight font-bold text-black">{level.title}</h3>
            <p className="mt-4 text-gray-600">{level.description}</p>
            <ul className="mt-6 space-y-2 text-gray-700">
                <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span> Lessons</li>
                <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span> Audio</li>
                <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span> Vocabulary</li>
                <li className="flex items-center"><span className="text-teal-500 mr-2">✔</span> Quizzes</li>
            </ul>
        </div>
        <div className="p-6 bg-gray-50">
            <button onClick={() => onSelect(level)} className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-300">
                View Curriculum
            </button>
        </div>
    </div>
);

const LevelsSection: React.FC<{ onSelectLevel: (level: Level) => void }> = ({ onSelectLevel }) => (
    <section id="levels" className="py-20 bg-teal-50">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Manhajka Oo Dhamaystiran</h2>
            <div className="grid lg:grid-cols-3 gap-10">
                <LevelCard level={CURRICULUM.beginner} onSelect={onSelectLevel} />
                <LevelCard level={CURRICULUM.intermediate} onSelect={onSelectLevel} />
                <LevelCard level={CURRICULUM.advanced} onSelect={onSelectLevel} />
            </div>
        </div>
    </section>
);


const PaymentSection: React.FC = () => (
    <section id="payment" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Hababka Lacag Bixinta</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <p className="text-center text-gray-600 mb-8">Waxaan aqbalnaa habab kala duwan oo lacag bixin ah si aan kuugu fududeyno inaad hesho koorsooyinkeena.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all duration-300"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Hormuud_logo.svg" alt="EVC Plus" className="h-16 mx-auto grayscale hover:grayscale-0 transition-all duration-300"/>
                    <img src="https://isign.com.so/wp-content/uploads/2019/08/eDahab-1.png" alt="eDahab" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all duration-300"/>
                    <img src="https://play-lh.googleusercontent.com/m-SnwVj1j0c2V92s9Jz2gGF3IUBhbH-jRvi2gx6i7n4VGRi-UaCIg_0L1Y-P26Pxiw=w240-h480-rw" alt="Zaad" className="h-16 mx-auto grayscale hover:grayscale-0 transition-all duration-300"/>
                    <div className="flex flex-col items-center grayscale hover:grayscale-0 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                        <span className="text-gray-600 font-semibold">Bank Transfer</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} BaroTurkish. All rights reserved.</p>
        </div>
    </footer>
);

import CourseDetail from './components/CourseDetail';

// --- Main App Component ---

const App: React.FC = () => {
    const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);

    const handleSelectLevel = (level: Level) => {
        setSelectedLevel(level);
        window.scrollTo(0, 0);
    };

    const handleGoHome = () => {
        setSelectedLevel(null);
    };

    return (
        <div className="bg-white">
            <Header onHomeClick={handleGoHome} />
            <main className="pt-20">
                {selectedLevel ? (
                    <CourseDetail level={selectedLevel} onBack={handleGoHome} />
                ) : (
                    <>
                        <HeroSection />
                        <WhyLearnSection />
                        <LevelsSection onSelectLevel={handleSelectLevel} />
                        <PaymentSection />
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;
