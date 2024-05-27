export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2d9b232efcmshbc6da7e1db7d3e2p15f8eejsn62a26f786624",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
