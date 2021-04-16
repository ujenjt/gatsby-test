export const getHeaderOffset = () => {
  const header = document.querySelector('.wt-layout__header');
  return header ? header.offsetHeight : 0;
};
