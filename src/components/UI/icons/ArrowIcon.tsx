const ArrowIcon = ({ color = '#000' }: { color?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      fill='none'
      viewBox='0 0 48 48'
    >
      <path
        fill={color}
        d='M26.759 5.4l-3.88.94C25.419 16.72 32.519 22 43.999 22v-4c-9.66 0-15.14-4-17.24-12.6zM44 22H4v4h40v-4z'
      ></path>
      <path
        fill={color}
        d='M22.879 41.66l3.88.94c2.1-8.6 7.58-12.6 17.24-12.6v-4c-11.48 0-18.58 5.26-21.12 15.66z'
      ></path>
    </svg>
  );
};

export default ArrowIcon;
