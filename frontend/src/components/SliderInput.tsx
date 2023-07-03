import * as React from "react";

type SliderInputProps = { inputs: string[]; name: string; checked: boolean; onChange: (on: boolean) => void };

export default function SliderInput({ inputs, name, checked, onChange }: SliderInputProps) {
  function onSelectionChange(index: number) {
    console.log(index);
    onChange(index == 1);
  }

  return (
    <>
      <label className="cursor-pointer" htmlFor={"radio-input-" + String(inputs[0])}>
        {inputs[0]}
      </label>
      <div className="bg-white border-black border-2 rounded-full flex items-center p-0.5 relative">
        {inputs.map((input, index) => {
          const isChecked = (checked && index == 1) || (!checked && index == 0);
          console.log(index, isChecked);
          return (
            <label
              className={index == 0 ? "m-0 w-4 h-4" : "[&>div]:hover:bg-blue-500 m-0 ml-1 w-4 h-4 cursor-pointer"}
              key={input}
              htmlFor={"radio-input-" + String(input)}
            >
              <input
                className="absolute opacity-0 m-0 cursor-pointer bg-grey"
                checked={isChecked}
                onChange={(ev) => onSelectionChange(index)}
                id={"radio-input-" + String(input)}
                type="radio"
                name={name}
                value={input}
              ></input>
              <div className={isChecked ? "w-4 h-4 rounded-full bg-blue-400" : "w-4 h-4 rounded-full z-10"}></div>
            </label>
          );
        })}
      </div>
      <label className="cursor-pointer" htmlFor={"radio-input-" + String(inputs[1])}>
        {inputs[1]}
      </label>
    </>
  );
}
