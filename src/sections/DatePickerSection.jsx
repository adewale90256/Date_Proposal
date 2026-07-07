import { DayPicker } from "react-day-picker";
import Button from "../components/Button";

function DatePickerSection({ selectedDate, setSelectedDate, onContinue }) {
  return (
    <div className="mt-8 flex flex-col items-center">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />

      {selectedDate && (
        <p className="mt-6 text-lg font-medium text-rose-500">
          {selectedDate.toDateString()}
        </p>
      )}

      <Button
        disabled={!selectedDate}
        onClick={onContinue}
        className="mt-8 bg-rose-500 text-white hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continue →
      </Button>
    </div>
  );
}

export default DatePickerSection;
