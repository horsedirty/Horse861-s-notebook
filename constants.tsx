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
    title: "绪论与基础概念",
    difficulty: Difficulty.Easy,
    summary: "本章构建机器人学的宏观认知框架。重点在于厘清机器人的定义边界、发展脉络，以及核心性能指标的物理含义。",
    keyPoints: [
      {
        title: "机器人定义与ISO 8373标准",
        sections: [
          {
            text: "机器人不仅是'机器'，更是'智能体'。ISO 8373 给出了工业机器人的严格定义：",
            list: [
              "**自动控制 (Automatically controlled)**：在运行过程中无需人工干预。",
              "**可编程 (Reprogrammable)**：程序可变，这意味着机械结构通用，通过软件定义功能。",
              "**多功能 (Multipurpose)**：适应不同的应用场景（如焊接、搬运、喷涂）。",
              "**多自由度 (XYZ + Rotation)**：通常具有3个或更多轴，固定或移动。",
            ]
          },
          {
            subtitle: "精度 vs 重复定位精度",
            text: "这是两个极易混淆的概念，考试常考辨析：",
            list: [
              "**精度 (Accuracy)**：机器人到达*指令目标位置*的能力。误差来源：机械公差、模型参数误差。",
              "**重复定位精度 (Repeatability)**：机器人*多次*到达*同一位置*的一致性程度。通常重复精度远优于绝对精度（例如：精度 $\\pm 1mm$，重复精度 $\\pm 0.05mm$）。"
            ]
          }
        ]
      },
      {
        title: "三代发展历程详解",
        important: true,
        sections: [
          {
            subtitle: "第一代：示教再现型 (Teaching & Playback)",
            text: "1959年 Unimate 诞生。**核心特征是'无感知'**。",
            list: [
              "**工作模式**：'手把手'示教或示教盒编程 $\\rightarrow$ 记录关节角度序列 $\\rightarrow$ 复现。",
              "**控制方式**：开环或简单的内部位置闭环，对外界环境无反馈。",
              "**局限**：一旦工件位置偏移，任务必失败。"
            ]
          },
          {
            subtitle: "第二代：感觉型 (Sensory)",
            text: "**核心特征是'低级反馈'**。",
            list: [
              "**传感器**：配备力觉、触觉、接近觉或简单的二维视觉。",
              "**能力**：能根据反馈信号调整动作（如：力控打磨、焊缝追踪）。"
            ]
          },
          {
            subtitle: "第三代：智能型 (Intelligent)",
            text: "**核心特征是'自主决策'**。",
            list: [
              "**感知**：多模态融合（视觉+激光+语义）。",
              "**认知**：理解环境语义，进行逻辑推理和任务规划。",
              "**典型代表**：Boston Dynamics Atlas, 特斯拉 Optimus。"
            ]
          }
        ]
      },
      {
        title: "机器人系统的层次结构",
        sections: [
          {
            text: "一个完整的机器人系统遵循 **Sense-Model-Plan-Act** 循环：",
            list: [
              "**感知层 (Sense)**：内感受器（编码器/IMU）+ 外感受器（相机/LiDAR）。",
              "**模型层 (Model)**：SLAM建图、运动学/动力学建模。",
              "**规划层 (Plan)**：全局路径规划 (A*) $\\rightarrow$ 局部轨迹规划 (DWA) $\\rightarrow$ 逆运动学求解。",
              "**执行层 (Act)**：电机驱动器 $\\rightarrow$ 关节力矩 $\\rightarrow$ 物理运动。"
            ]
          }
        ]
      }
    ],
    examTips: [
      "辨析题：精度(Accuracy)与重复精度(Repeatability)的区别。", 
      "填空题：ISO定义的四个关键词（自动、可编程、多功能、多轴）。",
      "具身智能 (Embodied AI) 是将AI大脑赋予物理身体，强调'交互'中产生智能。"
    ]
  },
  {
    id: "ch2",
    number: 2,
    title: "空间描述与坐标变换",
    difficulty: Difficulty.Critical,
    summary: "数学基石章节。主要解决刚体在空间中的位姿描述问题。必须熟练掌握旋转矩阵的性质、欧拉角与四元数的转换，以及齐次变换矩阵的运算。",
    keyPoints: [
      {
        title: "旋转矩阵 (Rotation Matrix)",
        important: true,
        sections: [
          {
            subtitle: "定义与物理意义",
            text: "旋转矩阵 $R = [x_B, y_B, z_B] \\in SO(3)$ 描述了坐标系 $\{B\}$ 相对于 $\{A\}$ 的姿态。",
            list: [
              "**列向量意义**：$R$ 的第 $i$ 列是 $\{B\}$ 系的第 $i$ 个坐标轴单位向量在 $\{A\}$ 系中的投影。",
              "**正交性**：$R^T R = I$，即 $R^{-1} = R^T$。这一性质在求逆变换时非常重要。",
              "**行列式**：$\\det(R) = +1$（右手系）。"
            ]
          },
          {
            subtitle: "基本旋转算子",
            text: "绕 $Z$ 轴旋转 $\\theta$：\n$$ R_z(\\theta) = \\begin{bmatrix} c\\theta & -s\\theta & 0 \\\\ s\\theta & c\\theta & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} $$\n绕 $Y$ 轴旋转 $\\theta$：\n$$ R_y(\\theta) = \\begin{bmatrix} c\\theta & 0 & s\\theta \\\\ 0 & 1 & 0 \\\\ -s\\theta & 0 & c\\theta \\end{bmatrix} $$"
          }
        ]
      },
      {
        title: "罗德里格斯公式 (Rodrigues' Formula)",
        sections: [
          {
            text: "已知旋转轴单位向量 $k = [k_x, k_y, k_z]^T$ 和旋转角 $\\theta$，旋转矩阵为：",
            list: [
              "$$ R(k, \\theta) = I + \\sin\\theta K + (1-\\cos\\theta)K^2 $$",
              "其中 $K$ 是向量 $k$ 的反对称矩阵 (Skew-symmetric matrix)：",
              "$$ K = \\begin{bmatrix} 0 & -k_z & k_y \\\\ k_z & 0 & -k_x \\\\ -k_y & k_x & 0 \\end{bmatrix} $$"
            ]
          }
        ]
      },
      {
        title: "齐次变换矩阵 (Homogeneous Transform)",
        important: true,
        sections: [
          {
            text: "为了将旋转和平移统一为矩阵乘法，引入 $4\\times4$ 矩阵：\n$$ T = \\begin{bmatrix} R & P \\\\ 0 & 1 \\end{bmatrix} $$",
          },
          {
            subtitle: "逆变换公式 (常考)",
            text: "已知 $T = \\begin{bmatrix} R & P \\\\ 0 & 1 \\end{bmatrix}$，其逆矩阵为：\n$$ T^{-1} = \\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix} $$",
            list: ["注意：位置部分不是简单的 $-P$，而是 $-R^T P$。"]
          }
        ]
      },
      {
        title: "RPY角与欧拉角",
        sections: [
          {
            subtitle: "RPY角 (Roll-Pitch-Yaw)",
            text: "对应绕固定坐标系的 $X-Y-Z$ 轴旋转（即 $Z-Y-X$ 欧拉角）：\n$$ R_{RPY} = R_z(\\phi) R_y(\\theta) R_x(\\psi) $$",
            list: ["常用于航海和航空领域描述船只/飞机姿态。"]
          },
          {
            subtitle: "万向节死锁 (Gimbal Lock)",
            text: "当中间轴旋转 $90^\\circ$（如 Pitch=90）时，第一轴和第三轴旋转轴重合。此时系统失去一个自由度，无法在特定方向旋转。"
          }
        ]
      }
    ],
    examTips: [
      "计算题陷阱：务必看清题目是'绕固定轴'(左乘)还是'绕当前轴'(右乘)。",
      "证明题：证明旋转矩阵是正交矩阵。",
      "计算 $T^{-1}$ 时不要忘记 $P$ 也要左乘 $R^T$。"
    ]
  },
  {
    id: "ch3",
    number: 3,
    title: "机器人运动学",
    difficulty: Difficulty.Critical,
    summary: "运动学建立了关节空间 (Joint Space) 与 笛卡尔空间 (Cartesian Space) 的映射。核心包括DH建模、正逆运动学及雅可比矩阵。",
    keyPoints: [
      {
        title: "DH 参数法 (Standard DH)",
        important: true,
        sections: [
          {
            text: "建立连杆坐标系的步骤：",
            list: [
              "1. 确定 $Z_i$ 轴：沿第 $i+1$ 个关节轴方向。",
              "2. 确定原点 $O_i$：$Z_i$ 与 $Z_{i-1}$ 的公垂线与 $Z_i$ 的交点。",
              "3. 确定 $X_i$ 轴：沿公垂线从 $Z_{i-1}$ 指向 $Z_i$。",
              "4. 确定 $Y_i$ 轴：右手定则。"
            ]
          },
          {
            text: "变换矩阵 $A_i$ (四个变换的乘积)：\n$$ ^{i-1}T_i = Rot(Z, \\theta_i) Trans(Z, d_i) Trans(X, a_i) Rot(X, \\alpha_i) $$"
          },
          {
            subtitle: "Standard DH vs Modified DH (Craig)",
            text: "Standard DH (Paul): $A_i$ 描述 $i-1 \\rightarrow i$。\nModified DH (Craig): 连杆坐标系建在连杆**前端**。参数定义略有不同，适用于树状结构机器人。"
          }
        ]
      },
      {
        title: "逆运动学 (Inverse Kinematics)",
        sections: [
          {
            subtitle: "多解性 (Multi-solution)",
            text: "对于PUMA560这类6轴机械臂，逆解通常有8组。选择解的原则：",
            list: [
              "**最短行程**：选择与当前关节角最接近的解。",
              "**避障**：选择不与环境碰撞的解。",
              "**关节限位**：排除超出物理限制的解。"
            ]
          },
          {
            subtitle: "代数解法 vs 几何解法",
            text: "几何法更直观，常利用投影将空间三角形降维到平面三角形求解（利用余弦定理）。"
          }
        ]
      },
      {
        title: "微分运动学与雅可比矩阵",
        important: true,
        sections: [
          {
            text: "雅可比矩阵 $J(q)$ 描述了关节速度 $\\dot{q}$ 与末端速度 $v = [v, \\omega]^T$ 的线性关系：\n$$ \\begin{bmatrix} v \\\\ \\omega \\end{bmatrix} = J(q) \\dot{q} $$"
          },
          {
            subtitle: "雅可比列向量的构造 (构造法)",
            text: "对于旋转关节 $i$，雅可比矩阵的第 $i$ 列 $J_i$ 为：\n$$ J_i = \\begin{bmatrix} z_{i-1} \\times (p_e - p_{i-1}) \\\\ z_{i-1} \\end{bmatrix} $$\n其中 $z_{i-1}$ 是关节轴单位向量，$p_e$ 是末端位置，$p_{i-1}$ 是关节位置。"
          }
        ]
      }
    ],
    examTips: [
      "必考大题：给定3轴或4轴机械臂草图，建立坐标系，填写DH参数表，并写出 $A$ 矩阵。",
      "雅可比矩阵奇异性分析：当 $\\theta$ 取何值时 $\\det(J)=0$？"
    ]
  },
  {
    id: "ch4",
    number: 4,
    title: "机器人动力学",
    difficulty: Difficulty.Hard,
    summary: "动力学是从时间维度的受力分析。重点在于理解拉格朗日方程的能量视角，以及动力学方程中各项的物理含义。",
    keyPoints: [
      {
        title: "拉格朗日动力学 (Lagrangian)",
        important: true,
        sections: [
          {
            text: "核心思想：系统动力学特性取决于系统的总能量。",
            list: [
              "**动能 $K$**：$K = \\frac{1}{2} \\dot{q}^T M(q) \\dot{q}$，其中 $M(q)$ 是惯性矩阵。",
              "**势能 $P$**：重力势能总和。",
              "**拉格朗日函数**：$L(q, \\dot{q}) = K - P$。",
              "**方程**：$\\frac{d}{dt} \\frac{\\partial L}{\\partial \\dot{q}} - \\frac{\\partial L}{\\partial q} = \\tau$"
            ]
          }
        ]
      },
      {
        title: "动力学方程各项解析",
        sections: [
          {
            text: "$$ M(q)\\ddot{q} + C(q, \\dot{q})\\dot{q} + G(q) = \\tau $$",
            list: [
              "**$M(q)$ 惯性项**：反映机构的质量分布。正定对称矩阵。对角线元素表示有效惯量，非对角线表示耦合惯量。",
              "**$C(q, \\dot{q})\\dot{q}$ 科氏力与离心力**：\n$c_{ijk}\\dot{q}_j\\dot{q}_k$ 类型项。\n若 $j=k$，为**离心力** (Centrifugal)；\n若 $j \\neq k$，为**科里奥利力** (Coriolis)。",
              "**$G(q)$ 重力项**：与姿态有关的静力矩。"
            ]
          }
        ]
      },
      {
        title: "参数辨识 (Parameter Identification)",
        sections: [
          {
            text: "实际机器人的质量、摩擦系数等参数未知。由于动力学方程关于动力学参数（质量、惯量）是**线性**的，可以写成：\n$$ \\tau = Y(q, \\dot{q}, \\ddot{q}) \\phi $$\n其中 $Y$ 是回归矩阵，$\\phi$ 是待识参数向量。通过最小二乘法即可求出 $\\phi$。"
          }
        ]
      }
    ],
    examTips: [
      "能够区分哪一项是离心力（速度平方项），哪一项是哥氏力（速度乘积项）。",
      "二连杆机械臂的动力学方程推导（重点掌握动能的计算）。"
    ]
  },
  {
    id: "ch5",
    number: 5,
    title: "轨迹规划",
    difficulty: Difficulty.Hard,
    summary: "规划解决'如何从A平滑移动到B'的问题。重点在于满足运动学约束（速度、加速度限制）下的多项式插值。",
    keyPoints: [
      {
        title: "三次多项式插值 (Cubic Spline)",
        sections: [
          {
            text: "函数形式：$q(t) = a_0 + a_1t + a_2t^2 + a_3t^3$。",
            list: [
              "未知数：4个 ($a_0 \\sim a_3$)",
              "约束条件：$q(0)=q_0, \\dot{q}(0)=v_0, q(t_f)=q_f, \\dot{q}(t_f)=v_f$。",
              "**缺点**：加速度 $a(t)$ 是线性的，起止时刻加速度突变，导致**柔性冲击**。"
            ]
          }
        ]
      },
      {
        title: "五次多项式插值 (Quintic Spline)",
        important: true,
        sections: [
          {
            text: "为了保证加速度连续，增加加速度约束：\n$$ q(t) = a_0 + a_1t + a_2t^2 + a_3t^3 + a_4t^4 + a_5t^5 $$",
            list: [
              "约束条件：增加 $\\ddot{q}(0)=a_0, \\ddot{q}(t_f)=a_f$。",
              "**优点**：加加速度 (Jerk) 有限，无刚性或柔性冲击，适合高速运动。"
            ]
          },
          {
            subtitle: "Minimum Jerk Trajectory",
            text: "五次多项式实际上是最优化这一指标的结果：$J = \\int_0^{t_f} (\\dddot{q})^2 dt$。"
          }
        ]
      },
      {
        title: "梯形速度曲线 (LSPB)",
        sections: [
          {
            text: "Linear Segment with Parabolic Blend (抛物线过渡的线性段)。",
            list: [
              "过程：加速段（匀加速）$\\rightarrow$ 匀速段 $\\rightarrow$ 减速段（匀减速）。",
              "特点：速度图是梯形，加速度图是矩形。",
              "适用：工业机器人最常用的规划方式，因为可以方便地限制最大速度和最大加速度。"
            ]
          }
        ]
      }
    ],
    examTips: [
      "计算题：给定起止点位置、速度、加速度，求解三次/五次多项式的系数。",
      "为什么需要五次多项式？（为了消除冲击，保护机械结构）。"
    ]
  },
  {
    id: "ch6",
    number: 6,
    title: "传感器技术",
    difficulty: Difficulty.Medium,
    summary: "机器人的感知系统。本章需掌握各类传感器的基本原理，特别是编码器分辨率计算和相机成像模型。",
    keyPoints: [
      {
        title: "光电编码器 (Optical Encoder)",
        sections: [
          {
            subtitle: "倍频技术",
            text: "增量式编码器输出A、B两相方波，相位差90度。",
            list: [
              "**辨向**：若A超前B，则正转；反之反转。",
              "**四倍频**：通过检测A、B波形的上升沿和下降沿，可以将物理刻线数的分辨率提高4倍。"
            ]
          }
        ]
      },
      {
        title: "相机成像模型 (Pinhole Model)",
        important: true,
        sections: [
          {
            text: "世界坐标 $P_w$ 到 像素坐标 $P_{uv}$ 的变换：\n$$ Z_c \\begin{bmatrix} u \\\\ v \\\\ 1 \\end{bmatrix} = K \\cdot T \\cdot \\begin{bmatrix} X_w \\\\ Y_w \\\\ Z_w \\\\ 1 \\end{bmatrix} $$",
            list: [
              "**内参矩阵 $K$**：$\\begin{bmatrix} f_x & 0 & c_x \\\\ 0 & f_y & c_y \\\\ 0 & 0 & 1 \\end{bmatrix}$。包含焦距 $f$ 和光心 $(c_x, c_y)$。",
              "**外参矩阵 $T$**：$[R|t]$，描述相机在世界坐标系中的位姿。"
            ]
          }
        ]
      },
      {
        title: "激光雷达与深度相机",
        sections: [
          {
            subtitle: "ToF (Time of Flight) 原理",
            text: "距离 $d = \\frac{c \\cdot \\Delta t}{2}$。测量光脉冲发射到接收的时间差。",
            list: ["精度主要受限于计时电路的时间分辨率。"]
          },
          {
            subtitle: "结构光 (Structured Light)",
            text: "投射已知图案（散斑/条纹），通过图案的畸变计算深度。适合近距离高精度，但受强光干扰（室外失效）。"
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
    summary: "Simultaneous Localization and Mapping. 本章聚焦于概率机器人学基础，包括贝叶斯滤波和图优化框架。",
    keyPoints: [
      {
        title: "贝叶斯滤波 (Bayes Filter)",
        important: true,
        sections: [
          {
            text: "SLAM的本质是状态估计。递推公式分为两步：",
            list: [
              "**预测 (Prediction)**：根据运动方程，利用上一时刻状态 $x_{k-1}$ 和控制量 $u_k$ 预测当前状态。\n$$ P(x_k | z_{1:k-1}) = \\int P(x_k | x_{k-1}, u_k) P(x_{k-1} | z_{1:k-1}) dx_{k-1} $$",
              "**更新 (Update)**：根据观测方程，利用观测值 $z_k$ 修正预测值。\n$$ P(x_k | z_{1:k}) = \\eta P(z_k | x_k) P(x_k | z_{1:k-1}) $$"
            ]
          }
        ]
      },
      {
        title: "前端与后端",
        sections: [
          {
            subtitle: "前端 (Visual Odometry)",
            text: "通过相邻帧匹配（特征点法/直接法）计算相对运动。存在**漂移 (Drift)**。",
            list: ["ICP (Iterative Closest Point) 算法用于点云配准。"]
          },
          {
            subtitle: "后端 (Optimization)",
            text: "通过构建图 (Pose Graph)，将误差均摊到全局。",
            list: [
              "**图优化**：节点=位姿，边=约束。目标是最小化所有边的误差平方和：\n$$ \\min_x \\sum_i e_i^T \\Omega_i e_i $$"
            ]
          }
        ]
      },
      {
        title: "回环检测 (Loop Closure)",
        sections: [
          {
            text: "核心作用：**消除累积误差**。",
            list: [
              "原理：识别当前场景是否与历史场景相似。",
              "方法：**词袋模型 (Bag of Words)**。将图像特征聚类成'单词'，通过统计单词分布计算相似度。"
            ]
          }
        ]
      }
    ],
    examTips: [
      "为什么SLAM需要回环检测？（没有回环，误差会随时间无界发散）。",
      "写出贝叶斯滤波的两个基本步骤（预测、更新）。"
    ]
  },
  {
    id: "ch8",
    number: 8,
    title: "运动规划 (Motion Planning)",
    difficulty: Difficulty.Critical,
    summary: "在高维空间中寻找避障路径。重点掌握C-Space概念及A*、RRT算法流程。",
    keyPoints: [
      {
        title: "构型空间 (Configuration Space, C-Space)",
        important: true,
        sections: [
          {
            text: "将机器人的形状视为一个点，将障碍物膨胀。",
            list: [
              "**定义**：机器人的所有可能位姿的集合。",
              "**C-Obstacle**：导致碰撞的构型集合。",
              "**Free Space**：$C_{free} = C \\setminus C_{obs}$。",
              "意义：将复杂的几何避障问题转化为点在流形上的路径搜索问题。"
            ]
          }
        ]
      },
      {
        title: "图搜索算法：A*",
        sections: [
          {
            text: "评价函数 $F(n) = G(n) + H(n)$。",
            list: [
              "$G(n)$：起点到当前点的已知代价。",
              "$H(n)$：当前点到终点的启发式估计代价（如欧氏距离）。",
              "**最优性条件**：$H(n)$ 必须是**可采纳的 (Admissible)**，即 $H(n) \\le$ 真实代价。否则A*不一定能找到最优解。"
            ]
          }
        ]
      },
      {
        title: "采样算法：RRT & RRT*",
        important: true,
        sections: [
          {
            subtitle: "RRT (Rapidly-exploring Random Tree)",
            text: "步骤：\n1. 采样：在空间随机采样点 $x_{rand}$。\n2. 寻找最近点：在树上找最近点 $x_{near}$。\n3. 扩展：从 $x_{near}$ 向 $x_{rand}$ 延伸步长 $\\epsilon$ 得到 $x_{new}$。\n4. 碰撞检测：若路径无碰撞，加入树。",
            list: ["优点：概率完备，无需构建网格，适合高维。", "缺点：路径曲折，非最优。"]
          },
          {
            subtitle: "RRT* (Asymptotically Optimal)",
            text: "改进：引入**重连 (Rewire)** 过程。在加入新节点时，检查是否可以通过新节点优化邻近节点的路径代价。随着采样增多，解收敛到最优路径。"
          }
        ]
      },
      {
        title: "人工势场法 (APF)",
        sections: [
          {
            text: "思想：目标点产生引力场，障碍物产生斥力场。机器人沿合力方向运动。",
            list: [
              "公式：$U(q) = U_{att}(q) + U_{rep}(q)$。",
              "**局限性**：容易陷入**局部极小值 (Local Minima)**，导致机器人在障碍物前震荡或停滞。"
            ]
          }
        ]
      }
    ],
    examTips: [
      "解释为什么 $H(n)$ 不能大于真实代价。",
      "对比RRT和RRT*的区别（是否有重连优化步骤）。",
      "什么是局部极小值问题？如何解决？（引入随机扰动或结合全局规划）。"
    ]
  }
];