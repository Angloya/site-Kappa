
const project1 = new Vue({
    el: '#projects',
    data: {
        title: 'Project Info',
        login: 'premiumlayers',
        likes: '138 Likes',
        date: '25 December, 2013',
        comments: '4 comments',
        title2: 'Tags',
        filters: [{
            tag: 'web design'
        }, {
            tag: 'photograpgy'
        }, {
            tag: 'development'
        }, {
            tag: 'php'
        }],
        title3: 'Project Gallery',
        images: [
            {
                elem: 'images/Layer_73.png'
            },
            {
                elem: 'images/Layer_73.png'
            },
            {
                elem: 'images/Layer_73.png'
            },
            {
                elem: 'images/Layer_73.png'
            },
            {
                elem: 'images/Layer_73.png'
            },
            {
                elem: 'images/Layer_73.png'
            },
            {
                elem: 'images/Layer_73.png'
            },
        ],
        title4: 'Progect Features',
        items: [{
                info: 'Responsive Layout'
            },
            {
                info: 'Font Awesome Icons'
            },
            {
                info: 'Clean & Commented Code'
            },
            {
                info: 'Highly Customizable'
            }
    ],
        showDetail: false
    }

    
});
