import React, { FC } from "react";

interface IReports {
  className: string;
}
const Reports: FC<IReports> = (props) => {
  return (
      <svg
          {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M16 12.5V13.5C16 13.6326 15.9473 13.7598 15.8536 13.8536C15.7598 13.9473 15.6326 14 15.5 14H1C0.734784 14 0.48043 13.8946 0.292893 13.7071C0.105357 13.5196 0 13.2652 0 13V2.5C0 2.36739 0.0526784 2.24021 0.146447 2.14645C0.240215 2.05268 0.367392 2 0.5 2H1.5C1.63261 2 1.75979 2.05268 1.85355 2.14645C1.94732 2.24021 2 2.36739 2 2.5V12H15.5C15.6326 12 15.7598 12.0527 15.8536 12.1464C15.9473 12.2402 16 12.3674 16 12.5Z"
        fill="#213F7D"
      />
      <path
        d="M8.6 3H7.4C7.2 3 7 3.2 7 3.4V9.6C7 9.8 7.2 10 7.4 10H8.6C8.8 10 9 9.8 9 9.6V3.4C9 3.2 8.8 3 8.6 3ZM5.6 7H4.4C4.2 7 4 7.2 4 7.4V9.6C4 9.8 4.2 10 4.4 10H5.6C5.8 10 6 9.8 6 9.6V7.4C6 7.2 5.8 7 5.6 7ZM14.6 2H13.4C13.2 2 13 2.2 13 2.4V9.6C13 9.8 13.2 10 13.4 10H14.6C14.8 10 15 9.8 15 9.6V2.4C15 2.2 14.8 2 14.6 2ZM11.6 5H10.4C10.2 5 10 5.2 10 5.4V9.6C10 9.8 10.2 10 10.4 10H11.6C11.8 10 12 9.8 12 9.6V5.4C12 5.2 11.8 5 11.6 5Z"
        fill="#213F7D"
      />
    </svg>
  );
};

export default Reports;
