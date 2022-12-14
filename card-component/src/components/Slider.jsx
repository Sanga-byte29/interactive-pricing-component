import React from 'react';


function Slider({
  color1 = "hsl(174,77%,80%)",
  color2 = "hsl(224,65%,95%)",
  ...props
}) {
  const value = Number(props.value);
  const min = Number(props.min);
  const max = Number(props.max);

  const steps = max - min ;
  const step = 100 / steps;
  const fillRatio = step * value;



  return (
    <>
      <input 
        type="range"
        {...props}
        className = "form-range appearance-none rounded-full h2 slider-thumb "
        style={{
          backgroundImage: `linear-gradient(to right, ${color1} 0%,${color1} ${fillRatio}%, ${color2} ${
            fillRatio + 1
          }%, ${color2} 100%)`,
        }} 
      />
    </>
  )
}

export default Slider