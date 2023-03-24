import React, { FC, ReactNode } from "react";
// import { mathScore } from "../../mockData/mathScore";

interface Prop {
  children: ReactNode;
  colSpan?: number;
  className?: string;
  tableHeader?: string;
}

export const FunctionalComponent: FC = () => {
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

  return (
    <>
      <Table colSpan={4} tableHeader="Math Exam Results">
        <Row>
          <Column>John Doe</Column>
          <Column>20</Column>
          <Column>60</Column>
          <Column>A</Column>
        </Row>
        <Row>
          <Column>Johe Doe</Column>
          <Column>10</Column>
          <Column>52</Column>
          <Column>B</Column>
        </Row>
        <Row>
          <Column>Petr Chess</Column>
          <Column>5</Column>
          <Column>24</Column>
          <Column>F</Column>
        </Row>
        <Row>
          <Column>Ling Jess</Column>
          <Column>28</Column>
          <Column>43</Column>
          <Column>A</Column>
        </Row>
        <Row>
          <Column>Ben Liard</Column>
          <Column>16</Column>
          <Column>51</Column>
          <Column>A</Column>
        </Row>
      </Table>
    </>
  );
};
