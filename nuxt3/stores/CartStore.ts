import { defineStore } from "pinia";

export interface State {
    selectedStore: string
    stores: Array<Store>
    products: Array<Product>
    productOrders: Array<Order>
    orders: Array<Order>
    receipts: Array<Order>
}

export class Store {
    id: string = ''
    name: string = ''
    description: string = ''
    tel: string = ''
    adress: string = ''
    lon: number = 0
    lan: number = 0
}

export class Product {
    id: string = ''
    storeId: string = ''
    name: string = ''
    description: string = ''
    price: number = 0
    priceUnit: string = ''
}

export class Order extends Product {
    quantity: number = 0
    constructor(obj:OrderArgs) {
        super()
        Object.assign(this, obj)
    }
    static FromProduct(p: Product) { return new Order(p) }
}

export interface OrderArgs {
    id: string
    storeId: string
    name: string
    description: string
    price: number
    priceUnit: string
    quantity?: number
}

export const useCartStore = defineStore('cartStore', {
    state: ():State => ({
        selectedStore: '',
        stores: [
            { id: 'b8bc4e6e-4929-46e2-9675-c5d9fed31f46', name: 'Norsborg Pizza', description: 'Varje dag är Pizza dag', tel: '08-531 77774', adress: 'Mimers väg 7', lon: 59.244700, lan: 17.812977 },
            { id: '8b8bfae8-f4b7-4a68-ad71-695f69e99490', name: 'Amo´s kebab', description: 'Amo´s kebab är bästa', tel: '08-531 72734', adress: 'Mimers väg 2', lon: 59.244717, lan: 17.814314 },
        ],
        products: [
            { id: 'e4154664-05eb-48e8-805b-20d282c0902f', storeId: 'b8bc4e6e-4929-46e2-9675-c5d9fed31f46', name: 'Calzone', description: 'En calzone är en italiensk ugnsbakad omsättning', price: 109, priceUnit: 'SEK' },
            { id: '7130f890-300a-4aa7-a086-73f4bd9e91ef', storeId: 'b8bc4e6e-4929-46e2-9675-c5d9fed31f46', name: 'Hawaii', description: 'Hawaiiansk pizza är en pizza med ursprung i Kanada', price: 99, priceUnit: 'SEK' },

            { id: '8f2857d2-d72e-44ca-9775-f13cf0b31773', storeId: '8b8bfae8-f4b7-4a68-ad71-695f69e99490', name: 'Kebab med bröd', description: 'Kebab med bröd, tomat, vitlöksås och sallad', price: 49, priceUnit: 'SEK' },
            { id: '59b02b32-1459-430a-8dde-1e8c7b86ecc6', storeId: '8b8bfae8-f4b7-4a68-ad71-695f69e99490', name: 'Kebabtallrik', description: 'Kebabtallrik, tomat, vitlöksås, sallad och pommes frites', price: 79, priceUnit: 'SEK' },
        ],
        productOrders: [],
        orders: [],
        receipts: []
    }),
    getters: {
        totalOrderQuantity(state){
            return state.productOrders.reduce((p, o) => {
                return p + o.quantity
            }, 0)
        },
        totalOrderCost(state){
            return state.productOrders.reduce((p, o) => {
                return p + o.quantity * o.price
            }, 0)
        }
    },
    actions: {
        selectedProductsOrders() {
            const products = this.products.filter((p:Product)=>{ return !this.selectedStore ? p : p.storeId == this.selectedStore })
            const productOrders = products.map((p:Product)=> { return Order.FromProduct(p) })
            this.productOrders = JSON.parse(JSON.stringify(productOrders))
        },
        decrementProductOrder(o: Order) {
            let productOrder = this.productOrders.find(po=>po.id == o.id)
            if(productOrder) {
                productOrder.quantity = Math.max(0, productOrder.quantity-1)
            }
        },
        incrementProductOrder(o: Order) {
            let productOrder = this.productOrders.find(po=>po.id == o.id)
            if(productOrder) {
                productOrder.quantity++
            }
        },
     }
})