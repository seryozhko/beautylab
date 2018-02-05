var feed = new Instafeed({
  accessToken: '6940234539.d4848b2.a0305de706ce49a99daf8374fb06d283',
  limit: 20,
  imageResolution: 'low-resolution',
  imageTemplate: '<a href="{{link}}"><img src="{{image}}" class="m-2 rounded"/></a>',
  carouselFrameTemplate: '<a href="{{link}}"><img src="{{previewImage}}" class="m-2 rounded" width="{{previewWidth}}" height="{{previewHeight}}"></a>'
});
feed.run();