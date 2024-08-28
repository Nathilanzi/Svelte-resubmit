<!-- App.svelte -->
<script>
  import Router from 'svelte-spa-router';
  import Header from './Components/Header.svelte';
  import ProductList from './Components/ProductList.svelte';
  import ProductDetails from './Components/ProductDetails.svelte';

  /**
   * Object defining the application's routes.
   * Maps URL paths to Svelte components.
   * 
   * @type {Object.<string, any>}
   * @property {string} '/' - Path for the homepage displaying the list of products, mapped to `ProductList` component.
   * @property {string} '/product/:id' - Dynamic path for displaying product details, mapped to `ProductDetails` component.
   */
  const routes = {
      '/': ProductList, // Homepage showing the list of products
      '/product/:id': ProductDetails, // Dynamic route for product details
  };
</script>
