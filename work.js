const Project = new Vue({
    el: '#project',
    data: {
        title: 'Project Info',
       name: 'premiumlayers',
      likes: '138 Likes' ,
    date:'25 December, 2013',
        comments: '4 comments',
        filters: ['web design', 'photograpgy', 'development', 'php'],
        title3: 'Project Gallery',
        title4: 'Progect Features',
        items:[{info:'Responsive Layout' },
      { info: 'Font Awesome Icons' },
     {info: 'Clean & Commented Code' },
            {info: 'Highly Customizable' }
    ],
        showDetail: false
    }
})
