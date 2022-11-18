// Add imports above this line
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const refs = {
    galleryEl: document.querySelector('.gallery'),
}

function createGalleryListElMarcup(galleryItems) {
    let galleryListEl = galleryItems.map(el => `<li><a class="gallery__item" href="${el.original}"><img class="gallery__image" src="${el.preview}" alt="${el.description}"></a></li>`).join('');
    refs.galleryEl.innerHTML = galleryListEl;
}
createGalleryListElMarcup(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
