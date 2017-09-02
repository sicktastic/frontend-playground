'use strict';

const originalFlavors = ['Chocolate', 'Vanilla'];

const newFlavors = ['Strawberry', 'Mint Chocolate Chip'];

const inventory = ['Rock Road', ...originalFlavors, 'Neopolitan', ...newFlavors];

console.log(inventory);
