/* assignments47 */

const btnElement = document.querySelector(".form button");
const LinkEle = document.createElement("a");

const saveTextToFile = () => {
  const textAreaElement = document.querySelector(".form textarea");
  LinkEle.download = "saved-file.txt";

  const textFileAsBlob = new Blob([textAreaElement.value], {
    type: "text/plain",
  });

  if (window.webkitURL != null) {
    LinkEle.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    LinkEle.href = window.URL.createObjectURL(textFileAsBlob);
    LinkEle.onclick = destroyClickedElement;
    LinkEle.style.display = "none";
    document.body.appendChild(LinkEle);
  }
};

btnElement.addEventListener("click", (e) => {
  saveTextToFile();
  e.preventDefault();
  LinkEle.click();
  console.log("ok");
});
