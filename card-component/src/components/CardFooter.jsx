import React from 'react';
import {ReactComponent as CheckIcon} from "../assets/images/icon-check.svg";

const PLAN_DETAILS = [
  "Unlimited users",
  "100% data ownership",
  "Email reports"
];

function CardFooter() {
  return (
    <div>
      <ul>
        {PLAN_DETAILS.map(plan => (
          <li key={plan}
          className="flex justify-center items-center gap-2 font-sans text-xs text-grayish-blue dark:text-white font-semibold py-1 sm:justify-start"
          >
            <div>
              <CheckIcon />
            </div>
            {plan}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardFooter;