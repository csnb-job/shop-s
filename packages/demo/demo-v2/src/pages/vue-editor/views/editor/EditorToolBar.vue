<template>
    <div class="intl-pui-left-menu">
        <div class="manager-sidebar-wrap">
            <div class="manager-sidebar">
                <div class="manager-sidenav">
                    <div :class="$style.box">
                        <div class="switchEditor">
                            <span class="active pc">PC</span>
                            <span class="mobile">无线</span>
                        </div>
                        <div
                            class="manager-wrap"
                            @click="isShow=0"
                        >
                            <a
                                class="manager-sidenav-link"
                                data-spm-anchor-id="a2700.siteadmin.0.0"
                            ><i
                                class="manager-sidenav-icon icon-sidenav-items"
                                data-spm-anchor-id="a2700.siteadmin.0.i8.25033333qPCXZ6"
                            >页面背景</i></a>
                        </div>
                        <div
                            v-for="(group, index) in configTools"
                            :key="index"
                            :class="$style.group"
                        >
                            <!-- <h3 :class="$style.groupName">
                    {{ group.groupName }}({{ group.componentList.length }})
        </h3>-->
                            <div
                                class="manager-wrap"
                                @click="isShow=index"
                            >
                                <a
                                    class="manager-sidenav-link"
                                    data-spm-anchor-id="a2700.siteadmin.0.0"
                                >
                                    <i
                                        class="next-icon next-icon-shangpin next-icon-medium"
                                        data-spm-anchor-id="a2700.siteadmin.0.i3.25033333qPCXZ6"
                                    >

                                        <!-- <svg
                                                class="icon"
                                                aria-hidden="true"
                                            >
                                                <use xlink:href="group.groupIcon">
                                                </use></svg> -->
                                        <span :class="group.groupIcon"></span>
                                    </i>
                                    <i class="manager-sidenav-icon icon-sidenav-items">{{ group.groupName }}</i>

                                </a>
                                <div :class="isShow==index?'panel panel-active':'panel'">
                                    <div class="manager__map-title">
                                        {{ group.panelName }}<i
                                            class="next-icon next-icon-prompt next-icon-small"
                                        ></i>
                                    </div>
                                    <div class="manager__map-wrapper">
                                        <draggable
                                            v-model="group.componentList"
                                            :class="$style.groupList"
                                            :sort="false"
                                            :filter="`.${$style.disabled}`"
                                            :group="{ name: dragGroup, pull: 'clone', put: false }"
                                            :clone="cloneDog"
                                            style="display: flex;flex-wrap: wrap;justify-content: flex-start;"
                                            @filter="$emit('onFilter')"
                                            @start="$emit('onDragStart')"
                                            @end="$emit('onDragEnd')"
                                        >
                                            <div
                                                v-for="item in group.componentList"
                                                :key="item.title"
                                                :class="{
                                                    [$style.listItem]: true,
                                                    draggableToolItem: true,
                                                    [$style.disabled]: (currentUseComponentNum[item.componentPack.componentViewName] || 0) >= item.maxNum
                                                }"
                                            >
                                                <!-- <p :class="[$style.line, $style.lineIcon]">
                                        <i :class="item.icon"></i>
                                    </p>
                                    <p :class="[$style.line, $style.lineTitle]">{{ item.title }}</p>
                                    <p
                                        :class="[$style.line, $style.lineUseNum]"
                                    >
                                        {{ currentUseComponentNum[item.componentPack.componentViewName] || 0 }} / {{ item.maxNum }}
                                    </p> -->

                                                <div class="manager__item">
                                                    <div
                                                        class="manager__item-thumbnail"
                                                        draggable="true"
                                                        style="opacity: 1;"
                                                    >
                                                        <div class="box-overlay"></div>
                                                        <div class="manager__item-icon">
                                                            <span
                                                                :style="item.background"
                                                            ></span>
                                                        </div>
                                                        <div class="manager__item-num">{{ currentUseComponentNum[item.componentPack.componentViewName] || 0 }} / {{ item.maxNum }}</div>
                                                        <div class="manager__item-header">
                                                            <div class="manager__item-title">{{ item.title }}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </draggable>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Draggable from 'vuedraggable';

import { generateEditorItem } from './common/editorData';

