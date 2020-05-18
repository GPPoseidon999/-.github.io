module.exports = {
    base: '/singleshadow/',
    title: '帅气是自然',
    description: '愿回眸时 眼有星辰大海 胸有丘壑万千 心有繁花似锦',
    head: [
        ['link', { rel: 'icon', href: '/favicon.svg' }], //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no',
            },
        ], //在移动端，搜索框在获得焦点时会放大
    ],
    theme: 'reco',
    themeConfig: {
        type: 'blog', //选择类型博客
        fullscreen: true,
        mode: 'light',
        authorAvatar: '/avatar.jpeg',
        logo: '/avatar.jpeg',
        valineConfig: {
            appId: 'LDVQgONIk5VptYkzCvtLhBke-gzGzoHsz', // your appId
            appKey: 'bRpyVV7PoStPOdSgU5CFDCV4', // your appKey
            placeholder: '欢迎留言！',
            notify: true,
            verify: true,
            avatar: 'retro',
            visitor: true,
            recordIP: true,
        },
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
        nav: [
            //导航栏设置
            { text: 'Home', link: '/', icon: 'reco-home' },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            {
                text: 'Contact',
                icon: 'reco-message',
                items: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/GPPoseidon999',
                        icon: 'reco-github',
                    },
                    {
                        text: 'CSDN',
                        link: 'https://blog.csdn.net/NB_666',
                        icon: 'reco-csdn',
                    },
                ],
            },
        ],
        plugins: ['flowchart', 'vuepress-plugin-container'],
        startYear: '2017',
        lastUpdated: '上次更新',
        markdown: {
            lineNumbers: true, //代码显示行号
        },
        search: true,
        searchMaxSuggestions: 10,
    },
}
