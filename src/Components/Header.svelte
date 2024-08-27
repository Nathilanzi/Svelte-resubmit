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

<header class="header">
    <nav class="navbar">
        <div class="navbar-container">
            <a href="#/" class="brand">
                <img src="/online-shop.png" class="logo" alt="Shop Logo" />
                <span class="brand-name">SwiftCart</span>
            </a>
            <button on:click={toggleNavbar} class="menu-toggle">
                <span class="sr-only">Toggle menu</span>
                &#9776;
            </button>
            <div class={`menu ${showNavbar ? 'show' : ''}`}>
                <ul class="menu-list">
                    <li><a href="#/wishlist" class="menu-item">Wishlist</a></li>
                    <li><a href="#/cart" class="menu-item">Cart</a></li>
                    <li><a href="#/login" class="menu-item">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  
