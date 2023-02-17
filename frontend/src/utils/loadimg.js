import axios from "axios";
import { BASE_URL } from "./requests";

export function carregarImg(id) {
  var target = document.getElementById(id);
  var file = document.querySelector("input[type=file]").files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    target.style.display = "block";
    target.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    target.src = "";
  }
}

export const loadImageServer = async (setDados, image, inputFileId) => {
  await axios.get(`${BASE_URL}/articles/paint/${image}`).then((res) => {
    //var target = document.getElementById("img"); //! ou  as HTMLElement;
    const file = res.data; //get image server
    var blob = new Blob([file]); //convert image blob
    console.log(blob);
    var strType = convertTypeImage(image);
    if (
      strType.includes("png") ||
      strType.includes("jpg") ||
      strType.includes("jpeg")
    ) {
      var sfiles = new File([blob], image, { type: strType });
      var dt = new DataTransfer();
      dt.items.add(sfiles);
      var file_list = dt.files;

      document.getElementById(inputFileId).files = file_list;
      setDados(document.getElementById(inputFileId).files[0]);
    }
  });
};
const convertTypeImage = (strType) => {
  var newType = strType.split(".");
  return "image/" + newType[newType.length - 1];
};
