<script>

</script>

<p class="object"><slot/></p>

<style>

  

    .object::before {
      content: "";
      bottom: 0%;
      position: absolute;
      background-color: black;
      width: 100%;
      height: 3px;
      transition: width 0.35s ease-out;
    }

    .object:hover::before {
      background-color: black;
      width: 5px;
    }

    .object:hover {
        color: black;
      }
    
  
</style>