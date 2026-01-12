import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface XiReviewProps {
  onBack: () => void;
}

export const XiReview: React.FC<XiReviewProps> = ({ onBack }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    const contentDiv = document.querySelector('.xi-review-content');
    if (contentDiv) {
      contentDiv.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={`flex h-screen flex-col ${darkMode ? 'dark-mode-xi' : ''}`} style={getStyles(darkMode)}>
      {/* Header */}
      <header className="sticky top-0 z-100 flex items-center justify-between border-b px-6 py-4" style={{
        backgroundColor: darkMode ? '#1e1e1e' : 'white',
        borderColor: darkMode ? '#333333' : '#e1e4e8',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
      }}>
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors"
            style={{ backgroundColor: '#c0392b', hover: '#a0281c' }}
          >
            ← 返回首页
          </button>
          <h1 className="text-2xl font-bold" style={{ color: darkMode ? '#e0e0e0' : '#2c3e50' }}>
            习思想期末复习全书 (2023版)
          </h1>
        </div>
        <button
          onClick={toggleMode}
          className="px-3 py-1 rounded-full border text-sm transition-colors"
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderColor: 'rgba(255,255,255,0.4)',
            color: 'white'
          }}
        >
          {darkMode ? '☀️ 亮色' : '🌓 深色'}
        </button>
      </header>

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div 
          className="w-72 border-r overflow-y-auto flex-shrink-0"
          style={{
            backgroundColor: darkMode ? '#1e1e1e' : 'white',
            borderColor: darkMode ? '#333333' : '#e1e4e8'
          }}
        >
          <NavGroup title="总论与基础" items={[
            { id: 'intro', label: '导论：体系与精髓' },
            { id: 'ch1', label: '第一章：新时代与历史方位' },
            { id: 'ch2', label: '第二章：中国式现代化(核心)' },
          ]} activeSection={activeSection} onScroll={scrollToSection} darkMode={darkMode} />

          <NavGroup title="核心布局" items={[
            { id: 'ch3', label: '第三章：党的全面领导(根本)' },
            { id: 'ch4', label: '第四章：以人民为中心(立场)' },
            { id: 'ch5', label: '第五章：全面深化改革' },
            { id: 'ch6', label: '第六章：高质量发展(经济)' },
          ]} activeSection={activeSection} onScroll={scrollToSection} darkMode={darkMode} />

          <NavGroup title="五位一体 & 四个全面" items={[
            { id: 'ch7', label: '第七章：教科人战略' },
            { id: 'ch8', label: '第八章：全过程人民民主' },
            { id: 'ch9', label: '第九章：全面依法治国' },
            { id: 'ch10', label: '第十章：文化强国' },
            { id: 'ch11', label: '第十一章：民生建设' },
            { id: 'ch12', label: '第十二章：生态文明' },
            { id: 'ch13', label: '第十三章：国家安全' },
          ]} activeSection={activeSection} onScroll={scrollToSection} darkMode={darkMode} />

          <NavGroup title="强国保障" items={[
            { id: 'ch14', label: '第十四章：国防军队' },
            { id: 'ch15', label: '第十五章：祖国统一' },
            { id: 'ch16', label: '第十六章：大国外交' },
            { id: 'ch17', label: '第十七章：全面从严治党' },
          ]} activeSection={activeSection} onScroll={scrollToSection} darkMode={darkMode} />

          <NavGroup title="⚠️ 绝密技巧" items={[
            { id: 'final-tips', label: '★ 通用大题"万能"模版' },
          ]} activeSection={activeSection} onScroll={scrollToSection} darkMode={darkMode} />
        </div>

        {/* Content Area */}
        <div 
          className="xi-review-content flex-1 overflow-y-auto p-8"
          style={{
            backgroundColor: darkMode ? '#121212' : '#f5f7fa',
            color: darkMode ? '#e0e0e0' : '#2c3e50'
          }}
        >
          {/* 导论 */}
          <ChapterBox id="intro" title="导论：马克思主义中国化时代化新的飞跃" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>习思想的历史地位：</strong><br/>
              1. 是当代中国马克思主义、二十一世纪马克思主义。<br/>
              2. 是<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>中华文化和中国精神的时代精华</span>。<br/>
              3. 是实现中华民族伟大复兴的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>行动指南</span>。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点：两个结合</SectionTitle>
            <p><strong>定义：</strong>坚持把马克思主义基本原理同<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>中国具体实际</span>相结合、同<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>中华优秀传统文化</span>相结合。</p>
            <p><strong>意义：</strong>是推进马克思主义中国化时代化的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>根本途径</span>。</p>
            <TrapBox darkMode={darkMode}>注意：第二个结合（同中华优秀传统文化结合）是近年来的新重点，强调"巩固文化主体性"。</TrapBox>

            <SectionTitle darkMode={darkMode}>2. 核心考点：十个明确 & 十四个坚持</SectionTitle>
            <p><strong>十个明确（侧重理论/世界观）：</strong>回答"是什么"。例如明确中国特色社会主义最本质的特征是中国共产党领导。</p>
            <p><strong>十四个坚持（侧重实践/方法论）：</strong>回答"怎么做"。例如坚持党对一切工作的领导，坚持以人民为中心。</p>

            <SectionTitle darkMode={darkMode}>3. 核心考点：六个必须坚持（世界观方法论）</SectionTitle>
            <p>坚持人民至上（根本立场）、坚持自信自立（立足点）、坚持守正创新（原则）、坚持问题导向（源头）、坚持系统观念（基础方法）、坚持胸怀天下（格局）。<br/><span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>（口诀：人自守，问系胸）</span></p>

            <EssayLogic darkMode={darkMode}>
              <strong>【主观题】为什么说习思想实现了马克思主义中国化时代化新的飞跃？</strong><br/>
              1. <strong>理论维度：</strong>提出了"两个结合"等一系列原创性治国理政新理念新思想新战略。<br/>
              2. <strong>实践维度：</strong>引领中国在改革发展稳定、内政外交国防等方面取得了历史性成就、发生了历史性变革。<br/>
              3. <strong>文化维度：</strong>将马克思主义同中华优秀传统文化深度融合，是中华文化和中国精神的时代精华。<br/>
              4. <strong>世界维度：</strong>为解决人类问题贡献了中国智慧和中国方案。
            </EssayLogic>
          </ChapterBox>

          {/* 第一章 */}
          <ChapterBox id="ch1" title="第一章：新时代坚持和发展中国特色社会主义" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>新时代的历史方位：</strong><br/>
              中国特色社会主义进入新时代。这是我国发展新的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>历史方位</span>。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点：主要矛盾的变化</SectionTitle>
            <p><strong>内容：</strong>人民日益增长的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>美好生活需要</span>和<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>不平衡不充分的发展</span>之间的矛盾。</p>
            <TrapBox darkMode={darkMode}>陷阱：变的是"主要矛盾"，不变的是"基本国情"（社会主义初级阶段）和"国际地位"（最大发展中国家）。</TrapBox>

            <SectionTitle darkMode={darkMode}>2. 核心考点：新时代的内涵（三个意味着）</SectionTitle>
            <p>1. 意味着近代以来久经磨难的中华民族迎来了从<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>站起来、富起来到强起来</span>的伟大飞跃。<br/>
            2. 意味着<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>科学社会主义</span>在21世纪的中国焕发出强大生机活力。<br/>
            3. 意味着给世界上那些既希望加快发展又希望保持自身独立性的国家提供了<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>全新选择</span>（中国智慧/中国方案）。</p>
          </ChapterBox>

          {/* 第二章 */}
          <ChapterBox id="ch2" title="第二章：以中国式现代化全面推进中华民族伟大复兴" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>定性与目标：</strong><br/>
              中国式现代化是强国建设、民族复兴的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>唯一正确道路</span>。<br/>
              总任务是：实现社会主义现代化和中华民族伟大复兴。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 必背：中国式现代化的五大特征（详细版）</SectionTitle>
            <p>1. <strong>人口规模巨大：</strong>14亿多人口整体迈进现代化社会，艰巨性复杂性前所未有。<br/>
            2. <strong>全体人民共同富裕：</strong>不是少数人的富裕，防止两极分化。<br/>
            3. <strong>物质文明和精神文明相协调：</strong>既要富口袋，也要富脑袋。<br/>
            4. <strong>人与自然和谐共生：</strong>走可持续发展道路，不走"先污染后治理"老路。<br/>
            5. <strong>走和平发展道路：</strong>不走殖民掠夺老路，互利共赢。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：本质要求（9条，记首尾）</SectionTitle>
            <p>首：坚持中国共产党领导。<br/>尾：创造<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>人类文明新形态</span>。</p>

            <EssayLogic darkMode={darkMode}>
              <strong>【主观题】如何理解中国式现代化创造了人类文明新形态？</strong><br/>
              1. <strong>打破迷思：</strong>打破了"现代化=西方化"的迷思，证明现代化模式是多样的。<br/>
              2. <strong>独特路径：</strong>它扎根中国大地，切合中国实际，具有鲜明的中国特色（结合五大特征简述）。<br/>
              3. <strong>世界意义：</strong>为发展中国家走向现代化提供了新的选择，为人类社会发展贡献了中国方案。
            </EssayLogic>
          </ChapterBox>

          {/* 第三章 */}
          <ChapterBox id="ch3" title="第三章：坚持党的全面领导" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>最高频考点：</strong><br/>
              1. 中国共产党领导是<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>中国特色社会主义最本质的特征</span>。<br/>
              2. 中国共产党领导是<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>中国特色社会主义制度的最大优势</span>。<br/>
              3. 党是<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>最高政治领导力量</span>。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点："两个维护"</SectionTitle>
            <p>1. 坚决维护习近平总书记党中央的核心、全党的核心地位。<br/>
            2. 坚决维护党中央权威和集中统一领导（这是党的政治建设的首要任务）。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：党的领导制度体系</SectionTitle>
            <p>党中央是坐镇中军帐的"帅"。党中央必须有"定于一尊、一锤定音"的权威。</p>

            <EssayLogic darkMode={darkMode}>
              <strong>【主观题】为什么要坚持党的全面领导？</strong><br/>
              1. <strong>历史逻辑：</strong>是历史和人民的选择（没有共产党就没有新中国）。<br/>
              2. <strong>理论逻辑：</strong>是由党的性质（先锋队）和宗旨（为人民服务）决定的；是最本质特征和最大优势。<br/>
              3. <strong>实践逻辑：</strong>是实现民族复兴的根本保证。办好中国的事情，关键在党。应对复杂局势和风险挑战，必须依靠党的领导"定海神针"。
            </EssayLogic>
          </ChapterBox>

          {/* 第四章 */}
          <ChapterBox id="ch4" title="第四章：坚持以人民为中心" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>人民观金句：</strong><br/>
              <span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>"江山就是人民，人民就是江山。"</span><br/>
              中国共产党领导人民打江山、守江山，守的是<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>人民的心</span>。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点：基本立场</SectionTitle>
            <p><strong>根本政治立场：</strong>人民立场。<br/>
            <strong>根本宗旨：</strong>全心全意为人民服务。<br/>
            <strong>奋斗目标：</strong>人民对美好生活的向往。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：共同富裕</SectionTitle>
            <p><strong>性质：</strong>是中国特色社会主义的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>本质要求</span>。<br/>
            <strong>内涵辨析：</strong><br/>
            1. 是全体人民的富裕，不是少数人富裕。<br/>
            2. 是物质生活和精神生活的双重富裕。<br/>
            3. <strong>不是</strong>整齐划一的平均主义，<strong>不是</strong>劫富济贫。<br/>
            4. 是一个长期的历史过程，不能一蹴而就。</p>
          </ChapterBox>

          {/* 第五章 */}
          <ChapterBox id="ch5" title="第五章：全面深化改革开放" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>地位：</strong>改革开放是决定当代中国前途命运的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>关键一招</span>。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点：全面深化改革总目标</SectionTitle>
            <p>完善和发展中国特色社会主义制度，推进<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>国家治理体系和治理能力现代化</span>。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：政府与市场的关系（经济体制改革核心）</SectionTitle>
            <p>使市场在资源配置中起<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>决定性</span>作用，更好发挥政府作用。<br/>
            <TrapBox darkMode={darkMode}>陷阱：以前叫"基础性作用"，现在叫"决定性作用"。</TrapBox></p>

            <SectionTitle darkMode={darkMode}>3. 核心考点：开放</SectionTitle>
            <p><strong>格局：</strong>推动形成全面开放新格局（陆海内外联动、东西双向互济）。<br/>
            <strong>制度型开放：</strong>从商品和要素流动型开放向规则、规制、管理、标准等制度型开放转变。</p>
          </ChapterBox>

          {/* 第六章 */}
          <ChapterBox id="ch6" title="第六章：推动高质量发展" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>地位：</strong><br/>
              <span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>高质量发展</span>是全面建设社会主义现代化国家的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>首要任务</span>。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 必背：新发展理念（5个词+内涵）</SectionTitle>
            <p>1. <strong>创新：</strong><span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>第一动力</span>，解决发展动力问题。<br/>
            2. <strong>协调：</strong>内生特点，解决发展不平衡问题。<br/>
            3. <strong>绿色：</strong>普遍形态，解决人与自然和谐问题。<br/>
            4. <strong>开放：</strong>必由之路，解决发展内外联动问题。<br/>
            5. <strong>共享：</strong><span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>本质要求</span>，解决社会公平正义问题。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：新发展格局</SectionTitle>
            <p>构建以<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>国内大循环为主体</span>、国内国际双循环相互促进的新发展格局。<br/>
            <strong>关键：</strong>在于经济循环的畅通无阻。<br/>
            <strong>最本质特征：</strong>实现高水平的自立自强。</p>

            <SectionTitle darkMode={darkMode}>3. 核心考点：基本经济制度</SectionTitle>
            <p>坚持"两个毫不动摇"：毫不动摇巩固和发展公有制经济，毫不动摇鼓励、支持、引导非公有制经济发展。</p>
          </ChapterBox>

          {/* 第七章 */}
          <ChapterBox id="ch7" title="第七章：教育、科技、人才战略" darkMode={darkMode}>
            <SectionTitle darkMode={darkMode}>1. 核心考点：三位一体</SectionTitle>
            <p>党的二十大首次将教育、科技、人才专章部署。三者关系：<br/>
            教育是基础，科技是关键，人才是根本。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：三个"第一"</SectionTitle>
            <p>科技是<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>第一生产力</span>。<br/>
            人才是<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>第一资源</span>。<br/>
            创新是<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>第一动力</span>。</p>

            <SectionTitle darkMode={darkMode}>3. 具体领域</SectionTitle>
            <p><strong>教育：</strong>根本任务是<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>立德树人</span>。<br/>
            <strong>科技：</strong>坚持"四个面向"（世界科技前沿、经济主战场、国家重大需求、人民生命健康）。坚决打赢关键核心技术攻坚战。</p>
          </ChapterBox>

          {/* 第八章 */}
          <ChapterBox id="ch8" title="第八章：发展全过程人民民主" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>本质属性：</strong><br/>
              <span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>全过程人民民主</span>是社会主义民主政治的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>本质属性</span>。是最广泛、最真实、最管用的民主。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点：全过程的含义</SectionTitle>
            <p>实现了过程民主和成果民主、程序民主和实质民主、直接民主和间接民主、人民民主和国家意志相统一。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：制度体系</SectionTitle>
            <p><strong>根本政治制度：</strong>人民代表大会制度。<br/>
            <strong>基本政治制度：</strong><br/>
            1. 领导的多党合作和政治协商制度（<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>协商民主</span>是实践全过程人民民主的重要形式/特有形式）。<br/>
            2. 民族区域自治制度（主线：铸牢<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>中华民族共同体意识</span>）。<br/>
            3. 基层群众自治制度。</p>
          </ChapterBox>

          {/* 第九章 */}
          <ChapterBox id="ch9" title="第九章：全面依法治国" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>总目标：</strong><br/>
              建设中国特色社会主义<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>法治体系</span>，建设社会主义<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>法治国家</span>。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点：习近平法治思想的核心要义（十一个坚持）</SectionTitle>
            <p>重点记住：坚持党对全面依法治国的领导（根本保证）、坚持以人民为中心（根本立场）。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：工作布局</SectionTitle>
            <p>坚持依法治国、依法执政、依法行政共同推进；坚持法治国家、法治政府、法治社会一体建设。</p>

            <EssayLogic darkMode={darkMode}>
              <strong>【主观题】如何理解党和法的关系？</strong><br/>
              1. <strong>核心问题：</strong>党和法的关系是法治建设的核心问题。<br/>
              2. <strong>统一性：</strong>党的领导和依法治国是高度统一的。党领导人民制定宪法法律，党领导人民实施宪法法律，党自身必须在宪法法律范围内活动。<br/>
              3. <strong>反对谬论：</strong>决不能把党的领导和依法治国对立起来，决不能落入西方"党大还是法大"的政治陷阱。
            </EssayLogic>
          </ChapterBox>

          {/* 第十章 */}
          <ChapterBox id="ch10" title="第十章：建设社会主义文化强国" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>文化自信：</strong><br/>
              文化自信是一个国家、一个民族发展中<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>更基本、更深沉、更持久</span>的力量。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点：根本制度</SectionTitle>
            <p>坚持马克思主义在意识形态领域指导地位的根本制度。</p>

            <SectionTitle darkMode={darkMode}>2. 必背：社会主义核心价值观（三个层面）</SectionTitle>
            <p><strong>国家层面：</strong>富强、民主、文明、和谐。<br/>
            <strong>社会层面：</strong>自由、平等、公正、法治。<br/>
            <strong>个人层面：</strong>爱国、敬业、诚信、友善。<br/>
            （考试常考选择题，问属于哪个层面，必须分清）</p>

            <SectionTitle darkMode={darkMode}>3. 核心考点：意识形态</SectionTitle>
            <p>意识形态工作是为国家立心、为民族立魂的工作，关乎旗帜、关乎道路、关乎国家政治安全。</p>
          </ChapterBox>

          {/* 第十一章 */}
          <ChapterBox id="ch11" title="第十一章：保障和改善民生" darkMode={darkMode}>
            <SectionTitle darkMode={darkMode}>1. 核心考点：就业</SectionTitle>
            <p>就业是<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>最大的民生</span>。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：收入分配</SectionTitle>
            <p>构建<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>橄榄型</span>分配结构（扩大中等收入群体，增加低收入者收入，调节过高收入，取缔非法收入）。</p>

            <SectionTitle darkMode={darkMode}>3. 核心考点：社会保障</SectionTitle>
            <p>社会保障体系是人民生活的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>安全网</span>和社会运行的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>稳定器</span>。</p>
          </ChapterBox>

          {/* 第十二章 */}
          <ChapterBox id="ch12" title="第十二章：建设社会主义生态文明" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>核心理念：</strong><br/>
              <span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>绿水青山就是金山银山</span>（两山理论）。<br/>
              保护生态环境就是保护生产力，改善生态环境就是发展生产力。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点：双碳目标</SectionTitle>
            <p>力争2030年前实现碳达峰，2060年前实现碳中和。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：系统观念</SectionTitle>
            <p>坚持山水林田湖草沙一体化保护和系统治理。</p>
          </ChapterBox>

          {/* 第十三章 */}
          <ChapterBox id="ch13" title="第十三章：维护和塑造国家安全" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>总体国家安全观（五大要素，必背）：</strong><br/>
              以<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>人民安全</span>为宗旨，<br/>
              以<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>政治安全</span>为根本，<br/>
              以<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>经济安全</span>为基础，<br/>
              以<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>军事、科技、文化、社会安全</span>为保障，<br/>
              以<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>促进国际安全</span>为依托。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点：统筹发展和安全</SectionTitle>
            <p>安全是发展的前提，发展是安全的保障。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：政治安全</SectionTitle>
            <p>在国家安全中居于首要地位，核心是维护政权安全和制度安全。</p>
          </ChapterBox>

          {/* 第十四章 */}
          <ChapterBox id="ch14" title="第十四章：建设巩固国防和强大人民军队" darkMode={darkMode}>
            <SectionTitle darkMode={darkMode}>1. 核心考点：强军目标</SectionTitle>
            <p>建设一支<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>听党指挥</span>（灵魂，政治建军）、<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>能打胜仗</span>（核心，战斗力）、<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>作风优良</span>（保证）的人民军队。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：根本原则</SectionTitle>
            <p>坚持党对人民军队的绝对领导（军委主席负责制）。</p>

            <SectionTitle darkMode={darkMode}>3. 核心考点：唯一标准</SectionTitle>
            <p><span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>战斗力</span>是唯一的根本的标准。</p>
          </ChapterBox>

          {/* 第十五章 */}
          <ChapterBox id="ch15" title="第十五章：坚持\"一国两制\"和推进祖国统一" darkMode={darkMode}>
            <SectionTitle darkMode={darkMode}>1. 核心考点：一国两制的关系</SectionTitle>
            <p>"一国"是根，根深才能叶茂；"一国"是本，本固才能枝荣。<br/>
            <strong>管治权：</strong>中央对特别行政区拥有<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>全面管治权</span>。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：台湾问题</SectionTitle>
            <p><strong>基本方针：</strong>"和平统一、一国两制"。<br/>
            <strong>政治基础：</strong><span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>一个中国原则</span>（九二共识的核心意涵）。</p>
          </ChapterBox>

          {/* 第十六章 */}
          <ChapterBox id="ch16" title="第十六章：中国特色大国外交" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>核心理念：</strong><br/>
              推动构建<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>人类命运共同体</span>。<br/>
              内涵：建设持久和平、普遍安全、共同繁荣、开放包容、清洁美丽的世界。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点：外交布局</SectionTitle>
            <p>大国是关键，周边是首要，发展中国家是基础，多边是舞台。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：一带一路</SectionTitle>
            <p><strong>原则：</strong><span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>共商、共建、共享</span>。</p>

            <SectionTitle darkMode={darkMode}>3. 核心考点：全人类共同价值</SectionTitle>
            <p>和平、发展、公平、正义、民主、自由。（注意与社会主义核心价值观区分）</p>
          </ChapterBox>

          {/* 第十七章 */}
          <ChapterBox id="ch17" title="第十七章：全面从严治党" darkMode={darkMode}>
            <GoldSentence darkMode={darkMode}>
              <strong>跳出历史周期律的答案：</strong><br/>
              第一个答案：让人民来监督政府（毛泽东）。<br/>
              第二个答案：<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>自我革命</span>（习近平）。
            </GoldSentence>

            <SectionTitle darkMode={darkMode}>1. 核心考点：新时代党的建设总要求</SectionTitle>
            <p>以党的<span style={{ color: darkMode ? '#ff6b6b' : '#c0392b', fontWeight: 'bold' }}>政治建设</span>为统领（摆在首位）。<br/>
            全面从严治党的基础是"全面"，关键是"严"，要害是"治"。</p>

            <SectionTitle darkMode={darkMode}>2. 核心考点：反腐败</SectionTitle>
            <p>坚持不敢腐（惩治震慑）、不能腐（制度约束）、不想腐（思想教育）一体推进。</p>

            <SectionTitle darkMode={darkMode}>3. 核心考点：三个"务必"</SectionTitle>
            <p>务必不忘初心、牢记使命；务必谦虚谨慎、艰苦奋斗；务必敢于斗争、善于斗争。</p>
          </ChapterBox>

          {/* 万能模板 */}
          <div 
            id="final-tips"
            className="mb-8 rounded-lg p-8 border-2"
            style={{
              backgroundColor: darkMode ? 'rgba(192, 57, 43, 0.1)' : '#fffcf0',
              borderColor: darkMode ? '#ff6b6b' : '#c0392b'
            }}
          >
            <h2 style={{
              textAlign: 'center',
              borderBottom: `2px solid ${darkMode ? '#ff6b6b' : '#c0392b'}`,
              paddingBottom: '10px',
              color: darkMode ? '#ff6b6b' : '#c0392b'
            }}>★ 主观题"万能"答题模版 ★</h2>
            <p><em>如果遇到不会的大题，按以下逻辑"拼凑"答案，可得基础分：</em></p>
            
            <p><strong>第一段：定性（是什么/地位）</strong></p>
            <ul style={{ marginLeft: '20px' }}>
              <li>这是习近平新时代中国特色社会主义思想的重要组成部分。</li>
              <li>这是实现中华民族伟大复兴的必然要求/必由之路。</li>
              <li>这是坚持以人民为中心的体现。</li>
            </ul>

            <p><strong>第二段：原因（为什么/意义）</strong></p>
            <ul style={{ marginLeft: '20px' }}>
              <li>有利于......（增强综合国力/提高人民生活水平/巩固党的执政地位）。</li>
              <li>是应对百年未有之大变局、应对国内外风险挑战的需要。</li>
              <li>只有......才能......（只有坚持党的领导，才能实现强国目标）。</li>
            </ul>

            <p><strong>第三段：措施（怎么做/路径）</strong></p>
            <ul style={{ marginLeft: '20px' }}>
              <li>必须坚持党的全面领导（万能第一条）。</li>
              <li>必须坚持以人民为中心，依靠人民，造福人民。</li>
              <li>必须贯彻新发展理念（创新/绿色/协调等，看题目主题）。</li>
              <li>必须立足中国国情，走中国特色......道路。</li>
              <li>必须发扬斗争精神，增强斗争本领。</li>
            </ul>
          </div>

          <div style={{ height: '50px' }}></div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-200 flex items-center justify-center rounded-full shadow-lg transition-all hover:scale-110"
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: darkMode ? '#ff6b6b' : '#c0392b',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </div>
  );
};

