import Card from "./UI/Card";

interface Props {
  title: string;
  text: string;
}
const FeatureCard: React.FC<Props> = ({ title, text }) => {
  return (
    <Card>
      <h3 className='text-xl font-semibold'>{title}</h3>
      <p>{text}</p>
    </Card>
  );
};
export default FeatureCard;
