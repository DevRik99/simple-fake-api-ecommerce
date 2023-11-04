import { onMounted, ref, watch } from "vue";
import axios from "axios";

// global state

const products = ref([]);
const originalProducts = ref([])
const loading = ref(true);
const categorys = ref([]);
const category = ref();
const query = ref("");

export const useProduct = () => {
    const loadProducts = async () => {
        try {
            loading.value = true;
            const { data } = await axios.get("https://fakestoreapi.com/products");
            originalProducts.value = data
            filterProducts()
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    };
    const loadCategorys = async () => {
        try {
            loading.value = true;
            const { data } = await axios.get(
                "https://fakestoreapi.com/products/categories"
            );
            categorys.value = data;
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    };
    const loadProductsCategory = async () => {
        try {
            loading.value = true;
            const { data } = await axios.get(
                "https://fakestoreapi.com/products/category/" + category.value
            );
            originalProducts.value = data
            filterProducts()
        } catch (error) {
            console.log(error);
        } finally {
            loading.value = false;
        }
    }
    const filterProducts = () => {
        query.value ?
            products.value = originalProducts.value.filter(({ title }) => title.toLowerCase().includes(query.value.toLowerCase())) :
            products.value = originalProducts.value
    }

    onMounted(async () => {
        await loadProducts();
        await loadCategorys();
    });
    watch(query, () => {
        filterProducts()
    })
    watch(category, async () => {
        category.value ? await loadProductsCategory() : await loadProducts()
    })
    return {
        products,
        loading,
        categorys,
        category,
        query,
        loadProducts,
        loadCategorys,
        loadProductsCategory
    };
};