// Helper Components
interface NavGroupProps {
  title: string;
  items: Array<{ id: string; label: string }>;
  activeSection: string;
  onScroll: (id: string) => void;
  darkMode: boolean;
}

const NavGroup: React.FC<NavGroupProps> = ({ title, items, activeSection, onScroll, darkMode }) => (
  <div>
    <div
      className="px-5 py-2 text-xs font-bold"
      style={{
        backgroundColor: darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.03)',
        color: darkMode ? '#a0a0a0' : '#7f8c8d'
      }}
    >
      {title}
    </div>
    {items.map(item => (
      <button
        key={item.id}
        onClick={() => onScroll(item.id)}
        className="w-full text-left px-5 py-3 text-sm border-b transition-colors"
        style={{
          borderColor: darkMode ? '#333333' : '#e1e4e8',
          color: activeSection === item.id
            ? 'white'
            : darkMode ? '#e0e0e0' : '#2c3e50',
          backgroundColor: activeSection === item.id
            ? '#c0392b'
            : 'transparent'
        }}
      >
        {item.label}
      </button>
    ))}
  </div>
);

interface ChapterBoxProps {
  id: string;
  title: string;
  children: React.ReactNode;
  darkMode: boolean;
}

const ChapterBox: React.FC<ChapterBoxProps> = ({ id, title, children, darkMode }) => (
  <div
    id={id}
    className="mb-8 rounded-lg p-8"
    style={{
      backgroundColor: darkMode ? '#1e1e1e' : 'white',
      boxShadow: darkMode ? 'none' : '0 2px 8px rgba(0,0,0,0.05)'
    }}
  >
    <h2
      style={{
        borderBottom: `2px solid ${darkMode ? '#ff6b6b' : '#c0392b'}`,
        paddingBottom: '10px',
        marginTop: 0,
        color: darkMode ? '#ff6b6b' : '#c0392b'
      }}
    >
      {title}
    </h2>
    {children}
  </div>
);

