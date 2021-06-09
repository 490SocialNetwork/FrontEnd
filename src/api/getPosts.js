// REPLACE THIS WITH THE API CALL
async function getPosts() {
  try {
    const res = await fetch(`/api/`);
    const fullData = await res.json();
    return fullData;
  } catch (err) {
    console.log(err);
  }
}

export default getPosts;
