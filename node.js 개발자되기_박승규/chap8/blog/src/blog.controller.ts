//블로그 컨트롤러 API함수들 추가

import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';       //데코레이터 함수 임포트
import { BlogService } from './blog.service';                                           //블로그 서비스 임포트트

@Controller('blog')             //클래스에 붙이는 Controller 데코레이터, 이 행의 의미는 {서버주소}/blog 이하의 요청을 처리한다는 뜻뜻
export class BlogController {
    blogService: BlogService;

    constructor(){
        this.blogService = new BlogService();       //생성자에서 블로그 서비스 생성성
    }
    @Get()                      //GET 요청 처리
    getAllPosts() {
        console.log('모든 게시글 가져오기');
        return this.blogService.getAllPosts();
    }

    @Post()                     //POST 요청 처리
    createPost(@Body() postDto) {     //@Body : 함수의 body로 오는 값을 매개변수에 할당함(매개변수에 붙이는 데코레이터) 
        console.log('게시글 작성');
        this.blogService.createPost(postDto);
        return 'success';
    }

    @Get('/:id')                    //GET에 URL 매개변수에 id가 있는 요청 처리
    getPost(@Param('id') id:string) {   //@Param : URL param의 값을 함수 매개변수에 할당함(매개변수에 붙이는 데코레이터)
        console.log('게시글 하나 가져오기');
        return this.blogService.getPost(id);
    }

    @Delete('/:id')                 //DELETE 방식에 URL 매개변수로 id가 있는 요청 처리
    deletePost(@Param('id') id: string){
        console.log('게시글 삭제');
        this.blogService.delete(id);
        return 'success';
    }   

    @Put('/:id')                    //PUT 방식에 URL 매개변수로 전달된 id가 있는 요청 처리
    updatePost(@Param('id') id : string, @Body() postDto){
        console.log('게시글 업데이트', id, postDto);
        return this.blogService.updatePost(id, postDto);
    }
}