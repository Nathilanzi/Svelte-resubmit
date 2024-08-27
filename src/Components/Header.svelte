<!-- Header.svelte -->
<script>
    // import Link from 'svelte-spa-router';

    /**
     * Boolean flag to control the visibility of the navbar.
     * @type {boolean}
     */
    let showNavbar = false;

    /**
     * Toggles the visibility of the navbar by changing the value of `showNavbar`.
     * If `showNavbar` is true, it sets it to false, and vice versa.
     */
    const toggleNavbar = () => {
        showNavbar = !showNavbar;
    };
</script>
