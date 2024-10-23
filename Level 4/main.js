import { Order, OrderManager } from './orders.js';

const orderManager = new OrderManager();

const order1 = new Order('Alice', [{ name: 'Nasi Goreng', price: 20000 }, { name: 'Teh Manis', price: 5000 }], 'Menunggu');
const order2 = new Order('Bob', [{ name: 'Mie Goreng', price: 15000 }, { name: 'Kopi', price: 10000 }], 'Menunggu');
orderManager.addOrder(order1);
orderManager.addOrder(order2);

console.log('Initial Orders:');
console.log(JSON.stringify(orderManager.listOrders(), null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   }
 * ]
 */

orderManager.updateOrderStatus(order1.id, 'Diproses');
orderManager.updateOrderStatus(order2.id, 'Selesai');

console.log('Orders after status update:');
console.log(JSON.stringify(orderManager.listOrders(), null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Diproses'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */

console.log('Total Revenue:');
console.log(orderManager.calculateTotalRevenue());

/**
 * Output yang diharapkan:
 * 50000
 */

orderManager.removeOrder(order1.id);

console.log('Orders after removal:');
console.log(JSON.stringify(orderManager.listOrders(), null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */