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
    <div class="product-detail">
        <img src={product.image} alt={product.title} class="product-image" />
        <h1 class="product-title">{product.title}</h1>
        <p class="product-price">${product.price}</p>
        <p class="product-category">Category: {product.category}</p>
        <p class="product-rating">Rating: {product.rating.rate} (Based on {product.rating.count} reviews)</p>
        <p class="product-description">{product.description}</p>
        <a href="#/" class="back-button">Back to Products</a>
    </div>
{:else}
    <!--
        Display a loading message while the product data is being fetched.
    -->
    <p>Loading...</p>
{/if}

<style>
    .product-detail {
        max-width: 600px;
        margin: 2rem auto;
        padding: 1rem;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        text-align: center;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .product-image {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
        margin-bottom: 1rem;
    }
    .product-title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    .product-price {
        font-size: 1.25rem;
        color: #38a169;
        font-weight: bold;
    }
    .product-category {
        color: #718096;
        margin-bottom: 1rem;
    }
    .product-rating {
        color: #ecc94b;
        margin-bottom: 1rem;
    }
    .product-description {
        color: #4a5568;
        margin-bottom: 1.5rem;
    }
    .back-button {
        color: #3182ce;
        text-decoration: none;
    }
</style>
