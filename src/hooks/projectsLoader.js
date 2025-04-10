export default async function loader() {
  const response = await fetch(
    "https://api.github.com/users/Yusef-Ahmed/starred"
  );

  const resData = await response.json();

  const repos = resData.filter((repo) => repo.owner.login === "Yusef-Ahmed");

  return repos.map((repo) => ({
    ...repo,
    image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
  }));
}
