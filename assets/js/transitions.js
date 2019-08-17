

const getPanelElements = parent => {
  const header = document.getElementById('mag-header');
  return {
    lines: parent.querySelectorAll('.mag-backdrop--lines span'),
    panels: parent.querySelectorAll('.mbd-panel'),
    panelImgs: parent.querySelectorAll('.mbd-panel--img span'),
    columns: parent.querySelectorAll('.mag-fshero .mag-gridcol'),
    meter: parent.querySelector('.mag-scrollmeter'),
    hdash: parent.querySelectorAll('.mag-heading--sm-dash'),
    header
  };
};

const isNodeList = list => 
  NodeList.prototype.isPrototypeOf(list);

const changeElementVisibility = (set, o) => {
  set.forEach(node => {
    if (isNodeList(node)) {
      for (let i=0; i < node.length; i++) {
        node[i].style.opacity = o; } 
    } else {
      node.style.opacity = o; }
  });
};


//
// Panel Enter/Leave Transition
//

export const panelEnterLeaveTransition = () => {
  let els = null;
  const offsetBase = {
    enter: 0,
    leave: 0
  };

  return {
    beforeEnter(el) {
      els = getPanelElements(el);
      changeElementVisibility([els.lines, els.panels, els.meter, els.columns, els.hdash, els.header], 0);
    },

    enter(el, done) {
      changeElementVisibility([els.lines, els.hdash], 1);

      anime.timeline({ complete: () => {

        done();
      } })
      .add({
        targets: els.lines,
        translateY: ['-100%', 0],
        duration: 1200,
        offset: offsetBase.enter,
        easing: 'easeOutCirc',
        delay: (el, i) => 150 * i
      }).add({
        targets: els.panels,
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutSine',
        offset: offsetBase.enter + 200,
        delay: (el, i) => 90 * i
      }).add({
        targets: els.panelImgs,
        scale: [1.4, 1],
        duration: 1000,
        offset: offsetBase.enter + 200,
        easing: 'easeOutCirc',
        delay: (el, i) => 90 * i
      }).add({
        targets: els.meter,
        opacity: [0,1],
        duration: 1100,
        offset: offsetBase.enter + 1000,
        easing: 'easeOutSine'
      }).add({
        targets: els.columns,
        opacity: [0, 1],
        translateX: [25, 0],
        duration: 1200,
        offset: offsetBase.enter + 250,
        easing: 'easeOutCirc',
        delay: (el, i) => 150 * i
      }).add({
        targets: els.hdash,
        scaleX: [0, 1],
        duration: 900,
        offset: offsetBase.enter + 400,
        easing: 'easeOutCirc',
      }).add({
        targets: els.header,
        opacity: [0, 1],
        translateX: [10, 0],
        duration: 1000,
        offset: offsetBase.enter + 400,
        easing: 'easeOutCirc',
      });
    },

    leave(el, done) {
      const offsetBase = -800;
      
      els = getPanelElements(el);

      anime.timeline({ complete: () => done() })
      .add({
        targets: els.lines,
        opacity: [1, 0],
        translateY: [0, '100%'],
        duration: 700,
        easing: 'easeOutSine',
        delay: (el, i) => 150 * i
      }).add({
        targets: els.panels,
        opacity: [1, 0],
        duration: 700,
        easing: 'linear',
        offset: 0,
        delay: (el, i) => 90 * i
      }).add({
        targets: els.panelImgs,
        scale: [1, 1.05],
        duration: 700,
        offset: 0,
        easing: 'easeOutSine',
        delay: (el, i) => 90 * i
      }).add({
        targets: els.meter,
        opacity: [1,0],
        duration: 700,
        offset: 0,
        easing: 'easeOutSine'
      }).add({
        targets: els.columns,
        opacity: [1, 0],
        translateX: [0, -20],
        duration: 500,
        easing: 'easeOutSine',
        offset: 0,
        delay: (el, i) => 70 * i
      }).add({
        targets: els.header,
        opacity: [1, 0],
        translateX: [0, -10],
        duration: 900,
        offset: 0,
        easing: 'easeOutSine',
      });
    }
  };
};