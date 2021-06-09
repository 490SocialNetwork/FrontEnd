// REPLACE THIS WITH THE API CALL
async function createUser(info) {
  try {
    const res = await fetch(`/api/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const fullData = await res.json();
    return fullData;
  } catch (err) {
    console.log(err);
  }
}

export default createUser;
