/**
 * Created by Liu.Jun on 2019/9/29 18:58.
 */

// 轮播图
import componentPackCarouselImg from '../viewComponents/CarouselImg';

// 秒杀商品
import componentPackFlashSaleGoodsList from '../viewComponents/FlashSaleGoodsList';

// 纯文本
import componentPackText from '../viewComponents/Text';

// 多图模块一排5个
import componentPackMultipleImg5 from '../viewComponents/MultipleImg5';

// 多图模块 2-3
import componentPackMultipleImg23 from '../viewComponents/MultipleImg2_3';

// 多图模块 1-2
import componentPackMultipleImg13 from '../viewComponents/MultipleImg1_3';

// 分类管区
import componentPackCategoryGoods from '../viewComponents/CategoryGoods';

// 推荐
import componentPackRecommendedGoodsList from '../viewComponents/RecommendedGoodsList';

// 所有商品
import componentPackAllGoodsList from '../viewComponents/AllGoodsList';

// 优惠券
import componentPackCoupon from '../viewComponents/Coupon';


/**
 * hidden 隐藏，不显示在工具栏
 * maxNum Number 最大可配置数
 * topDisplay Bool 最顶部显示
 * bottomDisplay Bool 最底部显示
 * onlyCanConfig Bool 是否只能配置数据，不能删除 copy
 * @type {*[]}
 */
const tools = [
    {
        groupName: '产品',
        groupIcon: 'iconfont icon-gongwenbao',
        panelName: '添加产品',
        componentList: [{
            title: '轮播 (普通数组)',
            maxNum: 2,
            viewWidth: '1920px',
            icon: 'el-icon-picture',
            background: 'background-image: url("https://img.alicdn.com/tfs/TB1LWInhY2pK1RjSZFsXXaNlXXa-36-36.png");',
            componentPack: componentPackCarouselImg
        }, {
            title: '秒杀商品',
            maxNum: 3,
            icon: 'el-icon-picture',
            background: 'background-image: url("https://img.alicdn.com/tfs/TB18sothVzqK1RjSZFoXXbfcXXa-38-38.png");',
            componentPack: componentPackFlashSaleGoodsList
        }, {
            title: '多图(5)',
            maxNum: 5,
            icon: 'el-icon-picture',
            background: 'background-image: url("https://img.alicdn.com/tfs/TB13RQrhYrpK1RjSZTEXXcWAVXa-44-36.png");',
            componentPack: componentPackMultipleImg5
        }, {
            title: '多图(2-3)',
            maxNum: 10,
            icon: 'el-icon-s-grid',
            background: 'background-image: url("https://img.alicdn.com/tfs/TB1Zlsvh7PoK1RjSZKbXXX1IXXa-36-36.png");',
            componentPack: componentPackMultipleImg23
        }, {
            title: '多图(1-3)',
            maxNum: 10,
            icon: 'el-icon-s-grid',
            componentPack: componentPackMultipleImg13
        }, {
            title: '分类管区',
            maxNum: 10,
            icon: 'el-icon-s-grid',
            background: 'background-image: url("https://img.alicdn.com/tfs/TB1Efcsh8LoK1RjSZFuXXXn0XXa-36-30.png");',
            componentPack: componentPackCategoryGoods
        }, {
            title: '纯文本',
            maxNum: 20,
            icon: 'el-icon-notebook-1',
            componentPack: componentPackText
        }]
    },
    {
        groupName: '图文',
        groupIcon: 'iconfont icon-tuwenguanli',
        panelName: '添加图文',
        componentList: [{
            title: '全部商品',
            maxNum: 1,
            icon: 'el-icon-s-goods',
            background: 'background-image: url("https://img.alicdn.com/tfs/TB1lqInhY2pK1RjSZFsXXaNlXXa-40-36.png");',
            componentPack: componentPackAllGoodsList,
            additional: {
                bottomDisplay: true,
                unRemove: true // 不可移除
            }
        }, {
            title: '推荐商品',
            maxNum: 1,
            icon: 'el-icon-s-goods',
            background: 'background-image: url("https://img.alicdn.com/tfs/TB1LbkrhVzqK1RjSZFvXXcB7VXa-52-32.png");',
            componentPack: componentPackRecommendedGoodsList
        }]
    },
    {
        groupName: '视频',
        groupIcon: 'iconfont icon-ziyuan',
        panelName: '添加视频',
        componentList: [{
            title: '优惠券',
            maxNum: 1,
            icon: 'el-icon-s-ticket',
            background: 'background-image: url("https://img.alicdn.com/tfs/TB1z4INh4naK1RjSZFtXXbC2VXa-36-36.png");',
            componentPack: componentPackCoupon
        }]
    },
    {
        groupName: '营销',
        groupIcon: 'iconfont icon-tuwenguanli',
        panelName: '添加营销',
        componentList: [{
            title: '优惠券',
            maxNum: 1,
            icon: 'el-icon-s-ticket',
            background: 'background-image: url("https://img.alicdn.com/tfs/TB1z4INh4naK1RjSZFtXXbC2VXa-36-36.png");',
            componentPack: componentPackCoupon
        }]
    },
    {
        groupName: '公司',
        groupIcon: 'iconfont icon-gongsi2',
        panelName: '添加公司',
        componentList: [{
            title: '优惠券',
            maxNum: 1,
            icon: 'el-icon-s-ticket',
            componentPack: componentPackCoupon
        }]
    }
];

export default tools;
