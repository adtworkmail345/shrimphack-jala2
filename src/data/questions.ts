import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "seberapa banyak sea food yang kamu makan?",
    answers: [
      {
        text: "Banyak banget",
        scores: { paus: 2 }
      },
      {
        text: "Kadang-kadang aja",
        scores: { flaminggo: 1, kembung: 1 }
      },
      {
        text: "sedikit... takut ndut",
        scores: { kepiting: 2 }
      },
      {
        text: "ngga makan sipudd",
        scores: { kambing: 2}
      }
    ]
  },
  {
    id: 2,
    text: "Olahan sea food yang kamu sukai",
    answers: [
      {
        text: "goreng",
        scores: { paus: 1, kembung: 1 }
      },
      {
        text: "rebus",
        scores: { paus: 1, flaminggo: 1 }
      },
      {
        text: "Bakar",
        scores: { paus: 1, kembung: 1 }
      },
      {
        text: "kukus",
        scores: { paus: 1, flaminggo: 1 }
      },
      {
        text: "mentah",
        scores: { paus: 1, kepiting: 1 }
      },
      {
        text: "ultra processed kaya bakso/sempol/dll yg frozen",
        scores: { kambing: 2}
      }
    ]
  },
  {
    id: 3,
    text: "kalau udang suka ga?",
    answers: [
      {
        text: "Suka banget",
        scores: { flaminggo: 1, paus : 1, kepiting: 1 , kembung : 1}
      },
      {
        text: "Duh... ga lagi",
        scores: { kambing: 2}
      }
    ]
  },
  {
    id: 4,
    text: "kenapa suka?",
    answers: [
      {
        text: "rasanya enak",
        scores: {paus : 1, kepiting: 2 , kembung : 1}
      },
      {
        text: "proteinnya dong",
        scores: { flaminggo: 2}
      }
    ]
  },
  {
    id: 5,
    text: "kenapa ga suka?",
    answers: [
      {
        text: "Alergi",
        scores: { kambing: 2}
      },
      {
        text: "Takut kolesterol",
        scores: { flaminggo: 2 }
      },
      {
        text: "Mahal",
        scores: { kembung: 2 }
      },
      {
        text: "Takut ga segar, amis",
        scores: { kepiting: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "udang yang oke menurut kamu gimana sih?",
    answers: [
      {
        text: "yang besar dan segar",
        scores: { kepiting: 2 }
      },
      {
        text: "yang kecil, segar, jadi banyak",
        scores: { kepiting: 2 }
      },
      {
        text: "besar kecil bebas, difroze gapapa",
        scores: { flaminggo: 1, kembung: 2}
      },
      {
        text: "yang rasa rasa aja, ga bisa makan",
        scores: { flaminggo: 2 }
      }
    ]
  },
  {
    id: 7,
    text: "kalau masak udang, suka diolah jadi apa?",
    answers: [
      {
        text: "udang balon",
        scores: { flaminggo: 1, kembung: 1}
      },
      {
        text: "hakau (dimsum udang)",
        scores: { flaminggo: 1, kepiting: 1}
      },
      {
        text: "udang tumis sambal balado asli padang",
        scores: { kembung: 1}
      },
      {
        text: "tomyum",
        scores: { paus: 1 }
      },
      {
        text: "campuran makanan yang udangnya tinggal dikiiiit",
        scores: { kambing: 2 }
      }
    ]
  }
];