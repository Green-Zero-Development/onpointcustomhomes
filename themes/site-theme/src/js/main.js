import styles from './../css/main.css';
import AOS from 'aos';
import SimpleLightbox from "simplelightbox";

AOS.init({
    disable: 'mobile',
    once: true
});

let floorPlansGallery = new SimpleLightbox('.floor-plans-simplelightbox a');
floorPlansGallery.on('show.simplelightbox', function () {
    
});

let progressPhotosGallery = new SimpleLightbox('.progress-photos-simplelightbox a');
progressPhotosGallery.on('show.simplelightbox', function () {
    
});

let otherPhotosGallery = new SimpleLightbox('.other-photos-simplelightbox a');
otherPhotosGallery.on('show.simplelightbox', function () {
    
});