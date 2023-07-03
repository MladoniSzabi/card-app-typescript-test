import { useContext } from "react";
import { Entry, EntryContextType } from "../@types/context";
import EntryInputs from "../components/EntryInputs";
import { EntryContext } from "../utilities/globalContext";

export default function NewEntry() {
  const { saveEntry } = useContext(EntryContext) as EntryContextType;

  const handleSend = (newEntry: Entry) => {
    saveEntry(newEntry);
  };

  return (
    <EntryInputs
      handleSend={handleSend}
      completeActionButton={
        <button className="bg-blue-400 hover:bg-blue-600 font-semibold text-white p-3 rounded-md">Create</button>
      }
    />
  );
}
