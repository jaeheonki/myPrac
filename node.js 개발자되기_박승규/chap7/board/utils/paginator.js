//페이지네이션 유틸
const lodash = require("lodash");                                       //lodash.range 함수 사용위해 lodash설치
                                                                        //lodash.range(1, 11)을 실행 : [1, ... 10]으로 구성된 리스트 반환
const PAGE_LIST_SIZE = 10;                                              //최대 보여줄 페이지의 수

module.exports = ({ totalCount, page, perPage = 10}) => {               //매개변수 : 총 개수, 현재 페이지, 한 페이지에 표시하는 개수
    const PER_PAGE = perPage;
    const totalPage = Math.ceil(totalCount / PER_PAGE);                 //페이징 할때 몇 페이지 까지 나올지 계산 : ceil(올림) 사용

    let quotient = parseInt(page / PAGE_LIST_SIZE);                    
    if (page % PAGE_LIST_SIZE === 0){
        quotient -= 1;
    }
    const startPage = quotient * PAGE_LIST_SIZE + 1;                    //시작 페이지 구하는 로직 : 현재 페이지를 PAGE_LIST_SIZE로 나눈 몫 + 1, 값이 나누어 떨어지는 경우에 -1

    const endPage = startPage + PAGE_LIST_SIZE -1 < totalPage ? startPage + PAGE_LIST_SIZE - 1 : totalPage; //끝 페이지 구하는 로직 : 시작 페이지 + PAGE_LIST_SIZE -1(구한 값이 totalPage보다 크다면 totalPage가 마지막 페이지)

    const isFirstPage = page === 1;
    const isLastPage = page === totalPage;
    const hasPrev = page > 1;
    const hasNext = page < totalPage;
    
    
    const paginator = {                                                 //표시할 페이지 번호 리스트를 만들어줌
        pageList : lodash.range(startPage, endPage + 1),
        page,
        prevPage : page - 1,
        nextPage : page + 1,
        startPage,
        lastPage: totalPage,
        hasPrev,
        hasNext,
        isFirstPage,
        isLastPage,
    };
    return paginator;
}