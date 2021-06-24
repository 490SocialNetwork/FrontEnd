async function createComment(info) {
  try {
    const res = await fetch(
      `https://afternoon-hamlet-30447.herokuapp.com/api/newcomment`,
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

export default createComment;
