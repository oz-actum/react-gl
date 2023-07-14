import { FC, useId, useRef, useState } from "react";

const initialState = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

export const BestPracticesFixed: FC = () => {
  const [list, setList] = useState(initialState);

  const pushItem = (item: string) => {
    setList([...list, item]);
  };

  const removeLastItem = () => {
    list.length && setList([...list.slice(0, list.length - 1)]);
  };

  return (
    <>
      <h1>List</h1>
      <List items={list} />
      <ListControlPanel pushItem={pushItem} removeLastItem={removeLastItem} />
    </>
  );
};

const List: FC<{
  items: Array<string>;
}> = ({ items }) => {
  return (
    <ul className="list-group">
      {items?.map((listItem: string, index: number) => (
        <li
          key={`${listItem}-${index}`}
          className={`list-group-item ${index % 2 ? "bg-light" : "bg-white"}`}
        >
          {listItem}
        </li>
      ))}
    </ul>
  );
};

const ListControlPanel: FC<{
  pushItem: (item: string) => void;
  removeLastItem: () => void;
}> = ({ pushItem, removeLastItem }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const uniqueId = useId();

  const handlePushItem = () => {
    if (inputRef.current && inputRef.current.value !== "") {
      pushItem(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="d-flex flex-column mt-4">
      <div className="input-group mb-3">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Item name"
          aria-label="Item name"
          aria-describedby={`${uniqueId}-add-button`}
        />
        <button
          className="btn btn-success"
          type="button"
          id={`${uniqueId}-add-button`}
          onClick={handlePushItem}
        >
          Add
        </button>
      </div>
      <button className="btn btn-danger" onClick={removeLastItem}>
        Remove last item
      </button>
    </div>
  );
};
