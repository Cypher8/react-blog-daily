import uploadService from './upload.service';

const service = {};

service.getAllPosts = () => {
    return posts;
}

service.getPostById = (id) => {
    return posts.find(p => p.id === id);
}

service.createNewBlog = (data) => {
    console.log(data);
    return {
        message: 'success'
    }
}

service.editBlog = (data) => {

}

service.deleteBlog = (id) => {
    return {
        message: 'success'
    }
}

service.uploadImage = (file) => {
    const imageUrl = uploadService.uploadFile(file);
    return imageUrl;
}

service.uploadMutipleFile = () => {

}

const posts = [
    {
        id: 'O23C0XS7N9',
        title: "Day 0: Write a diary for the first time.",
        htmlMeta: `<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 16pt;font-family: Times New Roman;">Today</span><span style="font-family: Times New Roman;"> </span><span style="color: rgb(0,0,0);background-color: transparent;font-size: 16pt;font-family: Times New Roman;">I got up at 6 o’clock. I was very sleepy because last night I worked at Lotus Bang Bua Thong with my father. I woke up urgently to register a “Shimp Shop Shai” for my mother. As I sat in the truck on the way home. It looks like can’t sign up for my mother. Because there are too many people registering. When I arrive home. I was hungry and walked to the kitchen. I saw the food that my mother made.</span><span style="font-family: Times New Roman;"> </span><span style="color: rgb(0,0,0);background-color: transparent;font-size: 16pt;font-family: Times New Roman;">I invited my parents to have breakfast together. When I finished eating, I went back to sleep in my room.</span></p>
        <p></p>
        <p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 16pt;font-family: Times New Roman;"></span><span style="color: rgb(0,0,0);background-color: transparent;font-size: 24px;font-family: Times New Roman;"><strong>🖊... Getting up early makes you very sleepy.</strong></span>.</p>  `,
        user: { id: 'ZINZ2JE7XK', firstName: 'Seera', lastName: 'Kaenakew' },
        createAt: '2019-10-29 15:04:01'
    }, {
        id: '8PCFZHNGK7',
        title: "Day 1: Sleep late but get up early.",
        htmlMeta: `<p><span style="color: rgb(0,0,0);background-color: transparent;font-size: 16pt;font-family: Times New Roman;">Today I woke up in the morning to exercise to lose weight for eighteen minutes. After exercising, I drank coffee to feel refreshed. After that, I learned English by reading books and watching movies on Netflix to train myself to speak English better.</span><span style="font-family: Times New Roman;"> </span></p>↵<p></p>↵<p></p>↵<p><span style="font-family: Times New Roman;">🖊...</span><span style="color: rgb(0,0,0);background-color: transparent;font-size: 24px;font-family: Times New Roman;"> When you exercise, it will make you feel refreshed</span><span style="font-size: 24px;font-family: Times New Roman;">.</span>&nbsp;</p>↵`,
        user: { id: 'ZINZ2JE7XK', firstName: 'Seera', lastName: 'Kaenakew' },
        createAt: '2019-10-29 15:25:23'
    }
];

export default service;