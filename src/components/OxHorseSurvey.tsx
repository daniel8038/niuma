import React, { useState } from "react";
type CategoryKey = "workload" | "reward" | "autonomy" | "emotion";

type LanguageData = {
  title: string;
  description: string;
  categories: Record<CategoryKey, string>;
  questions: Array<{ id: number; content: string }>;
  resultLevels: Array<{ maxScore: number; level: string; description: string }>;
  buttons: {
    submit: string;
    reset: string;
    retake: string;
  };
};
// 中英文对照数据
const LANGUAGE_DATA: { zh: LanguageData; en: LanguageData } = {
  zh: {
    title: "牛马指数调查问卷",
    description:
      "本问卷旨在了解您当前的工作状态，“牛马”在此指代“过度付出、回报失衡、缺乏自主”的工作状态。请根据实际感受，对以下问题进行评分（1星=完全不符合，2星=较不符合，3星=一般，4星=较符合，5星=完全符合）。",
    categories: {
      workload: "工作强度与负荷",
      reward: "付出与回报匹配度",
      autonomy: "工作自主性与话语权",
      emotion: "工作情绪与状态",
    },
    questions: [
      {
        id: 1,
        content: "我经常需要加班（包括周末/节假日），且加班是常态而非偶尔。",
      },
      {
        id: 2,
        content:
          "即使在非工作时间，我也需要随时响应工作消息（如微信、电话），无法真正“离线”。",
      },
      { id: 3, content: "我的工作量远超合理范围，长期处于“做不完”的焦虑中。" },
      { id: 4, content: "我的薪资/福利与实际工作量、压力相比，明显偏低。" },
      {
        id: 5,
        content: "我在工作中投入的时间、精力，很难换来个人成长或职业晋升机会。",
      },
      { id: 6, content: "工作成果更多被上级/团队占据，个人价值难以被认可。" },
      {
        id: 7,
        content:
          "我的工作内容、节奏几乎完全由他人（如上级）安排，没有自主选择空间。",
      },
      {
        id: 8,
        content:
          "对于工作中的不合理要求（如无意义的任务、过度压榨），我不敢或无法拒绝。",
      },
      { id: 9, content: "我在团队中几乎没有话语权，意见和建议很少被重视。" },
      {
        id: 10,
        content: "我经常因工作感到疲惫、压抑，甚至影响到生活情绪和健康。",
      },
      {
        id: 11,
        content:
          "我觉得自己像“工具人”，只是为了完成任务而工作，缺乏成就感和热情。",
      },
      {
        id: 12,
        content: "如果有选择，我会立刻离开当前工作，但因现实原因不得不继续。",
      },
    ],
    resultLevels: [
      {
        maxScore: 24,
        level: "非牛马状态",
        description: "工作相对平衡、自主，状态良好。",
      },
      {
        maxScore: 36,
        level: "轻度牛马状态",
        description: "存在部分不合理但可接受，需关注工作状态。",
      },
      {
        maxScore: 48,
        level: "中度牛马状态",
        description: "付出与回报失衡明显，建议调整工作节奏。",
      },
      {
        maxScore: 60,
        level: "纯牛马状态",
        description: "工作体验极差，需警惕身心健康，建议考虑改变现状。",
      },
    ],
    buttons: {
      submit: "提交问卷",
      reset: "重置",
      retake: "重新填写",
    },
  },
  en: {
    title: "Niuma Index Work Status Survey",
    description:
      "This survey aims to understand your current work status. Here, 'Niuma' refers to a work state of 'overcommitting, unbalanced rewards, and lack of autonomy'. Please rate the following questions based on your actual feelings (1 star = completely disagree, 2 stars = somewhat disagree, 3 stars = neutral, 4 stars = somewhat agree, 5 stars = completely agree).",
    categories: {
      workload: "Workload and Intensity",
      reward: "Reward and Effort Balance",
      autonomy: "Work Autonomy and Voice",
      emotion: "Work Emotion and State",
    },
    questions: [
      {
        id: 1,
        content:
          "I often need to work overtime (including weekends/holidays), and overtime has become a norm rather than an exception.",
      },
      {
        id: 2,
        content:
          "Even during non-work hours, I need to respond to work messages (e.g., WeChat, phone calls) at any time and cannot truly 'disconnect'.",
      },
      {
        id: 3,
        content:
          "My workload far exceeds a reasonable range, and I've been in a constant state of anxiety about unfinished tasks.",
      },
      {
        id: 4,
        content:
          "My salary/benefits are significantly lower compared to my actual workload and stress.",
      },
      {
        id: 5,
        content:
          "The time and effort I invest in my work rarely translate into personal growth or career advancement opportunities.",
      },
      {
        id: 6,
        content:
          "Work achievements are often taken by superiors/teams, and my personal value is rarely recognized.",
      },
      {
        id: 7,
        content:
          "My work content and pace are almost entirely arranged by others (e.g., superiors), leaving no room for independent choice.",
      },
      {
        id: 8,
        content:
          "I dare not or cannot refuse unreasonable work requirements (e.g., meaningless tasks, excessive exploitation).",
      },
      {
        id: 9,
        content:
          "I have little say in the team, and my opinions and suggestions are rarely valued.",
      },
      {
        id: 10,
        content:
          "I often feel exhausted and depressed due to work, which even affects my mood and health in daily life.",
      },
      {
        id: 11,
        content:
          "I feel like a 'tool', working just to complete tasks without a sense of achievement or passion.",
      },
      {
        id: 12,
        content:
          "If given the choice, I would leave my current job immediately, but I have to stay due to real-life constraints.",
      },
    ],
    resultLevels: [
      {
        maxScore: 24,
        level: "Non-Niuma State",
        description:
          "Work is relatively balanced and autonomous, with a good state.",
      },
      {
        maxScore: 36,
        level: "Mild Niuma State",
        description:
          "There are some unreasonable aspects but still acceptable. Pay attention to your work state.",
      },
      {
        maxScore: 48,
        level: "Moderate Niuma State",
        description:
          "There is an obvious imbalance between effort and reward. It is recommended to adjust your work rhythm.",
      },
      {
        maxScore: 60,
        level: "Severe Niuma State",
        description:
          "The work experience is extremely poor. Be vigilant about physical and mental health, and consider changing the status quo.",
      },
    ],
    buttons: {
      submit: "Submit Survey",
      reset: "Reset",
      retake: "Retake Survey",
    },
  },
};

