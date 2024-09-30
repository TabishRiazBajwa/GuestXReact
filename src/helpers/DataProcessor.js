export const getConvirzaGroupNames = (selectedLocation) => {
  return selectedLocation
    .map((location) => location.ConvirzaGroupNames)
    .filter((groupName) => "nan" !== groupName);
};
