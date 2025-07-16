// 페이지가 로드되었을 때 실행될 함수들을 등록합니다.
document.addEventListener('DOMContentLoaded', function () {

    // URL을 분석하여 현재 페이지에 맞는 콘텐츠를 표시하는 함수를 실행합니다.
    handlePageContent();

});

/**
 * URL의 쿼리 파라미터(?topic=... 또는 ?group=...)를 읽어서
 * 그에 맞는 제목과 내용을 페이지에 동적으로 채워넣습니다.
 * 이렇게 하면 여러 HTML 파일을 만들지 않고도 다양한 콘텐츠를 보여줄 수 있습니다.
 */
function handlePageContent() {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic');
    const group = params.get('group');

    // 현재 페이지 파일 이름 확인
    const path = window.location.pathname;
    const page = path.split("/").pop(); // 예: "worldview.html"

    if (page === 'worldview.html' && topic) {
        loadWorldviewContent(topic);
    } else if (page === 'factions.html' && group) {
        loadFactionsContent(group);
    }
}

/**
 * '세계관' 페이지의 내용을 채웁니다.
 * @param {string} topic - 표시할 콘텐츠의 주제 (예: 'nations', 'religion')
 */
function loadWorldviewContent(topic) {
    const content = {
        nations: {
            title: "세계의 국가들",
            body: `
                <p>이곳에 당신의 세계에 존재하는 국가들에 대한 설명을 적어주세요.</p>
                <p>예를 들어, 각 국가의 역사, 문화, 정치 체제, 주요 도시 등에 대해 서술할 수 있습니다.</p>
                <br>
                <h4>알비온 왕국</h4>
                <p>인간들의 가장 오래된 왕국으로, 강력한 기사단과 마법사 길드를 보유하고 있습니다...</p>
                <h4>엘프의 숲, 실바니아</h4>
                <p>고대 숲의 심장부에 위치한 엘프들의 나라로, 자연과의 조화를 중시합니다...</p>
            `
        },
        religion: {
            title: "종교와 신념",
            body: `
                <p>이 세계의 사람들이 믿는 신들, 종교관, 신화 등에 대해 설명하는 공간입니다.</p>
                <p>창조신, 전쟁신, 마법의 신 등 다양한 신들을 설정하고 그들의 이야기를 풀어보세요.</p>
            `
        },
        races: {
            title: "다양한 종족",
            body: `
                <p>인간, 엘프, 드워프 외에도 당신의 세계에만 존재하는 특별한 종족들을 소개해보세요.</p>
                <p>각 종족의 신체적 특징, 능력, 사회 구조, 다른 종족과의 관계 등을 서술할 수 있습니다.</p>
            `
        }
    };

    const selectedContent = content[topic] || { title: "알 수 없는 주제", body: "<p>요청하신 내용을 찾을 수 없습니다.</p>" };

    document.getElementById('page-title').textContent = `세계관 - ${selectedContent.title}`;
    document.getElementById('content-title').textContent = selectedContent.title;
    document.getElementById('content-body').innerHTML = selectedContent.body;
}

/**
 * '세력' 페이지의 내용을 채웁니다.
 * @param {string} group - 표시할 세력의 종류 (예: 'party', 'underworld')
 */
function loadFactionsContent(group) {
    const content = {
        party: {
            title: "모험가 그룹: 여명의 추적자들",
            body: `
                <p>이곳에 특정 모험가 그룹에 대한 설명을 적습니다. 결성 계기, 목표, 주요 활동 등을 서술할 수 있습니다.</p>
                <p>'여명의 추적자들'은 잃어버린 고대 유물을 찾아 세상을 위협하는 어둠에 맞서 싸우는 것을 목표로 합니다.</p>
            `
        },
        underworld: {
            title: "마계: 심연의 군주들",
            body: `
                <p>마족이나 악의 세력에 대한 설명입니다. 그들의 계급 구조, 목표, 근거지 등을 자세히 설정해보세요.</p>
            `
        },
        heroes: {
            title: "전설의 영웅들",
            body: `
                <p>세상을 구했거나 큰 영향을 끼친 영웅들의 이야기입니다. 개인 혹은 집단이 될 수 있습니다.</p>
            `
        }
    };

    const selectedContent = content[group] || { title: "알 수 없는 세력", body: "<p>요청하신 내용을 찾을 수 없습니다.</p>" };

    document.getElementById('page-title').textContent = `세력 - ${selectedContent.title}`;
    document.getElementById('content-title').textContent = selectedContent.title;
    document.getElementById('content-body').innerHTML = selectedContent.body;

    // 세력 페이지에서는 캐릭터와 관계도 섹션을 보여줍니다.
    document.getElementById('character-section').classList.remove('hidden');
    document.getElementById('relations-section').classList.remove('hidden');
}
