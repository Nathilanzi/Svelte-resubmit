<script>
    import { onMount } from 'svelte';
    import Link from 'svelte-spa-router';

    /**
     * Parameters passed to the component, including the product ID.
     * @type {Object}
     * @property {string} params.id - The ID of the product to be fetched.
     */
    export let params = {};

    /**
     * Holds the details of the fetched product.
     * @type {Object|null}
     */
    let product = null;

    /**
     * Fetches the product data from the API using the provided product ID.
     * If successful, updates the `product` variable with the fetched data.
     * Logs errors to the console if the fetch operation fails.
     * 
     * @async
     * @function fetchProduct
     * @returns {Promise<void>} A promise that resolves when the product is fetched.
     */
    const fetchProduct = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
            if (res.ok) {
                product = await res.json();
            } else {
                console.error('Failed to fetch product');
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    // Fetch product data when the component is mounted
    onMount(fetchProduct);
</script>

{#if product}
    <!--
        Display product details if the product data is available.
        Includes product image, title, price, category, rating, and description.
    -->
