import * as React from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (prpos) => {
  // const [title, setTitle] = React.useState<string>("");
  const ref = React.useRef<HTMLInputElement>(null);
  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //  setTitle(event.target.value);
  //  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      //   console.log(title);
      //  setTitle("")
      prpos.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <>
      <div className="input-field">
        <input
          type="text"
          id="title"
          ref={ref}
          // value={title}
          // onChange={changeHandler}
          onKeyPress={keyPressHandler}
        />
        <label
          htmlFor="title"
          className="active"
          placeholder="Ведіть назву тексту"
        >
          Ведіть назву тексту
        </label>
      </div>
    </>
  );
};
