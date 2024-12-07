export const loadBrandStyles = async (brand: string) => {
  console.log("brand", brand);
  switch (brand) {
    case 'rps':
      await import('../styles/rps/styles.scss');
      break;
    case 'mrc':
      await import('../styles/mrc/styles.scss');
      break;
    default:
      console.warn(`No styles found for brand: ${brand}`);
  }
};
