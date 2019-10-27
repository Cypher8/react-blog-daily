const service = {};

service.getAllPost = () => {
    return posts;
}

service.getPostById = (id) => {
    return posts.find(p => p.id === id);
}

const posts = [
    {
        id: 'P1',
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        id: 'P2',
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

module.exports = service;