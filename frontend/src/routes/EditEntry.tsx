import { ChangeEvent, MouseEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Entry, EntryContextType } from "../@types/context";
import EntryInputs from "../components/EntryInputs";
import { EntryContext } from "../utilities/globalContext";

export default function EditEntry() {
  const { id } = useParams();
  const emptyEntry: Entry = { title: "", description: "", created_at: new Date() };

  const { updateEntry, entries } = useContext(EntryContext) as EntryContextType;
  const [entry, setEntry] = useState<Entry>(emptyEntry);

  useEffect(() => {
    const entry = entries.filter((entry) => entry.id == id)[0];
    setEntry(entry);
  }, []);

  const handleSend = (newEntry: Entry) => {
    updateEntry(id as string, newEntry);
  };

  return (
    <EntryInputs
      handleSend={handleSend}
      originalEntry={entry}
      completeActionButton={
        <button className="dark:text-gray-800 dark:bg-slate-400 bg-blue-400 hover:bg-blue-600 font-semibold text-white p-3 rounded-md">
          Update
        </button>
      }
    />
  );
}
