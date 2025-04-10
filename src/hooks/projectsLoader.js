export default async function loader() {
  const response = await fetch(
    "https://api.github.com/users/Yusef-Ahmed/starred"
  );
  const resData = await response.json();
  console.log(resData.filter((repo) => repo.owner.login === "Yusef-Ahmed"));
  return resData.filter((repo) => repo.owner.login === "Yusef-Ahmed");
}
