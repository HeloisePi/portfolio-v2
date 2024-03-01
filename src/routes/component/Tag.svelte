<script>
    export let color;
    export let text;
</script>

<div class="tag">
    <div class="color" style="background-color:{color}">
    </div>
    <h5>{text}</h5>
</div>

<style lang="scss">
    .tag{
        background-color: #efefef;
        border-radius: 15px;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        width: fit-content;
        height: 30px;

        .color{
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: var(--color);
            margin-right: 0.5rem;
        }
    }

    @media screen and (max-width: 560px) {
        .tag{
    background-color: #1e092200;
    padding: 0;
    h5{
        display: none;
    }
    .color{
        margin: 0;
    }
}
    }
</style>