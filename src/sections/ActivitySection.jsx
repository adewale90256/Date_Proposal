import Button from "../components/Button";
import { activities } from "../data/activities";

function ActivitySection({
  selectedActivity,
  setSelectedActivity,
  onContinue,
  saving,
}) {
  return (
    <div className="mt-8">
      <div className="space-y-4">
        {activities.map((activity) => (
          <button
            key={activity.id}
            onClick={() => setSelectedActivity(activity)}
            className={`w-full rounded-2xl border p-4 text-left transition-all duration-300

            ${
              selectedActivity?.id === activity.id
                ? "border-rose-500 bg-rose-100 shadow-lg scale-[1.02]"
                : "border-gray-200 bg-white hover:border-rose-300 hover:shadow-md"
            }
            `}
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">{activity.emoji}</div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  {activity.title}
                </h3>

                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <Button
        disabled={!selectedActivity || saving}
        onClick={onContinue}
        className="mt-8 w-full bg-rose-500 text-white hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {saving ? "❤️ Saving..." : "Lock It In ❤️"}
      </Button>
    </div>
  );
}

export default ActivitySection;