export default {
    name: 'EditorToolBar',
    components: {
        Draggable,
    },
    props: {
        configTools: {
            type: Array,
            default: () => []
        },
        currentUseComponentNum: {
            default: () => ({}),
            type: Object
        },
        dragGroup: {
            default: '',
            type: String
        }
    },
    data() {
        return {
            isShow: -1
        };
    },
    watch: {
        currentUseComponentNum(newVal) {
            // console.log(newVal);
        }
    },
    methods: {
        // clone 当前模块
        cloneDog(toolItem) {
            return generateEditorItem(toolItem);
        },
    }
};
</script>
<style>
.manager__item .manager__item-icon {
    width: 30px;
    min-height: 30px;
    margin-bottom: 10px;
    align-self: center;
    margin-left: 50%;
    transform: translateX(-50%);
}
  .icon-123 {
    background-image: url("https://img.alicdn.com/tfs/TB1LWInhY2pK1RjSZFsXXaNlXXa-36-36.png");
  }
  .manager-sidebar-wrap {
    width: 118px;
    height: 100%;
    border-right: 1px solid #dcdee3;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 5%);
    /* background: #f7f8fa; */
}
.manager-sidebar {
    width: 100%;
    height: 100%;
    font-size: 12px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    /* overflow-x: hidden;
    overflow-y: auto; */
}
.manager-sidebar .manager-sidenav {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 ;
}
.switchEditor {
    width: 80%;
    background-color: #333;
    margin: 12px auto;
    padding: 1px 2px;
    border-radius: 15px;
    height: 26px;
    display: flex;
}
.iconfont{
    font-size: 22px;
}
.switchEditor>span.active {
    border-radius: 15px;
    background-color: #ef7026;
    cursor: text;
}
.switchEditor>span {
    color: #fff;
    line-height: 24px;
    margin: 1px 0;
    display: block;
    width: 49%;
    text-align: center;
    cursor: pointer;
}
.manager-wrap {
    width: 100%;
}
.manager-wrap .manager-sidenav-link {
    background-color: #fff;
    display: block;
    padding: 14px 0;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    max-height: 120px;
    position: relative;
    text-decoration: none;
}
.manager-wrap .manager-sidenav-link:before {
    top: -1px;
}

.manager-wrap .manager-sidenav-link:after, .manager-wrap .manager-sidenav-link:before {
    display: block;
    position: absolute;
    content: " ";
    width: 200%;
    height: 1px;
    right: 0;
}
.manager-wrap .manager-sidenav-link:after {
    bottom: 0;
    background-color: #dcdee3;
}
.manager-wrap .manager-sidenav-link:after, .manager-wrap .manager-sidenav-link:before {
    display: block;
    position: absolute;
    content: " ";
    width: 200%;
    height: 1px;
    right: 0;
}
.manager-wrap .manager-sidenav-link i {
    font-style: normal;
}
.manager-wrap .panel {
    top: 0;
}
.panel {
    position: absolute;
    box-sizing: border-box;
    width: 315px;
    min-height: 100px;
    height: 800px;
    overflow: auto;
    border-left: 1px solid #ef7026;
    padding: 0 32px;
    border-radius: 0 4px 4px 0;
    color: #8d8d8d;
    left: 117px;
    transform: translate(-500px);
    transition: all .3s;
    opacity: 0;
    z-index: 9100;
    box-shadow: 1px 0 5px 0 rgb(0 0 0 / 22%);
    display: flex;
    flex-direction: column;
    background: #fff;
}
.next-tabs {
    position: relative;
    overflow: hidden;
}
.next-tabs-nav-container:after, .next-tabs:after {
    display: block;
    height: 0;
    font-size: 0;
    content: " ";
    visibility: hidden;
    clear: both;
}
.next-tabs-strip>.next-tabs-bar {
    border-bottom: 1px solid #dcdee3;
}

.next-tabs-bar {
    outline: 0;
    position: relative;
    z-index: 1;
}
.next-tabs-strip>.next-tabs-bar .next-tabs-nav-container {
    margin-bottom: -1px;
}
.next-tabs-medium .next-tabs-nav-container {
    font-size: 14px;
}

.next-tabs-nav-container {
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    line-height: 1.5;
}
.next-tabs-nav-wrap {
    overflow: hidden;
}
.next-tabs-medium .next-tabs-nav-container {
    font-size: 14px;
}
.next-tabs-nav-container {
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    line-height: 1.5;
}
.next-tabs-nav-scroll {
    overflow: hidden;
    white-space: nowrap;
}
.next-tabs-nav {
    white-space: nowrap;
}

