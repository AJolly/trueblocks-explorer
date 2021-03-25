import React from 'react';
import PropTypes from 'prop-types';

const Medium = (props) => {
  const {color, size, stroke, ...otherProps} = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 35 35'
      fill='none'
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      {...otherProps}>
      <path
        id='medium'
        d='M4,4V28H28V4ZM23.93846,9.68628l-1.28713,1.2341a.37619.37619,0,0,0-.143.3612v9.06761a.37618.37618,0,0,0,.143.3612l1.257,1.2341v.27089H17.58558v-.27089l1.30219-1.2642c.128-.12792.128-.16555.128-.3612V12.98975l-3.62055,9.19553h-.48925l-4.21518-9.19553v6.163a.85017.85017,0,0,0,.23333.70735l1.6936,2.05432v.27089H7.81538v-.27089L9.509,19.86007a.82009.82009,0,0,0,.21829-.70735V12.02655A.62451.62451,0,0,0,9.524,11.4998L8.01861,9.68628v-.2709H12.693l3.613,7.92382,3.17644-7.92382h4.456Z'
      />
    </svg>
  );
};

Medium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Medium.defaultProps = {
  color: 'currentColor',
  size: '24',
  stroke: '1',
};

export default Medium;
