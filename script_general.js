(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"left":255.75,"start":"this.init()","data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"pitch":1,"speechOnTooltip":false},"name":"Player765","defaultLocale":"it","displayTooltipInTouchScreens":true,"history":{},"locales":{"it":"locale/it.txt"}},"top":152,"scrollBarColor":"#000000","height":"100%","width":"100%","gap":10,"propagateClick":false,"defaultMenu":["fullscreen","mute","rotation"],"scrollBarMargin":2,"minHeight":0,"minWidth":0,"backgroundColorRatios":[0],"hash": "db18c4221d4fca48cba6845b6ae3442a1d82a614afdb1be014c812ef657785b2", "definitions": [{"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"data":{"name":"Main Viewer"},"toolTipPaddingRight":6,"playbackBarHeadBorderSize":0,"progressBackgroundColor":["#000000"],"surfaceReticleColor":"#FFFFFF","toolTipPaddingTop":4,"progressBottom":10,"progressBorderSize":0,"playbackBarHeadShadow":true,"progressHeight":2,"progressBarBorderRadius":2,"subtitlesGap":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderSize":0,"toolTipFontSize":"1.11vmin","vrPointerSelectionColor":"#FF6600","width":"100%","playbackBarBottom":5,"height":"100%","vrThumbstickRotationStep":20,"vrPointerSelectionTime":2000,"toolTipTextShadowColor":"#000000","toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"progressBorderRadius":2,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"playbackBarHeadWidth":6,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipPaddingBottom":4,"subtitlesBackgroundColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","id":"MainViewer","progressLeft":"33%","class":"ViewerArea","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowHorizontalLength":1,"toolTipFontColor":"#606060","subtitlesFontColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","toolTipShadowColor":"#333138","playbackBarBorderRadius":0,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTop":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"toolTipPaddingLeft":6,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","progressBackgroundColorRatios":[0],"propagateClick":false,"progressRight":"33%","firstTransitionDuration":0,"progressOpacity":0.7,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesBottom":50,"minHeight":50,"minWidth":100,"subtitlesBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowVerticalLength":1,"subtitlesFontFamily":"Arial","playbackBarBackgroundOpacity":1,"progressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColor":["#3399FF"],"playbackBarLeft":0},{"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"viewerArea":"this.MainViewer","keepModel3DLoadedWithoutLocation":true,"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","displayPlaybackBar":true,"touchControlMode":"drag_rotation"},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"idleSequence":"this.sequence_A5022E01_8DD8_194C_41DD_A15175C28A58","timeToIdle":1000,"enterPointingToHorizon":true,"initialSequence":"this.sequence_A5022E01_8DD8_194C_41DD_A15175C28A58","id":"panorama_A27C66D4_8DD8_F6F4_41A0_1FA93BF4FC0C_camera","class":"PanoramaCamera"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A27C66D4_8DD8_F6F4_41A0_1FA93BF4FC0C","camera":"this.panorama_A27C66D4_8DD8_F6F4_41A0_1FA93BF4FC0C_camera","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"thumbnailUrl":"media/panorama_A27C66D4_8DD8_F6F4_41A0_1FA93BF4FC0C_t.webp","class":"Panorama","label":trans('panorama_A27C66D4_8DD8_F6F4_41A0_1FA93BF4FC0C.label'),"hfov":360,"hfovMax":130,"data":{"label":"sfondo_diurno"},"vfov":177.89,"hfovMin":"150%","id":"panorama_A27C66D4_8DD8_F6F4_41A0_1FA93BF4FC0C","frames":[{"thumbnailUrl":"media/panorama_A27C66D4_8DD8_F6F4_41A0_1FA93BF4FC0C_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"colCount":6,"url":"media/panorama_A27C66D4_8DD8_F6F4_41A0_1FA93BF4FC0C_0/{face}/0/{row}_{column}.webp","height":512,"rowCount":1,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072}]}}]},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in"},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out"}],"mandatory":true,"id":"sequence_A5022E01_8DD8_194C_41DD_A15175C28A58","class":"PanoramaCameraSequence"}],"backgroundColor":["#0099FF"],"children":["this.MainViewer"],"layout":"absolute","id":"rootPlayer","watermark":false,"class":"Player","scripts":{"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setValue":TDV.Tour.Script.setValue,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"startMeasurement":TDV.Tour.Script.startMeasurement,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getOverlays":TDV.Tour.Script.getOverlays,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"translate":TDV.Tour.Script.translate,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"clone":TDV.Tour.Script.clone,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeech":TDV.Tour.Script.textToSpeech,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"init":TDV.Tour.Script.init,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getKey":TDV.Tour.Script.getKey,"unloadViewer":TDV.Tour.Script.unloadViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setLocale":TDV.Tour.Script.setLocale,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"mixObject":TDV.Tour.Script.mixObject,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"disableVR":TDV.Tour.Script.disableVR,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"initAnalytics":TDV.Tour.Script.initAnalytics,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"enableVR":TDV.Tour.Script.enableVR,"quizShowScore":TDV.Tour.Script.quizShowScore,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"toggleVR":TDV.Tour.Script.toggleVR,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"registerKey":TDV.Tour.Script.registerKey,"existsKey":TDV.Tour.Script.existsKey,"createTween":TDV.Tour.Script.createTween,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizStart":TDV.Tour.Script.quizStart,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"downloadFile":TDV.Tour.Script.downloadFile,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeJS":TDV.Tour.Script.executeJS,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playAudioList":TDV.Tour.Script.playAudioList,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"openLink":TDV.Tour.Script.openLink,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showWindow":TDV.Tour.Script.showWindow,"getPixels":TDV.Tour.Script.getPixels,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showWindowBase":TDV.Tour.Script.showWindowBase,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizFinish":TDV.Tour.Script.quizFinish}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.0-beta.13563, Sat Jun 20 2026