.next-tabs-nav, .next-tabs-tab {
    display: inline-block;
    position: relative;
    transition: all .4s cubic-bezier(.23,1,.32,1);
}
.next-tabs-strip>.next-tabs-bar .next-tabs-nav-container .next-tabs-tab.active {
    color: #ff6a00;
    background-color: transparent;
}
.next-tabs-tab.active {
    z-index: 1;
}

.next-tabs-nav-appear, .next-tabs-nav-enter {
    animation: fadeInLeft .4s cubic-bezier(.78,.14,.15,.86);
    animation-fill-mode: both;
}
.next-tabs-nav, .next-tabs-tab {
    display: inline-block;
    position: relative;
    transition: all .4s cubic-bezier(.23,1,.32,1);
}
.next-tabs-strip>.next-tabs-bar .next-tabs-nav-container .next-tabs-tab.active:before {
    width: calc(100% + 0px - 0px);
    left: 0;
}

.next-tabs-strip>.next-tabs-bar .next-tabs-nav-container .next-tabs-tab:before {
    background: #ff6a00;
    width: 0;
    height: 1px;
    left: 50%;
    bottom: 0;
}
.next-tabs-tab:before {
    content: "";
    position: absolute;
    transition: all .4s cubic-bezier(.23,1,.32,1);
}
.next-tabs-medium .next-tabs-tab-inner {
    height: 44px;
    line-height: 44px;
    padding: 0 16px;
}

.next-tabs-tab-inner {
    position: relative;
    cursor: pointer;
    text-decoration: none;
}
.next-tabs-strip>.next-tabs-bar .next-tabs-nav-container .next-tabs-tab {
    color: #666;
    background-color: transparent;
}

.next-tabs-nav-appear, .next-tabs-nav-enter {
    animation: fadeInLeft .4s cubic-bezier(.78,.14,.15,.86);
    animation-fill-mode: both;
}
.next-tabs-nav, .next-tabs-tab {
    display: inline-block;
    position: relative;
    transition: all .4s cubic-bezier(.23,1,.32,1);
}
.next-tabs-strip>.next-tabs-bar .next-tabs-nav-container .next-tabs-tab:before {
    background: #ff6a00;
    width: 0;
    height: 1px;
    left: 50%;
    bottom: 0;
}

.next-tabs-tab:before {
    content: "";
    position: absolute;
    transition: all .4s cubic-bezier(.23,1,.32,1);
}
.next-tabs-medium .next-tabs-tab-inner {
    height: 44px;
    line-height: 44px;
    padding: 0 16px;
}
.next-tabs-tab-inner {
    position: relative;
    cursor: pointer;
    text-decoration: none;
}
.panel .next-tabs-content {
    padding-left: 0!important;
    padding-right: 0!important;
    height: 100%;
    overflow: visible;
}

.next-tabs-strip>.next-tabs-content {
    color: #333;
    background: 0 0;
}
.next-tabs-medium .next-tabs-content {
    padding: 16px;
}
.next-tabs-content {
    position: relative;
    overflow: hidden;
    min-height: 20px;
}
.next-tabs-tabpane.active {
    display: block;
}
.panel .page-color-wrapper {
    overflow: visible;
}
.gray-tips {
    color: #999;
    margin-top: 20px;
}
h6, p {
    line-height: 20px;
}

h5, h6, p {
    margin-bottom: 7px;
    font-size: 14px;
}
h3, h4, h5, p {
    font-weight: 400;
}
.set-toolbat-contact {
    margin-top: 26px;
}
.set-toolbat-contact .stc-title {
    margin-bottom: 10px;
}
.next-btn-medium {
    margin: 0;
    height: 28px;
    padding: 0 16px;
    font-size: 14px;
    line-height: 26px;
    border-width: 1px;
}

