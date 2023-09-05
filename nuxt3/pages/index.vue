<template>
  <div class="flex-grow container mx-auto p-2 py-4">
    <div class="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(po, poIndex) in store.productOrders">
        <div class="">
          <hr class="pt-2">
          <div class="flex flex-row">
            <div class="w-full">
              <div class="font-bold">{{`${(poIndex+1)}. ${po.name}`}}</div>
              <div class="">{{ po.description }}</div>
              <div class="flex place-content-between">
                <div class="">{{ po.price.toFixed(2) }} SEK</div>
                <div class="flex flex-row">
                  <button v-if="po.quantity > 0" class="btn btn-secondary btn-circle btn-xs font-bold" @click="store.decrementProductOrder(po)"><i class="bi-dash-lg"></i></button>
                  <label v-if="po.quantity > 0" class="px-2">{{ po.quantity }}</label>
                  <button class="btn btn-secondary btn-circle btn-xs font-bold" @click="store.incrementProductOrder(po)"><i class="bi-plus-lg"></i></button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-4 pt-4">
      <div class="bi-cart-check-fill"></div>
      <div class="font-bold">{{ store.totalOrderQuantity }} st</div>
      <div class="font-bold">{{ store.totalOrderCost.toFixed(2) }} SEK</div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/CartStore'
const store = useCartStore()
store.selectedProductsOrders()
</script>
