const BurgerIcon = ({
  color = '#fff',
  onClick,
}: {
  color?: string;
  onClick?: () => void;
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='40'
      fill='none'
      viewBox='0 0 20 40'
      onClick={onClick}
    >
      <path
        fill={color}
        d='M10 40c5.523 0 10-4.39 10-9.803 0-5.414-4.477-9.803-10-9.803S0 24.782 0 30.197C0 35.61 4.477 40 10 40zM10 20.385c5.523 0 10-3.07 10-6.856 0-3.787-4.477-6.856-10-6.856S0 9.742 0 13.529s4.477 6.856 10 6.856z'
      ></path>
      <path
        fill={color}
        d='M10 6.734c5.523 0 10-1.508 10-3.367C20 1.507 15.523 0 10 0S0 1.507 0 3.367s4.477 3.367 10 3.367z'
      ></path>
    </svg>
  );
};

export default BurgerIcon;
