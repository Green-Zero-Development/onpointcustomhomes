---
type: page
layout: collection
title: 'Modern Luxury'
params:
page-status: 'modern-luxury'
pageImage: 'https://res.cloudinary.com/animated-eagle/image/upload/v1552523176/OnPoint%20Custom%20Homes/emomedia.net-2.jpg'
pageTitle: 'MODERN LUXURY'
---

<div class="flex flex-wrap w-full">
    <div class='flex flex-wrap w-full items-center pt-5 z-50 slider-nav'>
        {{< modern-luxury-photo-slider-controls data="modern_luxury_photos" >}}
    </div>
</div>

<div class="bg-grey-lighter w-full py-5 mb-5 w-px h-px opacity-0 z-0 big-slide">
    <div class="w-full items-center text-5xl text-color-333 hover:text-color-818e9c hover:cursor-pointer close-this">Close<i class="text-4xl fas fa-times-circle"></i></div>
    <div class='slider'>
{{< modern-luxury-photo-slider data="modern_luxury_photos" >}}
    </div>
</div>