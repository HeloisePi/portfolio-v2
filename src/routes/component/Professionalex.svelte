<script>
    export let company;
    export let date;
    export let postTitle;
    export let description;
</script>

<div class="experience">
    <p>{date}</p>
    <div>
      <p class="bold">{postTitle}</p>
      <p>{description}</p>
      <p>{company}</p>
    </div>
  </div>
  
  <style lang="scss">
    @import '../styles.css';
    
    
    .experience {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-top: 1px solid black;
      padding: 24px;
      div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
    @media screen and (max-width: 770px) {
        .experience{
          grid-template-columns: 1fr;
        }
        }
  </style>