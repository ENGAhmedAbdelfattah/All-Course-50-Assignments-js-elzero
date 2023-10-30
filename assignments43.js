/* assignments43 */

const accessToken = ""; // your token from your github => steps create token here => https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
const apiUrl = "https://api.github.com/users/ElzeroWebSchool/repos?per_page=15";
const headers = new Headers({
  Authorization: `token ${accessToken}`,
});
const dataFetch = async () => {
  try {
    const res = await fetch(apiUrl, { method: "GET", headers });
    const data = await res.json();
    // console.log("data", data);
    const requireData = data.map((el) => ({
      repositoryName: el.name,
      stars: el.stargazers_count,
      visitLink: el.html_url,
    }));
    // console.log(requireData);
    return requireData;
  } catch (err) {
    throw new Error(`errName: ${err.name} --- errMassage: ${err.massage}`);
  }
};

const appendData = async () => {
  const tBodyElement = document.querySelector("div.result table tbody");
  const repoData = await dataFetch();

  repoData.forEach((el) => {
    const createRow = document.createElement("tr");
    // repositoryName cell
    const createCellName = document.createElement("td");
    createCellName.textContent = el.repositoryName;
    createRow.appendChild(createCellName);

    // stars cell
    const createCellStar = document.createElement("td");
    createCellStar.textContent = el.stars;
    createRow.appendChild(createCellStar);

    // visitLink cell
    const createCellLink = document.createElement("td");
    const createVisitLink = document.createElement("a");
    createVisitLink.href = el.visitLink;
    createVisitLink.textContent = "Visit";
    createVisitLink.target = "_blank";
    createCellLink.appendChild(createVisitLink);
    createRow.appendChild(createCellLink);

    // add to target on html
    tBodyElement.appendChild(createRow);
  });
};

appendData();
