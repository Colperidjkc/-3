
import type { Tipitaka } from '../types';

export const TIPITAKA_STRUCTURE: Tipitaka = {
  vinaya: {
    title: "พระวินัยปิฎก",
    romanizedTitle: "Vinaya Piṭaka",
    description: "The Basket of Discipline, containing the rules and procedures that govern the Buddhist monastic community (Sangha).",
    divisions: [
      { title: "ภิกขุวิภังค์", description: "Rules for monks (Bhikkhus)" },
      { title: "ภิกขุนีวิภังค์", description: "Rules for nuns (Bhikkhunis)" },
      { title: "มหาวรรค", description: "The Great Section" },
      { title: "จุลวรรค", description: "The Lesser Section" },
      { title: "ปริวาร", description: "The Accessory" }
    ],
    books: [
      { volume: 1, title: "มหาวิภังค์ ภาค 1", description: "Rules for monks on grave offenses (Pārājika, Saṅghādisesa, Aniyata)." },
      { volume: 2, title: "มหาวิภังค์ ภาค 2", description: "Rules for monks on lesser offenses, completing the 227 precepts." },
      { volume: 3, title: "ภิกขุนีวิภังค์", description: "The 311 rules for fully ordained nuns." },
      { volume: 4, title: "มหาวรรค ภาค 1", description: "Procedures for ordination, Uposatha days, and monastic retreats." },
      { volume: 5, title: "มหาวรรค ภาค 2", description: "Rules concerning leather, medicine, robes, and formal acts of the Sangha." },
      { volume: 6, title: "จุลลวรรค ภาค 1", description: "Rules for handling offenses and legal processes within the Sangha." },
      { volume: 7, title: "จุลลวรรค ภาค 2", description: "Miscellaneous rules, accounts of the first two Buddhist councils." },
      { volume: 8, title: "ปริวาร", description: "A summary and analysis of the Vinaya, often used as a manual." },
    ]
  },
  sutta: {
    title: "พระสุตตันตปิฎก",
    romanizedTitle: "Sutta Piṭaka",
    description: "The Basket of Discourses, containing the Buddha's teachings, dialogues, and sermons for various audiences.",
    divisions: [
      { title: "ทีฆนิกาย", description: "The Long Discourses" },
      { title: "มัชฌิมนิกาย", description: "The Middle-Length Discourses" },
      { title: "สังยุตตนิกาย", description: "The Connected Discourses" },
      { title: "อังคุตตรนิกาย", description: "The Numerical Discourses" },
      { title: "ขุททกนิกาย", description: "The Minor Collection" }
    ],
    books: [
      { volume: 9, title: "ทีฆนิกาย สีลขันธวรรค", description: "13 long discourses concerning conduct, including the Brahmajāla Sutta." },
      { volume: 10, title: "ทีฆนิกาย มหาวรรค", description: "10 long discourses, including the Mahāparinibbāna Sutta." },
      { volume: 11, title: "ทีฆนิกาย ปาฏิกวรรค", description: "11 long discourses, including the Cakkavatti Sutta." },
      { volume: 12, title: "มัชฌิมนิกาย มูลปัณณาสก์", description: "First 50 middle-length discourses on core doctrines." },
      { volume: 13, title: "มัชฌิมนิกาย มัชฌิมปัณณาสก์", description: "Second 50 middle-length discourses for various audiences." },
      { volume: 14, title: "มัชฌิมนิกาย อุปริปัณณาสก์", description: "Final 52 middle-length discourses on diverse topics." },
      { volume: 15, title: "สังยุตตนิกาย สคาถวรรค", description: "Connected discourses with verses, grouped by theme or person." },
      { volume: 16, title: "สังยุตตนิกาย นิทานวรรค", description: "Connected discourses on causation (Paticcasamuppāda)." },
      { volume: 17, title: "สังยุตตนิกาย ขันธวารวรรค", description: "Connected discourses on the five aggregates (khandhas)." },
      { volume: 18, title: "สังยุตตนิกาย สฬายตนวรรค", description: "Connected discourses on the six sense bases (saḷāyatana)." },
      { volume: 19, title: "สังยุตตนิกาย มหาวารวรรค", description: "Connected discourses on the Great Chapter (the path)." },
      { volume: 20, title: "อังคุตตรนิกาย เอก-ทุก-ติกนิบาต", description: "Numerical discourses in groups of one, two, and three." },
      { volume: 21, title: "อังคุตตรนิกาย จตุกกนิบาต", description: "Numerical discourses in groups of four." },
      { volume: 22, title: "อังคุตตรนิกาย ปัญจก-ฉักกนิบาต", description: "Numerical discourses in groups of five and six." },
      { volume: 23, title: "อังคุตตรนิกาย สัตตก-อัฎฐก-นวกนิบาต", description: "Numerical discourses in groups of seven, eight, and nine." },
      { volume: 24, title: "อังคุตตรนิกาย ทสก-เอกาทสกนิบาต", description: "Numerical discourses in groups of ten and eleven." },
      { volume: 25, title: "ขุททกนิกาย (ขุททกปาฐะ, ธรรมบท, etc.)", description: "Includes the Dhammapada, Sutta Nipāta, and other short texts." },
      { volume: 26, title: "ขุททกนิกาย (วิมานวัตถุ, เปตวัตถุ, etc.)", description: "Includes Verses of the Elders (Theragāthā & Therīgāthā)." },
      { volume: 27, title: "ขุททกนิกาย ชาดก ภาค 1", description: "Birth stories of the Buddha's past lives (Jātaka), Part 1." },
      { volume: 28, title: "ขุททกนิกาย ชาดก ภาค 2", description: "Birth stories of the Buddha's past lives (Jātaka), Part 2." },
      { volume: 29, title: "ขุททกนิกาย มหานิทเทส", description: "Commentary on part of the Sutta Nipāta." },
      { volume: 30, title: "ขุททกนิกาย จูฬนิทเทส", description: "Further commentary on the Sutta Nipāta." },
      { volume: 31, title: "ขุททกนิกาย ปฏิสัมภิทามรรค", description: "The Path of Discrimination, an analytical text." },
      { volume: 32, title: "ขุททกนิกาย อปทาน ภาค 1", description: "Stories of the past lives of arahant monks." },
      { volume: 33, title: "ขุททกนิกาย อปทาน ภาค 2", description: "Stories of arahant nuns, plus the Buddhavaṃsa and Cariyāpiṭaka." },
    ]
  },
  abhidhamma: {
    title: "พระอภิธรรมปิฎก",
    romanizedTitle: "Abhidhamma Piṭaka",
    description: "The Basket of Higher Doctrine, a systematic and philosophical analysis of the nature of mind and matter.",
    divisions: [
      { title: "สังคณี", description: "Enumeration of Phenomena" },
      { title: "วิภังค์", description: "The Book of Analysis" },
      { title: "ธาตุกถา", description: "Discourse on Elements" },
      { title: "ปุคคลบัญญัติ", description: "Designation of Persons" },
      { title: "กถาวัตถุ", description: "Points of Controversy" },
      { title: "ยมก", description: "The Book of Pairs" },
      { title: "ปัฏฐาน", description: "The Book of Causal Relations" }
    ],
    books: [
        { volume: 34, title: "สังคณี", description: "Enumerates all phenomena (dhammas) by classifying them into sets." },
        { volume: 35, title: "วิภังค์", description: "Analyzes the phenomena from the Saṅgaṇī in detail." },
        { volume: 36, title: "ธาตุกถา และ ปุคคลบัญญัติ", description: "Correlates phenomena with aggregates, sense bases, and elements; describes types of individuals." },
        { volume: 37, title: "กถาวัตถุ", description: "Discusses points of doctrinal controversy among early Buddhist schools." },
        { volume: 38, title: "ยมก ภาค 1", description: "Applies logical analysis with pairs of questions to eliminate ambiguity." },
        { volume: 39, title: "ยมก ภาค 2", description: "Continuation of the logical analysis of pairs." },
        { volume: 40, title: "ปัฏฐาน ภาค 1", description: "Detailed exposition of the 24 conditions of causal relationships." },
        { volume: 41, title: "ปัฏฐาน ภาค 2", description: "Continuation of the exposition on causal relationships." },
        { volume: 42, title: "ปัฏฐาน ภาค 3", description: "Continuation of the exposition on causal relationships." },
        { volume: 43, title: "ปัฏฐาน ภาค 4", description: "Continuation of the exposition on causal relationships." },
        { volume: 44, title: "ปัฏฐาน ภาค 5", description: "Continuation of the exposition on causal relationships." },
        { volume: 45, title: "ปัฏฐาน ภาค 6", description: "Conclusion of the massive exposition on the 24 causal relations." },
    ]
  },
};
