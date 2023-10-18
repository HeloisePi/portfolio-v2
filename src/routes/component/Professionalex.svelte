<script>
    export let company;
    export let date;
    export let postTitle;
    export let description;
</script>

<div class="experience">
    <div class="companyDate">
        <p>{company}<br> 
        {date}</p>
    </div>
    <div class="postTitle">
        <h4>{postTitle}</h4>
        <div class="description">
            <p>{description}</p>
        </div>
    </div>
</div>

<style lang="scss">
    .experience{
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-top: 1px solid black;
        padding-top: 1rem;

        .description{
            height: 30vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    @media screen and (max-width: 600px) {
        .experience {
            grid-template-rows: 20vh 1fr;
            grid-template-columns: 1fr;
            justify-self: center;
        }
    }
</style>