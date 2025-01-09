//인터페이스 확장 : 비슷한 속성을 가진 인터페이스르 여러 개 만들어야할 때, 공통 속성을 가진 인터페이스를 상속받아서 사용하면 편리하다

interface WebtoonCommon {               //공통 인터페이스스
    title: string;
    createdDate: Date;
    updatedDate: Date;
}

interface Episode extends WebtoonCommon {   //공통 인터페이스를 확장한 에피소드 인터페이스
    episodeNumber: number;
    seriesNumber : number;
}

interface Series extends WebtoonCommon {    //공통 인터페이스를 확장한 시리즈 인터페이스스
    seriesNumber : number;
    author : string;
}

const episode : Episode = {                 //episode 객체
    title : "..",
    createdDate : new Date(),
    updatedDate : new Date(),
    episodeNumber : 1,
    seriesNumber : 123,
};

const series : Series = {                   //series 객체
    title : "...",
    createdDate : new Date(),
    updatedDate : new Date(),
    seriesNumber : 123,
    author : "천재작가",
}