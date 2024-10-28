<template>
  <div class="stickyButton">
    <div>
      <router-link to="/kontakt">
        <span style="font-weight:700">Beratung<br/>anfragen</span>
        <svg id="Gruppe_132" data-name="Gruppe 132" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink" width="43" height="32.824" viewBox="0 0 43 32.824">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rechteck_30" data-name="Rechteck 30" width="43" height="32.824" fill="rgba(0,0,0,0)"/>
            </clipPath>
          </defs>
          <g id="Gruppe_77" data-name="Gruppe 77" transform="translate(0 0)" clip-path="url(#clip-path)">
            <path id="Pfad_68" data-name="Pfad 68"
                  d="M43,0V20.221H36.425A20.868,20.868,0,0,0,22.06,25.987l-7.147,6.837v-12.6H0V0Z"
                  transform="translate(0 0)" fill="#0072d8"/>
          </g>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonSticky",
  data() {
    return {
      svgContent: ''  // Hier wird der SVG-Inhalt gespeichert
    };
  },
}
</script>

<style scoped lang="scss">

</style>
