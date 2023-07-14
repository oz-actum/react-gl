import { FC, useRef, useState } from "react";

/**
 * TASK: Find and fix code issues.
 */

const initialState = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

export const BestPractices: FC = () => {
  const [list, setList] = useState(initialState);

  const pushItem = (item: string) => {
    setList([...list, item]);
  };

  const removeLastItem = () => {
    list.length && setList([...list.slice(0, list.length - 1)]);
  };

  return (
    <div>
      <h1>List</h1>
      <List items={list} pushItem={pushItem} removeLastItem={removeLastItem} />
    </div>
  );
};

const List: FC<{
  items: Array<string>;
  pushItem: (item: string) => void;
  removeLastItem: () => void;
}> = (props) => {
  return (
    <div>
      <ul className="list-group">
        {props.items?.map((listItem: string, index: number) => (
          <li
            key={index}
            className={`list-group-item ${index % 2 ? "bg-light" : "bg-white"}`}
          >
            {listItem}
          </li>
        ))}
      </ul>
      <ListControlPanel
        pushItem={props.pushItem}
        removeLastItem={props.removeLastItem}
      />
    </div>
  );
};

const ListControlPanel: FC<{
  pushItem: (item: string) => void;
  removeLastItem: () => void;
}> = (props) => {
  return (
    <div className="d-flex flex-column mt-4">
      <InputBox pushItem={props.pushItem} />
      <button className="btn btn-danger" onClick={props.removeLastItem}>
        Remove last item
      </button>
    </div>
  );
};

const InputBox: FC<{ pushItem: (item: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePushItem = () => {
    if (inputRef.current && inputRef.current.value !== "") {
      props.pushItem(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Item name"
          aria-label="Item name"
          aria-describedby="add-button"
        />
        <button
          className="btn btn-success"
          type="button"
          id="add-button"
          onClick={handlePushItem}
        >
          Add
        </button>
      </div>
    </>
  );
};
