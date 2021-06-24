async function getComments(info) {
  try {
    const res = await fetch(
      `https://afternoon-hamlet-30447.herokuapp.com/api/comments/${info}`,
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

export default getComments;
