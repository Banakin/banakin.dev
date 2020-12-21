<script>
    import Inview from 'svelte-inview';
    
    export let completion;
    export let label;
    export let color;

    let ref;
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
</style>
<div>
    <div class="progress-bar">
        <Inview
            let:inView
            wrapper={ref}
            unobserveOnEnter={true}>
            <span 
                bind:this={ref}
                class={color}
                style="width: {inView ? completion : 0}%">
            </span>

        </Inview>
    </div>
    <p>{label}</p>
</div>