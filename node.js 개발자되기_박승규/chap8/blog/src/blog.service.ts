//컨트롤러에는 HTTP 요청을 특정 함수가 실행, 실제 로직은 BlogService에 담는다

import { PostDto } from './blog.model';

export class BlogService {
    posts = [];

    getAllPosts() {
        return this.posts;
    }

    createPost(PostDto: PostDto){
        const id = this.posts.length + 1;
        this.posts.push({ id: id.toString(), ...PostDto, createdDt: new Date() });
    }

    getPost(id) {
        const post = this.posts.find((post) => {
            return post.id == id;
        });
        console.log(post);
        return post;
    }

    updatePost(id, postDto: PostDto) {
        let updateIndex = this.posts.findIndex((post) => post.id === id);
        const updatePost = { id, ...postDto, updatedDt: new Date() };
        this.posts[updateIndex] = updatePost;
        return updatePost;
    }
}