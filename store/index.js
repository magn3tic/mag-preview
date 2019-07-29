import Vuex from 'vuex';
import {store} from './store.js';

//doing it this way cause I hate having a bunch of
//files named index.js opened at onece
export default () => new Vuex.Store(store);