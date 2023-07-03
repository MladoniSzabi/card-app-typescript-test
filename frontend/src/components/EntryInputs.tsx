import { ChangeEvent, ReactElement, cloneElement, useEffect, useState } from "react";
import { Entry } from "../@types/context";

type EntryInputsParam = { handleSend: (e: Entry) => void; originalEntry?: Entry; completeActionButton: ReactElement };

export default function EntryInputs({ handleSend, originalEntry, completeActionButton }: EntryInputsParam) {
  useEffect(() => {
    if (originalEntry != null) {
      setEntry(originalEntry);
    }
  }, [originalEntry]);

  const emptyEntry: Entry = { title: "", description: "", created_at: new Date() };

  if (originalEntry === undefined) {
    originalEntry = emptyEntry;
  }

  const [entry, setEntry] = useState<Entry>(originalEntry);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEntry({
      ...entry,
      [event.target.name]: event.target.value,
    });
  };

  const button = cloneElement(completeActionButton, {
    onClick: (e: MouseEvent) => {
      handleSend(entry);
    },
  });

  return (
    <section className="dark:bg-gray-500 flex justify-center flex-col w-fit ml-auto mr-auto mt-10 gap-5 bg-gray-300 p-8 rounded-md">
      <input
        className="dark:text-white dark:bg-slate-700 dark:border-black dark:focus:outline-none dark:focus:ring dark:focus:ring-black p-3 rounded-md"
        type="text"
        placeholder="Title"
        name="title"
        value={entry.title}
        onChange={handleInputChange}
      />
      <textarea
        className="dark:text-white dark:bg-slate-700 dark:border-black dark:focus:outline-none dark:focus:ring dark:focus:ring-black p-3 rounded-md"
        placeholder="Description"
        name="description"
        value={entry.description}
        onChange={handleInputChange}
      />
      <input
        className="dark:text-white dark:bg-slate-700 dark:border-black dark:focus:outline-none dark:focus:ring dark:focus:ring-black p-3 rounded-md"
        type="date"
        name="created_at"
        value={new Date(entry.created_at).toISOString().split("T")[0]}
        onChange={handleInputChange}
      />
      {button}
    </section>
  );
}
