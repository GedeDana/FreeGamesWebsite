const DrawerInitiator = {
  init({ content }) {
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
