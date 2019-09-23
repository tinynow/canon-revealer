<template>
    <div>
        <button
            :aria-expanded="expanded ? 'expanded' : 'collapsed'"
            type="button"
            @click="expanded = !expanded"
        >
            <span aria-hidden="true">
                {{ expanded ? 'Hide' : 'Show' }}
            </span>
            Content
        </button>
        <canon-revealer>
            <div v-show="expanded">
                <h1>Whatever content you want!</h1>
                <p>Content that you need, but most people do not need to read is the most common legitimate reason you should hide content in this way. Think hard before hiding content. Does it need to be there at all? Are you hiding it because of "screen real estate" even thought HTML can be infinitely long? These are not good reasons.</p>
                <img
                    src='http://placeskull.com/400'
                    alt='Skull placeholder image'
                />
            </div>
        </canon-revealer>
    </div>
</template>

<script>
import CanonRevealer from './src/Revealer';
export default {
    name: 'App',
    components: {
        CanonRevealer,
    },
    data() {
        return {
            expanded: false,
        };
    },
};
</script>

<style lang="scss" scoped>
</style>