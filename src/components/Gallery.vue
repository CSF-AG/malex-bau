<template>
  <div class="gallery">
    <div class="image-container">
      <img src="../assets/img/gal1.jpg" />
    </div>
    <div class="image-container">
      <img src="../assets/img/gal2.jpg" />
    </div>
    <div class="image-container">
      <img src="../assets/img/gal3.jpg" />
    </div>
    <div class="image-container">
      <img src="../assets/img/gal4.jpg" />
    </div>
    <div class="image-container">
      <img src="../assets/img/gal5.jpg" />
    </div>
    <div class="image-container">
      <img src="../assets/img/gal6.jpg" />
    </div>

    <div v-if="lightboxVisible" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <img :src="images[selectedImageIndex]" />
        <button class="prev" @click.stop="previousImage">&#10094;</button>
        <button class="next" @click.stop="nextImage">&#10095;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const images = [
      // Your static image URLs here
      "../src/assets/img/gal1.jpg",
      "./src/assets/img/gal2.jpg",
      "../src/assets/img/gal3.jpg",
      "../src/assets/img/gal4.jpg",
      "../src/assets/img/gal5.jpg",
      "../src/assets/img/gal6.jpg",
      "./src/assets/img/gal2.jpg",
      // Add more images as needed
    ];

    const lightboxVisible = ref(false);
    const selectedImageIndex = ref(0);

    function openLightbox(index) {
      selectedImageIndex.value = index;
      lightboxVisible.value = true;
    }

    function closeLightbox() {
      lightboxVisible.value = false;
    }

    function previousImage() {
      selectedImageIndex.value =
        (selectedImageIndex.value - 1 + images.length) % images.length;
    }

    function nextImage() {
      selectedImageIndex.value = (selectedImageIndex.value + 1) % images.length;
    }

    return {
      images,
      lightboxVisible,
      selectedImageIndex,
      openLightbox,
      closeLightbox,
      previousImage,
      nextImage,
    };
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.image-container {
  cursor: pointer;
  flex: 1 1 30%;
  min-width: 320px;
  max-height: 400px;
  overflow: hidden;
}

.image-container > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80%;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  user-select: none;
}

.prev {
  left: -50px;
}

.next {
  right: -50px;
}
</style>
