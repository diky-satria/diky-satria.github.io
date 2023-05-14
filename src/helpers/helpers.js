export const downloadFileAtURL = (url) => {
  const filename = url.split("/").pop();
  const aTag = document.createElement("a");
  aTag.href = url;
  aTag.setAttribute("download", filename);
  // document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};
