// 핸들바는 자유도가 높아서 웬만한 함수는 커스텀 헬퍼 함수를 구현해 사용해야 한다.
// 리스트 길이 반환, 두 값 비교 , ISO 날짜 문자열에서 날짜만 반환하는 함수를 이 코드에서 구현
// 커스텀 헬퍼이기 때문에 설정 파일을 모아놓는 configs 폴더에 저장

module.exports = {
    // 리스트 길이 반환 : lengthOfList
    lengthOfList : (list = []) => list.length,
    // 비교 함수( 같은지 여부 반환)
    eq : (val1, val2) => val1 === val2,
    // ISO 날짜 문자열에서 날짜만 반환
    dateString : (isoString) => new Date(isoString).toLocaleDateString(),
};

// 헬퍼 함수 사용시에는 {{헬퍼 함수명 변수1 변수2 ... 변수 n}} 처럼 처음에 함수명을 넣고 변수들을 빈 칸으로 구분
//ex) {{lengthOfList commnets}} {{#if (eq .@root.paginator.page)}}eq 테스트{{/if}}