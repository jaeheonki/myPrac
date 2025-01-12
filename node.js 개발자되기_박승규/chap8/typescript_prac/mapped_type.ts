//맵드 타입 : 기존의 타입으로 새로운 타입을 만들어내는 타입스크립트 문법
//{[ key in <기존타입> ] : <새로운 속성의 타입>}

type Feature = {                //기능을 표현한 타입
    event : string;
    coupon : string;
}

type FeaturePermission = { [key in keyof Feature]? : boolean };     // 해당 기능에 권한을 표현한 타입 : 맵드 타입 활용

//==
// type FeaturePermission = {
//     event?: boolean;
//     coupon?: boolean;
// }