module.exports = {
    base: '/singleshadow.io/',
    title: '帅气是自然的博客',
    description: '个人博客',
    theme: 'reco',
    themeConfig: {
        // 博客配置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: 'Category', // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag', // 默认文案 “标签”
            },
        },
        // 添加导航按钮
        nav: [
          { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
        ]
    },
}
