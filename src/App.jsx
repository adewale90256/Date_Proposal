import { useState } from "react";
import Background from "./components/Background";
import FloatingHearts from "./components/FloatingHearts";

import ProposalScreen from "./screens/ProposalScreen";
import SuccessScreen from "./screens/SuccessScreen";
import DateScreen from "./screens/DateScreen";
import ActivityScreen from "./screens/ActivityScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";

import { SCREENS } from "./data/screens";

function App() {
  const [screen, setScreen] = useState(SCREENS.PROPOSAL);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);

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
          onContinue={() => setScreen(SCREENS.CONFIRMATION)}
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