.next-btn-normal, .next-btn-normal.visited, .next-btn-normal:link, .next-btn-normal:visited {
    color: #333;
}
.next-btn-normal {
    background-color: #fff;
    border-color: #c4c6cf;
}
.next-btn, .next-btn:active, .next-btn:focus {
    outline: 0;
}
.next-btn {
    font-size: 14px;
    line-height: 1.28571;
    color: inherit;
    margin: 0;
    overflow: visible;
    text-decoration: none;
    position: relative;
    display: inline-block;
    font-style: normal;
    font-family: inherit;
    background: 0 0;
    cursor: pointer;
    transition: all .3s ease-out;
    text-align: center;
}
.next-btn, .next-btn-group .next-btn:not(:first-child):not(:last-child) {
    border-radius: 0;
}
.next-btn, .next-btn-ghost, .next-btn-normal, .next-btn-primary, .next-btn-warning {
    border-style: solid;
}
.next-balloon-tooltip, .next-btn, .next-btn-ghost, .next-btn-text {
    box-shadow: none;
}
.next-btn:after {
    text-align: center;
    position: absolute;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s ease;
}
.set-toolbat-contact .more-link {
    color: #33a3b3;
}
.manager-wrap .manager-sidenav-link.active {
    z-index: 10;
    width: 118px;
    position: relative;
    margin-right: -2px;
    border-left: 5px solid #ef7026;
    background-color: #fff;
    color: #ef7026;
    padding: 14px 12px 14px 5px;
}
.manager-wrap .manager-sidenav-link.active, .manager-wrap .manager-sidenav-link:hover {
    border-color: #ef7026;
    background-color: #fff;
    color: #ef7026;
}
.panel-active {
    opacity: 1;
    transform: translate(0);
}
.manager-wrap .manager-sidenav-link>.next-icon {
    display: block;
    margin-bottom: 25px;
    margin-top: 10px;
}
.manager-wrap .manager-sidenav-link i {
    font-style: normal;
}
.next-icon {
    position: relative;
    display: inline-block;
    font-family: NextIcon;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    -webkit-font-smoothing: antialiased
}
.panel .manager__map-title {
    font-size: 18px;
    color: #333;
    margin: 16px 0;
}
.panel .manager__map-wrapper {
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.manager__item:nth-child(2n -1) {
    margin-right: 10px;
}

.manager__item {
    width: 111px;
    height: 120px;
    overflow: hidden;
    background: #f7f8fa;
    position: relative;
    margin-bottom: 25px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
}
.manager__item .manager__item-thumbnail {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px 8px;
    box-sizing: border-box;
}
.manager__item .manager__item-icon>span {
    display: block;
    width: 30px;
    height: 30px;
    background: transparent 50% no-repeat;
    background-size: contain;
    transform: scale(.7);
}
.box-overlay {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    cursor: move;
    border: 1px solid #ef7026;
    width: 100%;
    height: 100%;
    background-color: rgba(239,112,38,.1);
}
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
 }
.manager-wrap:hover{
    color: #ef7026;
}
.tanchu{
    position: absolute;
    top: 0px;
    left: 300px;
    box-sizing: border-box;
    width: 315px;
    min-height: 100px;
    height: 100%;
    /* overflow: auto; */
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    background: #333;
    z-index: 1000000;
}
.top-go{
    font-size: 18px;
    color: #333;
    margin: 16px 0
}
.bottom-go{
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.bottom-item:nth-child(2n -1) {
    margin-right: 10px;
}
.bottom-item{
    width: 120px;
    height: 120px;
    overflow: hidden;
    background: #f7f8fa;
    position: relative;
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 16px;
}
.bottom-item1{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px 8px;
    box-sizing: border-box;
}
.bottom-item2{
width: 30px;
    min-height: 30px;
    margin-bottom: 10px;
    align-self: center;
    margin-left: 50%;
    transform: translateX(-50%);
}
.bottom-item3{
    margin-bottom: 4px;
    text-align: center;
}
.bottom-item4{
position: relative;
    color: #666;
    text-align: center;
}
.liangguang{
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    cursor: move;
    border: 1px solid #ef7026;
    width: 100%;
    height: 100%;
    background-color: rgba(239,112,38,.1);
}
</style>
<style module>
/* @import "demo-common/css/variable.css"; */
.box {
  /* padding: 20px; */
  width: 100%;
  position: relative;
}
/* .group {
  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
} */
/* .groupName {
  font-size: 12px;
  line-height: 18px;
}
.groupList {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  justify-content: space-between;
} */
/* .listItem {
  position: relative;
  width: 50%;
  max-width: 120px;
  height: 80px;
  cursor: move;
  flex-shrink: 0;
  transition: box-shadow 0.3s ease;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--background-color-selected);
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
  }
} */
/* .line {
  font-size: 12px;
  line-height: 18px;
}
.lineIcon {
  color: var(--color-text-third);
  font-size: 14px;
}
.disabled {
  cursor: no-drop;
  opacity: 0.8;
} */
</style>
