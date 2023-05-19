import React, { FC, useState, useTransition } from "react";

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

export const UseDeferredValue: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  const updateFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setFilterTerm(e.target.value);
    });
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
        {isPending ? (
          <p>Updating List...</p>
        ) : (
          <ul className="list-group">
            {filteredProducts.map((product, index) => (
              <li key={index} className="list-group-item">
                {product}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
