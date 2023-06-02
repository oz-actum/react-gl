import React, { FC, useDeferredValue, useState } from "react";

const generateProducts = () => {
  const products = [];
  for (let i = 0; i < 10000; i++) {
    products.push(`Product ${i + 1}`);
  }
  return products;
};

const filterProducts = (filterTerm: string) => {
  if (!filterTerm) {
    return generateProducts();
  }
  return generateProducts().filter((product) => product.includes(filterTerm));
};

/**
 * TASK 1: Explain the difference between useTransition() Hook and useDeferredValue() Hook.
 *
 * TASK 2: Change the code, so you will use useDeferredValue() Hook instead of useTransition() Hook.
 */

/**
 * ANSWER TO TASK 1:
 *
 * The difference is that useTransition() wraps the state updating code, whilst useDeferredValue() wraps a value that's affected by the state update.
 * You don't need to (and shouldn't) use both together, since they achieve the same goal in the end.
 * Instead, it makes sense to prefer useTransition(), if you have some state update that should be treated with a lower priority,
 * and you have access to the state updating code. If you don't have that access, use useDeferredValue().
 */

export const UseDeferredValue: FC = () => {
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  const deferredProducts = useDeferredValue(filteredProducts);

  const updateFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(e.target.value);
  };

  return (
    <>
      <input
        className="form-control"
        type="number"
        min="0"
        onChange={updateFilterHandler}
      />
      <div className="py-3">
        <ul className="list-group">
          {deferredProducts.map((product, index) => (
            <li key={index} className="list-group-item">
              {product}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