// 问题类型定义
interface Question {
  id: number;
  category: string;
  content: string;
}

// 评分结果类型
interface Result {
  score: number;
  level: string;
  description: string;
}

// 调查问卷组件
const OxHorseSurvey: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [language, setLanguage] = useState<"zh" | "en">("zh");

  const langData = LANGUAGE_DATA[language];

  // 将问题按类别分组
  const categorizedQuestions: Record<CategoryKey, Question[]> = {
    workload: [],
    reward: [],
    autonomy: [],
    emotion: [],
  };

  langData.questions.forEach((q) => {
    let categoryKey: CategoryKey;
    if (q.id <= 3) categoryKey = "workload";
    else if (q.id <= 6) categoryKey = "reward";
    else if (q.id <= 9) categoryKey = "autonomy";
    else categoryKey = "emotion";

    categorizedQuestions[categoryKey].push({
      ...q,
      category: langData.categories[categoryKey],
    });
  });

  // 处理评分选择
  const handleRatingChange = (questionId: number, rating: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: rating }));
  };

  // 计算总分和结果
  const calculateResult = (): Result => {
    const totalScore = Object.values(answers).reduce(
      (sum, score) => sum + score,
      0
    );
    const levelInfo =
      langData.resultLevels.find((level) => totalScore <= level.maxScore) ||
      langData.resultLevels[3];

    return {
      score: totalScore,
      level: levelInfo.level,
      description: levelInfo.description,
    };
  };

  // 提交问卷
  const handleSubmit = () => {
    if (Object.keys(answers).length !== langData.questions.length) {
      alert(
        language === "zh" ? "请回答所有问题！" : "Please answer all questions!"
      );
      return;
    }

    setSubmitted(true);
  };

  // 重置问卷
  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  // 切换语言
  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh");
    // 如果已提交，重置结果
    if (submitted) {
      setSubmitted(false);
    }
  };

  // 评分选项组件
  const RatingOptions = ({
    questionId,
    selectedRating,
  }: {
    questionId: number;
    selectedRating: number | undefined;
  }) => {
    return (
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((score) => (
          <label key={score} className="cursor-pointer">
            <input
              type="radio"
              name={`q${questionId}`}
              value={score}
              checked={selectedRating === score}
              onChange={() => handleRatingChange(questionId, score)}
              className="hidden"
            />
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 
              ${
                selectedRating === score
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-gray-300 hover:border-blue-500 hover:bg-blue-100"
              }`}
            >
              {score}
            </div>
          </label>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg font-serif">
      {/* 语言切换按钮 */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 text-sm border  text-black border-black rounded-full hover:bg-gray-200 transition-colors"
        >
          {language === "zh" ? "English" : "中文"}
        </button>
      </div>

      <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-800 mb-6">
        {langData.title}
      </h1>
      <p className="text-gray-600 mb-8">{langData.description}</p>

      {!submitted ? (
        <>
          {Object.values(categorizedQuestions).map(
            (questions, categoryIndex) => (
              <div
                key={categoryIndex}
                className="mb-8 pb-8 border-b border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {questions[0].category}
                </h3>
                {questions.map((question) => (
                  <div key={question.id} className="mb-6">
                    <p className="text-gray-800 mb-4">
                      {question.id}. {question.content}
                    </p>
                    <RatingOptions
                      questionId={question.id}
                      selectedRating={answers[question.id]}
                    />
                  </div>
                ))}
              </div>
            )
          )}

          <div className="flex justify-end space-x-4">
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300"
            >
              {langData.buttons.reset}
            </button>
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {langData.buttons.submit}
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {language === "zh" ? "您的" : "Your"} "牛马指数"{" "}
            {language === "zh" ? "结果" : "Result"}
          </h2>
          <div className="bg-blue-50 rounded-xl p-8 max-w-md mx-auto mb-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {calculateResult().score}/60{language === "zh" ? "分" : " points"}
            </div>
            <div className="text-xl font-semibold text-gray-700 mb-4">
              {calculateResult().level}
            </div>
            <p className="text-gray-600">{calculateResult().description}</p>
          </div>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            {langData.buttons.retake}
          </button>
        </div>
      )}
    </div>
  );
};

export default OxHorseSurvey;
