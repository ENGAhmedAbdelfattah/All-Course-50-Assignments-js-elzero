/* assignments43 */

const accessToken = "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";
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

    const createCellName = document.createElement("td");
    createCellName.textContent = el.repositoryName;
    createRow.appendChild(createCellName);

    const createCellStar = document.createElement("td");
    createCellStar.textContent = el.stars;
    createRow.appendChild(createCellStar);

    const createCellLink = document.createElement("td");
    const createVisitLink = document.createElement("a");
    createVisitLink.href = el.visitLink;
    createVisitLink.textContent = "Visit";
    createVisitLink.target = "_blank";
    createCellLink.appendChild(createVisitLink);
    createRow.appendChild(createCellLink);


    tBodyElement.appendChild(createRow);
  });
};

appendData();
