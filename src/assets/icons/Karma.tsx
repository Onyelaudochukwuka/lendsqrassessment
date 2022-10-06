import React, { FC } from "react";

interface IKarma {
  className: string;
}
const Karma: FC<IKarma> = (props) => {
  return (
      <svg
          {...props}
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_13751_800)">
        <path
          opacity="0.4"
          d="M15.88 4.85998L14.74 5.99998L15.88 7.13998C15.9175 7.17739 15.9472 7.22181 15.9674 7.27072C15.9877 7.31962 15.9982 7.37204 15.9982 7.42498C15.9982 7.47792 15.9877 7.53034 15.9674 7.57925C15.9472 7.62815 15.9175 7.67258 15.88 7.70998L15.31 8.27998C15.2726 8.31745 15.2282 8.34717 15.1792 8.36744C15.1303 8.38772 15.0779 8.39816 15.025 8.39816C14.972 8.39816 14.9196 8.38772 14.8707 8.36744C14.8218 8.34717 14.7774 8.31745 14.74 8.27998L13.6 7.13998L12.46 8.27998C12.4226 8.31745 12.3781 8.34717 12.3292 8.36744C12.2803 8.38772 12.2279 8.39816 12.175 8.39816C12.122 8.39816 12.0696 8.38772 12.0207 8.36744C11.9718 8.34717 11.9274 8.31745 11.89 8.27998L11.32 7.70998C11.2825 7.67258 11.2528 7.62815 11.2325 7.57925C11.2122 7.53034 11.2018 7.47792 11.2018 7.42498C11.2018 7.37204 11.2122 7.31962 11.2325 7.27072C11.2528 7.22181 11.2825 7.17739 11.32 7.13998L12.46 5.99998L11.32 4.85998C11.2825 4.82258 11.2528 4.77815 11.2325 4.72925C11.2122 4.68034 11.2018 4.62792 11.2018 4.57498C11.2018 4.52204 11.2122 4.46962 11.2325 4.42072C11.2528 4.37181 11.2825 4.32739 11.32 4.28998L11.89 3.71998C11.9274 3.68252 11.9718 3.6528 12.0207 3.63252C12.0696 3.61224 12.122 3.60181 12.175 3.60181C12.2279 3.60181 12.2803 3.61224 12.3292 3.63252C12.3781 3.6528 12.4226 3.68252 12.46 3.71998L13.6 4.85998L14.74 3.71998C14.7774 3.68252 14.8218 3.6528 14.8707 3.63252C14.9196 3.61224 14.972 3.60181 15.025 3.60181C15.0779 3.60181 15.1303 3.61224 15.1792 3.63252C15.2282 3.6528 15.2726 3.68252 15.31 3.71998L15.88 4.28998C15.9175 4.32739 15.9472 4.37181 15.9674 4.42072C15.9877 4.46962 15.9982 4.52204 15.9982 4.57498C15.9982 4.62792 15.9877 4.68034 15.9674 4.72925C15.9472 4.77815 15.9175 4.82258 15.88 4.85998Z"
          fill="#213F7D"
        />
        <path
          d="M7.84 7.19994H7.4225C6.85106 7.46346 6.22927 7.59993 5.6 7.59993C4.97073 7.59993 4.34894 7.46346 3.7775 7.19994H3.36C2.46893 7.20014 1.61442 7.5542 0.984341 8.18428C0.354262 8.81436 0.000198832 9.66887 0 10.5599L0 11.5999C0 11.9182 0.126428 12.2234 0.351472 12.4485C0.576515 12.6735 0.88174 12.7999 1.2 12.7999H10C10.3183 12.7999 10.6235 12.6735 10.8485 12.4485C11.0736 12.2234 11.2 11.9182 11.2 11.5999V10.5599C11.1998 9.66887 10.8457 8.81436 10.2157 8.18428C9.58558 7.5542 8.73107 7.20014 7.84 7.19994ZM5.6 6.39994C6.2329 6.39994 6.85159 6.21226 7.37782 5.86064C7.90406 5.50902 8.31421 5.00925 8.55641 4.42453C8.79862 3.8398 8.86199 3.19639 8.73851 2.57565C8.61504 1.95491 8.31027 1.38473 7.86274 0.937199C7.41521 0.489671 6.84503 0.1849 6.22429 0.0614275C5.60355 -0.0620452 4.96014 0.00132546 4.37541 0.243526C3.79069 0.485726 3.29092 0.895878 2.9393 1.42212C2.58768 1.94835 2.4 2.56704 2.4 3.19994C2.4 4.04863 2.73714 4.86257 3.33726 5.46268C3.93737 6.0628 4.75131 6.39994 5.6 6.39994Z"
          fill="#213F7D"
        />
      </g>
      <defs>
        <clipPath id="clip0_13751_800">
          <rect width="16" height="12.8" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Karma;
