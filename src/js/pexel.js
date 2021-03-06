import { createClient } from "pexels";
// import videoTempl from '../templates/video.hbs';
import refs from './refs';
const { videoGallery, form } = refs;
const key = "563492ad6f9170000100000199db60a6f1fc43d1b572b8ed904aa680";

// const query = "City";
let per_page = 2;
const locale = "uk-UA"

const client = createClient(key);
console.log(client.videos);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchItem = event.target.elements.search.value;
  getFetch(searchItem);
});
// function getFetch(query) {
//     client.videos.search({ query, per_page, locale }).then((response) => {
//         console.log(response);
//         console.log(response.videos);
//         response.videos.map((video) => {
//             console.log(video);
//             const videoWrapper = document.createElement("li");
//             const videoItem = document.createElement('video')
//             videoItem.setAttribute('src', video.video_files[0].link)
//             videoItem.setAttribute('controls', null)
//             videoItem.setAttribute('poster', video.image);
//             const imageItem = document.createElement("img");
//             imageItem.src = video.image;
//             const picturesList = document.createElement("ul");
//             // pictureList.classl
//             const items = video.video_pictures.map((image) => {
//                 console.log(image);
//                 const item = document.createElement("li");
//                 const picture = document.createElement("img");
//                 picture.src = image.picture;
//                 item.appendChild(picture)
//                 return item
//             })
//             console.log("items", items);
//             picturesList.append(...items)
//             videoWrapper.append(videoItem, pictureList)
//             videoGallery.append(videoWrapper);
//         })
//     })
// }

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const searchItem = event.target.elements.search.value;
//   getFetch(searchItem);
// });

// Якщо співпадають назви ключі і значень
function getFetch(query) {
  client.videos.search({ query, per_page, locale }).then((response) => {
    // console.log(response);
    console.log(response.videos);
    response.videos.map((video) => {
      console.log(video);
      const videoWrapper = document.createElement("li");
      const videoItem = document.createElement("video");
      videoItem.setAttribute("src", video.video_files[0].link);
      videoItem.setAttribute("controls", null);
      videoItem.setAttribute("poster", video.image);
      const imageItem = document.createElement("img");
      imageItem.src = video.image;
      const picturesList = document.createElement("ul");
      picturesList.classList.add("picturesList");
      const items = video.video_pictures.map((image) => {
        // console.log(image);
        const item = document.createElement("li");
        const picture = document.createElement("img");
        picture.src = image.picture;
        item.appendChild(picture);
        return item;
      });
      // console.log("items", items);
      picturesList.append(...items);
      videoWrapper.append(videoItem, picturesList);
      videoGallery.append(videoWrapper);
    });
  });
}
  
