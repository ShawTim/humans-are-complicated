import html2canvas from "html2canvas";
import tippy from "tippy.js";
import FileSaver from "file-saver";

document.addEventListener("DOMContentLoaded", (e) => {
  const container = document.querySelector(".image-container");
  const downloadBtn = document.getElementById("download-button");
  downloadBtn.addEventListener("click", (e) => {
    html2canvas(container).then((canvas) => {
      canvas.toBlob((blob) => FileSaver.saveAs(blob, "humans-are-complicated.png"));
    });
  });

  const addBtnEvents = (container) => {
    const statement = container.querySelector(".statement");
    const increaseBtn = container.querySelector(".increase-btn");
    const decreaseBtn = container.querySelector(".decrease-btn");
    increaseBtn.addEventListener("click", (e) => {
      const style = getComputedStyle(statement);
      const fontSize = style.getPropertyValue("font-size");
      const sizeNum = fontSize.match(/\d+/);
      if (sizeNum && sizeNum[0]) {
        statement.style.fontSize = fontSize.replace(/\d+/, sizeNum[0]-0+1);
      }
    });
    decreaseBtn.addEventListener("click", (e) => {
      const style = getComputedStyle(statement);
      const fontSize = style.getPropertyValue("font-size");
      const sizeNum = fontSize.match(/\d+/);
      if (sizeNum && sizeNum[0]) {
        statement.style.fontSize = fontSize.replace(/\d+/, sizeNum[0]-1);
      }
    });
  }

  addBtnEvents(document.querySelector(".statement-container1"));
  addBtnEvents(document.querySelector(".statement-container2"));

  tippy(".image-container", {
    placement: "left",
    arrow: true,
    size: "large",
    distance: 20,
  });
});
