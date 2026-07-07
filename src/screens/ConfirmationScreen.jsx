import Card from "../components/Card";
import Celebration from "../components/Celebration";

function ConfirmationScreen({ selectedDate, selectedActivity }) {
  return (
    <>
      <Celebration />

      <Card>
        <div className="text-center">
          <div className="text-6xl mb-5">❤️</div>

          <h2 className="text-3xl font-bold text-rose-500">It's Official!</h2>

          <p className="mt-3 text-gray-600">I can't wait to see you.</p>

          <div className="my-8 space-y-6 rounded-2xl bg-rose-50 p-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                DATE
              </p>

              <p className="mt-2 text-xl font-semibold">
                {selectedDate?.toDateString()}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                ACTIVITY
              </p>

              <p className="mt-2 text-xl font-semibold">
                {selectedActivity?.emoji} {selectedActivity?.title}
              </p>
            </div>
          </div>

          <p className="text-lg font-medium text-rose-500">See you soon ❤️</p>
        </div>
      </Card>
    </>
  );
}

export default ConfirmationScreen;
