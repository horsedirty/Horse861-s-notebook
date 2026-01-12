import { Chapter, Difficulty, ExamDistribution } from './types';

export const EXAM_DISTRIBUTION: ExamDistribution[] = [
  { name: '平时 (作业/出勤)', value: 10, color: '#A1A1A6' }, 
  { name: '过程 (大作业)', value: 40, color: '#0071e3' }, 
  { name: '期末 (闭卷)', value: 50, color: '#FF3B30' }, 
];

export const COURSE_CHAPTERS: Chapter[] = [
  {
    id: "ch1",
    number: 1,
    title: "绪论与基础",
    difficulty: Difficulty.Easy,
    summary: "建立机器人学的宏观框架，理解从'机器'到'智能体'的演变，掌握四大核心系统的类比关系。",
    keyPoints: [
      {
        title: "机器人定义与ISO标准",
        sections: [
          {
            text: "ISO 8373 定义核心要素：",
            list: [
              "**自动控制 (Automatically controlled)**：无需人工持续干预。",
              "**可编程 (Reprogrammable)**：动作可变，非固定凸轮机构。",
              "**多功能 (Multipurpose)**：适应不同任务。",
              "**多自由度**：通常具有3个或更多轴。",
            ]
          }
        ]
      },
      {
        title: "三代发展历程",
        sections: [
          {
            subtitle: "第一代：示教再现型 (Teaching & Playback)",
            text: "特点：**无感知，开环控制**。只能严格按照预存的程序或示教轨迹运动，对环境变化无适应能力。",
            list: ["典型代表：Unimate (1959)", "核心技术：点位控制(PTP)、连续轨迹控制(CP)"]
          },
          {
            subtitle: "第二代：感觉型 (Sensory)",
            text: "特点：**低级反馈**。配备简单传感器（力觉、触觉、视觉），能根据反馈信号调整动作。",
          },
          {
            subtitle: "第三代：智能型 (Intelligent)",
            text: "特点：**自主决策**。具有感知、识别、推理、规划能力。能适应非结构化环境。",
          }
        ],
        important: true
      },
      {
        title: "系统组成 (人体类比)",
        sections: [
          {
            text: "机器人系统 $\\approx$ 人体系统",
            list: [
              "**机械系统 (骨骼/肌肉)**：由连杆(Link)和关节(Joint)组成的开链机构。",
              "**驱动系统 (心脏/肌肉)**：电气(伺服电机)、液压(大力矩)、气动(清洁/防爆)。",
              "**感知系统 (五官)**：内部(编码器/力矩) + 外部(视觉/激光/声纳)。",
              "**控制系统 (大脑/小脑)**：轨迹规划、运动学/动力学解算。",
            ]
          }
        ]
      }
    ],
    examTips: ["重点记忆第一代'示教再现'的局限性。", "具身智能 (Embodied AI) 是将AI算法与物理实体结合的趋势。"]
  },
  {
    id: "ch2",
    number: 2,
    title: "空间描述与变换",
    difficulty: Difficulty.Critical,
    summary: "机器人学的数学基石。必须熟练掌握旋转矩阵的推导、齐次变换矩阵的构造及连乘规则。",
    keyPoints: [
      {
        title: "位姿描述 (Pose)",
        sections: [
          {
            text: "刚体在空间的描述需要位置和姿态：",
            list: [
              "**位置 (Position)**：位置矢量 $P = [p_x, p_y, p_z]^T$",
              "**姿态 (Orientation)**：旋转矩阵 $R \\in SO(3)$"
            ]
          }
        ]
      },
      {
        title: "旋转矩阵 (Rotation Matrix)",
        sections: [
          {
            subtitle: "基本旋转矩阵",
            text: "绕 $X$ 轴旋转 $\\theta$：\n$$ R_x(\\theta) = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & c\\theta & -s\\theta \\\\ 0 & s\\theta & c\\theta \\end{bmatrix} $$\n绕 $Z$ 轴旋转 $\\theta$：\n$$ R_z(\\theta) = \\begin{bmatrix} c\\theta & -s\\theta & 0 \\\\ s\\theta & c\\theta & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} $$"
          },
          {
            subtitle: "重要性质",
            text: "1. **正交性**：$R^T = R^{-1}$，且 $\\det(R) = 1$。\n2. **列向量意义**：$R$ 的三列分别代表新坐标系的 $x, y, z$ 轴在旧坐标系下的投影。"
          }
        ],
        important: true
      },
      {
        title: "齐次变换矩阵 (Homogeneous Transform)",
        sections: [
          {
            text: "为了统一旋转和平移，引入 $4 \\times 4$ 矩阵：\n$$ T = \\begin{bmatrix} R_{3\\times3} & P_{3\\times1} \\\\ 0_{1\\times3} & 1 \\end{bmatrix} $$",
            list: [
              "$R$：旋转子矩阵",
              "$P$：位置矢量",
              "最后一行恒为 $[0, 0, 0, 1]$ (用于仿射变换)"
            ]
          }
        ]
      },
      {
        title: "变换运算法则 (必考)",
        sections: [
          {
            text: "复合变换时的矩阵乘法顺序：",
            list: [
              "**左乘原则**：相对于**固定坐标系**（基坐标系/定系）变换，矩阵左乘。",
              "**右乘原则**：相对于**当前坐标系**（运动坐标系/动系）变换，矩阵右乘。",
              "例：先绕固定轴 $X$ 转 $\\alpha$，再绕动轴 $Z'$ 转 $\\beta$ $\\rightarrow$ $T = R_x(\\alpha) R_z(\\beta)$"
            ]
          }
        ],
        important: true
      },
      {
        title: "姿态的其他表示",
        sections: [
          {
            subtitle: "欧拉角 (Euler Angles)",
            text: "用三个角度 $(\\alpha, \\beta, \\gamma)$ 表示。存在 **万向节死锁 (Gimbal Lock)** 问题：当中间轴旋转 $90^\\circ$ 时，第一轴和第三轴重合，失去一个自由度。"
          },
          {
            subtitle: "四元数 (Quaternions)",
            text: "$Q = w + xi + yj + zk$。优点：无奇异点，计算效率高（插值平滑）；缺点：不直观。"
          }
        ]
      }
    ],
    examTips: ["计算题高频点：给定变换序列，写出总变换矩阵 T。", "务必区分左乘和右乘的应用场景。"]
  },
  {
    id: "ch3",
    number: 3,
    title: "运动学 (Kinematics)",
    difficulty: Difficulty.Critical,
    summary: "研究末端执行器与关节变量的关系。核心是DH参数法的建模与正逆运动学的求解。",
    keyPoints: [
      {
        title: "标准 DH 参数法 (Denavit-Hartenberg)",
        sections: [
          {
            text: "描述相邻连杆 $i-1$ 和 $i$ 关系的4个参数：",
            list: [
              "**杆长 $a_i$**：$Z_{i-1}$ 与 $Z_i$ 轴的公垂线长度（沿 $X_i$ 测）。",
              "**扭角 $\\alpha_i$**：$Z_{i-1}$ 与 $Z_i$ 轴的夹角（绕 $X_i$ 转）。",
              "**偏距 $d_i$**：$X_{i-1}$ 与 $X_i$ 在 $Z_{i-1}$ 上的距离（沿 $Z_{i-1}$ 测）。",
              "**关节角 $\\theta_i$**：$X_{i-1}$ 与 $X_i$ 的夹角（绕 $Z_{i-1}$ 转）。"
            ]
          },
          {
            text: "相邻连杆变换矩阵 $A_i$：\n$$ A_i = Rot(Z, \\theta_i) Trans(Z, d_i) Trans(X, a_i) Rot(X, \\alpha_i) $$"
          }
        ],
        important: true
      },
      {
        title: "正运动学 (Forward Kinematics)",
        sections: [
          {
            text: "已知关节变量 $q = [\\theta_1, ..., \\theta_n]^T$，求末端位姿 $T_n^0$。\n$$ T_n^0 = A_1(\\theta_1) A_2(\\theta_2) \\dots A_n(\\theta_n) $$",
            list: ["对于串联机械臂，正运动学有**唯一解**。"]
          }
        ]
      },
      {
        title: "逆运动学 (Inverse Kinematics)",
        sections: [
          {
            text: "已知末端位姿 $T$，求关节变量 $q$。\n存在问题：",
            list: [
              "**非线性**：方程包含大量三角函数。",
              "**多解性**：可能有多个关节配置对应同一末端位姿（如肘部向上/向下）。",
              "**无解**：目标点在工作空间外。"
            ]
          }
        ]
      },
      {
        title: "Pieper 准则 (解析解条件)",
        sections: [
          {
            text: "6自由度机器人存在封闭解析解的充分条件：",
            list: [
              "三个相邻关节轴**相交于一点**（例如：球形手腕）。",
              "或者，三个相邻关节轴**相互平行**。"
            ]
          }
        ],
        important: true
      }
    ],
    examTips: ["画出坐标系并提取DH参数表是必考大题。", "理解逆运动学的几何解法（投影法）。"]
  },
  {
    id: "ch4",
    number: 4,
    title: "动力学 (Dynamics)",
    difficulty: Difficulty.Hard,
    summary: "研究力与运动的关系。重点掌握拉格朗日方程的结构和物理意义。",
    keyPoints: [
      {
        title: "动力学方程通式",
        sections: [
          {
            text: "$$ \\tau = M(q)\\ddot{q} + V(q, \\dot{q})\\dot{q} + G(q) + F(\\dot{q}) $$",
            list: [
              "$\\tau$：关节驱动力矩向量。",
              "$M(q)$：**惯性矩阵**（对称正定），反映质量分布对运动的影响。",
              "$V(q, \\dot{q})$：**离心力与科里奥利力**（哥氏力）项。",
              "$G(q)$：**重力**项。",
              "$F$：摩擦力项。"
            ]
          }
        ],
        important: true
      },
      {
        title: "拉格朗日法 (Lagrange Formulation)",
        sections: [
          {
            text: "基于能量的方法。定义拉格朗日函数 $L = K - P$ (动能 - 势能)。\n动力学方程为：\n$$ \\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot{q}_i}\\right) - \\frac{\\partial L}{\\partial q_i} = \\tau_i $$",
            list: [
              "优点：物理意义明确，无需分析连杆间内力，形式闭环。",
              "缺点：计算量大，不适合实时控制。"
            ]
          }
        ]
      },
      {
        title: "牛顿-欧拉法 (Newton-Euler)",
        sections: [
          {
            text: "基于力平衡的方法。对每个连杆应用牛顿方程 ($F=ma$) 和欧拉方程 ($N=I\\dot{\\omega} + \\omega \\times I\\omega$)。",
            list: [
              "**前向递推**：从基座 $\\rightarrow$ 末端，计算速度和加速度。",
              "**后向递推**：从末端 $\\rightarrow$ 基座，计算受力和力矩。",
              "优点：计算效率高 (线性复杂度 $O(n)$)，适合仿真。"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "ch5",
    number: 5,
    title: "轨迹规划",
    difficulty: Difficulty.Hard,
    summary: "从路径到轨迹（增加时间约束）。重点是关节空间的多项式插值。",
    keyPoints: [
      {
        title: "关节空间规划",
        sections: [
          {
            text: "直接对关节角 $q(t)$ 进行函数拟合。",
            list: [
              "**三次多项式 (Cubic)**：$q(t) = a_0 + a_1t + a_2t^2 + a_3t^3$。\n约束条件：起点/终点的**位置**和**速度** (4个条件)。\n缺陷：**加速度不连续**，电机启动瞬间有冲击。",
              "**五次多项式 (Quintic)**：增加起点/终点的**加速度**约束 (6个条件)。\n$$ q(t) = a_0 + ... + a_5t^5 $$\n优点：加速度连续，运动平滑。"
            ]
          }
        ],
        important: true
      },
      {
        title: "雅可比矩阵 (Jacobian)",
        sections: [
          {
            text: "映射关节速度 $\\dot{q}$ 到笛卡尔速度 $v$：\n$$ v = J(q)\\dot{q} $$",
          },
          {
            subtitle: "奇异性 (Singularity)",
            text: "当 $\\det(J) = 0$ 时，矩阵不可逆。",
            list: [
              "**边界奇异**：机械臂完全伸展，无法向外运动。",
              "**内部奇异**：两关节轴共线，失去一个自由度。",
              "后果：在奇异点附近，若要求特定笛卡尔速度，关节速度 $\\dot{q} = J^{-1}v$ 趋于无穷大，导致失控。"
            ]
          }
        ],
        important: true
      }
    ]
  },
  {
    id: "ch6",
    number: 6,
    title: "传感器技术",
    difficulty: Difficulty.Medium,
    summary: "机器人的感知器官。重点区分增量/绝对编码器及各类测距雷达。",
    keyPoints: [
      {
        title: "内部传感器：光电编码器",
        sections: [
          {
            subtitle: "增量式 (Incremental)",
            text: "输出脉冲波 (A/B/Z相)。",
            list: [
              "通过统计脉冲数测位移，通过频率测速度。",
              "**缺点**：断电后位置丢失，需回零操作；抗干扰差。"
            ]
          },
          {
            subtitle: "绝对式 (Absolute)",
            text: "码盘有格雷码 (Gray Code) 刻道。",
            list: [
              "直接输出数字量，一一对应位置。",
              "**优点**：断电记忆，无需回零，可靠性高。"
            ]
          }
        ]
      },
      {
        title: "激光雷达 (LiDAR)",
        sections: [
          {
            text: "原理：ToF (Time of Flight) 或 三角测距。",
            list: [
              "**机械式**：360度旋转扫描，视野大，易磨损，成本高。",
              "**固态式 (MEMS/OPA)**：体积小，成本低，视角受限。",
              "特性：测距精度高 (mm级)，抗光照干扰强，但受雨雾烟尘影响。"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "ch7",
    number: 7,
    title: "SLAM (定位与建图)",
    difficulty: Difficulty.Critical,
    summary: "Simultaneous Localization and Mapping. 移动机器人的核心能力。",
    keyPoints: [
      {
        title: "基本数学描述",
        sections: [
          {
            text: "状态估计问题：\n$$ P(x_k, m | z_{1:k}, u_{1:k}) $$",
            list: [
              "$x_k$: 机器人在 $k$ 时刻的位姿",
              "$m$: 地图",
              "$z$: 观测数据 (传感器)",
              "$u$: 控制输入 (里程计)"
            ]
          }
        ]
      },
      {
        title: "SLAM 框架五大模块",
        sections: [
          {
            text: "现代 SLAM 系统通常由以下五个核心模块组成：",
            list: [
              "**传感器数据**：采集 LiDaR 或 Camera 数据。",
              "**前端 (Visual Odometry)**：估算相邻帧运动，推算位姿（有累积误差）。",
              "**后端 (Optimization)**：利用图优化 (Graph SLAM) 或 滤波器 (EKF) 消除累积误差。",
              "**回环检测 (Loop Closure)**：判断“是否回到过原点”，这是消除长时漂移的关键。",
              "**建图 (Mapping)**：生成栅格地图 (Grid Map) 或 点云地图 (Point Cloud)。"
            ]
          }
        ],
        important: true
      }
    ]
  },
  {
    id: "ch8",
    number: 8,
    title: "运动规划 (Motion Planning)",
    difficulty: Difficulty.Critical,
    summary: "从起点到终点的无碰撞路径生成。分层架构是主流。",
    keyPoints: [
      {
        title: "全局规划 (Global Planning)",
        sections: [
          {
            subtitle: "A* 算法",
            text: "启发式搜索。评价函数：\n$$ F(n) = G(n) + H(n) $$",
            list: [
              "$G(n)$：从起点到当前点的实际代价。",
              "$H(n)$：当前点到终点的**预估代价** (Heuristic)。",
              "若 $H(n) \\le$ 真实代价，则 A* 保证最优。"
            ]
          },
          {
            subtitle: "RRT (快速扩展随机树)",
            text: "基于采样。在空间随机撒点，向目标生长树。",
            list: ["优点：适合高维空间，概率完备。", "缺点：路径不平滑，非最优。"]
          }
        ]
      },
      {
        title: "局部规划 (Local Planning)",
        sections: [
          {
            subtitle: "DWA (动态窗口法)",
            text: "在速度空间 $(v, \\omega)$ 采样。模拟机器人在极短时间内的轨迹，根据 评价函数（目标方向、距离障碍物、速度大小）打分选择最优速度。",
          },
          {
            subtitle: "TEB (时间弹性带)",
            text: "将路径规划转化为多目标优化问题。能同时优化路径形状和时间，轨迹更平滑。"
          }
        ]
      }
    ]
  }
];