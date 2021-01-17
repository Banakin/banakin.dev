<script>
    export let inView;
    export let completion;
    export let label;
    export let color;
</script>

<style lang="scss">
    @import '../styles/variables';
    @import '../styles/section';

    div {
        width: 100%;
    }
    
    .progress-bar {
        height: 0.85rem;
        background-color: $gray;
        border-radius: 999px;
        
        > span {
            display: block;
            height: 100%;
            border-radius: 999px;
            position: relative;
            overflow: hidden;
            transition: width 1s;

            &.orange{
                background-color: $orange;
            }
            &.purple{
                background-color: $purple;
            }
        }
    }

    p {
        margin: 0;
        padding: 0;
        padding-bottom: 1rem;
        font-size: 1.25rem;
    }
</style>
<div>
    <div class="progress-bar">
        <span
            class={color}
            style="width: {inView ? completion : 0}%">
        </span>
    </div>
    <p>{label}</p>
</div>