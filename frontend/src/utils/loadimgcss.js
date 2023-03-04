export const getLoadImagem = async (url, image) => {
  if (typeof image === "string" && image.length === 0) {
    return;
  }
  let response = await fetch(url);
  let data = await response.blob();
  var strType = data.type;
  var blob = new Blob([data]);
  var sfiles = new File([blob], image, { type: strType });
  getBase64(sfiles);
};
const getBase64 = (file) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    getImagemPepleotest(reader.result);
  };
};

const getImagemPepleotest = (imageUrl) => {
  var root = document.documentElement;
  root.style.setProperty("--imagem-pepleo", `url(${imageUrl})`);
};
