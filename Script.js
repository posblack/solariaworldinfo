// �������� �ε�Ǿ��� �� ����� �Լ����� ����մϴ�.
document.addEventListener('DOMContentLoaded', function () {

    // URL�� �м��Ͽ� ���� �������� �´� �������� ǥ���ϴ� �Լ��� �����մϴ�.
    handlePageContent();

});

/**
 * URL�� ���� �Ķ����(?topic=... �Ǵ� ?group=...)�� �о
 * �׿� �´� ����� ������ �������� �������� ä���ֽ��ϴ�.
 * �̷��� �ϸ� ���� HTML ������ ������ �ʰ� �پ��� �������� ������ �� �ֽ��ϴ�.
 */
function handlePageContent() {
    const params = new URLSearchParams(window.location.search);
    const topic = params.get('topic');
    const group = params.get('group');

    // ���� ������ ���� �̸� Ȯ��
    const path = window.location.pathname;
    const page = path.split("/").pop(); // ��: "worldview.html"

    if (page === 'worldview.html' && topic) {
        loadWorldviewContent(topic);
    } else if (page === 'factions.html' && group) {
        loadFactionsContent(group);
    }
}

/**
 * '�����' �������� ������ ä��ϴ�.
 * @param {string} topic - ǥ���� �������� ���� (��: 'nations', 'religion')
 */
function loadWorldviewContent(topic) {
    const content = {
        nations: {
            title: "������ ������",
            body: `
                <p>�̰��� ����� ���迡 �����ϴ� �����鿡 ���� ������ �����ּ���.</p>
                <p>���� ���, �� ������ ����, ��ȭ, ��ġ ü��, �ֿ� ���� � ���� ������ �� �ֽ��ϴ�.</p>
                <br>
                <h4>�˺�� �ձ�</h4>
                <p>�ΰ����� ���� ������ �ձ�����, ������ ���ܰ� ������ ��带 �����ϰ� �ֽ��ϴ�...</p>
                <h4>������ ��, �ǹٴϾ�</h4>
                <p>��� ���� ����ο� ��ġ�� �������� �����, �ڿ����� ��ȭ�� �߽��մϴ�...</p>
            `
        },
        religion: {
            title: "������ �ų�",
            body: `
                <p>�� ������ ������� �ϴ� �ŵ�, ������, ��ȭ � ���� �����ϴ� �����Դϴ�.</p>
                <p>â����, �����, ������ �� �� �پ��� �ŵ��� �����ϰ� �׵��� �̾߱⸦ Ǯ�����.</p>
            `
        },
        races: {
            title: "�پ��� ����",
            body: `
                <p>�ΰ�, ����, ����� �ܿ��� ����� ���迡�� �����ϴ� Ư���� �������� �Ұ��غ�����.</p>
                <p>�� ������ ��ü�� Ư¡, �ɷ�, ��ȸ ����, �ٸ� �������� ���� ���� ������ �� �ֽ��ϴ�.</p>
            `
        }
    };

    const selectedContent = content[topic] || { title: "�� �� ���� ����", body: "<p>��û�Ͻ� ������ ã�� �� �����ϴ�.</p>" };

    document.getElementById('page-title').textContent = `����� - ${selectedContent.title}`;
    document.getElementById('content-title').textContent = selectedContent.title;
    document.getElementById('content-body').innerHTML = selectedContent.body;
}

/**
 * '����' �������� ������ ä��ϴ�.
 * @param {string} group - ǥ���� ������ ���� (��: 'party', 'underworld')
 */
function loadFactionsContent(group) {
    const content = {
        party: {
            title: "���谡 �׷�: ������ �����ڵ�",
            body: `
                <p>�̰��� Ư�� ���谡 �׷쿡 ���� ������ �����ϴ�. �Ἲ ���, ��ǥ, �ֿ� Ȱ�� ���� ������ �� �ֽ��ϴ�.</p>
                <p>'������ �����ڵ�'�� �Ҿ���� ��� ������ ã�� ������ �����ϴ� ��ҿ� �¼� �ο�� ���� ��ǥ�� �մϴ�.</p>
            `
        },
        underworld: {
            title: "����: �ɿ��� ���ֵ�",
            body: `
                <p>�����̳� ���� ���¿� ���� �����Դϴ�. �׵��� ��� ����, ��ǥ, �ٰ��� ���� �ڼ��� �����غ�����.</p>
            `
        },
        heroes: {
            title: "������ ������",
            body: `
                <p>������ ���߰ų� ū ������ ��ģ �������� �̾߱��Դϴ�. ���� Ȥ�� ������ �� �� �ֽ��ϴ�.</p>
            `
        }
    };

    const selectedContent = content[group] || { title: "�� �� ���� ����", body: "<p>��û�Ͻ� ������ ã�� �� �����ϴ�.</p>" };

    document.getElementById('page-title').textContent = `���� - ${selectedContent.title}`;
    document.getElementById('content-title').textContent = selectedContent.title;
    document.getElementById('content-body').innerHTML = selectedContent.body;

    // ���� ������������ ĳ���Ϳ� ���赵 ������ �����ݴϴ�.
    document.getElementById('character-section').classList.remove('hidden');
    document.getElementById('relations-section').classList.remove('hidden');
}
