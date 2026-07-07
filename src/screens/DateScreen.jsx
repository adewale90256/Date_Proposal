import Card from "../components/Card";
import DatePickerSection from "../sections/DatePickerSection";

function DateScreen({ selectedDate, setSelectedDate, onContinue }) {
  return (
    <Card>
      <div className="text-center">
        <div className="text-5xl mb-4">📅</div>

        <h2 className="text-3xl font-bold text-gray-800">One more thing...</h2>

        <p className="mt-3 text-gray-600">When would you like us to go out?</p>

        <DatePickerSection
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onContinue={onContinue}
        />
      </div>
    </Card>
  );
}

export default DateScreen;
