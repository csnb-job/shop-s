<template>
    <div class="intl-pui-header ">
        <div class="header-main-content">
            <div
                class="next-nav next-nav-primary hoz active bottom menu-wrap"
                data-spm-anchor-id="a2700.siteadmin.0.i5.73be3333bidmP0"
            >
                <div
                    tabindex="0"
                    class="next-menu hoz next-nav-menu"
                >
                    <div class="next-menu-header">
                        <a href="/decorate.htm">
                            <img src="https://img.alicdn.com/tfs/TB13S0QaMMPMeJjy1XdXXasrXXa-222-80.png">
                        </a>
                    </div>
                    <ul class="next-menu-content">
                        <li
                            tabindex="-1"
                            role="menuitem"
                            class="next-menu-item next-nav-item"
                        >
                            <a
                                class="menu-item"
                                href="/admin.htm"
                            >我的页面</a>
                        </li>
                        <li
                            tabindex="-1"
                            role="menuitem"
                            class="next-menu-item selected next-nav-item"
                        >
                            <a
                                class="menu-item"
                                href="/decorate.htm"
                            >编辑器</a>
                        </li>
                        <li
                            tabindex="-1"
                            role="menuitem"
                            class="next-menu-item next-nav-item"
                        >
                            <a
                                class="menu-item"
                                href="/template.htm"
                            >模板管理</a>
                        </li>
                        <li
                            tabindex="-1"
                            role="menuitem"
                            class="next-menu-item next-nav-item"
                        >
                            <a
                                class="menu-item"
                                href="//zhuangxiu.alibaba.com/list.html?viewMarket=icbuzxPc&amp;market=icbuzx"
                                target="_blank"
                            >装修市场<sup class="hot-sign">Hot</sup></a>
                        </li>
                    </ul>
                    <div class="next-menu-footer">
                        <ul class="header-footer">
                            <li><a href="javascript:;">智能装修</a></li>
                            <li><a href="javascript:;">新手引导</a></li>
                            <li>
                                <a
                                    href="https://good.alibaba.com/new_minisite_operation.html"
                                    target="_blank"
                                >操作教程</a>
                            </li>
                            <li>
                                <a
                                    href="https://service.alibaba.com/hc/supplier/list/9216464.htm"
                                    target="_blank"
                                >帮助中心</a>
                            </li>
                            <li>
                                <span>简体中文 <i class="next-icon next-icon-arrow-down-filling next-icon-xs selectIcon"></i></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditorHeader',
    props: {
        value: {
            type: Number,
            default: 60,
        },
        minScale: {
            type: Number,
            default: 40,
        },
        stepNum: {
            type: Number,
            default: 5,
        },
    },
    computed: {
        platform: {
            get() {
                return this.$route.name;
            },
            set(routerName) {
                this.$router.replace({
                    name: routerName,
                });
            },
        },
        disabledMinus() {
            return this.value <= this.minScale;
        },
        disabledPlus() {
            return this.value >= 100;
        },
    },
    methods: {
        handlePlus() {
            const curScale = this.value + this.stepNum;
            this.emitUpdateScale(curScale);
        },
        handleMinus() {
            const curScale = this.value - this.stepNum;
            this.emitUpdateScale(curScale);
        },
        emitUpdateScale(curScale) {
            this.$emit('input', curScale);
            this.$emit('onUpdateScale', {
                scale: curScale,
            });
        },
    },
};
</script>

<style scoped>
@import "demo-common/css/variable.css";
.intl-pui-header {
    min-height: 64px;
    width: 100%;
    height: auto;
}
.intl-pui-header .header-main-content {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    background-color: #333;
}
.intl-pui-header .header-main-content .next-nav {
    height: 100%;
    width: 100%;
}
.intl-pui-header .menu-wrap {
    display: flex;
}
.intl-pui-header .header-main-content .next-nav .next-nav-menu {
    height: 100%;
    width: 1200px;
    margin: 0 auto;
}
.next-nav.hoz .next-nav-menu {
    font-size: 14px;
}
.next-nav-primary.hoz .next-nav-menu {
    border: none;
    background-color: #333;
    color: #fff;
}
.next-nav .next-menu, .next-nav .next-nav-menu {
    box-shadow: none;
    padding: 0;
}
.next-menu {
    border: 1px solid #fff;
    border-radius: 0;
    box-shadow: 1px 1px 3px 0 rgb(0 0 0 / 32%);
    line-height: 28px;
    padding: 12px 0;
    min-width: 100px;
    background: #fff;
    position: relative;
}
.next-nav.hoz .next-menu .next-menu-header {
    float: left;
}
.intl-pui-header .next-menu-header {
    height: 64px;
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.next-nav.hoz .next-menu .next-menu-content {
    display: inline-block;
}
.intl-pui-header .next-menu-content {
    height: 100%;
}

.next-menu li, .next-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.next-nav-primary.hoz .next-nav-menu .next-nav-item {
    background-color: #333;
    color: #fff;
    height: 44px;
    padding: 0 20px;
    line-height: 44px;
}

.intl-pui-header .next-menu-content .next-menu-item {
    height: 100%!important;
    line-height: 64px!important;
}
.next-nav .next-menu .next-nav-item, .next-nav .next-nav-menu .next-nav-item, .next-nav.active .next-nav-item:before {
    transition: all .4s cubic-bezier(.23,1,.32,1);
}
.next-menu.hoz .next-menu-item {
    display: inline-block;
    height: 44px;
    line-height: 44px;
    vertical-align: top;
}
.next-menu .next-menu-item {
    padding: 0 20px;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    transition: background .2s ease;
}
.next-menu li, .next-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
.next-nav-primary.hoz .next-nav-menu .next-nav-item a {
    color: #fff;
    text-decoration: none;
}

.next-menu .next-menu-item a {
    display: block;
}
.next-nav.hoz .next-menu .next-menu-footer {
    float: right;
}
.intl-pui-header .next-menu-footer {
    height: 100%;
    flex: 1;
}
.container ul.header-footer {
    height: 100%;
    padding: 15px 0;
    display: flex;
}
.container ul.header-footer li {
    padding: 0 20px;
    height: 100%;
    text-align: center;
    border-right: 1px solid hsla(0,0%,100%,.2);
}
.intl-pui-header ul.header-footer li {
    padding: 0 20px;
    height: 100%;
    text-align: center;
    border-right: 1px solid hsla(0,0%,100%,.2);
}
.container ul.header-footer li>a {
    color: #fff;
    line-height: 30px;
}
.intl-pui-header .next-menu-header img {
    width: 111px;
    height: 40px;
}
.next-nav.hoz .next-menu .next-menu-content li:hover{
    background-color: #000;
}
.next-nav.active.hoz .selected.next-nav-item:before {
    width: 100%;
    left: 0;
}
.next-nav.active.hoz.bottom .next-nav-item:before {
    bottom: 0;
}
.next-nav-primary.hoz.active .next-nav-item:before, .next-nav-primary.hoz.active .next-nav-popup-item:before, .next-nav-primary.hoz.active .next-nav-subnav:before {
    height: 2px;
}

.next-nav-primary.hoz .next-nav-menu .next-nav-item:before {
    background-color: #ff6a00;
}
.intl-pui-header .hot-sign {
    display: inline-block;
    background-color: #fc0e3d;
    color: #fff;
    font-size: 12px;
    line-height: 1.166667;
    padding: 0 4px;
    border-radius: 3px;
}
</style>
