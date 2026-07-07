import Card from "../components/Card";
import Button from "../components/Button";
import Celebration from "../components/Celebration";

function SuccessScreen({ onContinue }) {
  return (
    <>
      <Celebration />

      <Card>
        <div className="text-center">
          <div className="text-6xl mb-6">🥹❤️</div>

          <h2 className="text-3xl font-bold text-rose-500">
            I'm so glad you said YES!
          </h2>

          <p className="mt-4 text-gray-600">You just made my day.</p>

          <Button
            onClick={onContinue}
            className="mt-8 bg-rose-500 text-white hover:scale-105"
          >
            Continue →
          </Button>
        </div>
      </Card>
    </>
  );
}

export default SuccessScreen;
