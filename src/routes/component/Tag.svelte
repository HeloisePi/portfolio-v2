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
        background-color: #E8E8E8;
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
</style>