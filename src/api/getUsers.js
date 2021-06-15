// REPLACE THIS WITH THE API CALL
async function getUsers() {
  try {
    const res = await fetch(
      `https://afternoon-hamlet-30447.herokuapp.com/api/user
        `,
      {
        method: "GET",
      }
    );
    const fullData = await res.json();
    console.log(fullData);
    return fullData;
  } catch (err) {
    console.log(err);
  }
}

export default getUsers;
