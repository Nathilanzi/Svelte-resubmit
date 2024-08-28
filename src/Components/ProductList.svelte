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
