<!-- ProductList.svelte -->
<script>
    import { onMount } from 'svelte';
    // import Link from 'svelte-spa-router';

    /**
     * Array of product objects fetched from the API.
     * @type {Array<Object>}
     */
    export let products = [];

    /**
     * Array of product categories fetched from the API.
     * @type {Array<string>}
     */
    let categories = [];

    /**
     * Selected category for filtering products.
     * @type {string}
     */
    let selectedCategory = '';

    /**
     * Selected sort order for sorting products.
     * @type {string}
     */
    let sortOrder = '';

    /**
     * Fetches the list of products from the API and updates the `products` array.
     * 
     * @async
     * @function fetchProducts
     * @returns {Promise<void>} A promise that resolves when the products are fetched.
     */
    const fetchProducts = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        products = await res.json();
    };

    /**
     * Fetches the list of categories from the API and updates the `categories` array.
     * 
     * @async
     * @function fetchCategories
     * @returns {Promise<void>} A promise that resolves when the categories are fetched.
     */
    const fetchCategories = async () => {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        categories = await res.json();
    };

    /**
     * Event handler for category change event.
     * Updates the `selectedCategory` variable with the selected category value.
     * 
     * @param {Event} event - The category change event.
     */
    const handleCategoryChange = (event) => {
        selectedCategory = event.target.value;
    };

    /**
     * Event handler for sort order change event.
     * Updates the `sortOrder` variable with the selected sort order value.
     * 
     * @param {Event} event - The sort order change event.
     */
    const handleSortChange = (event) => {
        sortOrder = event.target.value;
    };

    /**
     * Reactive statement that filters and sorts the products based on the selected category and sort order.
     * The `filteredProducts` variable is updated automatically whenever `products`, `selectedCategory`, or `sortOrder` change.
     * 
     * @type {Array<Object>}
     */
    $: filteredProducts = products
        .filter(product => selectedCategory ? product.category === selectedCategory : true)
        .sort((a, b) => sortOrder === 'low-to-high' ? a.price - b.price : sortOrder === 'high-to-low' ? b.price - a.price : 0);

    /**
     * Lifecycle method that runs when the component is mounted.
     * It calls `fetchProducts` and `fetchCategories` to initialize the product list and categories.
     */
    onMount(() => {
        fetchProducts();
        fetchCategories();
    });
</script>

<div class="filters">
    <select on:change={handleCategoryChange} class="filter-select">
        <option value=''>All Categories</option>
        {#each categories as category}
            <option value={category}>{category}</option>
        {/each}
    </select>

    <select on:change={handleSortChange} class="filter-select">
        <option value=''>Default</option>
        <option value='low-to-high'>Price: Low to High</option>
        <option value='high-to-low'>Price: High to Low</option>
    </select>
</div>

<div class="product-grid">
    {#each filteredProducts as product}
        <a href={`#/product/${product.id}`} class="product-card">
            <img src={product.image} alt={product.title} class="product-image" />
            <h2 class="product-title">{product.title}</h2>
            <p class="product-price">${product.price}</p>
            <p class="product-category">Category: {product.category}</p>
            <p class="product-rating">Rating: {product.rating.rate} (Based on {product.rating.count} reviews)</p>
        <p class="product-description">{product.description}</p>
        </a>
    {/each}
</div>
  
  <style>
    .filters {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .filter-select {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #f7f7f7;
    }
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }
    .product-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      text-align: center;
      background-color: #fff;
      transition: transform 0.2s;
    }
    .product-card:hover {
      transform: scale(1.05);
    }
    .product-image {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
    .product-title {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }
    .product-price {
      color: #38a169;
      font-weight: bold;
    }
    .product-category {
      color: #718096;
    }
  </style>
  