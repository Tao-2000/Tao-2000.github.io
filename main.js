var images = [
  "https://i.seadn.io/gae/1BrGPBcwboETPREk0FfF-Y8RG_ehXzBSUw6EOKcWwlrrsZPLdaUgfU15IU7xrMit2oV5aCzJ2JJpjvWPEev2L7aawdhTTbYJuTPu?auto=format&dpr=1&w=2048",
	"https://i.seadn.io/gcs/files/12cff9c9b88708235e851c4a02ad66d1.png?auto=format&dpr=1&w=2048",
  "https://i.seadn.io/gae/AOZfk9XPintNInvKfvlH3-LDDWW9oArAIwDDV1AWw_4bPB-YXMYiw3YLyyXgSXBFgn36qpBdCsYdCdejKh-7DTZqKPuPwK7BjQHc?auto=format&dpr=1&w=2048",
	"https://i.seadn.io/gae/9nqQAKYJbMlXGb3Gj1ezOuPRcF1HpD-ppHcp60s9cCXLi1YzwspxCgWaE2m7fA8bPlB6SWZY_LccFHYbPp_6hLjwPdC7um7x8KgmSQ?auto=format&dpr=1&w=2048",
	"https://i.seadn.io/gcs/files/671a36596083c489e770ffc6ea732353.gif?auto=format&dpr=1&w=2048",
	"https://i.seadn.io/gcs/files/ef95dcbfa50e1f6dd87c5ef5566f7795.png?auto=format&dpr=1&w=2048",
	"https://openseauserdata.com/files/ad058edc5a9fd570ddf78edde0e562de.svg"
];
var currentIndex = 0;
var imgElement = document.getElementById("nft-image");

function updateImage() {
  imgElement.src = images[currentIndex];
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

// 更新图片的源，每3秒执行一次
setInterval(updateImage, 3000);
