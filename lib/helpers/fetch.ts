const fetchApi = (url: string) => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(url);

    if (!response.ok) {
      reject("invalid api request.");
    }

    console.log("is started to fetching ...");

    resolve(response.json());
  });
};

export default fetchApi;
