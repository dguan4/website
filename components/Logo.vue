<template>
  <svg viewBox="130 90 160 220" id="dg">
    <g fill="none" stroke="#FFFFFF">
      <!--     <path d="M7.3 75L25.9 6.8s58.4-6.4 33.5 13-41.1 32.8-11.2 30.8h15.9v5.5s42.6 18.8 0 20.6" />
    <path d="M133.1 58.2s12.7-69.2 24.4-47.5c0 0 4.1 8.6 9.5.9 0 0 5-10 10.4.9 0 0 12.2 
            32.6 13.6 43 0 0 39.8 5.4 15.8 15.4-13.2 5.5-53.8 13.1-77.4 5.9.1 0-51.9-15.4 3.7-18.6z" />-->
      <path
        id="david"
        d="M 150 300 L 150 100 C 200 100 250 150 250 200 C 250 250 200 300 150 300"
        stroke-width="5"
      />
      <path
        id="guan"
        d="M 270 100 C 220 100 170 150 170 200 C 170 250 220 300 270 300 L 270 200 L 220 200  "
        stroke-width="10"
      />
    </g>
  </svg>
</template>

<style lang="scss">
#dg {
  height: 50px;
  // opacity: 0;
}
#david,
#guan {
  opacity: 0;
}
</style>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js"
        }
        // {
        //   src:
        //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin3.min.js"
        // }
      ],
      link: [
        {
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
          rel: "stylesheet"
        },
        {
          href: "https://fonts.googleapis.com/css?family=Rubik&display=swap",
          rel: "stylesheet"
        }
      ]
    };
  },
  mounted() {
    let tl = new gsap.timeline();
    tl.to("#david", {
      drawSVG: "0%"
    });
    tl.to("#david", { duration: 1, autoAlpha: 1, drawSVG: "100%", delay: 0.2 });
    tl.to("#david", {
      delay: -0.2
    });
    tl.to("#guan", {
      drawSVG: "0%"
    });
    tl.to("#guan", {
      duration: 1,
      autoAlpha: 1,
      drawSVG: "100%",
      delay: -0.3
    });
  }
};
</script>
