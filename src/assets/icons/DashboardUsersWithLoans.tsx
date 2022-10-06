import React, { FC } from "react";

interface IDashboardUsersWithLoans {
  className: string;
}
const DashboardUsersWithLoans: FC<IDashboardUsersWithLoans> = (props) => {
  return (
      <svg
          {...props}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.1" cx="20" cy="20" r="20" fill="#F55F44" />
      <path
        d="M12.9617 11.4V27.4118H19.3157V26.2118H14.1617V12.6H20.1999V16.9578H24.3155V20.6538H25.5155V15.9256L21.0881 11.3998L12.9617 11.4ZM21.3999 13.436L23.6741 15.7578H21.3999V13.436Z"
        fill="#F55F44"
      />
      <path
        d="M15.3938 19.3524H22.604V20.5524H15.3938V19.3524Z"
        fill="#F55F44"
      />
      <path
        d="M15.3938 21.9524H19.004V23.1524H15.3938V21.9524Z"
        fill="#F55F44"
      />
      <path
        d="M29.0381 28.9422V23.4C29.0381 21.7719 25.1921 21.7258 24.7537 21.7258C24.3154 21.7258 20.4717 21.7758 20.4717 23.4V28.9796C20.4725 29.0406 20.4826 29.1007 20.5021 29.1577C20.8435 30.5601 24.3381 30.5999 24.7561 30.5999C25.1741 30.5999 28.9561 30.5523 29.0357 28.9741C29.0357 28.9656 29.0381 28.9562 29.0381 28.9421L29.0381 28.9422ZM27.8381 25.1422C27.5998 25.3618 26.4998 25.7203 24.7561 25.7203C23.0115 25.7203 21.9201 25.3617 21.6717 25.15V24.6344C22.8396 25.0602 24.4717 25.0782 24.7561 25.0782C25.0405 25.0782 26.6717 25.0578 27.8405 24.6344L27.8381 25.1422ZM21.6717 26.4758C22.8396 26.9016 24.4717 26.9196 24.7561 26.9196C25.0405 26.9196 26.6717 26.8993 27.8405 26.4758L27.8397 27C27.592 27.2118 26.4999 27.5704 24.7553 27.5704C23.0115 27.5704 21.9201 27.2 21.6717 27L21.6717 26.4758ZM24.7561 22.9298C26.2561 22.9298 27.2741 23.1954 27.6881 23.404C27.274 23.604 26.256 23.8783 24.7561 23.8783C23.2561 23.8783 22.2357 23.6142 21.8241 23.4001C22.2358 23.2001 23.2538 22.9298 24.7561 22.9298ZM21.6717 28.8344V28.318C22.8396 28.7438 24.4717 28.7618 24.7561 28.7618C25.0405 28.7618 26.6717 28.7415 27.8405 28.318V28.8336C27.5897 29.0461 26.4999 29.4 24.7561 29.4C23.0115 29.4 21.9201 29.0461 21.6717 28.8344Z"
        fill="#F55F44"
      />
    </svg>
  );
};

export default DashboardUsersWithLoans;
