async function deletePost(id) {
  try {
    const res = await fetch(
      `http://afternoon-hamlet-30447.herokuapp.com/api/deletepost/${id}`,
      {
        method: "DELETE",
      }
    );
    const fullData = await res.json();
    console.log(fullData);
    return fullData;
  } catch (err) {
    console.log(err);
  }
}

export default deletePost;
