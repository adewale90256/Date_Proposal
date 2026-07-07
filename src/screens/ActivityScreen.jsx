import Card from "../components/Card";
import ActivitySection from "../sections/ActivitySection";

function ActivityScreen({ selectedActivity, setSelectedActivity, onContinue }) {
  return (
    <Card>
      <div className="text-center">
        <div className="text-5xl mb-4">💖</div>

        <h2 className="text-3xl font-bold text-gray-800">
          What would you like us to do?
        </h2>

        <p className="mt-3 text-gray-600">Choose your perfect date ❤️</p>

        <ActivitySection
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
          onContinue={onContinue}
        />
      </div>
    </Card>
  );
}

export default ActivityScreen;
