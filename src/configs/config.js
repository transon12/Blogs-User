const menu = [
    { path: '/dashboard', 
    name: 'Trang chủ', 
    icon: '', 
    
    },
];

export const leftsidebarRoutes = {
    sidebar: [
        // {
        //     icon: 'search-outline',
        //     name: 'Search ',
        //     path: '/search',
        //     route: ''
            
        // },
        {
            icon: "list-outline",
            name: 'Questions',
            path: '/questions',
            role: 'all', 
            
        },
        {
            icon: "pricetag-outline",
            name: 'Tags',
            path: '/tags',
            role: 'all',
        },
        {
            icon: "ribbon-outline",
            name: 'Ranking',
            path: '/ranking',
            role: 'all',
        },
        
        
    ]
}

export const leftsidebarRoutesUser = {
    sidebar: [
        {
            icon: "help-circle-outline",
            name: 'Your questions',
            path: '/yourquestions',
            role: 'customer',
        },
        {
            icon: "chatbubble-outline",
            name: 'Your answers',
            path: '/youranswers',
            role: 'customer',
        },
        {
            icon: "heart-outline",
            name: 'Your likes & votes',
            path: '/yourlikesvotes',
            role: 'customer',
        },
    ]     
}

export const apiPost = {
    content: [
        {
           image: "https://media.istockphoto.com/id/1010496758/fr/photo/champ-de-tournesol-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=Q620ji4LR0P--p6sLhoxIDwGK0F6gGnOkJ_11JyEWz4=",
           title: "nodejs",
           content: 'Hello world'
        },
        {
            image: "https://media.istockphoto.com/id/1010496758/fr/photo/champ-de-tournesol-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=Q620ji4LR0P--p6sLhoxIDwGK0F6gGnOkJ_11JyEWz4=",
            title: "nodejs",
           content: 'Hello world'
        },
        {
            image: "https://media.istockphoto.com/id/1010496758/fr/photo/champ-de-tournesol-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=Q620ji4LR0P--p6sLhoxIDwGK0F6gGnOkJ_11JyEWz4=",
            title: "nodejs",
           content: 'Hello world'
        },
        {
            image: "https://media.istockphoto.com/id/1010496758/fr/photo/champ-de-tournesol-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=Q620ji4LR0P--p6sLhoxIDwGK0F6gGnOkJ_11JyEWz4=",
            title: "Tiêu đề",
           content: 'Nội dung'
        },
        {
            image: "https://media.istockphoto.com/id/1010496758/fr/photo/champ-de-tournesol-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=Q620ji4LR0P--p6sLhoxIDwGK0F6gGnOkJ_11JyEWz4=",
            title: "nodejs",
           content: 'Hello world'
        },
        {
            image: "https://media.istockphoto.com/id/1010496758/fr/photo/champ-de-tournesol-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=Q620ji4LR0P--p6sLhoxIDwGK0F6gGnOkJ_11JyEWz4=",
            title: "Tiêu đề",
           content: 'Nội dung'
        },
        {
            image: "https://media.istockphoto.com/id/1010496758/fr/photo/champ-de-tournesol-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=Q620ji4LR0P--p6sLhoxIDwGK0F6gGnOkJ_11JyEWz4=",
            title: "Tiêu đề",
           content: 'Nội dung'
        },
        {
            image: "https://media.istockphoto.com/id/1010496758/fr/photo/champ-de-tournesol-au-coucher-du-soleil.jpg?s=612x612&w=0&k=20&c=Q620ji4LR0P--p6sLhoxIDwGK0F6gGnOkJ_11JyEWz4=",
            title: "Tiêu đề",
           content: 'Nội dung'
        },
    ]
}