// REPLACE THIS WITH THE API CALL
async function getPosts() {
  try {
    const res = await fetch(
      `https://afternoon-hamlet-30447.herokuapp.com/api/posts`,
      {
        method: "GET",
      }
    );
    const fullData = await res.json();
    console.log(fullData);
    return fullData || [];
  } catch (err) {
    console.log(err);
  }
}

export default getPosts;
