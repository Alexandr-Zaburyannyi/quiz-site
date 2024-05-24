import FeatureCard from "./FeatureCard";

const FeatureCardsList = () => {
  const titles = ["Quiz Builders", "Quiz Analytics", "Audience Engagement"];
  const paragraphs = [
    "Easily create custom quizzes with a wide range of question types and advanced features",
    "Gain insights into your quiz performance with detailed analytics and reporting.",
    "Captivate your audience with interactive quizzes that drive engagement and retention.",
  ];

  return (
    <div className='container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 max-w-6xl'>
      {titles.map((title, i) => (
        <FeatureCard key={title} title={title} text={paragraphs[i]} />
      ))}
    </div>
  );
};
export default FeatureCardsList;
