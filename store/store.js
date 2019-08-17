
export const store = {

  state: {
    siteLoaded: false,
    isHardReload: true,
    currentPage: null,
    transitioning: true,
    didScroll: false,
    isResizing: false,
    thisScroll: 0,
    lastScroll: 0,
    scrollProgress: 0,
    scrollComplete: false,
    showingModal: false,
    hoveringAnchor: false,

    screenHeight: null,
    screenWidth: null,
    docHeight: null,

    mousePos: {
      x: 0, y: 0
    },
    bgPanels: {
      count: 6
    }
  },

  getters: {
    siteLoaded: state => state.siteLoaded,
    hardReload: state => state.isHardReload,
    currentPage: state => state.currentPage,
    transitioning: state => state.transitioning,
    didScroll: state => state.didScroll,
    thisScroll: state => state.thisScroll,
    lastScroll: state => state.lastScroll,
    scrollProgress: state => state.scrollProgress,
    scrollComplete: state => state.scrollComplete,
    showingModal: state => state.showingModal,
    hoveringAnchor: state => state.hoveringAnchor,
    screenHeight: state => state.screenHeight,
    screenWidth: state => state.screenWidth,
    docHeight: state => state.docHeight,
    mousePos: state => state.mousePos
  },

  mutations: {
    setSiteLoaded(state) { state.siteLoaded = true; },
    setHardReload(state) { state.isHardReload = true; },
    setCurrentPage(state, pagename) { state.currentPage = pagename; },
    setTransitioning(state, value) { state.transitioning = value; },
    setDidScroll(state, value) { state.didScroll = value; },
    setDidResize(state, value) { state.didResize = value; },
    setThisScroll(state, value) { state.thisScroll = value; },
    setScrollProgress(state, value) { state.scrollProgress = value; },
    setScrollComplete(state, value) { state.scrollComplete = value; },
    setShowingModal(state, value) { state.showingModal = value; },
    setHoveringAnchor(state, value) { state.hoveringAnchor = value; },
    setLastScroll(state, value) { state.lastScroll = value; },
    setScreenHeight(state, value) { state.screenHeight = value; },
    setScreenWidth(state, value) { state.screenWidth = value; },
    setDocHeight(state, value) { state.docHeight = value; },
    setMousePos(state, value) { state.mousePos = value; }
  },

  //async only
  actions: {}
};