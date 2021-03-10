<template>
  <div class="col-md-4 ml-auto mr-auto">
    <card class="card-lock text-center" no-footer-line>
      <template v-slot:header>
        <img src="img/emilyz.jpg" alt="..." />
      </template>

      <h4 class="card-title">Joe Gardner</h4>
      <fg-input type="password" placeholder="Enter Password.."> </fg-input>
      <template v-slot:footer>
        <n-button type="primary" round wide>Unlock</n-button>
      </template>
    </card>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
