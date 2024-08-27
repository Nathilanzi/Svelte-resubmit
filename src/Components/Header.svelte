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
  
  <style>
    .header {
      background-color: #1a202c;
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    .brand {
      display: flex;
      align-items: center;
    }
    .logo {
      height: 40px;
      margin-right: 0.5rem;
    }
    .brand-name {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .menu-toggle {
      background: none;
      border: none;
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
    }
    .menu {
      display: none;
      flex-direction: column;
      background-color: #2d3748;
      border-radius: 4px;
    }
    .menu.show {
      display: flex;
    }
    .menu-list {
      display: flex;
      flex-direction: column;
    }
    .menu-item {
      padding: 0.5rem 1rem;
      color: #fff;
      text-decoration: none;
    }
    .menu-item:hover {
      background-color: #4a5568;
    }
  </style>
  