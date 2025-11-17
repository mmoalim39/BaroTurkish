
import type { Curriculum } from './types';

export const CURRICULUM: Curriculum = {
  beginner: {
    id: 'beginner',
    title: 'Heerka Bilowga',
    levelCode: 'A1–A2',
    description: 'Baro aasaaska luuqadda Turkish-ka, laga soo bilaabo alifbeetada ilaa jumlado fudud oo maalinle ah.',
    lessons: [
      { id: 'b1', title: 'Alifbeetada (Alfabe)', description: 'Baro xarfaha luuqadda Turkish-ka iyo dhawaaqooda.', content: 'Content for Turkish Alphabet...' },
      { id: 'b2', title: 'Salaan & Isbarasho', description: 'Sida loo salaamo, la isku barto, loona macsalaameeyo.', content: 'Content for Greetings...' },
  Salaanta (Greeting ) [
      {Haye: 	'Merhaba',}'	
      {Subax Wanaagsan:	 'Günaydın',}	
      {Maalin Wanaagsan: 'İyi günler',}
      {Fiid Wanaagsan:	'İyi akşamlar',}
      {Habeen Wanaagsan:	'İyi geceler',}
      {Nabadgelyo:	'Hoşça kal',} 
      {Ku soodhawoow:	'Hoş geldiniz',}
      {Sidee tahay?	'Nasılsın?,'}
      {Sidee tihiin?	'Nasılsınız?}
      {Waan fiicanahay, mahadsanid:	"İyiyim, teşekkürler',}
       {Adigu?	'Sen nasılsın?}'	
       {Waa sidee noloshu?	'Hayat nasıl?}',
       {Waa hagaag:	'İyi',}

      { id: 'b3', title: 'Tirakoob (1-1000)', description: 'Baro tirinta iyo isticmaalka tirooyinka.', content: 'Content for Numbers...' },
      { id: 'b4', title: 'Midabada (Renkler)', description: 'Baro magacyada midabada aasaasiga ah.', content: 'Content for Colors...' },
      { id: 'b5', title: 'Qoyska (Aile)', description: 'Erayada la xiriira qoyska iyo xubnahooda.', content: 'Content for Family...' },
      { id: 'b6', title: 'Maalin Walba (Günlük Rutin)', description: 'Ficillada iyo weedhaha la xiriira hawlaha maalinlaha ah.', content: 'Content for Daily Routine...' },
    ],
    vocabulary: [
      { turkish: 'Merhaba', somali: 'Salaan' },
      { turkish: 'Nasılsın?', somali: 'Sidee tahay?' },
      { turkish: 'İyiyim', somali: 'Waan fiicanahay' },
      { turkish: 'Teşekkür ederim', somali: 'Waan ku mahadsanahay' },
      { turkish: 'Evet', somali: 'Haa' },
      { turkish: 'Hayır', somali: 'Maya' },
      { turkish: 'Su', somali: 'Biyo' },
      { turkish: 'Ekmek', somali: 'Rooti' },
    ],
    quizzes: [
      {
        question: 'What is "Merhaba" in Somali?',
        options: ['Nabad gelyo', 'Sidee tahay?', 'Salaan', 'Mahadsanid'],
        correctAnswer: 'Salaan',
      },
      {
        question: 'How do you say "Yes" in Turkish?',
        options: ['Hayır', 'Evet', 'Lütfen', 'Belki'],
        correctAnswer: 'Evet',
      },
    ],
  },
  intermediate: {
    id: 'intermediate',
    title: 'Heerka Dhexe',
    levelCode: 'B1–B2',
    description: 'Dhis aqoontaada adigoo baranaya naxwaha, samaynta jumlado dhaadheer, iyo sheekooyin gaaban.',
    lessons: [
      { id: 'i1', title: 'Turkish Tenses (Zamanlar)', description: 'Baro wakhtiyada (Present, Past, Future).', content: 'Content for Tenses...' },
      { id: 'i2', title: 'Negative & Question Forms', description: 'Sida loo diido ama su\'aal loo weydiiyo.', content: 'Content for Negative/Question forms...' },
      { id: 'i3', title: 'Intermediate Vocabulary', description: 'Erayada la xiriira shaqada, iskuulka, iwm.', content: 'Content for Intermediate Vocabulary...' },
      { id: 'i4', title: 'Short Stories (Kısa Hikayeler)', description: 'Akhriso oo fahan sheekooyin gaagaaban.', content: 'Content for Short Stories...' },
    ],
    vocabulary: [
      { turkish: 'Okul', somali: 'Iskuul' },
      { turkish: 'Öğretmen', somali: 'Macallin' },
      { turkish: 'Hastane', somali: 'Isbitaal' },
      { turkish: 'Doktor', somali: 'Dhakhtar' },
    ],
    quizzes: [
      {
        question: 'Which tense is "gidiyorum"?',
        options: ['Past', 'Present Continuous', 'Future', 'Imperative'],
        correctAnswer: 'Present Continuous',
      },
    ],
  },
  advanced: {
    id: 'advanced',
    title: 'Heerka Sare',
    levelCode: 'C1–C2',
    description: 'Ku gaar heer sarsare adigoo baranaya naxwe adag, maahmaahyo, iyo diyaar garowga imtixaanada.',
    lessons: [
      { id: 'a1', title: 'Advanced Grammar', description: 'Baro naxwaha adag iyo xeerarkiisa.', content: 'Content for Advanced Grammar...' },
      { id: 'a2', title: 'Idioms & Expressions', description: 'Fahan maahmaahyada iyo weedhaha gaarka ah.', content: 'Content for Idioms...' },
      { id: 'a3', title: 'Essay Writing (Kompozisyon)', description: 'Baro sida loo qoro qormooyin.', content: 'Content for Essay Writing...' },
      { id: 'a4', title: 'Exam Preparation (Sınav Hazırlığı)', description: 'Isku diyaari imtixaanada TÖMER / YÖS.', content: 'Content for Exam Prep...' },
    ],
    vocabulary: [
      { turkish: 'Siyaset', somali: 'Siyaasad' },
      { turkish: 'Ekonomi', somali: 'Dhaqaale' },
      { turkish: 'Edebiyat', somali: 'Suugaan' },
      { turkish: 'Felsefe', somali: 'Falsafad' },
    ],
    quizzes: [
      {
        question: 'What does the idiom "havanda su dövmek" mean?',
        options: ['To cook soup', 'To waste time on a useless task', 'To swim in the sea', 'To make coffee'],
        correctAnswer: 'To waste time on a useless task',
      },
    ],
  },
};
