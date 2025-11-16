
import React, { useState, useCallback } from 'react';
import type { Level, Flashcard as FlashcardType, QuizQuestion } from '../types';
import { PlayCircleIcon, DocumentTextIcon, CertificateIcon, RefreshIcon } from './Icons';

// Sub-components defined outside the main component to prevent re-creation
const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode; }> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-3 text-lg font-semibold rounded-t-lg transition-colors duration-300 focus:outline-none ${
            active
                ? 'bg-white text-teal-600 border-b-2 border-teal-600'
                : 'bg-transparent text-gray-200 hover:bg-white/10'
        }`}
    >
        {children}
    </button>
);

const Flashcard: React.FC<{ card: FlashcardType }> = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="perspective-1000 w-full h-48" onClick={() => setIsFlipped(!isFlipped)}>
            <div
                className={`relative w-full h-full transform-style-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
            >
                <div className="absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg flex items-center justify-center p-4">
                    <p className="text-2xl font-bold text-gray-800">{card.turkish}</p>
                </div>
                <div className="absolute w-full h-full backface-hidden bg-teal-500 rounded-lg shadow-lg flex items-center justify-center p-4 rotate-y-180">
                    <p className="text-2xl font-bold text-white">{card.somali}</p>
                </div>
            </div>
        </div>
    );
};

const Quiz: React.FC<{ questions: QuizQuestion[] }> = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerSelect = (option: string) => {
        if (showResult) return;
        setSelectedAnswer(option);
    };
    
    const handleNextQuestion = useCallback(() => {
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            setScore(prev => prev + 1);
        }

        setShowResult(false);
        setSelectedAnswer(null);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
             // End of quiz
             alert(`Quiz finished! Your score: ${score + (selectedAnswer === questions[currentQuestionIndex].correctAnswer ? 1 : 0)} / ${questions.length}`);
        }
    }, [currentQuestionIndex, questions, selectedAnswer, score]);


    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setScore(0);
    };

    const question = questions[currentQuestionIndex];

    return (
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Quiz: Question {currentQuestionIndex + 1}/{questions.length}</h3>
                <button onClick={restartQuiz} className="text-teal-500 hover:text-teal-700 transition-colors">
                    <RefreshIcon className="w-6 h-6" />
                </button>
            </div>
            
            <p className="text-xl text-gray-700 mb-6">{question.question}</p>
            <div className="space-y-4">
                {question.options.map((option, index) => {
                    const isCorrect = option === question.correctAnswer;
                    const isSelected = option === selectedAnswer;
                    let bgColor = 'bg-gray-100 hover:bg-gray-200';
                    if (showResult) {
                        if (isCorrect) bgColor = 'bg-green-200';
                        else if (isSelected) bgColor = 'bg-red-200';
                    } else if (isSelected) {
                        bgColor = 'bg-teal-200';
                    }
                    return (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(option)}
                            className={`w-full text-left p-4 rounded-lg transition-all duration-300 text-gray-800 ${bgColor}`}
                            disabled={showResult}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>

            <div className="mt-8 flex justify-end">
                {showResult ? (
                    <button onClick={handleNextQuestion} className="bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600">
                        {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </button>
                ) : (
                    <button 
                        onClick={() => setShowResult(true)} 
                        disabled={!selectedAnswer}
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed">
                        Check Answer
                    </button>
                )}
            </div>
        </div>
    );
};


// Main CourseDetail Component
interface CourseDetailProps {
    level: Level;
    onBack: () => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ level, onBack }) => {
    const [activeTab, setActiveTab] = useState<'lessons' | 'vocabulary' | 'quizzes'>('lessons');

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-teal-700 text-white py-12 px-6 shadow-md">
                <div className="container mx-auto">
                    <button onClick={onBack} className="text-teal-200 hover:text-white mb-4 transition-colors">&larr; Back to All Levels</button>
                    <p className="text-teal-200 font-semibold">{level.levelCode}</p>
                    <h1 className="text-4xl md:text-5xl font-bold">{level.title}</h1>
                    <p className="mt-2 max-w-2xl text-lg text-teal-100">{level.description}</p>
                </div>
            </div>

            <div className="bg-teal-600 sticky top-20 z-40">
                <div className="container mx-auto flex items-center space-x-2 px-6">
                    <TabButton active={activeTab === 'lessons'} onClick={() => setActiveTab('lessons')}>Lessons</TabButton>
                    <TabButton active={activeTab === 'vocabulary'} onClick={() => setActiveTab('vocabulary')}>Vocabulary</TabButton>
                    <TabButton active={activeTab === 'quizzes'} onClick={() => setActiveTab('quizzes')}>Quizzes</TabButton>
                </div>
            </div>

            <div className="container mx-auto py-12 px-6">
                {activeTab === 'lessons' && (
                    <div className="space-y-6">
                        {level.lessons.map((lesson, index) => (
                            <div key={lesson.id} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-6">
                                <div className="text-3xl font-bold text-teal-200">0{index + 1}</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-800">{lesson.title}</h3>
                                    <p className="text-gray-600 mt-1">{lesson.description}</p>
                                    <div className="mt-4 flex flex-wrap gap-4">
                                        <button className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200">
                                            <PlayCircleIcon className="w-5 h-5" />
                                            <span>Watch Video</span>
                                        </button>
                                        <button className="flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-200">
                                            <DocumentTextIcon className="w-5 h-5" />
                                            <span>Download PDF</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                         <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-6 rounded-r-lg shadow-md flex items-center space-x-6">
                             <CertificateIcon className="w-12 h-12 text-yellow-600 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl font-bold">Get Your Certificate!</h3>
                                <p className="mt-1">Complete all lessons and quizzes in this level to unlock your certificate of completion.</p>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'vocabulary' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                       {level.vocabulary.map((card, index) => (
                           <Flashcard key={index} card={card} />
                       ))}
                    </div>
                )}
                {activeTab === 'quizzes' && (
                   <Quiz questions={level.quizzes} />
                )}
            </div>
        </div>
    );
};

export default CourseDetail;
