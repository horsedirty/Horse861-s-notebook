import { QuizChapter } from './types';

export const MAO_ZHONG_TE_QUIZ: QuizChapter[] = [
  {
    id: "intro",
    title: "导论：马克思主义中国化",
    parts: [
      {
        title: "一、单选题",
        questions: [
          {
            id: "intro_q1",
            type: "single",
            text: "1．贯穿于《毛泽东思想和中国特色社会主义理论体系概论》（2023 年版）教材的主线是（ ）",
            options: [
              "A．马克思列宁主义",
              "B．马克思主义中国化",
              "C．马克思主义",
              "D．马克思主义中国化时代化"
            ],
            correctAnswer: "D",
            analysis: "见 2023 年版教材 13 页：本教程以马克思主义中国话时代化为主线……"
          },
          {
            id: "intro_q2",
            type: "single",
            text: "2．毛泽东思想创立于（ ）",
            options: [
              "A．新民主主义革命时期",
              "B．社会主义革命和建设时期",
              "C．改革开放和社会主义现代化建设新时期",
              "D．中国特色社会主义新时代"
            ],
            correctAnswer: "A",
            analysis: "见 2023 年版教材第 7 页：“在新民主主义革命时期，……创立了毛泽东思想”。"
          },
          {
            id: "intro_q3",
            type: "single",
            text: "3．毛泽东“马克思主义中国化”这一命题正式提出是在（ ）",
            options: [
              "A．党的一大",
              "B．遵义会议",
              "C．党的六届六中全会",
              "D．党的七大"
            ],
            correctAnswer: "C",
            analysis: "1938年10月，毛泽东在六届六中全会的政治报告《论新阶段》中首次明确提出。"
          },
          {
            id: "intro_q4",
            type: "single",
            text: "4．中国特色社会主义理论体系（ ）",
            options: [
              "A．是马克思主义中国化时代化的第二次历史性飞跃",
              "B．是马克思主义中国化时代化新的飞跃",
              "C．形成于社会主义革命和建设时期",
              "D．包括毛泽东思想"
            ],
            correctAnswer: "B",
            analysis: "中国特色社会主义理论体系是马克思主义中国化时代化新的飞跃。形成于改革开放新时期，不包括毛泽东思想。"
          }
        ]
      },
      {
        title: "二、多选题",
        questions: [
          {
            id: "intro_q5",
            type: "multi",
            text: "5．推进马克思主义中国化时代化，是（ ）",
            options: [
              "A．是马克思主义理论本身发展的内在要求",
              "B．是解决中国实际问题的客观需要",
              "C．是完善市场经济体制的需要",
              "D．是传承中华优秀传统文化的要求"
            ],
            correctAnswer: "AB",
            analysis: "见 2023 版教材 3-4 页。"
          },
          {
            id: "intro_q6",
            type: "multi",
            text: "6．中国特色社会主义理论体系包括（ ）",
            options: [
              "A．毛泽东思想",
              "B．邓小平理论",
              "C．“三个代表”重要思想",
              "D．科学发展观"
            ],
            correctAnswer: "BCD",
            analysis: "除 BCD 三项外，还包括习近平新时代中国特色社会主义思想。不包括毛泽东思想。"
          },
          {
            id: "intro_q7",
            type: "multi",
            text: "7．坚持和发展马克思主义，必须（ ）",
            options: [
              "A．同中国具体实际相结合",
              "B．同中华传统文化相结合",
              "C．同中国封建历史相结合",
              "D．同中华优秀传统文化相结合"
            ],
            correctAnswer: "AD",
            analysis: "两个结合：同中国具体实际相结合，同中华优秀传统文化相结合。"
          }
        ]
      },
      {
        title: "三、判断题",
        questions: [
          {
            id: "intro_q8",
            type: "judgment",
            text: "8．中国特色社会主义理论体系是马克思主义中国化时代化的第二次历史性飞跃的重大理论成果。（ ）",
            correctAnswer: "×",
            analysis: "“概论”2023 年版教材：“……形成中国特色社会主义理论体系，实现了马克思主义中国化时代化新的飞跃”，不再用“第二次历史性飞跃”的表述。"
          }
        ]
      },
      {
        title: "四、简答题",
        questions: [
          {
            id: "intro_q9",
            type: "short",
            text: "9．马克思主义中国化时代化的内涵",
            analysis: "马克思主义中国化时代化，就是立足中国国情和时代特点，坚持把马克思主义基本原理同中国具体实际相结合、同中华优秀传统文化相结合，深入研究和解决中国革命、建设、改革不同历史时期的实际问题，真正搞懂面临的时代课题，不断吸收新的时代内容，科学回答时代提出的重大理论和实践课题，创造新的理论成果。"
          }
        ]
      }
    ]
  },
  {
    id: "chap1",
    title: "第一章：毛泽东思想",
    parts: [
      {
        title: "一、单选题",
        questions: [
          {
            id: "ch1_q1",
            type: "single",
            text: "1．开始形成了以毛泽东同志为核心的党的第一代中央领导集体的会议是：",
            options: ["A.遵义会议", "B.洛川会议", "C.六届六中全会", "D.中共七大"],
            correctAnswer: "A",
            analysis: "遵义会议是一次具有伟大转折意义的重要会议，开始形成以毛泽东同志为核心的党的第一代中央领导集体。"
          },
          {
            id: "ch1_q2",
            type: "single",
            text: "2．正式把毛泽东思想写入党章，并确立为党必须长期坚持的指导思想的是在（ ）",
            options: ["A.遵义会议", "B.党的六届六中全会", "C.党的七大", "D.党的七届二中全会"],
            correctAnswer: "C",
            analysis: "1945年党的七大。"
          },
          {
            id: "ch1_q3",
            type: "single",
            text: "3．标志着毛泽东思想开始萌芽的是（ ）",
            options: ["A．新民主主义革命基本思想的提出", "B．农村包围城市、武装夺取政权的思想的提出", "C．系统阐述新民主主义革命理论", "D．形成社会主义革命和社会主义建设的重要思想"],
            correctAnswer: "A",
            analysis: "大革命时期，新民主主义革命基本思想的提出，标志着毛泽东思想开始萌芽。"
          },
          {
            id: "ch1_q4",
            type: "single",
            text: "4．标志着毛泽东思想初步形成的是（ ）",
            options: ["A．新民主主义革命基本思想的提出", "B．农村包围城市、武装夺取政权的思想的提出", "C．系统阐述新民主主义革命理论", "D．形成社会主义革命和社会主义建设的重要思想"],
            correctAnswer: "B",
            analysis: "土地革命战争时期，农村包围城市、武装夺取政权思想的提出，标志着初步形成。"
          },
          {
            id: "ch1_q5",
            type: "single",
            text: "5．标志着毛泽东思想得到多方面展开而趋于成熟的是（ ）",
            options: ["A．新民主主义革命基本思想的提出", "B．农村包围城市、武装夺取政权的思想的提出", "C．系统阐述新民主主义革命理论", "D．形成社会主义革命和社会主义建设的重要思想"],
            correctAnswer: "C",
            analysis: "遵义会议后到抗战时期，系统阐述新民主主义革命理论，标志着趋于成熟。"
          },
          {
            id: "ch1_q10",
            type: "single",
            text: "10．毛泽东思想的精髓是（ ）",
            options: ["A.实事求是", "B.群众路线", "C.独立自主", "D.艰苦奋斗"],
            correctAnswer: "A",
            analysis: "实事求是是毛泽东思想的精髓。"
          }
        ]
      },
      {
        title: "二、多选题",
        questions: [
          {
            id: "ch1_q15",
            type: "multi",
            text: "15．毛泽东思想的活的灵魂是（ ）",
            options: ["A.实事求是", "B.群众路线", "C.独立自主", "D.与时俱进"],
            correctAnswer: "ABC",
            analysis: "实事求是，群众路线，独立自主。"
          }
        ]
      },
      {
        title: "四、简答题",
        questions: [
          {
            id: "ch1_q17",
            type: "short",
            text: "17．毛泽东思想的主要内容",
            analysis: "新民主主义革命理论、社会主义革命和社会主义建设理论、革命军队建设和军事战略的理论、政策和策略的理论、思想政治工作和文化工作的理论、党的建设理论。"
          }
        ]
      }
    ]
  },
  {
    id: "chap2",
    title: "第二章：新民主主义革命理论",
    parts: [
      {
        title: "一、单选题",
        questions: [
          {
            id: "ch2_q1",
            type: "single",
            text: "1．解决中国革命问题的基本前提是（ ）",
            options: ["A．分清敌友", "B．认清中国国情", "C．成立无产阶级政党", "D．以马克思列宁主义为指导"],
            correctAnswer: "B",
            analysis: "认清中国国情，是解决中国革命问题的基本前提。"
          },
          {
            id: "ch2_q4",
            type: "single",
            text: "4．中国革命的首要对象是（ ）",
            options: ["A．资产阶级", "B．官僚资本主义", "C．帝国主义", "D．封建主义"],
            correctAnswer: "C",
            analysis: "帝国主义是中国革命的首要对象。"
          },
          {
            id: "ch2_q13",
            type: "single",
            text: "13．新民主主义革命的道路是（ ）",
            options: ["A．城市暴动和起义", "B．农村包围城市，武装夺取政权", "C．经过长期的合法斗争", "D．先占城市后取乡村"],
            correctAnswer: "B",
            analysis: "农村包围城市、武装夺取政权的革命道路。"
          }
        ]
      },
      {
        title: "二、多选题",
        questions: [
          {
            id: "ch2_q24",
            type: "multi",
            text: "11．中国共产党在中国革命中战胜敌人的三个法宝是（ ）",
            options: ["A．统一战线", "B．武装斗争", "C．党的建设", "D．土地革命"],
            correctAnswer: "ABC",
            analysis: "统一战线、武装斗争、党的建设。"
          }
        ]
      },
      {
        title: "四、简答题",
        questions: [
          {
            id: "ch2_q27",
            type: "short",
            text: "1．什么是新民主主义革命的总路线？",
            analysis: "无产阶级领导的，人民大众的，反对帝国主义、封建主义和官僚资本主义的革命。"
          }
        ]
      }
    ]
  },
  {
    id: "chap3",
    title: "第三章：社会主义改造理论",
    parts: [
      {
        title: "一、单选题",
        questions: [
          {
            id: "ch3_q1",
            type: "single",
            text: "1．从中华人民共和国成立到社会主义改造基本完成，我国社会的性质是（ ）",
            options: ["A．资本主义社会", "B．社会主义社会", "C．民主主义社会", "D．新民主主义社会"],
            correctAnswer: "D",
            analysis: "是新民主主义社会，属于过渡性质。"
          },
          {
            id: "ch3_q5",
            type: "single",
            text: "5．对资本主义工商业进行社会主义改造的主要方法是（ ）",
            options: ["A．和平赎买", "B．统购统销", "C．公私合营", "D．合作化"],
            correctAnswer: "A",
            analysis: "用和平赎买的方法改造资本主义工商业。"
          }
        ]
      },
      {
        title: "二、多选题",
        questions: [
          {
            id: "ch3_q12",
            type: "multi",
            text: "5．在进行社会主义改造中积累了丰富的历史经验，包括（ ）",
            options: [
              "A．坚持社会主义工业化建设与社会主义改造同时并举。",
              "B．采取积极引导、逐步过渡的方式。",
              "C．用和平方法进行改造。",
              "D．采用从低级到高级的国家资本主义的过渡形式。"
            ],
            correctAnswer: "ABC",
            analysis: "一化三改同时并举；积极引导、逐步过渡；和平赎买。"
          }
        ]
      }
    ]
  },
  {
    id: "chap4",
    title: "第四章：初步探索成果",
    parts: [
      {
        title: "一、单选题",
        questions: [
          {
            id: "ch4_q1",
            type: "single",
            text: "1．毛泽东明确提出以苏为鉴，独立自主地探索适合中国情况的社会主义建设道路的著作是（ ）",
            options: ["A．《论十大关系》", "B．《新民主主义论》", "C．《关于正确处理人民内部矛盾的问题》", "D．《中国革命和中国共产党》"],
            correctAnswer: "A",
            analysis: "1956年《论十大关系》标志着探索的良好开端。"
          },
          {
            id: "ch4_q6",
            type: "single",
            text: "6．毛泽东指出，社会主义社会的基本矛盾是（ ）",
            options: ["A．人民内部的非对抗性的矛盾", "B．生产关系和生产力之间、上层建筑和经济基础之间的矛盾", "C．无产阶级和资产阶级之间的矛盾", "D．供需矛盾"],
            correctAnswer: "B",
            analysis: "基本矛盾仍然是生产关系和生产力之间的矛盾，上层建筑和经济基础之间的矛盾。"
          }
        ]
      }
    ]
  },
  {
    id: "chap5",
    title: "第五章：中特理论形成",
    parts: [
      {
        title: "一、单选题",
        questions: [
          {
            id: "ch5_q1",
            type: "single",
            text: "1．中国特色社会主义理论体系不包括（ ）",
            options: ["A．毛泽东思想", "B．邓小平理论", "C．“三个代表”重要思想", "D．习近平新时代中国特色社会主义思想"],
            correctAnswer: "A",
            analysis: "不包括毛泽东思想。"
          }
        ]
      }
    ]
  },
  {
    id: "chap6",
    title: "第六章：邓小平理论",
    parts: [
      {
        title: "一、单选题",
        questions: [
          {
            id: "ch6_q1",
            type: "single",
            text: "1．邓小平理论首要的基本的理论问题是（ ）",
            options: ["A．什么是社会主义，怎样建设社会主义", "B．建设什么样的党、怎样建设党", "C．实现什么样的发展、怎样发展", "D．坚持什么样的中特"],
            correctAnswer: "A",
            analysis: "什么是社会主义，怎样建设社会主义。"
          },
          {
            id: "ch6_q2",
            type: "single",
            text: "2．邓小平理论的精髓是（ ）",
            options: ["A．实事求是", "B．解放思想、实事求是", "C．解放思想、实事求是、与时俱进", "D．求真务实"],
            correctAnswer: "B",
            analysis: "解放思想、实事求是。"
          }
        ]
      }
    ]
  },
  {
    id: "chap7",
    title: "第七章：“三个代表”",
    parts: [
      {
        title: "一、单选题",
        questions: [
          {
            id: "ch7_q2",
            type: "single",
            text: "2．发展生产力的决定因素是（ ）",
            options: ["A．劳动资料", "B．劳动对象", "C．科技进步和创新", "D．劳动者"],
            correctAnswer: "C",
            analysis: "科技进步和创新是发展生产力的决定因素。"
          }
        ]
      }
    ]
  },
  {
    id: "chap8",
    title: "第八章：科学发展观",
    parts: [
      {
        title: "一、单选题",
        questions: [
          {
            id: "ch8_q1",
            type: "single",
            text: "1．科学发展观的第一要义是（ ）",
            options: ["A．推动经济社会发展", "B．以人为本", "C．全面协调可持续", "D．统筹兼顾"],
            correctAnswer: "A",
            analysis: "第一要义是发展。"
          },
          {
            id: "ch8_q2",
            type: "single",
            text: "2．科学发展观的核心立场是（ ）",
            options: ["A．发展", "B．以人为本", "C．全面协调可持续", "D．统筹兼顾"],
            correctAnswer: "B",
            analysis: "核心立场是以人为本。"
          }
        ]
      }
    ]
  }
];
