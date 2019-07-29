export default function(context) {
  //update name of current route in store
  context.store.commit('setCurrentPage', context.route.name);

  // reset scroll measurements
  context.store.commit('setScrollComplete', false);
  context.store.commit('setScrollProgress', 0);
};