interface GoldSentenceProps {
  children: React.ReactNode;
  darkMode: boolean;
}

const GoldSentence: React.FC<GoldSentenceProps> = ({ children, darkMode }) => (
  <div
    className="mb-6 rounded border-l-4 p-4"
    style={{
      backgroundColor: darkMode ? 'rgba(255, 107, 107, 0.1)' : '#fffcf0',
      borderColor: darkMode ? '#ff6b6b' : '#e74c3c',
      position: 'relative'
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '-10px',
        left: '10px',
        backgroundColor: darkMode ? '#ff6b6b' : '#c0392b',
        color: 'white',
        fontSize: '12px',
        padding: '2px 8px',
        borderRadius: '3px'
      }}
    >
      🔥 必背金句
    </div>
    <div style={{ marginTop: '10px' }}>
      {children}
    </div>
  </div>
);

interface SectionTitleProps {
  children: React.ReactNode;
  darkMode: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, darkMode }) => (
  <h3
    style={{
      color: darkMode ? '#64b5f6' : '#2980b9',
      marginTop: '25px',
      borderLeft: `4px solid ${darkMode ? '#64b5f6' : '#2980b9'}`,
      paddingLeft: '10px'
    }}
  >
    {children}
  </h3>
);

interface EssayLogicProps {
  children: React.ReactNode;
  darkMode: boolean;
}

const EssayLogic: React.FC<EssayLogicProps> = ({ children, darkMode }) => (
  <div
    className="mt-4 border-l-4 p-4"
    style={{
      backgroundColor: darkMode ? 'rgba(100, 181, 246, 0.1)' : 'rgba(41, 128, 185, 0.05)',
      borderColor: darkMode ? '#64b5f6' : '#2980b9'
    }}
  >
    {children}
  </div>
);

interface TrapBoxProps {
  children: React.ReactNode;
  darkMode: boolean;
}

const TrapBox: React.FC<TrapBoxProps> = ({ children, darkMode }) => (
  <p
    style={{
      textDecoration: 'underline wavy',
      textDecorationColor: darkMode ? '#ff6b6b' : '#c0392b'
    }}
  >
    {children}
  </p>
);

function getStyles(darkMode: boolean) {
  return {
    backgroundColor: darkMode ? '#121212' : '#f5f7fa',
    color: darkMode ? '#e0e0e0' : '#2c3e50'
  };
}
