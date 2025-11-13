<script>
  import { base } from '$app/paths';
</script>
<div class="w-full flex items-center justify-center">
 <div
    class="rounded-xl overflow-hidden bg-white shadow-lg w-[90vw] sm:w-[22rem] md:w-[26rem] lg:w-[36rem] xl:w-[42rem] max-h-[85vh]"
    style="aspect-ratio: 9 / 16;"
  >
    <video
      src={`${base}/videos/video-cv-pablo-blender.mp4`}
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
      controls
      class="w-full h-full object-cover"
    ></video>
  </div>
</div>