async function authenticate(info) {
  try {
    const res = await fetch(
      `https://afternoon-hamlet-30447.herokuapp.com/api/${info}`,
      {
        method: "GET",
      }
    );
    const fullData = await res.json();
    console.log(await fullData);
    return await fullData;
  } catch (err) {
    console.log(err);
  }
}

export default authenticate;
