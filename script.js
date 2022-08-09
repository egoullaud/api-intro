const getData = async function () {
  const res = await fetch(
    "https://quote-garden.herokuapp.com/api/v3/quotes?author=beyonce"
  );
  const data = await res.json();
  console.log(data);
};
getData();
