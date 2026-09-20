// ====== البيانات ======
const levelsData = {
  level1: {
    name: 'الفرقة الأولى',
    icon: '📘',
    terms: {
      term1: {
        name: 'الترم الأول',
        subjects: [
          { id: 'l1t1s0', name: 'Math 0 ( لطلاب علمي علوم )', icon: '📐', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l1t1s1', name: 'Math I', icon: '📐', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l1t1s2', name: 'Physics I', icon: '⚛️', image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop' },
          { id: 'l1t1s3', name: 'Introduction to Computing Technology', icon: '💻', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop' },
          { id: 'l1t1s4', name: 'Computer Programming I', icon: '🖥️', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' },
          { id: 'l1t1s5', name: 'English', icon: '🇬🇧', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop' },
          { id: 'l1t1s6', name: 'تاريخ علوم', icon: '📜', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop' },
          { id: 'l1t1s7', name: 'إنسان وبيئة', icon: '🌍', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop' }
        ]
      },
      term2: {
        name: 'الترم الثاني',
        subjects: [
          { id: 'l1t2s1', name: 'Math II', icon: '📐', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l1t2s2', name: 'Introduction to Probability', icon: '🎲', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=300&fit=crop' },
          { id: 'l1t2s3', name: 'Physics II', icon: '⚛️', image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop' },
          { id: 'l1t2s4', name: 'Mathematics for Computer Science (MCS)', icon: '🧮', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l1t2s5', name: 'Object Oriented Programming (OOP)', icon: '🔷', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' },
          { id: 'l1t2s6', name: 'Arabic', icon: '🇸🇦', image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop' },
          { id: 'l1t2s7', name: 'حاسب ومجتمع', icon: '🤝', image: 'https://images.unsplash.com/photo-1521791136064-7986c0212926?w=400&h=300&fit=crop' }
        ]
      }
    }
  },
  level2: {
    name: 'الفرقة الثانية',
    icon: '📗',
    terms: {
      term1: {
        name: 'الترم الأول',
        subjects: [
          { id: 'dataScience', name: 'Data Science', icon: '📊', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
          { id: 'softwareEngineering', name: 'Software Engineering', icon: '💻', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop' },
          { id: 'math', name: 'Math III', icon: '➗', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'multimedia', name: 'Multimedia Systems', icon: '🎬', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=300&fit=crop' },
          { id: 'dataStructures', name: 'Data Structures', icon: '🗂️', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop' },
          { id: 'game', name: 'Game Programming', icon: '🎮', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop' }
        ]
      },
      term2: {
        name: 'الترم الثاني',
        subjects: [
          { id: 'l2t2s1', name: 'Math IV', icon: '📐', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l2t2s2', name: 'Web Programming', icon: '🌐', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop' },
          { id: 'l2t2s3', name: 'Database', icon: '🗄️', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop' },
          { id: 'l2t2s4', name: 'Human Computer Interaction', icon: '👤💻', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop' },
          { id: 'l2t2s5', name: 'Software Requirements Analysis', icon: '📋', image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop' }
        ]
      }
    }
  },
  level3: {
    name: 'الفرقة الثالثة',
    icon: '📕',
    terms: {
      term1: {
        name: 'الترم الأول',
        subjects: [
          { id: 'l3t1s1', name: 'Linear Algebra', icon: '🔢', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l3t1s2', name: 'Operating Systems', icon: '⚙️', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop' },
          { id: 'l3t1s3', name: 'Design and Analysis of Algorithms', icon: '🧩', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop' },
          { id: 'l3t1s4', name: 'Advanced Methods for Multimedia', icon: '🎥', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=300&fit=crop' }
        ]
      },
      term2: {
        name: 'الترم الثاني',
        subjects: [
          { id: 'l3t2s1', name: 'Numerical Computation', icon: '🔢', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop' },
          { id: 'l3t2s2', name: 'AI for Game', icon: '🤖', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop' },
          { id: 'l3t2s3', name: 'Mobile Application Development', icon: '📱', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop' }
        ]
      }
    }
  },
  level4: {
    name: 'الفرقة الرابعة',
    icon: '📙',
    terms: {
      term1: {
        name: 'الترم الأول',
        subjects: [
          { id: 'l4t1s1', name: 'Computer Graphics', icon: '🎨', image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=300&fit=crop' },
          { id: 'project1', name: 'Project I', icon: '📋', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' }
        ]
      },
      term2: {
        name: 'الترم الثاني',
        subjects: [
          { id: 'l4t2s1', name: 'Game Design & Modeling', icon: '🎮', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop' },
          { id: 'project2', name: 'Project II', icon: '📋', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop' }
        ]
      }
    }
  }
};
// ====== بيانات المواد ======
const subjectsLectures = {
  l1t1s0: {
    name: '📐 Math 0 ( لطلاب علمي علوم )',
    lectures: [
      'https://drive.google.com/file/d/1aHnLPwjqj41a2ei6tToBmu9McSuucup2/view?usp=drivesdk',
      'https://drive.google.com/file/d/1MZyB1rQLhX_-DOy6pCJTCzhk7ntvilEK/view?usp=drivesdk',
      'https://drive.google.com/file/d/1VVbkUEwrXxZ6xI-t3szUWuEK45PDniwv/view?usp=drivesdk',
      'https://drive.google.com/file/d/1exnrHOGbbrmHNmZtU-9dHScHJAestsJy/view?usp=drivesdk',
      'https://drive.google.com/file/d/1NTIDjx-CW-bEEpqHy0uWDsJjP1nJhMb-/view?usp=drivesdk',
      'https://drive.google.com/file/d/1w0p-u5FPAwzRu5ZpMjzQlWoVtJiwtIsV/view?usp=drivesdk',
      'https://drive.google.com/file/d/1GImQB71CoCVImWvRjHjX2idnc5UHEg_-/view?usp=drivesdk',
      'https://drive.google.com/file/d/1F1PL4fcCz7yNY9Pd6gn6mO87ITxQUPXb/view?usp=drivesdk',
      'https://drive.google.com/file/d/1XnwcrTZaLn2Zwm8S-3Cr_tuxfF-CBnDo/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Qv6vvO9V9zB3Zzo3kBX3C2BBGULYHb2w/view?usp=drivesdk',
      'https://drive.google.com/file/d/1C-KPVFkmfsriUvpkIUZxwsO5CRXfBnJh/view?usp=drivesdk'
    ],
    sections: [], summaries: [], solutions: [], exams: [], examSolutions: []
  },

  l1t1s1: {
    name: '📐 Math I',
    lectures: [
      'https://drive.google.com/file/d/1uqKNbQsG-Bl_mBZpCEWXJVCMBYKtrD-s/view?usp=drivesdk',
      'https://drive.google.com/file/d/1xaKtpak5VwohwkrQoIw4wFgOUfoO69j1/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Ql0XSNjoCSDc-zTDY_tBhJOM1A50ctlm/view?usp=drivesdk',
      'https://drive.google.com/file/d/1AayTWoVbshZDr_3AN_N621JkSICqjg9l/view?usp=drivesdk',
      'https://drive.google.com/file/d/1eypGnyY1VSD12CwCZ168Zguj8HM2IfaM/view?usp=drivesdk',
      'https://drive.google.com/file/d/1_VmYzNWGaV0XHf_rALfA-3V1PmZwPf1R/view?usp=drivesdk',
      'https://drive.google.com/file/d/1bBREFbKjBX8DjI_z0WCosnNWhcwa0ciA/view?usp=drivesdk',
      'https://drive.google.com/file/d/1vXekGBt3GfiyGFKvnrdrf2EfgcGRmbFE/view?usp=drivesdk',
      'https://drive.google.com/file/d/1wGQkgG_JEsvHAnw6uYU5mt-HpLiiqCNA/view?usp=drivesdk',
      'https://drive.google.com/file/d/1N0YnsebF62zoHQcjokE6Fl12RGFSa6XE/view?usp=drivesdk'
    ],
    sections: [
      'https://drive.google.com/file/d/1oLukH2Z4heGeutK9sWEsBGqTfbHwbzqU/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Pet_Oj0krRB8IPxEqBN8_8zTltQw-Tu5/view?usp=drivesdk',
      'https://drive.google.com/file/d/1cIFeS--umZvvL_Hu5lrEVw7XDg9rJjSY/view?usp=drivesdk',
      'https://drive.google.com/file/d/1UEAgffshbimme4TPXZImg2XkUG71Iqgb/view?usp=drivesdk',
      'https://drive.google.com/file/d/182GPrbIxPs-9m2h6dBef4lMaJ9afwRCZ/view?usp=drivesdk',
      'https://drive.google.com/file/d/1rOXhsxxyYA5KilczwjAJfFZ_jk1naMKp/view?usp=drivesdk',
      'https://drive.google.com/file/d/15cTl7DXBpSngC2OUvlmEKOPm6WPw5njT/view?usp=drivesdk',
      'https://drive.google.com/file/d/1nPJSrEgfeek7i_ukAY2mgkiVDR1pI16M/view?usp=drivesdk',
      'https://drive.google.com/file/d/1qlEQrUC9r37CcOZsrTq2H6sWCJ81RkWV/view?usp=drivesdk',
      'https://drive.google.com/file/d/1F_XfPlxe25OrAiM4bo7AhAry1EcH_Gfa/view?usp=drivesdk',
      'https://drive.google.com/file/d/1kKsXMWZ7oh1j5HetIeZhV48RaLVCFVnA/view?usp=drivesdk'
    ],
    summaries: [
      'https://drive.google.com/file/d/166Sbo_D6cFklJDwmJUP2zdT7uHIHEclB/view?usp=drivesdk',
      'https://drive.google.com/file/d/1SL4uLSEOkcMbNaSa0MktJQ8jxoxHxe1B/view?usp=drivesdk'
    ],
    solutions: [
      'https://drive.google.com/file/d/1eUmyMAB5VeNWFKDlnabrIRgyvuIL3U-y/view?usp=drivesdk',
      'https://drive.google.com/file/d/1rrfeAVxt_fwr2AgWggwP3CZORWE2HBZf/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Tsp2EA-XCKFYUgo57zn0HHFxx2IaUrpL/view?usp=drivesdk',
      'https://drive.google.com/file/d/1HmUCvpHtKFrlgnILgywg88Bt3BuC9oYL/view?usp=drivesdk'
    ],
    exams: [], examSolutions: []
  },

  l1t1s2: {
    name: '⚛️ Physics I',
    lectures: [
      'https://drive.google.com/file/d/1DLGjDkDjKW_WbWn1tQIi6d8SfoO66Foj/view?usp=drivesdk',
      'https://drive.google.com/file/d/1WOYHJ3lexlDaqQ6Yk4WKR0sx54ykvQiR/view?usp=drivesdk',
      'https://drive.google.com/file/d/1aqDGu8NTTRax3dGirtL7n3ohGEmxxMKs/view?usp=drivesdk',
      'https://drive.google.com/file/d/15tohSzreLNO2GEBK_lryUvYMtrg1ESwn/view?usp=drivesdk',
      'https://drive.google.com/file/d/1vgfZqG5KLWn1go6iQzgWhxkPrzfjcFdp/view?usp=drivesdk',
      'https://drive.google.com/file/d/1KxluU0b-ahpKTYEp7Aj_NndsDPgf4uLy/view?usp=drivesdk',
      'https://drive.google.com/file/d/1HE3rodAHZrG17Wt48t-lnJ0ZYPsqKnrU/view?usp=drivesdk',
      'https://drive.google.com/file/d/1zvRK44OP6gelNSK4jr4a2eMChoRuGORB/view?usp=drivesdk',
      'https://drive.google.com/file/d/1MNP6XM6qR3OVE8m-SXMqnBsxHGoYTkr9/view?usp=drivesdk'
    ],
    sections: [
      'https://drive.google.com/file/d/1rp9AFRT8sdwj0Nn-qBaJZKr1Ogk3ogTN/view?usp=drivesdk'
    ],
    summaries: [
      'https://drive.google.com/file/d/1fHzz-2X75g7Bg5GtBgJn2hkYbYBoYUj1/view?usp=drivesdk',
      'https://drive.google.com/file/d/1IsmhEx-Hr28yuec6gw8z2MElS9VCV1-u/view?usp=drivesdk'
    ],
    solutions: [
      'https://drive.google.com/file/d/1rOeUJRwmEBd1oeLo2f0uUM5uN2Gb_tjO/view?usp=drivesdk'
    ],
    exams: [], examSolutions: []
  },

  l1t1s3: {
    name: '💻 Introduction to Computing Technology',
    lectures: [
      'https://drive.google.com/file/d/139p2O6zEYuUG_xWshX0JfV9CHCQwrrYG/view?usp=drivesdk',
      'https://docs.google.com/presentation/d/1q-8EQq3QLWakho2R9VilkFKwVZJGqKVA/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true',
      'https://docs.google.com/presentation/d/1-AWnEh9HLtOaJJswf79tS9lk6p3DRgo5/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true',
      'https://docs.google.com/presentation/d/1dqxds9C2wWethkYQp_22EvXSEauHQ9aW/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true',
      'https://docs.google.com/presentation/d/1r45qeF8fVhbaFzqt9kd8haH72N_9xiaJ/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true',
      'https://docs.google.com/presentation/d/17ojMR4EEOsJEmSG9_KJgmaMU33McoEHp/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true',
      'https://docs.google.com/presentation/d/1DkrvoNv_PxiI8Rj4XUclHexmBw1CeaSe/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true',
      'https://docs.google.com/presentation/d/1rGQfgFMTsZBBwoHQkN6W5x1fI1j1N6O2/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true'
    ],
    sections: [
      'https://drive.google.com/file/d/1nS69Omllny-w6FyeArbME-uATzgbXotG/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Tbhb7mkjWCXAhRcB8YcDWMXTerdVNS7l/view?usp=drivesdk',
      'https://drive.google.com/file/d/1HuV1oIaL2gM6uOnMunpyifOMY-1g7uMM/view?usp=drivesdk',
      'https://drive.google.com/file/d/1bftzzIAIPhph5Ox04ntgo9KE6j6UMhUN/view?usp=drivesdk',
      'https://drive.google.com/file/d/1jUl0lrHDZA9gmD_hQdiXJ05AMZIlhqn8/view?usp=drivesdk',
      'https://drive.google.com/file/d/1IQMQIoBlW5FLTOPh-fJGIJh0PFMj3Tye/view?usp=drivesdk',
      'https://drive.google.com/file/d/1_TLi_oMm3LogtEs6P7eto8vQph-fRPRF/view?usp=drivesdk'
    ],
    summaries: [],
    solutions: [
      'https://drive.google.com/file/d/1nS69Omllny-w6FyeArbME-uATzgbXotG/view?usp=drivesdk',
      'https://drive.google.com/file/d/1N2oaFe76POdbVsEpKksoV3l5bmAMAHWT/view?usp=drivesdk',
      'https://drive.google.com/file/d/19G1XMDYnYGqNFhpG8ORLNMsP2KZunn6o/view?usp=drivesdk',
      'https://drive.google.com/file/d/1zK4jGh2C4jB8eWRtBqy9hU2GIiRJGN48/view?usp=drivesdk',
      'https://drive.google.com/file/d/1fU7XM49grHOlb1rpMKdj0R-R2Zb-QGI6/view?usp=drivesdk',
      'https://drive.google.com/file/d/1B1gn8fpzJhI1jHBK9qMigkIoOyVBbYtt/view?usp=drivesdk'
    ],
    exams: [], examSolutions: []
  },

  l1t1s4: {
    name: '🖥️ Computer Programming I',
    lectures: [
      'https://drive.google.com/file/d/1CyeSIBwbk_3m7k2WtAl6sOtRTTmwifIO/view?usp=drivesdk',
      'https://drive.google.com/file/d/1pdY6UCC4ixVXFdxXcb9uxrHIoB1xTbGf/view?usp=drivesdk',
      'https://drive.google.com/file/d/1fvnQlNvDex6JJ6TD9385SU-q87kw1wiT/view?usp=drivesdk',
      'https://drive.google.com/file/d/1PIOMb6QWAAcAYEDQ3mPcpPswUrWMYkON/view?usp=drivesdk',
      'https://drive.google.com/file/d/1A626BsUTtnVPl86cmXYwefP1kpLS6thi/view?usp=drivesdk',
      'https://drive.google.com/file/d/1HmzTSyl0PD8fj6nU0jJsOaSw-XowmX4F/view?usp=drivesdk',
      'https://drive.google.com/file/d/1XUMA7LbEBmcS842iYibT0CPD4OzlqxUK/view?usp=drivesdk',
      'https://drive.google.com/file/d/1ZM48eSkNOLfNFEfKPykys7j7d-Gc-QiM/view?usp=drivesdk'
    ],
    sections: [
      'https://drive.google.com/file/d/1Rz88Totjjh9u3j6uvpENJALXOM-e9rJ5/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Zh_EdMkssq5mZOK7MCHVek5SRXnTeSLs/view?usp=drivesdk',
      'https://drive.google.com/file/d/17wpLkDV6w8dW7lqAxl-lrm97asYv3qVe/view?usp=drivesdk',
      'https://drive.google.com/file/d/1AZQXLewtXdzImM2zWE8Py8ZHVhZqgfYx/view?usp=drivesdk',
      'https://drive.google.com/file/d/1w_pubH9-BzP3wmzcW_BypoCVHR5b5L9E/view?usp=drivesdk',
      'https://drive.google.com/file/d/1gI6O-P8pPP6VTWYF9hzKCyzcQfjLvTwJ/view?usp=drivesdk',
      'https://drive.google.com/file/d/1l92fu5ij_montVYLAkiZcT1gU-tMDyk_/view?usp=drivesdk'
    ],
    summaries: [],
    solutions: [
      'https://drive.google.com/file/d/1q4SsnJ0s9zMx_irRPo2eYm3JytbhKKeT/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Ay_Phv0OkTCWDMx2VMx_crRT8tjJsI3e/view?usp=drivesdk',
      'https://drive.google.com/file/d/1eNT9__-aUbUnNts6OyBcoGaT-JLJGW6E/view?usp=drivesdk',
      'https://drive.google.com/file/d/12lSQxRbx54d_FNmuRYLTAU3z_JmlgC4h/view?usp=drivesdk',
      'https://drive.google.com/file/d/1rrOeSZ-djnQqVkA7fVt10okWJQN1-4AX/view?usp=drivesdk',
      'https://drive.google.com/file/d/1X1LrcB2-OtptrDIQSlc-3XxdHwUK-kPp/view?usp=drivesdk',
      'https://drive.google.com/file/d/13smzLkuxvzzJq77a-otKDwu08wydIPZD/view?usp=drivesdk'
    ],
    exams: [
      'https://drive.google.com/file/d/1M_cnMHzBgv1mWekDcirNxxed2wUQdzMf/view?usp=drivesdk',
      'https://drive.google.com/file/d/1LalUqkj9NEg3Ntegt3IWTxcsxYT-555m/view?usp=drivesdk'
    ],
    examSolutions: [
      'https://drive.google.com/file/d/1HkX9NZsE8HqMVKIrqlE1lBRY-clEdUIG/view?usp=drivesdk'
    ]
  },
  l1t1s5: {
    name: '🇬🇧 English',
    lectures: [
      'https://drive.google.com/file/d/1I_D44mR4_fGh3feuNSXkVB63zMa07-2-/view?usp=drivesdk',
      'https://drive.google.com/file/d/1qvXgiUPrWJnABJeAs7URl7yt0I1gevdL/view?usp=drivesdk',
      'https://drive.google.com/file/d/1TejE77NHgbq3yoR5FOKj5BpBfX8pg2BT/view?usp=drivesdk',
      'https://drive.google.com/file/d/1csoerE3vRbZbnTta2YEBxmul0FmVJ7qB/view?usp=drivesdk',
      'https://drive.google.com/file/d/1yuOXF3FFyOGejb9g_s_EAuEJDT_5ycud/view?usp=drivesdk',
      'https://drive.google.com/file/d/1NKqJvWngii_lLHj_h2HeuR_MkkhXdZJc/view?usp=drivesdk',
      'https://drive.google.com/file/d/1IIfWm2_7fRmTfdk8JBrJLRuF78vz65nU/view?usp=drivesdk'
    ],
    sections: [], summaries: [], solutions: [], exams: [], examSolutions: []
  },

  l1t1s6: {
    name: '📜 تاريخ علوم',
    lectures: [
      'https://drive.google.com/file/d/10koVaYItpWBoTTp3v_ZlWG8TjJ9RXwnD/view?usp=drivesdk',
      'https://drive.google.com/file/d/1VjejxQ6Qp8PElvML7yvw31fS-cz28vk5/view?usp=drivesdk',
      'https://drive.google.com/file/d/1q389Qf2Zp7wZ5GNZGVRQvvWbEF3eYKCH/view?usp=drivesdk',
      'https://drive.google.com/file/d/1YYiELsz2B78Z--KOU0OhbxG6Sq17Sffw/view?usp=drivesdk',
      'https://drive.google.com/file/d/1b1QINlvHkL2Uai4IbYYyty2WqeSEvyhp/view?usp=drivesdk',
      'https://drive.google.com/file/d/1oUD8pEriBgp2AUNiOqdqMSwdj1smF3ul/view?usp=drivesdk',
      'https://drive.google.com/file/d/1VuWNiS5Pmw24257XXPobQAGKrNJMmFNI/view?usp=drivesdk',
      'https://drive.google.com/file/d/1-E4upOS24ooQPdCMmJ58DjZ7cNaS6OqG/view?usp=drivesdk'
    ],
    sections: [], summaries: [], solutions: [], exams: [], examSolutions: []
  },

  l1t1s7: {
    name: '🌍 إنسان وبيئة',
    lectures: [
      'https://drive.google.com/file/d/1oGVl89y2h4zPBzk6y71dQnAfJOBnS7n3/view?usp=drivesdk',
      'https://drive.google.com/file/d/1sw-hxRxH52DZhWwVFZA74FvZzk8cuJcn/view?usp=drivesdk',
      'https://drive.google.com/file/d/1FDBn9cyafyOpfQxJ4LNsy0U_5e_9Ax7g/view?usp=drivesdk',
      'https://drive.google.com/file/d/1CIYlwupSh95SJ_C8ZYuPmfUx4Mu0WcMp/view?usp=drivesdk',
      'https://drive.google.com/file/d/1KinaIFmgcYLxQwzb8Er1kuXbLTjQX3s_/view?usp=drivesdk',
      'https://drive.google.com/file/d/1PFuMQZUtqYqN9J1tw3KS4j40B1zoAQP7/view?usp=drivesdk',
      'https://drive.google.com/file/d/1-6w1-gwjvHRzb4SVG45xpZwU-76I5dTj/view?usp=drivesdk',
      'https://drive.google.com/file/d/1soTNNpXmjae9pgD_XUoWHkyGoqyiOSea/view?usp=drivesdk',
      'https://drive.google.com/file/d/1eQD5t02tPvwk1FPOSqtSOjYYUvcsNC0v/view?usp=drivesdk'
    ],
    sections: [], summaries: [], solutions: [], exams: [], examSolutions: []
  },

  l1t2s1: {
    name: '📐 Math II',
    lectures: [
      'https://drive.google.com/file/d/1nG20OOBt0WVsccLickSraegVHeHGTNNV/view?usp=drivesdk',
      'https://drive.google.com/file/d/1FJ91mxOYV_DJdujVl2lnLyvp-LJSx5Be/view?usp=drivesdk',
      'https://drive.google.com/file/d/1hWJ0IbLjng3BhBx6Cq8h04m2TxOMFJzZ/view?usp=drivesdk',
      'https://drive.google.com/file/d/1y_fKF4_6XX2Y8VDhLjodXEHubVLW1LHZ/view?usp=drivesdk',
      'https://drive.google.com/file/d/1LlqNgyemMUsXi76NRUDZxBDleuvamEMq/view?usp=drivesdk',
      'https://drive.google.com/file/d/1poy1tcdtGy8UZcDPCu8DSZxJLHsHtlnd/view?usp=drivesdk',
      'https://drive.google.com/file/d/1KiSEif9hg2AOupFgwFZMYXugAp-ZUBEw/view?usp=drivesdk'
    ],
    sections: [
      'https://drive.google.com/file/d/1dcyiaVivcrqrDDDWLclAuPJlU2mCteBR/view?usp=drivesdk',
      'https://drive.google.com/file/d/12yDLgT9zqvr_vlHZzWuXdhsqm-ltXeC0/view?usp=drivesdk',
      'https://drive.google.com/file/d/16qDyD4zRFaTYW_TQSrSHpJ-eYopJK7V1/view?usp=drivesdk',
      'https://drive.google.com/file/d/1SMjlSl4fmtwCnXxk2gd9uOq4QbaXzWzd/view?usp=drivesdk'
    ],
    summaries: [
      'https://drive.google.com/file/d/1TtJoDIBjiS-auGn-L8MMW2DDIuo-PTq_/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Q9LMY_ILg3XUZae2UGRH2LZtgMfSGA8p/view?usp=drivesdk'
    ],
    solutions: [
      'https://drive.google.com/file/d/1YNCxIjXNou_M6XKAPutX_4sltfSgRRte/view?usp=drivesdk',
      'https://drive.google.com/file/d/1RS7BixvOvIIM_dZ9NhmhcjRm6DUMKllx/view?usp=drivesdk',
      'https://drive.google.com/file/d/1rBhUYN3CUo0uf5XXJltHJGMNMcKZ524L/view?usp=drivesdk',
      'https://drive.google.com/file/d/1W2mXkOSdc6daHkdqcE-V15IHxomhFSPV/view?usp=drivesdk',
      'https://drive.google.com/file/d/1w0eAObsIpmxTY9eAJuTw3hWUu80rHhvo/view?usp=drivesdk',
      'https://drive.google.com/file/d/1iFQfzoHPPHTvLNM53jRxeNUaFDfGjqGF/view?usp=drivesdk',
      'https://drive.google.com/file/d/1E7vzNnW5KBBd4atVpuplb8bwJqt8-9UE/view?usp=drivesdk'
    ],
    exams: [], examSolutions: []
  },

  l1t2s2: {
    name: '🎲 Introduction to Probability',
    lectures: [
      'https://drive.google.com/file/d/1E7KZzLy3fuZxz4HHoJ7NtTI_3eBywvM8/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Fk4fmDuXqirgnMwvWqh_1XGIrEDbFdsy/view?usp=drivesdk',
      'https://drive.google.com/file/d/15UiV30ifIZRssAVuAIL7-MzlpZxH5gD3/view?usp=drivesdk',
      'https://drive.google.com/file/d/1joZ7PVuG3iqSlS5zwgG7xHVbnGGn5G9K/view?usp=drivesdk',
      'https://drive.google.com/file/d/1yHCmSqd-R0ftORlxKSMZ9FdMY-yvGjUA/view?usp=drivesdk',
      'https://drive.google.com/file/d/19AVsQzZU5lff3yCnfhOVzjk_TJ13WfBj/view?usp=drivesdk'
    ],
    sections: [
      'https://drive.google.com/file/d/15FnhO3iGtt7LBcq63ua_9FsGfkMrSsTU/view?usp=drivesdk',
      'https://drive.google.com/file/d/1T3kGTeZ79-g1bvQEzMiNpta0yWH8lsvB/view?usp=drivesdk',
      'https://drive.google.com/file/d/1vKq2UUGkwL0Oz5-aF1DyKOIDJ0aDwxGD/view?usp=drivesdk',
      'https://drive.google.com/file/d/1aQSMTZa1Rf2F7O3-J0jm1HM9StEb5tvk/view?usp=drivesdk',
      'https://drive.google.com/file/d/1MaxXa1PJCPpUppNrZnxUIT95A8B43GtU/view?usp=drivesdk',
      'https://drive.google.com/file/d/1FaSYLfLWjG5lR-D-ZSlz2ku6hNANLY2U/view?usp=drivesdk',
      'https://drive.google.com/file/d/1iTeFTddP7tzHNdLO-rClfibQuCJRtVA1/view?usp=drivesdk'
    ],
    summaries: [
      'https://drive.google.com/file/d/1cG_9pOdhMyASGVRZWZCXZenr7aB3M0eY/view?usp=drivesdk'
    ],
    solutions: [
      'https://drive.google.com/file/d/1rgeBBDK64ZqZRrnwx1hq0chCNMvMAHe4/view?usp=drivesdk',
      'https://drive.google.com/file/d/1iqm88Y01C9nbX4FgL9W-uyGpThOgaTcc/view?usp=drivesdk',
      'https://drive.google.com/file/d/1AR0FmvEYe9edw74MLY91ccGTztNiO0hN/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Mv6bhH_6FJ-hDpALdxGqvkaOtnulfxXR/view?usp=drivesdk',
      'https://drive.google.com/file/d/1AcL36KsYwRPA761TdJb07bzN3hTj2N1c/view?usp=drivesdk',
      'https://drive.google.com/file/d/125t4BDB5taKPzKK3tFtn6QVPK8gGXgLr/view?usp=drivesdk',
      'https://drive.google.com/file/d/1peDch-xD0Um8udmTmMx0ibBtUcOLEr_c/view?usp=drivesdk'
    ],
    exams: [
      'https://drive.google.com/file/d/17BYFJFOnh2yAMlQmqdWC8q9mCfvt7APN/view?usp=drivesdk',
      'https://drive.google.com/file/d/1m9y330qoASjfTlMmr-dGq9HDFbcpiMOt/view?usp=drivesdk'
    ],
    examSolutions: [
      'https://drive.google.com/file/d/17yXaOWJau3ZlPVTDREKj8zg6p48-SvYs/view?usp=drivesdk',
      'https://drive.google.com/file/d/1bMwyche65bBH5vdyoISnH4S5_l3tOi1F/view?usp=drivesdk',
      'https://drive.google.com/file/d/1qs8VcXv1LK-uPmqmZuru8BmEm6UlvRf1/view?usp=drivesdk',
      'https://drive.google.com/file/d/1klHGfOmCCqwwtSGT1hp2iaHN2tVeK-5Q/view?usp=drivesdk',
      'https://drive.google.com/file/d/1_ONDwpd5qxEVBZiA9q2QVFbobE7CjqSs/view?usp=drivesdk'
    ]
  },

  l1t2s3: {
    name: '⚛️ Physics II',
    lectures: [
      'https://drive.google.com/file/d/1zAvRmSz778zWWwUS3ZuOrTlqI8RMTnlj/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Q4T-yX0ztwmnHP5cGdpBVCndTG-6XOhz/view?usp=drivesdk',
      'https://drive.google.com/file/d/1c692zmV8UItf0aZuIGApOcOc4c-Mt7NN/view?usp=drivesdk',
      'https://drive.google.com/file/d/1mSmyuJq3Nai5FtrgIlZzfoB5JbOki69I/view?usp=drivesdk',
      'https://drive.google.com/file/d/1s4ujQKyZxQjXTphfBGHkY15OHruN0EnN/view?usp=drivesdk',
      'https://drive.google.com/file/d/1CXWMancmVRWwcFXYvkdgm1nmgCHTytz6/view?usp=drivesdk',
      'https://drive.google.com/file/d/1quxVB7Gy7UqBRHtMV0KAvz4JYhv8Pr8Q/view?usp=drivesdk',
      'https://drive.google.com/file/d/1QSKOH4B-RxTh2VL66JADUJXIRlzyT2cn/view?usp=drivesdk',
      'https://drive.google.com/file/d/1tn_zFBqMFSbefWMYxdFrs29FBosooTMi/view?usp=drivesdk'
    ],
    sections: [
      'https://drive.google.com/file/d/1Eqgran95B8T-E9hbVYW_upTziu_UGAyJ/view?usp=drivesdk'
    ],
    summaries: [
      'https://drive.google.com/file/d/1s2WAHLGBS0DGxIwGGjotXmqByN_TvUvW/view?usp=drivesdk',
      'https://drive.google.com/file/d/1p1nMRqNA2qBmnlhzLbD2zC3np3XpzGf3/view?usp=drivesdk',
      'https://drive.google.com/file/d/1QlR8aCHmidJY6plDmRV1dqha6Ea2qPnZ/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Bve2LPvPEepenQCmZd1Q93gd1AvKw8cR/view?usp=drivesdk',
      'https://drive.google.com/file/d/1LxOvLek-9T5S_nzYWwUOHL5HX93swhDj/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Tutf3h2BHDiTZKfbNoVYdYWI3YMOTxfu/view?usp=drivesdk',
      'https://drive.google.com/file/d/100mTNjKmNWN8_NdT2asi4E0Xg6ShNEHU/view?usp=drivesdk',
      'https://drive.google.com/file/d/11TJBBjXVzn2ra5FC0blxxrBtdG-nRlAT/view?usp=drivesdk',
      'https://drive.google.com/file/d/1geV2p0M8K8kqI2J4uIYhvExn-V2uEMx6/view?usp=drivesdk',
      'https://drive.google.com/file/d/1-L3wvagfnyNDxAjiDywBFSqKFBbEDOVQ/view?usp=drivesdk',
      'https://drive.google.com/file/d/1IybJBBto2QK2YCEohYT4XGmz3UaSFGtj/view?usp=drivesdk'
    ],
    solutions: [
      'https://drive.google.com/file/d/1oR-TzeHSokHJ44dH3S6XCMtNUxbc76es/view?usp=drivesdk',
      'https://drive.google.com/file/d/1QGPkYaItVEOR7r5T-SUnOh-JbGC2E8CE/view?usp=drivesdk'
    ],
    exams: [
      'https://drive.google.com/file/d/1GxI8EEE7VWOPCxjRQgMIhVZD14XlmoHi/view?usp=drivesdk',
      'https://drive.google.com/file/d/1k9OBrkomD4JQRjTHWaZhrs1hY4sLXLUi/view?usp=drivesdk'
    ],
    examSolutions: [
      'https://drive.google.com/file/d/1y3X68n7hLy5WTSWybsFolmrZDPXdyAuG/view?usp=drivesdk',
      'https://drive.google.com/file/d/1bYdH2ddl5Goqo1h-dKqJglcu-w3FIjs4/view?usp=drivesdk'
    ]
  },

  l1t2s4: {
    name: '🧮 Mathematics for Computer Science (MCS)',
    lectures: [
      'https://drive.google.com/file/d/1xBOSOytc7wYZmbxEABAyW4GSnVj38iML/view?usp=drivesdk',
      'https://drive.google.com/file/d/1lRB_h8s0nN4IbTawfRnatdeiVSt_eEhZ/view?usp=drivesdk',
      'https://drive.google.com/file/d/1LXQKJoGzeJcmIsLvZ2YGzuRHkHRrhxia/view?usp=drivesdk',
      'https://docs.google.com/presentation/d/1hBgv2ZYpzQDjkDD6l6F_Ch00raBBP0yq/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true',
      'https://docs.google.com/presentation/d/1GFnF0x4qxF9lQK2eRFU-5kJUO4Xb2Fn9/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true',
      'https://docs.google.com/presentation/d/1u5njKueP9i-li9LKXk5_MHIYa6M3-8BY/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true',
      'https://docs.google.com/presentation/d/1ROoNg3yck1VSZYoebWEEz71uEgHLUFVW/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true',
      'https://docs.google.com/presentation/d/1EkzQd9slt66e1WQ2lYR6Z-uj0d2B8HTe/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true'
    ],
    sections: [
      'https://drive.google.com/file/d/1M8ayrtQcwNRk-8edvCKbu25H1mxXmsaK/view?usp=drivesdk',
      'https://drive.google.com/file/d/1t6-xF17ETQysG51Apg6971T3q3K7iaZv/view?usp=drivesdk',
      'https://drive.google.com/file/d/1wUrdXgzFMLZ6Ss6Kf9Rnpl85EOLOlBL8/view?usp=drivesdk',
      'https://drive.google.com/file/d/1cFrxG8bq1bibbw1t7zxsCoQnBwhoqgEr/view?usp=drivesdk',
      'https://drive.google.com/file/d/15Vyjo_SoOTUEwd44IRKXhEWLNmIE_liv/view?usp=drivesdk',
      'https://drive.google.com/file/d/1y5brJaqoACbzyZlowvLOiJ-h6A9OSNL6/view?usp=drivesdk'
    ],
    summaries: [],
    solutions: [
      'https://drive.google.com/file/d/133KKd-I2xhwOGETdwspwqorsm4HGqLSj/view?usp=drivesdk',
      'https://drive.google.com/file/d/1uYvTCY7fL9Wh7QDjHyW3m__8t9JMk7mH/view?usp=drivesdk',
      'https://drive.google.com/file/d/1jj5eJWATeru4Hjwro0-gR_DNO6qZlrf9/view?usp=drivesdk',
      'https://drive.google.com/file/d/1UFdv3IH8NZh0z4WfQMpXiQKNv4DFTELF/view?usp=drivesdk',
      'https://drive.google.com/file/d/1fhduUQEyaD5iViijN_GgyB_UwkLhMyoy/view?usp=drivesdk',
      'https://drive.google.com/file/d/1WOfomvX1Ny0zyNLhIEA9jK0OAUKtP1A_/view?usp=drivesdk',
      'https://drive.google.com/file/d/1CZfGg6sYuJVokpLNhRmy8ElIp6mCDTRH/view?usp=drivesdk',
      'https://drive.google.com/file/d/10UhEMm7b1GoRrsHIpD6k-nXqKZhq5xNM/view?usp=drivesdk'
    ],
    exams: [], examSolutions: []
  },

  l1t2s5: {
    name: '🔷 Object Oriented Programming (OOP)',
    lectures: [
      'https://drive.google.com/file/d/1BYo0qyHCVlMsNeVnd48LFE_kEWw6dwqK/view?usp=drivesdk',
      'https://drive.google.com/file/d/1MOJqcZYsG-Yz8CwnbLHbH7-G3IdmjUNZ/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Axgj0vnUo5zlTBvVIj8kQrqVGTvUGo-U/view?usp=drivesdk',
      'https://drive.google.com/file/d/1Dj_4-iJapyQpy3l9LQuk45Wvy-XWqaR1/view?usp=drivesdk',
      'https://drive.google.com/file/d/1fRerjJ2uRY0gC-V3V8wvbTic7hV_BVcJ/view?usp=drivesdk',
      'https://drive.google.com/file/d/18G0b5vKecCfFFlW-IV96JpRTHiev3Cj-/view?usp=drivesdk',
      'https://drive.google.com/file/d/1QpXzBPCkzvOiLlc0FBfGwtXIq-z20s57/view?usp=drivesdk'
    ],
    sections: [
      'https://drive.google.com/file/d/1dU_IXDVGIwenP20I_TPlCCsWJ5-ps0yP/view?usp=drivesdk',
      'https://drive.google.com/file/d/1xKM6B_J0G92zc1s4iagZ7-kbPIAXD4uE/view?usp=drivesdk',
      'https://drive.google.com/file/d/1mbl1DYRPvpSKXCKcYHwagA1JCXabhgvY/view?usp=drivesdk',
      'https://drive.google.com/file/d/1LZ51MTneKZqXKFtf2ZXsbEBHIzGb1zfi/view?usp=drivesdk',
      'https://drive.google.com/file/d/17Y73viPkXMN30O6uvhEkkT8-ngWj80qV/view?usp=drivesdk',
      'https://drive.google.com/file/d/1agRgJrxN9KFK_32lKYbSY-L7OvW7YnZU/view?usp=drivesdk',
      'https://drive.google.com/file/d/1v3yQaV-_nfQyPxtQqI2ogztjSMEK_3BX/view?usp=drivesdk',
      'https://drive.google.com/file/d/1aAfK8S1ld8DVykHG9LQVB4RhNr0GoO2v/view?usp=drivesdk',
      'https://drive.google.com/file/d/1HuBQWTF_sUB8ZNAChsAHNXPfNjH0M7Hc/view?usp=drivesdk'
    ],
    summaries: [
      'https://drive.google.com/file/d/1wghhlbPjogeykxgD-L4tVb5bK9jezxqx/view?usp=drivesdk'
    ],
    solutions: [
      'https://drive.google.com/file/d/1Ubnmn7NwtuCGrcNweFqrU7Vz0RrGAg7w/view?usp=drivesdk',
      'https://drive.google.com/file/d/1KrUKPIz3mEmgAcPB-9uzwAK3jv_2MF4s/view?usp=drivesdk',
      'https://drive.google.com/file/d/1iYmtqFstk_bXsZFzxMpYiZ6WxhtvZDqT/view?usp=drivesdk',
      'https://drive.google.com/file/d/1oD01E20dEmor-_SVzYavh-Kd_iO0OVMU/view?usp=drivesdk',
      'https://drive.google.com/file/d/1vukrRdmjIbTB0pYCA7-JbIQehu4RUBpP/view?usp=drivesdk',
      'https://drive.google.com/file/d/17VS0qXvVGLHm2gG0fhLihNpvOumJYzfX/view?usp=drivesdk',
      'https://drive.google.com/file/d/14TpvGiXMlXxyrhSo9OhwfaxoJLuDvNal/view?usp=drivesdk',
      'https://drive.google.com/file/d/1pu406xJ9zk8-vhoU_Bdv0S2NRWbeeRpv/view?usp=drivesdk',
      'https://drive.google.com/file/d/1-M3WklVkzvjvSGkPnlbQ6JcFbgoQm-Z2/view?usp=drivesdk'
    ],
    exams: [
      'https://drive.google.com/file/d/1EHwI0B6t8sA2f5rUTH8knV8J7IZNhbZF/view?usp=drivesdk',
      'https://drive.google.com/file/d/1jR_EvG_BusRU5nhQenq8syTa1Zm47gJH/view?usp=drivesdk'
    ],
    examSolutions: []
  },

  l1t2s6: {
    name: '🇸🇦 Arabic',
    lectures: [], sections: [],
    summaries: [
      'https://drive.google.com/file/d/1k9pP8rg_KPsRpLSVptCEEmqkxSH3gUk8/view?usp=drivesdk',
      'https://drive.google.com/file/d/1IyIJijLImISp7ibMzmdJIgShtOeYuM2_/view?usp=drivesdk',
      'https://drive.google.com/file/d/1whL_Ma8pWVqvVwtbFh2L_UhDeH30u74U/view?usp=drivesdk'
    ],
    solutions: [],
    exams: [
      'https://drive.google.com/file/d/1xaNzL80mmyIv4d6zVE0QVLRwNyohuMHW/view?usp=drivesdk'
    ],
    examSolutions: []
  },

  l1t2s7: {
    name: '🤝 حاسب ومجتمع',
    lectures: [
      'https://drive.google.com/file/d/1Vqks2Dz1-3t9xnsLYBRdlYGiY_ZwX58S/view?usp=drivesdk',
      'https://drive.google.com/file/d/1dJ7W3-dK_0susc4FRGc3zRR95h4d_Op5/view?usp=drivesdk',
      'https://docs.google.com/presentation/d/1Mv1DSa5KqnSwXus_boRWHxXPNYyyPVGg/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true',
      'https://docs.google.com/presentation/d/1TZ-4y04vn7IahJVW7lUeaRXPQcZDoWmi/edit?usp=drivesdk&ouid=116809461578921657543&rtpof=true&sd=true'
    ],
    sections: [], summaries: [], solutions: [],
    exams: [
      'https://drive.google.com/file/d/1cri8Kd66qEnHUAxoYf2IaMoOPQS3x_OS/view?usp=drivesdk'
    ],
    examSolutions: []
  },

  dataScience: {
    name: '📊 Data Science',
    lectures: [
      'https://drive.google.com/file/d/1dbKi-vRIFx3Ynl7-FmAtGcwaPr8LSWBh/view?usp=drivesdk',
      'https://drive.google.com/file/d/1r52kwBYqGtPAtTE13VAQIkTkEURh5r2H/view?usp=drivesdk',
      'https://drive.google.com/file/d/1YtZ1sNChbpqAPzc5mY2kaQEAqSkJR7Mz/view?usp=drivesdk',
      'https://drive.google.com/file/d/1HiOVGb66Rtc9ROM_-ikXoajCRSuaNT6a/view?usp=drivesdk',
      'https://drive.google.com/file/d/1jHCmkxxaThQvdZcrJ4yYWkg4AaVIGi-E/view?usp=drivesdk',
      'https://drive.google.com/file/d/1yT02KGhdF4AjYqlrsLUB7-DC34K-8MlU/view?usp=drivesdk',
      'https://drive.google.com/file/d/1LEc3a8DWWjQk4lrwC0DcTbhKoIZ1atty/view?usp=drivesdk',
      'https://drive.google.com/file/d/1GbZRS7CNDoez8gVlARgGZspHBbkHhOF4/view?usp=drivesdk'
    ],
    sections: [], summaries: [], solutions: [], exams: [], examSolutions: []
  },

  softwareEngineering: { name: '💻 Software Engineering', lectures: [], sections: [], summaries: [], solutions: [], exams: [], examSolutions: [] },
  math: { name: '➗ Math III', lectures: [], sections: [], summaries: [], solutions: [], exams: [], examSolutions: [] },
  multimedia: { name: '🎬 Multimedia Systems', lectures: [], sections: [], summaries: [], solutions: [], exams: [], examSolutions: [] },
  dataStructures: { name: '🗂️ Data Structures', lectures: [], sections: [], summaries: [], solutions: [], exams: [], examSolutions: [] },
  game: { name: '🎮 Game Programming', lectures: [], sections: [], summaries: [], solutions: [], exams: [], examSolutions: [] },

  project1: { name: '📋 Project I', lectures: [], sections: [], summaries: [], solutions: [], exams: [], examSolutions: [], isProject: true },
  project2: { name: '📋 Project II', lectures: [], sections: [], summaries: [], solutions: [], exams: [], examSolutions: [], isProject: true }
};
// ====== المتغيرات ======
let currentLevel = null;
let currentSubjectId = null;
let isTransitioning = false;
let historyStack = ['welcome'];
let isBackAction = false;
let isFirstLoad = true;
let fbAuth = null;
let fbFns = null;
let currentUser = null;
let isGuest = false;
let gateMode = 'login';

// ====== نظام الأصوات ======
function playSound(type) {
    try {
        let audioContext = new (window.AudioContext || window.webkitAudioContext)();
        let oscillator = audioContext.createOscillator();
        let gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        switch(type) {
            case 'portal':
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
                oscillator.frequency.linearRampToValueAtTime(700, audioContext.currentTime + 0.25);
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.35);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.35);
                break;
            case 'click':
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(900, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.08);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.08);
                break;
            case 'techpop':
                oscillator.type = 'square';
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
                oscillator.frequency.linearRampToValueAtTime(1000, audioContext.currentTime + 0.15);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.2);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.2);
                break;
            case 'back':
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(550, audioContext.currentTime);
                oscillator.frequency.linearRampToValueAtTime(200, audioContext.currentTime + 0.2);
                gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.25);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.25);
                break;
            case 'success':
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
                oscillator.frequency.linearRampToValueAtTime(800, audioContext.currentTime + 0.1);
                oscillator.frequency.linearRampToValueAtTime(1000, audioContext.currentTime + 0.2);
                gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
                break;
            default:
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(500, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.1);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
        }
    } catch(e) { console.log('Audio not supported'); }
}

// ====== إدارة التاريخ ======
function pushHistory(state, title, url) {
  if (isBackAction) { isBackAction = false; return; }
  history.pushState(state, title, url);
  historyStack.push(state.page);
}

function saveCurrentState() { }
function restoreSavedState() { return false; }

// ====== حماية XSS ======
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ====== مفتاح المستخدم ======
function getUserKey() {
  if (currentUser && currentUser.uid) return `u_${currentUser.uid}`;
  if (isGuest) return 'guest';
  return 'anon';
}

// ====== إعداد تبويبات المادة ======
function setupMaterialTabs(subjectId, isProject) {
  const tabsContainer = document.getElementById('materialTabs');
  tabsContainer.innerHTML = '';
  let tabs = [], tabKeys = [];
  if (isProject) {
    tabs = ['📋 متطلب المشروع'];
    tabKeys = ['project'];
  } else {
    tabs = ['📖 محاضرات', '✏️ سكاشن', '📝 ملخصات', '🎯 حل السكاشن', '📝 اختبارات', '✅ حل الاختبارات'];
    tabKeys = ['lectures', 'sections', 'summaries', 'solutions', 'exams', 'examSolutions'];
  }

  tabs.forEach((tab, index) => {
    const btn = document.createElement('button');
    btn.className = `material-tab ${index === 0 ? 'active' : ''}`;
    btn.textContent = tab;
    btn.dataset.tabKey = tabKeys[index];
    btn.onclick = () => switchMaterialTab(tabKeys[index]);
    tabsContainer.appendChild(btn);
  });

  const contentContainer = document.getElementById('materialContent');
  contentContainer.innerHTML = '';

  if (isProject) {
    const div = document.createElement('div');
    div.className = 'material-content active';
    div.id = 'material-project';
    div.innerHTML = `
      <div style="text-align:center;padding:40px 20px;">
        <span style="font-size:3.5rem;display:block;margin-bottom:15px;">📋</span>
        <h2 style="color:var(--accent);margin-bottom:12px;">متطلب مشروع التخرج</h2>
        <p style="font-size:1rem;color:var(--text-secondary);margin-bottom:25px;">سيتم إضافة رابط المشروع هنا قريباً</p>
        <a href="#" target="_blank" style="display:inline-block;padding:12px 35px;background:var(--accent);color:#fff;border-radius:12px;text-decoration:none;font-weight:700;">🚀 اضغط لإضافة الرابط</a>
      </div>
    `;
    contentContainer.appendChild(div);
  } else {
    tabKeys.forEach((key, index) => {
      const div = document.createElement('div');
      div.className = `material-content ${index === 0 ? 'active' : ''}`;
      div.id = `material-${key}`;
      contentContainer.appendChild(div);
    });
    renderMaterialContent(subjectId, 'lectures');
    renderMaterialContent(subjectId, 'sections');
    renderMaterialContent(subjectId, 'summaries');
    renderMaterialContent(subjectId, 'solutions');
    renderMaterialContent(subjectId, 'exams');
    renderMaterialContent(subjectId, 'examSolutions');
  }
}

// ====== الدخول إلى المنصة ======
function enterPlatform() {
  playSound('portal');
  const welcomePage = document.getElementById('welcomePage');
  const mainPage = document.getElementById('mainPage');
  welcomePage.classList.add('exiting');
  setTimeout(() => {
    welcomePage.classList.add('hidden');
    welcomePage.classList.remove('exiting');
    mainPage.classList.remove('hidden');
    mainPage.classList.remove('entering');
    void mainPage.offsetWidth;
    mainPage.classList.add('entering');
    pushHistory({ page: 'main' }, 'الرئيسية', '#main');
    setTimeout(applyNeonFrameToCurrentPage, 100);
  }, 300);
}

// ====== الانتقال بين الصفحات ======
function transitionToPage(pageIn, pageOut, stateData, callback) {
  if (isTransitioning) return;
  isTransitioning = true;
  if (pageOut && !pageOut.classList.contains('hidden')) {
    pageOut.classList.remove('entering');
    pageOut.classList.add('exiting');
    setTimeout(() => {
      pageOut.classList.add('hidden');
      pageOut.classList.remove('exiting');
      if (pageIn) {
        pageIn.classList.remove('hidden');
        pageIn.classList.remove('entering');
        void pageIn.offsetWidth;
        pageIn.classList.add('entering');
      }
      if (stateData && !isBackAction) pushHistory(stateData, stateData.title || '', stateData.url || '#');
      else isBackAction = false;
      isTransitioning = false;
      if (callback) callback();
      setTimeout(applyNeonFrameToCurrentPage, 100);
    }, 250);
  } else {
    if (pageIn) {
      pageIn.classList.remove('hidden');
      pageIn.classList.remove('entering');
      void pageIn.offsetWidth;
      pageIn.classList.add('entering');
    }
    if (stateData && !isBackAction) pushHistory(stateData, stateData.title || '', stateData.url || '#');
    else isBackAction = false;
    isTransitioning = false;
    if (callback) callback();
    setTimeout(applyNeonFrameToCurrentPage, 100);
  }
}

// ====== عرض مواد الفرقة ======
function renderLevelSubjects(levelId) {
  const level = levelsData[levelId];
  const term1Grid = document.getElementById('term1Grid');
  const term2Grid = document.getElementById('term2Grid');
  term1Grid.innerHTML = '';
  term2Grid.innerHTML = '';

  level.terms.term1.subjects.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.subjectName = sub.name.toLowerCase();
    card.innerHTML = `
      <img src="${sub.image}" alt="${sub.name}" style="width:100%;height:140px;object-fit:cover;border-radius:10px;margin-bottom:10px;">
      <span class="icon">${sub.icon}</span>
      <h3>${sub.name}</h3>
      <p>اضغط للدخول</p>
    `;
    card.onclick = () => showSubject(levelId, 'term1', sub.id);
    term1Grid.appendChild(card);
  });

  level.terms.term2.subjects.forEach(sub => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.subjectName = sub.name.toLowerCase();
    card.innerHTML = `
      <img src="${sub.image}" alt="${sub.name}" style="width:100%;height:140px;object-fit:cover;border-radius:10px;margin-bottom:10px;">
      <span class="icon">${sub.icon}</span>
      <h3>${sub.name}</h3>
      <p>اضغط للدخول</p>
    `;
    card.onclick = () => showSubject(levelId, 'term2', sub.id);
    term2Grid.appendChild(card);
  });
}

// ====== عرض الفرقة ======
function showLevel(levelId) {
  if (isTransitioning) return;
  playSound('click');
  currentLevel = levelId;
  const level = levelsData[levelId];
  const mainPage = document.getElementById('mainPage');
  const levelPage = document.getElementById('levelPage');
  document.getElementById('levelTitle').textContent = `${level.icon} ${level.name}`;
  document.getElementById('levelSubtitle').textContent = 'اختر الترم';
  renderLevelSubjects(levelId);
  setupLevelSearch(levelId);
  transitionToPage(levelPage, mainPage, { page: 'level', levelId: levelId, title: level.name, url: `#level-${levelId}` });
}

// ====== سيرش الفرقة ======
function setupLevelSearch(levelId) {
  const searchInput = document.getElementById('levelSearch');
  searchInput.value = '';
  searchInput.oninput = function() {
    const query = this.value.toLowerCase().trim();
    const term1Grid = document.getElementById('term1Grid');
    const term2Grid = document.getElementById('term2Grid');
    const noResults1 = document.getElementById('noResultsTerm1');
    const noResults2 = document.getElementById('noResultsTerm2');
    let term1HasResults = false, term2HasResults = false;

    term1Grid.querySelectorAll('.card').forEach(card => {
      const name = card.dataset.subjectName || '';
      if (name.includes(query) || query === '') { card.classList.remove('hidden-card'); term1HasResults = true; }
      else { card.classList.add('hidden-card'); }
    });
    term2Grid.querySelectorAll('.card').forEach(card => {
      const name = card.dataset.subjectName || '';
      if (name.includes(query) || query === '') { card.classList.remove('hidden-card'); term2HasResults = true; }
      else { card.classList.add('hidden-card'); }
    });
    noResults1.classList.toggle('show', query !== '' && !term1HasResults);
    noResults2.classList.toggle('show', query !== '' && !term2HasResults);
  };
}

// ====== عرض المادة ======
function showSubject(levelId, termId, subjectId) {
  if (isTransitioning) return;
  playSound('techpop');
  currentSubjectId = subjectId;
  const level = levelsData[levelId];
  let subject = null, termName = '';
  if (termId === 'term1') { subject = level.terms.term1.subjects.find(s => s.id === subjectId); termName = 'الترم الأول'; }
  else { subject = level.terms.term2.subjects.find(s => s.id === subjectId); termName = 'الترم الثاني'; }
  if (!subject) return;

  const levelPage = document.getElementById('levelPage');
  const subjectPage = document.getElementById('subjectPage');
  document.getElementById('subjectTitle').textContent = `${subject.icon} ${subject.name}`;
  document.getElementById('subjectSubtitle').textContent = `${termName} - ${level.name}`;

  const isProject = subjectId === 'project1' || subjectId === 'project2';
  setupMaterialTabs(subjectId, isProject);
  setupSubjectSearch(subjectId);

  transitionToPage(subjectPage, levelPage, { page: 'subject', subjectId: subjectId, title: subject.name, url: `#subject-${subjectId}` });
}

// ====== الأسماء المخصصة ======
function getCustomName(subjectId, type, index) {
  try {
    const userKey = getUserKey();
    const key = `customName_${userKey}_${subjectId}_${type}_${index}`;
    return localStorage.getItem(key) || null;
  } catch (e) { return null; }
}

function setCustomName(subjectId, type, index, name) {
  try {
    const userKey = getUserKey();
    const key = `customName_${userKey}_${subjectId}_${type}_${index}`;
    if (name && name.trim()) localStorage.setItem(key, name.trim());
    else localStorage.removeItem(key);
  } catch (e) {}
}

// ====== العناصر الشخصية ======
function getPersonalItems(subjectId, type) {
  try {
    const userKey = getUserKey();
    const key = `personal_${userKey}_${subjectId}_${type}`;
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}

function savePersonalItems(subjectId, type, items) {
  try {
    const userKey = getUserKey();
    const key = `personal_${userKey}_${subjectId}_${type}`;
    localStorage.setItem(key, JSON.stringify(items));
  } catch (e) {}
}

function renderPersonalItems(subjectId, type) {
  const container = document.getElementById(`personalList-${subjectId}-${type}`);
  if (!container) return;

  const items = getPersonalItems(subjectId, type);
  const canEdit = !document.body.classList.contains('guest-mode');

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-message">
        <span>📭</span>
        لسه مفيش محتوى هنا.<br>${canEdit ? 'اضغط على زر الإضافة فوق عشان تضيف أول عنصر.' : 'سجّل دخول عشان تقدر تضيف محتواك.'}
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'personal-item';
    div.innerHTML = `
      <div class="item-info">
        <span class="item-icon">📄</span>
        <span class="item-name">${escapeHTML(item.name)}</span>
      </div>
      <div class="item-actions">
        <a class="item-btn open" href="${escapeHTML(item.link)}" target="_blank" title="فتح">🔗</a>
        ${canEdit ? `
          <button class="item-btn edit" onclick="editPersonalItem('${subjectId}','${type}','${item.id}')" title="تعديل">✏️</button>
          <button class="item-btn delete" onclick="deletePersonalItem('${subjectId}','${type}','${item.id}')" title="حذف">🗑️</button>
        ` : ''}
      </div>
    `;
    container.appendChild(div);
  });
}

function deletePersonalItem(subjectId, type, itemId) {
  if (!requireAuth('حذف محتوى')) return;
  if (!confirm('متأكد إنك عايز تحذف العنصر ده؟')) return;
  let items = getPersonalItems(subjectId, type);
  items = items.filter(it => it.id !== itemId);
  savePersonalItems(subjectId, type, items);
  renderPersonalItems(subjectId, type);
  playSound('back');
  showToast('🗑️ تم الحذف');
}

function editPersonalItem(subjectId, type, itemId) {
  if (!requireAuth('تعديل محتوى')) return;
  const items = getPersonalItems(subjectId, type);
  const item = items.find(it => it.id === itemId);
  if (!item) return;

  const newName = prompt('الاسم الجديد:', item.name);
  if (newName === null) return;
  const newLink = prompt('الرابط الجديد:', item.link);
  if (newLink === null) return;

  item.name = newName.trim() || item.name;
  item.link = newLink.trim() || item.link;

  savePersonalItems(subjectId, type, items);
  renderPersonalItems(subjectId, type);
  playSound('success');
  showToast('✅ تم التعديل');
}
// ====== تعبئة محتوى المادة ======
function renderMaterialContent(subjectId, type) {
  const container = document.getElementById(`material-${type}`);
  if (!container) return;
  const data = subjectsLectures[subjectId];

  let items = [];
  if (data) {
    if (type === 'lectures') items = data.lectures || [];
    else if (type === 'sections') items = data.sections || [];
    else if (type === 'summaries') items = data.summaries || [];
    else if (type === 'solutions') items = data.solutions || [];
    else if (type === 'exams') items = data.exams || [];
    else if (type === 'examSolutions') items = data.examSolutions || [];
  }

  container.innerHTML = '';

  if (type === 'solutions') {
    const introMessage = document.createElement('div');
    introMessage.className = 'solutions-intro';
    introMessage.innerHTML = `
      <div class="solutions-intro-content">
        <span class="solutions-icon">🎯</span>
        <h3>حل أسئلة السكاشن</h3>
        <p>لو ليك حل للسكاشن ضيفها هنا واحتفظ بيها</p>
      </div>
    `;
    container.appendChild(introMessage);
  }

  if (type === 'examSolutions') {
    const introMessage = document.createElement('div');
    introMessage.className = 'solutions-intro';
    introMessage.innerHTML = `
      <div class="solutions-intro-content">
        <span class="solutions-icon">✅</span>
        <h3>حل الاختبارات</h3>
        <p>لو ليك حل للاختبارات ضيفها هنا واحتفظ بيها</p>
      </div>
    `;
    container.appendChild(introMessage);
  }

  if (items.length > 0) {
    const officialSection = document.createElement('div');
    const officialTitle = document.createElement('h3');
    officialTitle.className = 'section-title';
    officialTitle.style.marginTop = (type === 'solutions' || type === 'examSolutions') ? '20px' : '0';

    const titles = {
      lectures: '📖 المحاضرات الرسمية',
      sections: '✏️ السكاشن الرسمية',
      summaries: '📝 الملخصات الرسمية',
      solutions: '📚 الحلول الرسمية',
      exams: '📝 الاختبارات الرسمية',
      examSolutions: '✅ الحلول الرسمية للاختبارات'
    };
    officialTitle.textContent = titles[type];
    officialSection.appendChild(officialTitle);

    const hintBanner = document.createElement('div');
    hintBanner.className = 'hint-banner';
    const typeLabel = type === 'lectures' ? 'المحاضرة' : type === 'sections' ? 'السكشن' : type === 'summaries' ? 'الملخص' : type === 'solutions' ? 'الحل' : type === 'exams' ? 'الاختبار' : 'الحل';
    hintBanner.innerHTML = `💡 <strong>معلومة:</strong> تقدر تغيّر اسم أي ${typeLabel} بالضغط على زر "تعديل الاسم" اللي تحت العنصر`;
    officialSection.appendChild(hintBanner);

    const grid = document.createElement('div');
    grid.className = 'lecture-grid';

    items.forEach((link, index) => {
      const card = document.createElement('div');
      card.className = 'lecture-card';
      const labels = {
        lectures: 'المحاضرة', sections: 'سكشن', summaries: 'ملخص',
        solutions: 'حل', exams: 'الاختبار', examSolutions: 'حل اختبار'
      };
      const label = labels[type];
      let btnText = '📄 عرض PDF';
      if (type === 'summaries') btnText = '📥 تحميل الملخص';
      else if (type === 'solutions') btnText = '📥 تحميل الحل';
      else if (type === 'exams') btnText = '📝 عرض الاختبار';
      else if (type === 'examSolutions') btnText = '✅ عرض الحل';

      const customName = getCustomName(subjectId, type, index);
      const displayName = customName || `${label} ${index + 1}`;

      card.dataset.lectureName = displayName.toLowerCase();
      card.innerHTML = `
        <span class="num">${String(index + 1).padStart(2, '0')}</span>
        <h3>${escapeHTML(displayName)}</h3>
        <a href="${link}" target="_blank">${btnText}</a>
        <button class="rename-btn" onclick="openRenameModal('${subjectId}', '${type}', ${index})">✏️ تعديل الاسم</button>
      `;
      grid.appendChild(card);
    });
    officialSection.appendChild(grid);
    container.appendChild(officialSection);
  }

  const personalSection = document.createElement('div');
  personalSection.className = 'personal-section';

  let personalTitle = '';
  if (type === 'lectures') personalTitle = 'محاضراتي';
  else if (type === 'sections') personalTitle = 'سكاشني';
  else if (type === 'summaries') personalTitle = 'ملخصاتي';
  else if (type === 'solutions') personalTitle = 'حلولي';
  else if (type === 'exams') personalTitle = 'اختباراتي';
  else if (type === 'examSolutions') personalTitle = 'حلول اختباراتي';

  const canEdit = !document.body.classList.contains('guest-mode');

  const guestBtnText = {
    lectures: '🔒 سجّل دخولك عشان تقدر تضيف محاضرات',
    sections: '🔒 سجّل دخولك عشان تقدر تضيف سكاشن',
    summaries: '🔒 سجّل دخولك عشان تقدر تضيف ملخصات',
    solutions: '🔒 سجّل دخولك عشان تقدر تضيف حلول',
    exams: '🔒 سجّل دخولك عشان تقدر تضيف اختبارات',
    examSolutions: '🔒 سجّل دخولك عشان تقدر تضيف حلول اختبارات'
  }[type] || '🔒 سجّل دخولك عشان تقدر تضيف';

  personalSection.innerHTML = `
    <div class="personal-title">
      <h3>🌟 ${personalTitle} <span style="font-size:0.8rem;opacity:0.7;">(خاصة بيك)</span></h3>
      ${canEdit
        ? `<button class="add-btn" onclick="openAddModal('${subjectId}', '${type}')">+ إضافة ${personalTitle.slice(0, -1)}</button>`
        : `<button class="add-btn guest-locked-btn" onclick="requireAuth('إضافة محتوى')">${guestBtnText}</button>`
      }
    </div>
    <div id="personalList-${subjectId}-${type}"></div>
  `;

  container.appendChild(personalSection);
  renderPersonalItems(subjectId, type);
}

// ====== سيرش المادة ======
function setupSubjectSearch(subjectId) {
  const searchInput = document.getElementById('subjectSearch');
  searchInput.value = '';
  searchInput.oninput = function() {
    const query = this.value.toLowerCase().trim();
    const noResults = document.getElementById('noResultsSubject');
    let hasResults = false;
    document.querySelectorAll('.lecture-card').forEach(card => {
      const name = card.dataset.lectureName ? card.dataset.lectureName.toLowerCase() : '';
      if (name.includes(query) || query === '') { card.classList.remove('hidden-card'); hasResults = true; }
      else { card.classList.add('hidden-card'); }
    });
    noResults.classList.toggle('show', query !== '' && !hasResults);
  };
}

// ====== التبديل بين التبويبات ======
function switchMaterialTab(tabKey) {
  document.querySelectorAll('.material-tab').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.material-content').forEach(content => content.classList.remove('active'));
  const tabs = document.querySelectorAll('.material-tab');
  const keys = ['lectures', 'sections', 'summaries', 'solutions', 'exams', 'examSolutions', 'project'];
  const index = keys.indexOf(tabKey);
  if (tabs[index]) tabs[index].classList.add('active');
  const target = document.getElementById(`material-${tabKey}`);
  if (target) target.classList.add('active');
  document.getElementById('subjectSearch').value = '';
  document.getElementById('subjectSearch').dispatchEvent(new Event('input'));
}

// ====== العودة للرئيسية ======
function goBackToMain() {
  if (isTransitioning) return;
  playSound('back');
  const mainPage = document.getElementById('mainPage');
  const levelPage = document.getElementById('levelPage');
  const subjectPage = document.getElementById('subjectPage');
  if (!subjectPage.classList.contains('hidden')) subjectPage.classList.add('hidden');
  if (!levelPage.classList.contains('hidden')) levelPage.classList.add('hidden');
  document.getElementById('levelSearch').value = '';
  document.getElementById('subjectSearch').value = '';
  pushHistory({ page: 'main' }, 'الرئيسية', '#main');
  mainPage.classList.remove('hidden');
  mainPage.classList.remove('entering');
  void mainPage.offsetWidth;
  mainPage.classList.add('entering');
  localStorage.removeItem('refreshPageState');
  setTimeout(applyNeonFrameToCurrentPage, 100);
}

// ====== العودة للترم ======
function goBackToLevel() {
  if (isTransitioning) return;
  playSound('back');
  const levelPage = document.getElementById('levelPage');
  const subjectPage = document.getElementById('subjectPage');
  document.getElementById('subjectSearch').value = '';
  document.getElementById('noResultsSubject').classList.remove('show');
  renderLevelSubjects(currentLevel);
  setupLevelSearch(currentLevel);
  pushHistory({ page: 'level', levelId: currentLevel, title: levelsData[currentLevel].name }, levelsData[currentLevel].name, `#level-${currentLevel}`);
  levelPage.classList.remove('hidden');
  levelPage.classList.remove('entering');
  void levelPage.offsetWidth;
  levelPage.classList.add('entering');
  subjectPage.classList.add('hidden');
  setTimeout(applyNeonFrameToCurrentPage, 100);
}

// ====== تطبيق Neon Frame ======
function applyNeonFrameToCurrentPage() {
  document.querySelectorAll('.neon-frame').forEach(el => el.classList.remove('active'));
  const visiblePages = document.querySelectorAll('.page-level:not(.hidden), #welcomePage, #authGate, #verifyScreen');
  visiblePages.forEach(page => {
    const frame = page.querySelector('.neon-frame');
    if (frame) {
      frame.classList.add('active');
      clearTimeout(frame._timeout);
      frame._timeout = setTimeout(() => frame.classList.remove('active'), 2500);
    }
  });
}

// ====== معالجة زر الرجوع ======
window.addEventListener('popstate', function(event) {
  if (isTransitioning) return;
  const authGate = document.getElementById('authGate');
  const verifyScreen = document.getElementById('verifyScreen');
  if ((authGate && !authGate.classList.contains('hidden')) || (verifyScreen && !verifyScreen.classList.contains('hidden'))) {
    return;
  }
  playSound('back');
  const mainPage = document.getElementById('mainPage');
  const levelPage = document.getElementById('levelPage');
  const subjectPage = document.getElementById('subjectPage');
  const welcomePage = document.getElementById('welcomePage');
  let currentPage = 'welcome';
  if (!welcomePage.classList.contains('hidden')) currentPage = 'welcome';
  else if (!mainPage.classList.contains('hidden')) currentPage = 'main';
  else if (!levelPage.classList.contains('hidden')) currentPage = 'level';
  else if (!subjectPage.classList.contains('hidden')) currentPage = 'subject';
  const state = event.state;
  let targetPage = 'welcome';
  if (state) targetPage = state.page || 'welcome';
  if (currentPage === 'welcome') { history.pushState({ page: 'welcome' }, '', '#welcome'); setTimeout(applyNeonFrameToCurrentPage, 100); return; }
  if (targetPage === 'welcome') {
    welcomePage.classList.remove('hidden'); welcomePage.classList.remove('entering'); void welcomePage.offsetWidth; welcomePage.classList.add('entering');
    mainPage.classList.add('hidden'); levelPage.classList.add('hidden'); subjectPage.classList.add('hidden');
    history.pushState({ page: 'welcome' }, '', '#welcome'); setTimeout(applyNeonFrameToCurrentPage, 100); return;
  }
  if (targetPage === 'main') {
    if (currentPage !== 'main') {
      if (currentPage === 'welcome') welcomePage.classList.add('hidden');
      mainPage.classList.remove('hidden'); mainPage.classList.remove('entering'); void mainPage.offsetWidth; mainPage.classList.add('entering');
      levelPage.classList.add('hidden'); subjectPage.classList.add('hidden');
    }
    setTimeout(applyNeonFrameToCurrentPage, 100); return;
  }
  if (targetPage === 'level' && state && state.levelId) {
    if (currentPage === 'subject') goBackToLevel(); else showLevel(state.levelId);
    setTimeout(applyNeonFrameToCurrentPage, 100); return;
  }
  if (targetPage === 'subject' && state && state.subjectId) {
    for (const levelId in levelsData) {
      const level = levelsData[levelId];
      for (const termId in level.terms) {
        const found = level.terms[termId].subjects.find(s => s.id === state.subjectId);
        if (found) { showSubject(levelId, termId, state.subjectId); setTimeout(applyNeonFrameToCurrentPage, 100); return; }
      }
    }
  }
  if (currentPage !== 'welcome') {
    welcomePage.classList.remove('hidden'); welcomePage.classList.remove('entering'); void welcomePage.offsetWidth; welcomePage.classList.add('entering');
    mainPage.classList.add('hidden'); levelPage.classList.add('hidden'); subjectPage.classList.add('hidden');
    history.pushState({ page: 'welcome' }, '', '#welcome'); setTimeout(applyNeonFrameToCurrentPage, 100);
  }
});

// ====== Toast ======
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ====== حفظ واستعادة الحالة ======
function saveCurrentPageForRefresh() {
    const welcomePage = document.getElementById('welcomePage');
    const mainPage = document.getElementById('mainPage');
    const levelPage = document.getElementById('levelPage');
    const subjectPage = document.getElementById('subjectPage');

    let pageState = { page: 'welcome' };
    if (!welcomePage.classList.contains('hidden')) pageState = { page: 'welcome' };
    else if (!mainPage.classList.contains('hidden')) pageState = { page: 'main' };
    else if (!levelPage.classList.contains('hidden')) pageState = { page: 'level', levelId: currentLevel || 'level1' };
    else if (!subjectPage.classList.contains('hidden')) pageState = { page: 'subject', subjectId: currentSubjectId || 'dataScience' };

    if (pageState.page !== 'welcome') {
        localStorage.setItem('refreshPageState', JSON.stringify(pageState));
    } else {
        localStorage.removeItem('refreshPageState');
    }
}

function restorePageAfterRefresh() {
    const savedState = localStorage.getItem('refreshPageState');
    if (!savedState) return false;
    try {
        const state = JSON.parse(savedState);
        const welcomePage = document.getElementById('welcomePage');
        const mainPage = document.getElementById('mainPage');
        const levelPage = document.getElementById('levelPage');
        const subjectPage = document.getElementById('subjectPage');
        welcomePage.classList.add('hidden');
        mainPage.classList.add('hidden');
        levelPage.classList.add('hidden');
        subjectPage.classList.add('hidden');

        if (state.page === 'main') {
            mainPage.classList.remove('hidden'); mainPage.classList.remove('entering'); void mainPage.offsetWidth; mainPage.classList.add('entering');
            history.pushState({ page: 'main' }, '', '#main');
            return true;
        }
        if (state.page === 'level' && state.levelId) {
            const levelId = state.levelId;
            currentLevel = levelId;
            const level = levelsData[levelId];
            if (level) {
                document.getElementById('levelTitle').textContent = `${level.icon} ${level.name}`;
                document.getElementById('levelSubtitle').textContent = 'اختر الترم';
                renderLevelSubjects(levelId);
                setupLevelSearch(levelId);
                levelPage.classList.remove('hidden'); levelPage.classList.remove('entering'); void levelPage.offsetWidth; levelPage.classList.add('entering');
                history.pushState({ page: 'level', levelId: levelId }, '', `#level-${levelId}`);
                return true;
            }
        }
        if (state.page === 'subject' && state.subjectId) {
            for (const levelId in levelsData) {
                const level = levelsData[levelId];
                for (const termId in level.terms) {
                    const found = level.terms[termId].subjects.find(s => s.id === state.subjectId);
                    if (found) {
                        currentLevel = levelId;
                        currentSubjectId = state.subjectId;
                        const subject = found;
                        const termName = termId === 'term1' ? 'الترم الأول' : 'الترم الثاني';
                        document.getElementById('subjectTitle').textContent = `${subject.icon} ${subject.name}`;
                        document.getElementById('subjectSubtitle').textContent = `${termName} - ${level.name}`;
                        const isProject = state.subjectId === 'project1' || state.subjectId === 'project2';
                        setupMaterialTabs(state.subjectId, isProject);
                        setupSubjectSearch(state.subjectId);
                        levelPage.classList.add('hidden');
                        subjectPage.classList.remove('hidden'); subjectPage.classList.remove('entering'); void subjectPage.offsetWidth; subjectPage.classList.add('entering');
                        history.pushState({ page: 'subject', subjectId: state.subjectId }, '', `#subject-${state.subjectId}`);
                        return true;
                    }
                }
            }
        }
        return false;
    } catch (e) { return false; }
}

const originalTransitionToPage = transitionToPage;
transitionToPage = function(pageIn, pageOut, stateData, callback) {
    originalTransitionToPage(pageIn, pageOut, stateData, function() {
        setTimeout(() => { saveCurrentPageForRefresh(); if (callback) callback(); }, 50);
    });
};

window.addEventListener('beforeunload', function() {
    localStorage.removeItem('refreshPageState');
});

// ============================================================
// ====== Preloader + الإقلاع ======
// ============================================================
window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('hide');
    setTimeout(() => {
      if (preloader.parentNode) preloader.remove();
    }, 500);
    setTimeout(applyNeonFrameToCurrentPage, 200);
  }, 400);
});

// ====== إغلاق إشعار الترحيب ======
function closeWelcomeNotice() {
  const notice = document.getElementById('welcomeNotice');
  if (!notice) return;
  notice.style.transition = 'all 0.4s ease';
  notice.style.opacity = '0';
  notice.style.transform = 'translateY(-30px)';
  setTimeout(() => {
    notice.classList.add('hidden');
    notice.style.opacity = '';
    notice.style.transform = '';
  }, 400);
  localStorage.setItem('welcomeNoticeClosed', 'true');
  playSound('click');
}

// ====== الوضع الليلي / النهاري ======
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    playSound('click');
  });
}

// ====== Modal: إضافة عنصر ======
let currentAddContext = { subjectId: null, type: null };

function openAddModal(subjectId, type) {
  if (!requireAuth('إضافة محتوى')) return;
  currentAddContext = { subjectId, type };
  const modal = document.getElementById('addItemModal');
  const title = document.getElementById('modalTitle');
  const nameInput = document.getElementById('itemName');
  const linkInput = document.getElementById('itemLink');
  const note = document.getElementById('modalNote');

  const labels = {
    lectures: 'محاضرة جديدة', sections: 'سكشن جديد', summaries: 'ملخص جديد',
    solutions: 'حل جديد', exams: 'اختبار جديد', examSolutions: 'حل اختبار جديد'
  };
  title.textContent = '➕ ' + (labels[type] || 'إضافة جديدة');
  note.textContent = '💡 اكتب الاسم والرابط ثم اضغط حفظ';
  nameInput.value = '';
  linkInput.value = '';
  modal.classList.remove('hidden');
  setTimeout(() => nameInput.focus(), 100);
  playSound('click');
}

function closeAddModal() {
  const modal = document.getElementById('addItemModal');
  if (modal) modal.classList.add('hidden');
  currentAddContext = { subjectId: null, type: null };
}

function saveNewItem() {
  const name = document.getElementById('itemName').value.trim();
  const link = document.getElementById('itemLink').value.trim();
  if (!name) { showToast('⚠️ اكتب الاسم أولاً'); return; }
  if (!link) { showToast('⚠️ اكتب الرابط أولاً'); return; }

  const { subjectId, type } = currentAddContext;
  if (!subjectId || !type) return;

  const personal = getPersonalItems(subjectId, type);
  personal.push({
    id: 'p_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    name: name, link: link, createdAt: Date.now()
  });
  savePersonalItems(subjectId, type, personal);
  closeAddModal();
  renderPersonalItems(subjectId, type);
  playSound('success');
  showToast('✅ تم الحفظ بنجاح');
}

// ====== Modal: تعديل الاسم ======
let currentRenameContext = { subjectId: null, type: null, index: null };

function openRenameModal(subjectId, type, index) {
  if (!requireAuth('تعديل اسم')) return;
  currentRenameContext = { subjectId, type, index };
  const modal = document.getElementById('renameModal');
  const input = document.getElementById('renameInput');
  const currentName = getCustomName(subjectId, type, index);
  input.value = currentName || '';
  modal.classList.remove('hidden');
  setTimeout(() => { input.focus(); input.select(); }, 100);
  playSound('click');
}

function closeRenameModal() {
  const modal = document.getElementById('renameModal');
  if (modal) modal.classList.add('hidden');
  currentRenameContext = { subjectId: null, type: null, index: null };
}

function saveRename() {
  const newName = document.getElementById('renameInput').value.trim();
  const { subjectId, type, index } = currentRenameContext;
  if (subjectId === null || type === null || index === null) return;
  setCustomName(subjectId, type, index, newName);
  closeRenameModal();
  renderMaterialContent(subjectId, type);
  playSound('success');
  showToast('✅ تم تعديل الاسم');
}
// ============================================================
// ====== Firebase Auth ======
// ============================================================

function initFirebaseAuth() {
  if (!window.firebaseAuth || !window.firebaseFns) return false;
  fbAuth = window.firebaseAuth;
  fbFns = window.firebaseFns;

  fbFns.onAuthStateChanged(fbAuth, async (user) => {
    if (user) {
      const provider = user.providerData[0]?.providerId;
      const isEmailProvider = provider === 'password';

      if (isEmailProvider && !user.emailVerified) {
        currentUser = user;
        isGuest = false;
        document.body.classList.remove('guest-mode');
        const badge = document.querySelector('.guest-badge');
        if (badge) badge.remove();
        showVerificationScreen(user);
        updateUserButton(user);
        return;
      }

      currentUser = user;
      isGuest = false;
      document.body.classList.remove('guest-mode');
      const badge = document.querySelector('.guest-badge');
      if (badge) badge.remove();
      hideAuthGate();
      hideVerificationScreen();
      updateUserButton(user);

      const restored = restorePageAfterRefresh();
      if (!restored) {
        const welcomePage = document.getElementById('welcomePage');
        const mainPage = document.getElementById('mainPage');
        const levelPage = document.getElementById('levelPage');
        const subjectPage = document.getElementById('subjectPage');
        welcomePage.classList.remove('hidden');
        welcomePage.classList.add('entering');
        mainPage.classList.add('hidden');
        levelPage.classList.add('hidden');
        subjectPage.classList.add('hidden');
        history.replaceState({ page: 'welcome' }, '', '#welcome');
      }
      setTimeout(applyNeonFrameToCurrentPage, 200);
      refreshSubjectPageIfOpen();
    } else {
      currentUser = null;
      hideVerificationScreen();
      if (!isGuest) {
        showAuthGate();
      }
      updateUserButton(null);
    }
  });

  return true;
}

if (window.firebaseAuth) {
  initFirebaseAuth();
} else {
  window.addEventListener('firebaseReady', initFirebaseAuth);
}

function refreshSubjectPageIfOpen() {
  const subjectPage = document.getElementById('subjectPage');
  if (!subjectPage) return;
  if (subjectPage.classList.contains('hidden')) return;
  if (!currentSubjectId) return;
  const data = subjectsLectures[currentSubjectId];
  if (!data) return;
  const types = ['lectures', 'sections', 'summaries', 'solutions', 'exams', 'examSolutions'];
  types.forEach(type => {
    if (document.getElementById(`material-${type}`)) {
      renderMaterialContent(currentSubjectId, type);
    }
  });
}

function showAuthGate() {
  const gate = document.getElementById('authGate');
  const site = document.getElementById('siteWrapper');
  const verify = document.getElementById('verifyScreen');
  if (gate) gate.classList.remove('hidden');
  if (site) site.classList.add('hidden');
  if (verify) verify.classList.add('hidden');
}

function hideAuthGate() {
  const gate = document.getElementById('authGate');
  const site = document.getElementById('siteWrapper');
  if (gate) gate.classList.add('hidden');
  if (site) site.classList.remove('hidden');
}

function showVerificationScreen(user) {
  const gate = document.getElementById('authGate');
  const site = document.getElementById('siteWrapper');
  const verify = document.getElementById('verifyScreen');
  if (gate) gate.classList.add('hidden');
  if (site) site.classList.add('hidden');
  if (verify) {
    verify.classList.remove('hidden');
    const emailEl = document.getElementById('verifyEmailDisplay');
    if (emailEl) emailEl.textContent = user.email || '—';
  }
  setTimeout(applyNeonFrameToCurrentPage, 200);
}

function hideVerificationScreen() {
  const verify = document.getElementById('verifyScreen');
  if (verify) verify.classList.add('hidden');
}

async function resendVerificationEmail() {
  if (!currentUser || !fbFns) return;
  try {
    await fbFns.sendEmailVerification(currentUser);
    showToast('📨 بعتنالك رسالة تأكيد جديدة');
    playSound('success');
  } catch (error) {
    console.error(error);
    showToast('⚠️ فشل الإرسال، حاول تاني بعد شوية');
  }
}

async function checkEmailVerified() {
  if (!currentUser || !fbFns) return;
  try {
    await fbFns.reload(currentUser);
    if (currentUser.emailVerified) {
      showToast('✅ تم تأكيد الإيميل!');
      playSound('success');
      hideVerificationScreen();
      isGuest = false;
      hideAuthGate();
      updateUserButton(currentUser);
      const restored = restorePageAfterRefresh();
      if (!restored) {
        document.getElementById('welcomePage').classList.remove('hidden');
        document.getElementById('mainPage').classList.add('hidden');
        document.getElementById('levelPage').classList.add('hidden');
        document.getElementById('subjectPage').classList.add('hidden');
      }
      setTimeout(applyNeonFrameToCurrentPage, 200);
    } else {
      showToast('⚠️ لسه ما أكدتش الإيميل');
    }
  } catch (error) {
    console.error(error);
    showToast('⚠️ حصل خطأ، حاول تاني');
  }
}

async function cancelVerification(e) {
  if (e) e.preventDefault();
  try {
    await fbFns.signOut(fbAuth);
    hideVerificationScreen();
    showAuthGate();
    showToast('👋 تم تسجيل الخروج');
  } catch (error) {
    console.error(error);
  }
}

function switchGateMode(e) {
  if (e) e.preventDefault();
  gateMode = gateMode === 'login' ? 'register' : 'login';
  const title = document.getElementById('authGateTitle');
  const submitBtn = document.getElementById('gateSubmitBtn');
  const switchText = document.getElementById('gateSwitchText');
  const switchBtn = document.getElementById('gateSwitchBtn');
  const pwd = document.getElementById('gatePassword');

  if (gateMode === 'register') {
    title.textContent = '📝 إنشاء حساب جديد';
    submitBtn.textContent = 'إنشاء حساب';
    switchText.textContent = 'لديك حساب؟';
    switchBtn.textContent = 'سجّل دخول';
    if (pwd) pwd.setAttribute('autocomplete', 'new-password');
  } else {
    title.textContent = '🔐 تسجيل الدخول';
    submitBtn.textContent = 'تسجيل الدخول';
    switchText.textContent = 'ليس لديك حساب؟';
    switchBtn.textContent = 'سجّل الآن';
    if (pwd) pwd.setAttribute('autocomplete', 'current-password');
  }
  playSound('click');
}

async function handleGateSubmit() {
  if (!fbFns) { showToast('⏳ Firebase لسه مجهزش'); return; }

  const email = document.getElementById('gateEmail').value.trim();
  const password = document.getElementById('gatePassword').value;

  if (!email || !password) { showToast('⚠️ املأ الإيميل والباسورد'); return; }
  if (password.length < 6) { showToast('⚠️ الباسورد 6 أحرف على الأقل'); return; }

  const btn = document.getElementById('gateSubmitBtn');
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = '⏳ جاري...';

  try {
    if (gateMode === 'register') {
      const userCredential = await fbFns.createUserWithEmailAndPassword(fbAuth, email, password);
      await fbFns.sendEmailVerification(userCredential.user);
      showToast('📨 بعتنالك رسالة تأكيد على إيميلك');
    } else {
      const userCredential = await fbFns.signInWithEmailAndPassword(fbAuth, email, password);
      if (!userCredential.user.emailVerified) {
        await fbFns.sendEmailVerification(userCredential.user);
        showToast('📨 بعتنالك رسالة تأكيد');
      } else {
        showToast('✅ مرحباً بيك');
      }
    }
    playSound('success');
  } catch (error) {
    console.error(error);
    showToast('⚠️ ' + authErrorMessage(error.code));
  } finally {
    btn.disabled = false;
    btn.textContent = original;
  }
}

async function loginWithGoogleGate() {
  if (!fbFns) { showToast('⏳ Firebase لسه مجهزش'); return; }
  try {
    const provider = new fbFns.GoogleAuthProvider();
    const result = await fbFns.signInWithPopup(fbAuth, provider);
    showToast('✅ مرحباً ' + (result.user.displayName || ''));
    playSound('success');
  } catch (error) {
    console.error(error);
    if (error.code === 'auth/popup-closed-by-user') return;
    showToast('⚠️ فشل تسجيل الدخول بـ Google');
  }
}

function continueAsGuest() {
  isGuest = true;
  document.body.classList.add('guest-mode');
  hideAuthGate();

  if (!document.querySelector('.guest-badge')) {
    const badge = document.createElement('div');
    badge.className = 'guest-badge';
    badge.textContent = '👤 زائر (اضغط للتسجيل)';
    badge.title = 'سجّل دخول عشان تحفظ محتواك';
    badge.onclick = openAuthFromGuest;
    badge.style.cursor = 'pointer';
    document.body.appendChild(badge);
  }

  showToast('👤 أهلاً بيك كزائر');
  playSound('portal');

  const restored = restorePageAfterRefresh();
  if (!restored) {
    document.getElementById('welcomePage').classList.remove('hidden');
    document.getElementById('mainPage').classList.add('hidden');
    document.getElementById('levelPage').classList.add('hidden');
    document.getElementById('subjectPage').classList.add('hidden');
    history.replaceState({ page: 'welcome' }, '', '#welcome');
  }
  setTimeout(applyNeonFrameToCurrentPage, 200);
  refreshSubjectPageIfOpen();
}

function openAuthFromGuest() {
  isGuest = false;
  document.body.classList.remove('guest-mode');
  const badge = document.querySelector('.guest-badge');
  if (badge) badge.remove();
  showAuthGate();
}

function requireAuth(action = 'الإضافة') {
  if (currentUser && currentUser.emailVerified) return true;
  if (currentUser && !currentUser.emailVerified) {
    showToast('🔐 أكّد إيميلك الأول');
    return false;
  }
  if (isGuest) {
    showToast('🔐 سجّل دخول عشان تقدر تعمل ' + action);
    playSound('back');
    return false;
  }
  showToast('🔐 لازم تسجل دخول الأول');
  return false;
}

function updateUserButton(user) {
  const btn = document.getElementById('userToggle');
  if (!btn) return;

  if (user && user.emailVerified) {
    btn.classList.add('logged-in');
    btn.title = user.displayName || user.email || 'حسابي';
    if (user.photoURL) {
      btn.innerHTML = `<img src="${user.photoURL}" alt="user">`;
    } else {
      const initial = (user.displayName || user.email || 'U').charAt(0).toUpperCase();
      btn.innerHTML = `<span class="user-initial">${escapeHTML(initial)}</span>`;
    }
  } else if (isGuest) {
    btn.classList.remove('logged-in');
    btn.title = 'تسجيل الدخول';
    btn.innerHTML = '👤';
  } else {
    btn.classList.remove('logged-in');
    btn.title = 'تسجيل الدخول';
    btn.innerHTML = '🔐';
  }
}

function handleUserBtn() {
  playSound('click');
  if (currentUser && currentUser.emailVerified) {
    openAccountModal();
  } else if (isGuest) {
    if (confirm('عايز تسجل دخول عشان تحفظ محتواك؟')) {
      openAuthFromGuest();
    }
  } else {
    showAuthGate();
  }
}

function openAccountModal() {
  const modal = document.getElementById('accountModal');
  if (!modal || !currentUser) return;

  const avatar = document.getElementById('accountAvatar');
  const nameEl = document.getElementById('accountName');
  const emailEl = document.getElementById('accountEmail');

  const displayName = currentUser.displayName || (currentUser.email || '').split('@')[0] || 'مستخدم';
  const initial = displayName.charAt(0).toUpperCase();

  if (currentUser.photoURL) {
    avatar.style.backgroundImage = `url(${currentUser.photoURL})`;
    avatar.style.backgroundSize = 'cover';
    avatar.style.backgroundPosition = 'center';
    avatar.textContent = '';
  } else {
    avatar.style.backgroundImage = '';
    avatar.style.background = 'linear-gradient(135deg, var(--accent2), var(--accent))';
    avatar.textContent = initial;
  }

  nameEl.textContent = displayName;
  emailEl.textContent = currentUser.email || '—';
  modal.classList.remove('hidden');
  playSound('click');
}

function closeAccountModal() {
  const modal = document.getElementById('accountModal');
  if (modal) modal.classList.add('hidden');
}

async function logout() {
  if (!fbFns) return;
  if (!confirm('متأكد إنك عايز تسجل خروج؟')) return;
  try {
    await fbFns.signOut(fbAuth);
    closeAccountModal();
    const badge = document.querySelector('.guest-badge');
    if (badge) badge.remove();
    document.body.classList.remove('guest-mode');
    isGuest = false;
    showToast('👋 تم تسجيل الخروج');
    playSound('back');
  } catch (error) {
    console.error(error);
    showToast('⚠️ فشل تسجيل الخروج');
  }
}

function authErrorMessage(code) {
  const messages = {
    'auth/email-already-in-use': 'الإيميل مستخدم بالفعل',
    'auth/invalid-email': 'الإيميل غير صحيح',
    'auth/weak-password': 'الباسورد ضعيف (6 أحرف على الأقل)',
    'auth/user-not-found': 'المستخدم غير موجود',
    'auth/wrong-password': 'الباسورد غلط',
    'auth/invalid-credential': 'الإيميل أو الباسورد غلط',
    'auth/too-many-requests': 'محاولات كتير، استنى شوية',
    'auth/network-request-failed': 'مشكلة في الإنترنت',
    'auth/popup-blocked': 'المتصفح منع النافذة، اسمح بها',
    'auth/operation-not-allowed': 'الطريقة دي مش مفعّلة في Firebase',
    'auth/unauthorized-domain': 'الدومين ده مش مصرح بيه في Firebase'
  };
  return messages[code] || 'حدث خطأ، حاول تاني';
}

// ============================================================
// ====== Forgot Password ======
// ============================================================

function openForgotPasswordModal(e) {
  if (e) e.preventDefault();

  const modal = document.getElementById('forgotPasswordModal');
  if (!modal) {
    showToast('⚠️ حدث خطأ، حاول تاني');
    return;
  }

  const gateEmail = document.getElementById('gateEmail');
  const forgotEmail = document.getElementById('forgotEmail');

  if (forgotEmail) forgotEmail.value = '';
  if (gateEmail && gateEmail.value.trim() && forgotEmail) {
    forgotEmail.value = gateEmail.value.trim();
  }

  modal.classList.remove('hidden');
  setTimeout(() => {
    const input = document.getElementById('forgotEmail');
    if (input) input.focus();
  }, 100);
  playSound('click');
}

function closeForgotPasswordModal() {
  const modal = document.getElementById('forgotPasswordModal');
  if (modal) modal.classList.add('hidden');
}

async function handleForgotPassword() {
  if (!fbFns) {
    showToast('⏳ Firebase لسه مجهزش');
    return;
  }

  const email = document.getElementById('forgotEmail').value.trim();

  if (!email) {
    showToast('⚠️ اكتب الإيميل الأول');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('⚠️ الإيميل غير صحيح');
    return;
  }

  const btn = document.getElementById('forgotSubmitBtn');
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = '⏳ جاري الإرسال...';

  try {
    await fbFns.sendPasswordResetEmail(fbAuth, email);
    showToast('📨 بعتنالك رابط الاستعادة على إيميلك');
    playSound('success');
    closeForgotPasswordModal();
    document.getElementById('forgotEmail').value = '';
  } catch (error) {
    console.error(error);
    if (error.code === 'auth/user-not-found') {
      showToast('📨 لو الإيميل مسجل، هيوصلك رابط الاستعادة');
      playSound('success');
      closeForgotPasswordModal();
    } else {
      showToast('⚠️ ' + authErrorMessage(error.code));
    }
  } finally {
    btn.disabled = false;
    btn.textContent = original;
  }
}

// ============================================================
// ====== Escape Key ======
// ============================================================
document.addEventListener('keydown', function(e) {
  const gate = document.getElementById('authGate');
  if (gate && !gate.classList.contains('hidden') && e.key === 'Enter') {
    e.preventDefault();
    handleGateSubmit();
  }
  if (e.key === 'Escape') {
    closeAddModal();
    closeRenameModal();
    closeAccountModal();
    closeForgotPasswordModal();
  }
});

if (!history.state) {
  history.replaceState({ page: 'welcome' }, '', '#welcome');
}