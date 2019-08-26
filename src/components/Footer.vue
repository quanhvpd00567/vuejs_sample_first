<template>
  <div id="footer">
    <footer class="page-footer font-small special-color-dark pt-4">
      <div class="container">
        <!-- Social buttons -->
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a class="btn-floating btn-fb mx-1">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-tw mx-1">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-gplus mx-1">
              <i class="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-li mx-1">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-dribbble mx-1">
              <i class="fab fa-dribbble"></i>
            </a>
          </li>
        </ul>
        <!-- Social buttons -->
      </div>
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2018 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/">MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterHoder"
};
</script>
<style lang="scss" scoped>
#footer {
  background: #1085e2b5;
  .footer-copyright {
    background-color: #2196f3 !important;
    a {
      color: #ffffff;
    }
  }
}
</style>