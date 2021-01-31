export function selectionFilter ({ series, films}) {
    return {
        series: [
            { title: 'Tài liệu', data: series.filter((item) => item.genre === 'documentaries')},
            { title: 'Hài hước', data: series.filter((item) => item.genre === 'comedies')},
            { title: 'Trẻ em', data: series.filter((item) => item.genre === 'children')},
            { title: 'Phá án', data: series.filter((item) => item.genre === 'crime')},
            { title: 'Khoái cảm', data: series.filter((item) => item.genre === 'feel-good')},
        ],
        films: [
            { title: 'Drama', data: films.filter((item) => item.genre === 'drama')},
            { title: 'Kinh dị', data: films.filter((item) => item.genre === 'thriller')},
            { title: 'Thiếu niên', data: films.filter((item) => item.genre === 'children')},
            { title: 'Kịch tính', data: films.filter((item) => item.genre === 'suspense')},
            { title: 'Lãng mạn', data: films.filter((item) => item.genre === 'romance')},
        ]
    }
}