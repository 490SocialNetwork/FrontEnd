async function createUser(info) {
  try {
    const res = await fetch(
      ` https://afternoon-hamlet-30447.herokuapp.com/api/newuser`,
      {
        method: "POST",
        headers: {},
        body: JSON.stringify(info),
      }
    );
    const fullData = await res.json();
    console.log(fullData);
    return fullData;
  } catch (err) {
    console.log(err);
  }
}

export default createUser;
