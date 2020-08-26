import "../css/website.scss";

import "core-js/stable";
import "regenerator-runtime/runtime";

import * as testComp from './components/test_component';

import { initDefineBtn } from "./components/init_define_btn";
import { initSoundIcons } from "./components/init_sound_icons";
import { initFadeEffect } from "./components/init_fade_effect";

testComp.testFunction();
initDefineBtn();
initSoundIcons();
initFadeEffect();
