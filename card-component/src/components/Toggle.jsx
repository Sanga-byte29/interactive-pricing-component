import React from 'react';

function Toggle(props) {
  return (
    <label
    for="checked-toggle"
    className="inline-flex relative items-center cursor-pointer"
    >
      <input 
        type="checkbox"
        value=""
        id="checked-toggle"
        className="sr-only peer"
        checked={props.checked}
        onClick={props.onClick}
      />
       <div className="w-11 h-6 dark:bg-grayish-blue hover:bg-soft-cyan bg-light-grayish-blue rounded-full peer peer-focus:ring-0  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[7px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-strong-cyan"></div>
    </label>
  )
}

export default Toggle