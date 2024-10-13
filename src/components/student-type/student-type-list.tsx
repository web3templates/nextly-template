import React from "react";

//type
type DataStudentsType = {
  title: string;
  description: string[];
}[];

interface StudentTypeListProps {
  data: DataStudentsType;
}

export default function StudentTypeList(props: Readonly<StudentTypeListProps>) {
  return (
    <>
      {props.data.map((item, index) => (
        <ul className="list-disc grid gap-2" key={index}>
          {item.description.map((item, index) => (
            <li
              key={index}
              className="list-inside text-sm leading-normal text-gray-500 dark:text-gray-300"
            >
              {item}
            </li>
          ))}
        </ul>
      ))}
    </>
  );
}
