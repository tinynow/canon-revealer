<script>
export default {
    name: 'CanonRevealer',
    functional: true,
    props: {
        speed: {
            type: Number,
            default: 1,
        },
    },
    render(createElement, context) {

        const options = {
            props: {
                name: 'expand'
            },
            on: {
                afterEnter(element) {
                    element.style.height = 'auto';
                },
                enter(element) {
                    const width = getComputedStyle(element).width;

                    element.style.width = width;

                    element.style.position = 'absolute';
                    element.style.visibility = 'hidden';
                    element.style.height = 'auto';
                    const height = getComputedStyle(element).height;
                    const pixels = parseInt(height.substring(0, height.length - 2));
                    const duration = `${pixels / context.props.speed}ms`;
                    console.log(pixels)
                    element.style.width = null;
                    element.style.position = null;
                    element.style.visibility = null;
                    element.style.height = 0;
                    element.style.transitionDuration = duration;

                    // Force repaint
                    getComputedStyle(element).height;

                    setTimeout(() => {
                        element.style.height = height;
                    });
                },
                leave(element) {
                    const { height } = getComputedStyle(element);

                    element.style.height = height;

                    // Force repaint
                    getComputedStyle(element).height;

                    setTimeout(() => {
                        element.style.height = 0;
                    });
                }
            }
        };

        return createElement('transition', options, context.children);
    }
};
</script>

<style scoped>
* {
    /* Trigger hardware acceleration */
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
}
</style>

<style>
.expand-enter-active,
.expand-leave-active {
    transition-property: height;
    transition-timing-function: ease-in-out;
    overflow: hidden;
}

.expand-enter,
.expand-leave-to {
    height: 0;
}
</style>
