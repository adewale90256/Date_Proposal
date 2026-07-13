import Button from "../components/Button";
import MovingButton from "../components/MovingButton";

function QuestionSection({ onYes }) {
  return (
    <>
      <p className="mt-4 text-center text-lg text-gray-600">💝</p>

      <h2 className="mt-2 text-center text-2xl font-semibold text-gray-800">
        Would you go out with me again?
      </h2>

      <div className="mt-10  w-full flex flex-col justify-center items-center gap-6">
        <Button
          onClick={onYes}
          className="w-44 bg-rose-500 text-white hover:scale-105 hover:bg-rose-600"
        >
          Yes ❤️
        </Button>

        <MovingButton />
      </div>
    </>
  );
}

export default QuestionSection;
