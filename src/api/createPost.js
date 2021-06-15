async function createPost(info) {
  try {
    const res = await fetch(
      `https://afternoon-hamlet-30447.herokuapp.com/api/newpost`,
      {
        method: "POST",
        headers: {},
        body: JSON.stringify(info),
      }
    );
    const fullData = await res.json();
    return fullData;
  } catch (err) {
    console.log(err);
  }
}

export default createPost;
