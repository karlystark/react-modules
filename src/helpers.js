//two functions

// choice(items) => returns a randomly selected item from array of items

// remove(items, item) => removes the first matching item from items, if item exists
// returns it, otherwise returns undefined

function choice(items) {
  const idx = Math.floor(Math.random() * items.length);

  return items[idx];

}

function remove(items, item) {
  if (items.includes(item)) {
    const idx = items.indexOf(item);
    items.splice(idx, 1);
    return item;
  }
  return undefined;
}

export { choice, remove };