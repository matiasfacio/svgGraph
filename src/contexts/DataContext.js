import React, { useEffect, useState, createContext } from "react";

export const DataContext = createContext();


const DataContextProvider = (props) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  let simplifyingData = {};

  useEffect(() => {
    setIsLoading(true)
    fetch(
      // "https://opendata.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0.geojson"
      "https://opendata.arcgis.com/datasets/ef4b445a53c1406892257fe63129a8ea_0.geojson"
    )
      .then((res) => res.json())
      .then(data => assignData(data))
      .catch((err) => console.log(err));
  }, []);

  const assignData = (data) => {
    setFetchedData(data)
    setIsLoading(false)
  }

  const simplyfing = () => {
    let newData = {};
    if (fetchedData !== null) {
      fetchedData.features.map((item) => {
        return (newData[`${item.properties.LAN_ew_GEN}`] = item.properties.Fallzahl)
      });
      
    }
    return newData;
  };
  simplifyingData = simplyfing();
  
  
  return (
    <DataContext.Provider value={{ fetchedData, simplifyingData, isLoading }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
