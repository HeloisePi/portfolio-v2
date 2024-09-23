<script>
    export let company;
    export let date;
    export let postTitle;
</script>

<div class="experience" appear>
    <p>{date}</p>
    <div>
      <p class="bold">{postTitle}</p>
      <p><slot></slot></p>
      <p>{company}</p>
    </div>
  </div>
  
  <style lang="scss">
    @import '../styles.css';
    
    
    .experience {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-top: 1px solid black;
      padding-top: 24px;
      padding-bottom: 24px;
      transition: opacity 0.2s ease-in-out ;
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