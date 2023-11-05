import { ref, computed } from "vue";
import { useToast } from "primevue/usetoast";


// global state

const productsCart = ref([]);
const showCart = ref(false);
const totalCartPrice = computed(() => {
    return productsCart.value.reduce(
        (acc, item) =>
            acc + (item.price) * item.quantity,
        0
    ).toFixed(2) || 0;
})

export const useCart = () => {
    const toast = useToast();
    const addProductToCart = (newProduct) => {
        const exist = productsCart.value.find(({ id: idOriginal }) => idOriginal == newProduct.id)
        if (exist) {
            exist.quantity++;
            toast.add({
                severity: "success",
                summary: "Producto actualizado en el carrito",
                detail: `Se agrego 1 unidad de ${newProduct.title}`,
                life: 3000,

            });
        }
        else {
            productsCart.value = [...productsCart.value, { ...newProduct, quantity: 1 }];
            toast.add({
                severity: "success",
                summary: "Producto agregado al carrito",
                detail: `${newProduct.title} agregado al carrito`,
                life: 3000,

            });
        }
    }
    const deleteProductFromCart = (id) => {
        const exist = productsCart.value.find(({ id: idOriginal }) => idOriginal == id)

        if (exist) {
            productsCart.value = productsCart.value.filter(({ id: idOriginal }) => idOriginal != id)
            toast.add({
                severity: "error",
                summary: "Producto eliminado en el carrito",
                detail: `Se elimino ${exist.title} del carrito`,
                life: 3000,
            });
        }
    }
    return {
        productsCart,
        showCart,
        totalCartPrice,
        addProductToCart,
        deleteProductFromCart
    };
};
