export const updateFilteredData = (filterValue, originalData) => {
  console.log("filterValue  in utils func: ", filterValue);
  console.log("original data  in utils func: ", JSON.stringify(originalData));
  console.log("filterValue === : ", filterValue === "");
  if (filterValue === "") return originalData;
  const filteredData = originalData.filter(
    (data) => data.category === filterValue,
  );
  console.log("filtered data in utils func: ", filteredData);
  return filteredData;
};
