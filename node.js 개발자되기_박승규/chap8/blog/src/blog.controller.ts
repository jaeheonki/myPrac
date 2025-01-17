//블로그 컨트롤러 API함수들 추가

import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';       //데코레이터 함수 임포트

@Controller('blog')             //클래스에 붙이는 Controller 데코레이터, 이 행의 의미는 {서버주소}/blog 이하의 요청을 처리한다는 뜻뜻
export class BlogController {
    @Get()                      //GET 요청 처리
    getAllPosts() {
        console.log('모든 게시글 가져오기');
    }

    @Post()
    createPost(@Body() post: any) { //POST 요청 처리
        console.log('게시글 작성');
        console.log(post);
    }

    @Get('/:id')                    //GET에 URL 매개변수에 id가 있는 요청 처리
    getPost(@Param('id') id:string) {
        console.log(`[id: ${id}]게시글 하나 가져오기`);
    }

    @Delete('/:id')                 //DELETE 방식에 URL 매개변수로 id가 있는 요청 처리
    deletePost(){
        console.log('게시글 삭제');
    }   

    @Put('/:id')                    //PUT 방식에 URL 매개변수로 전달된 id가 있는 요청 처리
    updatePost(@Param('id') id, @Body() post: any){
        console.log(`[${id}] 게시글 업데이트`);
        console.log(post);
    }
}