import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} seconds`));
    }, 10000 * s);
  });
};

export const getJSON = async function (url) {
  try {
    //1.assign the recipe to a variable
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    //2.Convert the json file into an object
    const data = await res.json();
    // console.log(data);
    //3.Check whether the request was a success
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    //4.return the data
    return data;
  } catch (err) {
    throw err;
  }
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: "POSt",
          headers: { "Content-Type": `application/json` },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    //1.Fetching the recipe json
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    //2.converting the json file into object
    const data = await res.json();
    //3.Check if there is any idea or not
    if (!res.ok) throw new Error(`${data.message} ${res.status}`);
    //4.return the data
    return data;
  } catch (err) {
    throw err;
  }
};
