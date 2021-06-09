async function authenticate(info) {
  try {
    const res = await fetch(`/api/user/${info}`);
    const fullData = await res.json();
    console.log(await fullData);
    return await fullData;
  } catch (err) {
    console.log(err);
  }
}

export default authenticate;
