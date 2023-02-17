export const getImagemPepleo = () => {
  const el = window.document.querySelector(".matrix-cabecalho__perfil");
  const value = getComputedStyle(el).getPropertyValue("--imagem-pepleo");

  var root = document.documentElement;
  const imageUrl = "./photo.png";

  root.style.setProperty("--imagem-pepleo", `url(${imageUrl})`);
  //document.body.style.backgroundImage = "url(--imagem-pepleo)";
  document.documentElement.style.setProperty("--color-test", "yellow");
  console.log("teste.: ", value);
};

/* 
    Format.: url|react
    data:image/png;base64,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) 
*/

export const getLoadImagem = async (url, image) => {
  if (typeof image === "string" && image.length === 0) {
    return;
  }
  let response = await fetch(url);
  let data = await response.blob();
  var strType = data.type;
  var blob = new Blob([data]);
  var sfiles = new File([blob], image, { type: strType });
  console.log("URL.:", url);
  console.log("BLOB", blob);
  console.log("TYPE", strType);
  console.log("BLOB", image);
  console.log("FILE", sfiles);

  getBase64(sfiles);
};
const getBase64 = (file) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    //onLoad(reader.result);
    console.log(reader.result);
    getImagemPepleotest(reader.result);
  };
};

const getImagemPepleotest = (imageUrl) => {
  var root = document.documentElement;
  console.log("IMAGEURL.: ", imageUrl);
  root.style.setProperty("--imagem-pepleo", `url(${imageUrl})`);
};
