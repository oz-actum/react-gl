import React, { FC, ReactNode } from "react";
import { mathScore } from "../../mockData/mathScore";

const Table: FC<Prop> = ({ children, colSpan, tableHeader }) => {
  return (
    <table className="table table-striped">
      <thead>
        <Row>
          <Column colSpan={colSpan} className="text-center">
            {tableHeader}
          </Column>
        </Row>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

const Row: FC<Prop> = ({ children }) => {
  return <tr>{children}</tr>;
};

const Column: FC<Prop> = ({ children, colSpan, className }) => {
  return (
    <td colSpan={colSpan} className={className}>
      {children}
    </td>
  );
};

interface Prop {
  children: ReactNode;
  colSpan?: number;
  className?: string;
  tableHeader?: string;
}

export const FunctionalComponent: FC = () => {
  return (
    <Table colSpan={mathScore[0].length} tableHeader="Math Exam Results">
      {mathScore.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((column, columnIndex) => (
            <Column key={columnIndex}>{column}</Column>
          ))}
        </Row>
      ))}
    </Table>
  );
};
