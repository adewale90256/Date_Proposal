import { useState } from "react";
import Background from "./components/Background";
import FloatingHearts from "./components/FloatingHearts";

import ProposalScreen from "./screens/ProposalScreen";
import SuccessScreen from "./screens/SuccessScreen";
import DateScreen from "./screens/DateScreen";
import ActivityScreen from "./screens/ActivityScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";

import { SCREENS } from "./data/screens";
import { saveResponse } from "./services/saveResponse";

function App() {
  const [screen, setScreen] = useState(SCREENS.PROPOSAL);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [saving, setSaving] = useState(false);

  async function handleConfirmation() {
    if (!selectedDate || !selectedActivity) return;

    try {
      setSaving(true);

      await saveResponse({
        date: selectedDate.toISOString(),
        activity: selectedActivity.title,
      });

      setScreen(SCREENS.CONFIRMATION);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while saving your response.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Background>
      <FloatingHearts />

      {screen === SCREENS.PROPOSAL && (
        <ProposalScreen onYes={() => setScreen(SCREENS.SUCCESS)} />
      )}

      {screen === SCREENS.SUCCESS && (
        <SuccessScreen onContinue={() => setScreen(SCREENS.DATE)} />
      )}

      {screen === SCREENS.DATE && (
        <DateScreen
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onContinue={() => setScreen(SCREENS.ACTIVITY)}
        />
      )}

      {screen === SCREENS.ACTIVITY && (
        <ActivityScreen
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
          onContinue={handleConfirmation}
          saving={saving}
        />
      )}

      {screen === SCREENS.CONFIRMATION && (
        <ConfirmationScreen
          selectedDate={selectedDate}
          selectedActivity={selectedActivity}
        />
      )}
    </Background>
  );
}

export default App;
