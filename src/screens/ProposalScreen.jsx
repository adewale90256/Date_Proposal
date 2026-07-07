import Card from "../components/Card";
import QuestionSection from "../sections/QuestionSection";
import girl from "../assets/images/girl.PNG";

function ProposalScreen({ onYes }) {
  return (
    <Card>
      <div className="flex flex-col  items-center">
        <img
          src={girl}
          alt="Beautiful"
          className="h-36 w-36 rounded-full border-4 border-rose-300 object-cover shadow-lg"
        />

        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Hi Beautiful ❤️
        </h1>

        <QuestionSection onYes={onYes} />
      </div>
    </Card>
  );
}

export default ProposalScreen;
